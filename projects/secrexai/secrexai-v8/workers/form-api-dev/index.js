/**
 * Form Submission Worker - DEV (Stripe TEST Mode)
 */

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

const jsonHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

// TEST price IDs
const PRICES = {
  starter: 'price_1TEurCDif42x0i2OywPYlFQF',
  business: 'price_1TEurUDif42x0i2OvK5qmDwI',
}
const PRICES_SEMI = {
  starter: 'price_1TFQPWDif42x0i2OhWGVfT4J',
  business: 'price_1TFQPWDif42x0i2OyA3b2tYv',
}
const PRICES_ANNUAL = {
  starter: 'price_1TFQPXDif42x0i2OVIGVNhRi',
  business: 'price_1TFQPXDif42x0i2OfMvLdgKF',
}

function getPriceId(planKey, billingCycle) {
  switch (billingCycle) {
    case 'semi': return PRICES_SEMI[planKey]
    case 'annual': return PRICES_ANNUAL[planKey]
    default: return PRICES[planKey]
  }
}

async function handleContact(data, env) {
  const { name, email } = data
  if (!name || !email) return { success: false, error: 'Missing name or email' }
  const id = generateId()
  const now = new Date().toISOString()
  await env.DB.prepare(
    'INSERT INTO subscriptions (id, type, name, email, phone, company, plan, status, trial_start, trial_end, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(id, 'contact', name || '', email, data.phone || '', data.company || '', '', 'pending', null, null, now).run()
  return { success: true, id }
}

async function handleSubscription(data, env) {
  const { name, email, phone, company, plan, billingCycle = 'monthly' } = data
  if (!name || !email || !phone || !company) {
    return { success: false, error: 'Missing required fields' }
  }
  const planKey = (plan || '').split('_')[0].toLowerCase()
  if (!['starter', 'business'].includes(planKey)) {
    return { success: false, error: 'Invalid plan: ' + planKey }
  }

  const priceId = getPriceId(planKey, billingCycle)
  if (!priceId) return { success: false, error: 'Invalid price ID' }

  // Save to D1 first
  const id = generateId()
  const now = new Date().toISOString()
  const storedPlanKey = planKey + '_' + billingCycle
  await env.DB.prepare(
    'INSERT INTO subscriptions (id, type, name, email, phone, company, use_case, plan, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(id, 'subscription', name || '', email, phone, company || '', '', storedPlanKey, 'pending', now, now).run()

  const stripeKey = env.STRIPE_SECRET_KEY
  const session = await createStripeSession(stripeKey, email, priceId, name, phone, company, planKey, billingCycle)
  if (!session.success) return session
  
  return { success: true, checkoutUrl: session.url, sessionId: session.sessionId, id }
}

async function createStripeSession(stripeKey, email, priceId, name, phone, company, planKey, billingCycle) {
  const url = `https://api.stripe.com/v1/checkout/sessions`
  const params = new URLSearchParams({
    'mode': 'subscription',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'customer_email': email,
    'success_url': `https://6e6b8717.secrexai.pages.dev/subscribe?success=true&session_id={CHECKOUT_SESSION_ID}`,
    'cancel_url': `https://6e6b8717.secrexai.pages.dev/subscribe?canceled=true`,
    'subscription_data[trial_period_days]': '14',
    'subscription_data[metadata][name]': name,
    'subscription_data[metadata][phone]': phone,
    'subscription_data[metadata][company]': company,
    'subscription_data[metadata][plan]': planKey,
    'subscription_data[metadata][billingCycle]': billingCycle,
    'payment_method_collection': 'always',
    'allow_promotion_codes': 'true',
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    })
    const data = await response.json()
    if (data.error) return { success: false, error: data.error.message }
    return { success: true, url: data.url, sessionId: data.id }
  } catch (err) {
    return { success: false, error: err.message }
  }
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: jsonHeaders });
    }

    const { type, data } = body;
    if (!type) return new Response(JSON.stringify({ error: 'Missing type' }), { status: 400, headers: jsonHeaders });

    try {
      let result;
      if (type === 'contact') {
        result = await handleContact(data, env);
      } else if (type === 'subscription') {
        result = await handleSubscription(data, env);
      } else if (type === 'stats') {
        const { results } = await env.DB.prepare('SELECT COUNT(*) as count FROM subscriptions WHERE status IN (?, ?)').bind('pending', 'completed').all()
        return new Response(JSON.stringify({ success: true, count: results[0].count }), { headers: jsonHeaders });
      } else {
        return new Response(JSON.stringify({ error: 'Unknown type' }), { status: 400, headers: jsonHeaders });
      }
      return new Response(JSON.stringify(result), { headers: jsonHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: jsonHeaders });
    }
  }
};
