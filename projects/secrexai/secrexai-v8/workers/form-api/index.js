/**
 * Form Submission Worker
 * Handles contact, subscription, and Stripe Checkout
 */

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Price IDs (Stripe test mode)
// Monthly price IDs
const PRICES = {
  starter: 'price_1TFAq7Dif42x0i2OtnGi7Epd',
  business: 'price_1TFAqnDif42x0i2O0iTQy8AU',
}

// Semi-annual price IDs (6-month subscription)
const PRICES_SEMI = {
  starter: 'price_1TFAqJDif42x0i2OCXLTBqBw',
  business: 'price_1TFAqyDif42x0i2OnHJNjpf8',
}

// Annual price IDs (12-month subscription)
const PRICES_ANNUAL = {
  starter: 'price_1TFAq8Dif42x0i2OxSKucEDy',
  business: 'price_1TFAqzDif42x0i2O7tfp0xzG',
}

/**
 * Get Stripe price ID based on plan and billing cycle
 * @param {string} planKey - 'starter' | 'business'
 * @param {string} billingCycle - 'monthly' | 'semi' | 'annual'
 */
function getPriceId(planKey, billingCycle) {
  switch (billingCycle) {
    case 'semi':
      return PRICES_SEMI[planKey]
    case 'annual':
      return PRICES_ANNUAL[planKey]
    case 'monthly':
    default:
      return PRICES[planKey]
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST' && !(request.method === 'GET' && url.searchParams.get('type') === 'stats')) {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // === STRIPE WEBHOOK (raw body + signature) ===
    if (url.pathname === '/webhook') {
      const signature = request.headers.get('stripe-signature');
      const rawBody = await request.text();
      const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

      if (!rawBody) {
        return new Response(JSON.stringify({ error: 'Empty body' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // Verify signature
      if (webhookSecret && signature) {
        const timestamp = signature.split(',')[0]?.replace('t=', '');
        const sig = signature.split(',')[1]?.replace('v1=', '');
        if (timestamp && sig) {
          const payload = `${timestamp}.${rawBody}`;
          const encoder = new TextEncoder();
          const key = await crypto.subtle.importKey(
            'raw', encoder.encode(webhookSecret),
            { name: 'HMAC', hash: 'SHA-256' },
            false, ['sign']
          );
          const sigBytes = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
          const expectedSig = Array.from(new Uint8Array(sigBytes))
            .map(b => b.toString(16).padStart(2, '0')).join('');
          if (sig !== expectedSig) {
            console.error('Webhook signature mismatch');
            return new Response(JSON.stringify({ error: 'Invalid signature' }), {
              status: 400,
              headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
          }
        }
      }

      const stripeEvent = JSON.parse(rawBody);
      console.log('Stripe webhook event:', stripeEvent.type, 'id:', stripeEvent.id);

      if (stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        const subscriptionId = session.metadata?.subscription_id;
        const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

        if (subscriptionId) {
          await env.DB.prepare(`
            UPDATE subscriptions
            SET status = 'completed',
                stripe_session_id = ?,
                updated_at = ?
            WHERE id = ?
          `).bind(session.id, now, subscriptionId).run();
          console.log('Subscription marked completed:', subscriptionId);
        }
      }

      return new Response(JSON.stringify({ received: true }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // === INTERNAL API (JSON body) ===
    let body = {};
    const rawBody = await request.text();
    if (rawBody) {
      try { body = JSON.parse(rawBody); } catch (e) { /* invalid JSON */ }
    }

    const { type, data } = body;
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

    // === STATS ===
    if (type === 'stats' || url.searchParams.get('type') === 'stats') {
      const { results } = await env.DB.prepare(`
        SELECT COUNT(*) as count FROM subscriptions WHERE status IN ('pending', 'completed')
      `).all();
      return new Response(JSON.stringify({
        success: true,
        count: results[0]?.count || 0,
      }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!type) {
      return new Response(JSON.stringify({ error: 'Missing type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // === CONTACT FORM ===
      if (type === 'contact') {
        const { name, email, company, message } = data;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
        if (!isValidEmail(email)) {
          return new Response(JSON.stringify({ error: 'Invalid email format' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        const id = generateId();
        await env.DB.prepare(`
          INSERT INTO contact_submissions (id, name, email, company, message, source, created_at)
          VALUES (?, ?, ?, ?, ?, 'contact-form', ?)
        `).bind(id, name, email, company || '', message, now).run();

        return new Response(JSON.stringify({ success: true, id }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // === SUBSCRIPTION / CHECKOUT ===
      if (type === 'subscription') {
        const { name, email, phone, company, use_case, plan, sub_type, billingCycle, planKey: planKeyFull } = data;

        if (!name || !email) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
        if (!isValidEmail(email)) {
          return new Response(JSON.stringify({ error: 'Invalid email format' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        const planBase = plan || 'starter';
        const cycle = billingCycle || 'monthly'; // 'monthly' | 'semi' | 'annual'
        const priceId = getPriceId(planBase, cycle);
        if (!priceId) {
          return new Response(JSON.stringify({ error: 'Invalid plan' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        // Save to D1 first — store planKey as e.g. 'starter_monthly' for reference
        const id = generateId();
        const storedPlanKey = planKeyFull || `${planBase}_${cycle}`;
        await env.DB.prepare(`
          INSERT INTO subscriptions (id, type, name, email, phone, company, use_case, plan, status, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)
        `).bind(id, sub_type || 'subscription', name, email, phone || '', company || '', use_case || '', storedPlanKey, now, now).run();

        // Create Stripe Checkout Session (free trial, no card)
        let checkoutSession;
        try {
          checkoutSession = await createStripeCheckout(env, {
            priceId,
            name,
            email,
            company,
            phone,
            use_case,
            plan: storedPlanKey,
            planBase,
            billingCycle: cycle,
            subscriptionId: id,
            sub_type: sub_type || 'subscription',
          });

          return new Response(JSON.stringify({
            success: true,
            id,
            checkoutUrl: checkoutSession.url,
          }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        } catch (stripeErr) {
          console.error('Stripe error:', stripeErr);
          // Still return success since D1 was saved, but without checkout URL
          return new Response(JSON.stringify({
            success: true,
            id,
            checkoutUrl: null,
            error: 'Stripe checkout failed: ' + stripeErr.message,
          }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
      }

      return new Response(JSON.stringify({ error: 'Unknown submission type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });

  },
};

// Create Stripe Checkout Session
async function createStripeCheckout(env, { priceId, name, email, company, phone, use_case, plan, planBase, billingCycle, subscriptionId, sub_type }) {
  const stripeSecretKey = env.STRIPE_SECRET_KEY;

  const session = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'mode': 'subscription',
      'payment_method_types[]': 'card',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'subscription_data[metadata][subscription_id]': subscriptionId,
      'subscription_data[metadata][plan]': plan,
      'subscription_data[metadata][plan_base]': planBase || plan,
      'subscription_data[metadata][billing_cycle]': billingCycle || 'monthly',
      'subscription_data[metadata][name]': name,
      'subscription_data[metadata][email]': email,
      'subscription_data[metadata][phone]': phone || '',
      'subscription_data[metadata][company]': company || '',
      'subscription_data[metadata][use_case]': use_case || '',
      'subscription_data[trial_period_days]': '14',
      'subscription_data[trial_settings][end_behavior][missing_payment_method]': 'cancel',
      'payment_method_collection': sub_type === 'early-access' ? 'if_required' : 'always',
      'success_url': sub_type === 'early-access'
        ? 'https://secrex.ai/early-access?success=true&session_id={CHECKOUT_SESSION_ID}'
        : 'https://secrex.ai/subscribe?success=true&session_id={CHECKOUT_SESSION_ID}',
      'cancel_url': sub_type === 'early-access'
        ? 'https://secrex.ai/early-access?canceled=true'
        : 'https://secrex.ai/subscribe?canceled=true',
      'metadata[subscription_id]': subscriptionId,
      'metadata[plan]': plan,
      'metadata[plan_base]': planBase || plan,
      'metadata[billing_cycle]': billingCycle || 'monthly',
      'metadata[name]': name,
      'metadata[email]': email,
      'metadata[phone]': phone || '',
      'metadata[company]': company || '',
      'metadata[use_case]': use_case || '',
      'allow_promotion_codes': 'true',
      'metadata[sub_type]': sub_type || 'subscription',
    }).toString(),
  });

  return await session.json();
}
