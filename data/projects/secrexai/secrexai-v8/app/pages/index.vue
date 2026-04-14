<template>
  <div>
    <Head>
      <title>SecrexAI — 住喺你 WhatsApp 的 24 小時全能 AI 秘書 | 香港 SME 專屬</title>
      <meta name="description" content="香港 SME 專屬 WhatsApp AI 秘書。廣東話原生・永久記憶・60+技能・企業級雲端安全・PDPO 合規。14 日免費試用試用。" />
    </Head>

    <!-- HERO -->
    <section class="hero-section">
      <div class="glow-orb glow-blue" style="width:600px;height:600px;top:-200px;left:-200px;opacity:0.2;"></div>
      <div class="glow-orb glow-purple" style="width:500px;height:500px;top:100px;right:-150px;opacity:0.18;"></div>
      <div class="glow-orb glow-cyan" style="width:400px;height:400px;bottom:-100px;left:30%;opacity:0.12;"></div>

      <div class="hero-inner">
        <div class="hero-content">
          <div class="badge badge-blue hero-badge">
            <FaIcon icon="building" style="font-size:0.7rem;" />
            香港 SME 專屬
          </div>

          <h1 class="hero-h1">
            <TypewriterText
              :words="heroWords"
              :typeSpeed="65"
              :deleteSpeed="35"
              :pauseMs="2400"
            /><br>
            <span style="color: var(--text-primary);">喺你嘅 WhatsApp</span>
          </h1>

          <p class="hero-sub">
            廣東話原生 · 永久記憶 · 60+ 技能<br class="hero-br">
            數據存亞太區雲端 · PDPO 合規
          </p>

          <div class="hero-cta-row">
            <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">
              <FaIcon icon="rocket" />
              開始 14 日免費試用
            </NuxtLink>
            <a href="#roleplay-demo" class="btn btn-outline btn-lg">
              <FaIcon icon="play" style="font-size:0.75rem;" />
              睇互動示範
            </a>
          </div>

          <!-- Trust badges -->
          <div class="trust-row">
            <div class="trust-item">
              <FaIcon icon="circle-check" style="color:#22C55E;" />
              免費試用
            </div>
            <div class="trust-item">
              <FaIcon icon="circle-check" style="color:#22C55E;" />
              PDPO 合規
            </div>
            <div class="trust-item">
              <FaIcon icon="circle-check" style="color:#22C55E;" />
              ISO 27001 底層
            </div>
            <div class="trust-item">
              <FaIcon icon="circle-check" style="color:#22C55E;" />
              雲端服務
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <HeroWaChat />
        </div>
      </div>
    </section>

    <!-- AI vs AGENT COMPARISON -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-green">
            <FaIcon icon="robot" style="font-size:0.7rem;" />
            同一般 AI 有咩分別？
          </div>
          <h2>一般 AI 只係「答」你</h2>
          <h2 style="margin-top:0.5rem;">SecrexAI 係「幫你做」</h2>
          <p>最大分別：你叫佢做嘢，佢真係會幫你郁手</p>
        </div>

        <div class="grid-2" style="gap: 2rem; max-width: 900px; margin: 0 auto;">
          <!-- Regular AI -->
          <div class="card" style="border: 1px solid #334155; opacity: 0.85;">
            <div style="text-align: center; padding: 1.5rem 0 1rem;">
              <div style="font-size: 3rem; margin-bottom: 0.5rem;">💬</div>
              <h3 style="font-size: 1.125rem; color: #94A3B8;">一般 AI 助理</h3>
              <p style="color: #64748B; font-size: 0.8125rem; margin-top: 0.25rem;">ChatGPT / Gemini / Meta AI</p>
            </div>
            <ul style="list-style: none; padding: 0 1.25rem 1.5rem; margin: 0;">
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #94A3B8;">
                <span style="color: #F87171; margin-top: 0.1rem;">✗</span>
                <span>你問佢點做，佢淨係答你</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #94A3B8;">
                <span style="color: #F87171; margin-top: 0.1rem;">✗</span>
                <span>要你自己複製貼上郁手做</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #94A3B8;">
                <span style="color: #F87171; margin-top: 0.1rem;">✗</span>
                <span>每次對話都係獨立，無記憶</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #94A3B8;">
                <span style="color: #F87171; margin-top: 0.1rem;">✗</span>
                <span>你唔記得跟進，佢唔會主動提醒</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #94A3B8;">
                <span style="color: #F87171; margin-top: 0.1rem;">✗</span>
                <span>無替你預訂房間、寫電郵、查資料</span>
              </li>
            </ul>
          </div>

          <!-- SecrexAI Agent -->
          <div class="card" style="border: 2px solid #10B981;">
            <div style="text-align: center; padding: 1.5rem 0 1rem;">
              <div style="margin-bottom: 0.5rem;">
                <img src="/img/secrexai-logo.png" alt="SecrexAI" style="height: 48px; width: auto; object-fit: contain;" />
              </div>
              <h3 style="font-size: 1.125rem;"><span style="color: #fff;">Secrex</span><span style="background: linear-gradient(90deg, #60A5FA, #A78BFA); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI</span></h3>
              <p style="color: #64748B; font-size: 0.8125rem; margin-top: 0.25rem;">AI Agent 智能體</p>
            </div>
            <ul style="list-style: none; padding: 0 1.25rem 1.5rem; margin: 0;">
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #E2E8F0;">
                <span style="color: #10B981; margin-top: 0.1rem;">✓</span>
                <span>你叫佢做，佢真係郁手幫你完成</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #E2E8F0;">
                <span style="color: #10B981; margin-top: 0.1rem;">✓</span>
                <span>自動預訂、寫電郵、整理文件</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #E2E8F0;">
                <span style="color: #10B981; margin-top: 0.1rem;">✓</span>
                <span>永久記憶，越用越就手</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #E2E8F0;">
                <span style="color: #10B981; margin-top: 0.1rem;">✓</span>
                <span>佢有電腦喺手，隨時幫你做嘢</span>
              </li>
              <li style="padding: 0.625rem 0; border-top: 1px solid #1E293B; display: flex; align-items: flex-start; gap: 0.5rem; color: #E2E8F0;">
                <span style="color: #10B981; margin-top: 0.1rem;">✓</span>
                <span>24/7 standby，有手機就得</span>
              </li>
            </ul>
          </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <p style="color: #94A3B8; font-size: 0.875rem; margin-bottom: 1rem;">
            同 <strong style="color: #E2E8F0;">Perplexity Computer</strong>、<strong style="color: #E2E8F0;">Manus AI</strong>、<strong style="color: #E2E8F0;">Claude Code</strong> 相同，但 SecrexAI 可以直接喺 WhatsApp 溝通同幫你做野
          </p>
          <NuxtLink to="/subscribe" class="btn btn-primary" style="font-size: 1rem; padding: 0.875rem 2rem;">
            免費試用 SecrexAI →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PAIN POINTS -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-orange">
            <FaIcon icon="lightbulb" style="font-size:0.7rem;" />
            你係咪都有呢幾個問題？
          </div>
          <h2>香港 SME 6 大痛點</h2>
          <p>SecrexAI 針對香港中小企日常工作痛點而設計</p>
        </div>
        <div class="grid-2 pain-grid">
          <div v-for="pain in painPoints" :key="pain.title" class="card pain-card">
            <div class="pain-icon-wrap">
              <FaIcon :icon="pain.icon" />
            </div>
            <div>
              <h3 style="font-size: 0.9375rem; font-weight: 700; margin-bottom: 0.375rem;">{{ pain.title }}</h3>
              <p style="font-size: 0.8125rem; margin-bottom: 0.5rem; color: #64748B;">{{ pain.problem }}</p>
              <div class="pain-solution">
                <FaIcon icon="check" />
                {{ pain.solution }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INDUSTRY TABS -->
    <section id="demo" class="section">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">
            <FaIcon icon="industry" style="font-size:0.7rem;" />
            行業解決方案
          </div>
          <h2>選擇你的行業，睇真實案例</h2>
          <p>15 個香港主要行業，展示真實工作痛點同解決方案</p>
        </div>
        <IndustryTabs />
      </div>
    </section>

    <!-- ROLE PLAY DEMO -->
    <section id="roleplay-demo" class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">
            <FaIcon icon="layer-group" style="font-size:0.7rem;" />
            真實工作場景
          </div>
          <h2>SecrexAI 點幫你做實事</h2>
          <p>11 個具體工作場景，展示 AI 點樣幫你慳時間</p>
        </div>
        <RolePlayDemo />
      </div>
    </section>

    <!-- PERSONAS -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">
            <FaIcon icon="user-group" style="font-size:0.7rem;" />
            適合你嗎？
          </div>
          <h2>SecrexAI 幫緊邊類人？</h2>
          <p>香港各行各業都有佢嘅一份</p>
        </div>

        <!-- Persona grid with flip card -->
        <div class="grid-3">
          <div
            v-for="(p, i) in displayPersonas"
            :key="`${i}-${p.name}`"
            class="persona-flip-wrap"
            :class="{ flipping: flippingIndex === i }"
          >
            <div class="persona-flip-inner" :class="{ 'content-fading': fadingIndex === i }">
              <!-- Front face -->
              <div class="persona-card persona-front">
                <div class="persona-avatar">
                  {{ p.emoji }}
                </div>
                <h3 style="font-size: 0.9375rem; font-weight: 700; margin-bottom: 0.25rem;">{{ p.name }}</h3>
                <p style="font-size: 0.8125rem; color: #64748B; margin-bottom: 0.75rem; font-weight: 500;">{{ p.role }}</p>
                <p style="display:flex;align-items:flex-start;gap:0.375rem;font-size: 0.8125rem; color: #64748B; margin-bottom: 0.5rem;">
                  <span style="color:#F87171;margin-top:2px;flex-shrink:0;">❌</span>
                  {{ p.pain }}
                </p>
                <p style="display:flex;align-items:flex-start;gap:0.375rem;font-size: 0.8125rem; color: #4ADE80;">
                  <span style="margin-top:2px;flex-shrink:0;">✅</span>
                  {{ p.solution }}
                </p>
              </div>
              <!-- Back face (same content, slightly tinted for flip effect) -->
              <div class="persona-card persona-back">
                <div class="persona-avatar" style="background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2));">
                  {{ p.emoji }}
                </div>
                <h3 style="font-size: 0.9375rem; font-weight: 700; margin-bottom: 0.25rem;">{{ p.name }}</h3>
                <p style="font-size: 0.8125rem; color: #64748B; margin-bottom: 0.75rem; font-weight: 500;">{{ p.role }}</p>
                <p style="display:flex;align-items:flex-start;gap:0.375rem;font-size: 0.8125rem; color: #64748B; margin-bottom: 0.5rem;">
                  <FaIcon icon="triangle-exclamation" style="color:#F87171;margin-top:2px;flex-shrink:0;" />
                  {{ p.pain }}
                </p>
                <p style="display:flex;align-items:flex-start;gap:0.375rem;font-size: 0.8125rem; color: #4ADE80;">
                  <FaIcon icon="check" style="margin-top:2px;flex-shrink:0;" />
                  {{ p.solution }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top: 1.5rem;">
          <p style="font-size: 0.8125rem; color: #475569;">
            <FaIcon icon="rotate" style="color:#60A5FA;margin-right:0.375rem;" />
            SecrexAI 服務超過 20 個行業，每 5 秒自動展示更多案例
          </p>
        </div>
      </div>
    </section>

    <!-- TECH PARTNERS -->
    <section class="section">
      <div class="container" style="text-align: center;">
        <div style="margin-bottom: 3rem;">
          <div class="badge badge-blue" style="display: inline-flex; margin-bottom: 1rem;">
            <FaIcon icon="link" style="font-size:0.7rem;" />
            生態系合作
          </div>
          <h2>技術合作伙伴</h2>
          <p style="color: #94a3b8; max-width: 480px; margin: 0 auto;">使用頂級技術栈構建，確保穩定性同安全性</p>
        </div>
        <!-- Marquee wrapper with gradient shadows -->
        <div class="marquee-wrapper">
          <div class="marquee-gradient-left"></div>
          <div class="marquee-gradient-right"></div>
          <div class="marquee-track">
            <div class="marquee-content">
              <div class="partner-logo-card">
                <img src="/img/partners/tencent-cloud.svg" alt="Tencent Cloud" class="partner-logo" />
                <span class="partner-name">Tencent Cloud</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/cloudflare.svg" alt="Cloudflare" class="partner-logo" />
                <span class="partner-name">Cloudflare</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/openai.svg" alt="OpenAI" class="partner-logo" />
                <span class="partner-name">OpenAI</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/anthropic.svg" alt="Anthropic" class="partner-logo" />
                <span class="partner-name">Anthropic</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/google-cloud.svg" alt="Google Cloud" class="partner-logo" />
                <span class="partner-name">Google Cloud</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/github.svg" alt="GitHub" class="partner-logo" />
                <span class="partner-name">GitHub</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/docker.svg" alt="Docker" class="partner-logo" />
                <span class="partner-name">Docker</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/stripe.svg" alt="Stripe" class="partner-logo" />
                <span class="partner-name">Stripe</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/vercel.svg" alt="Vercel" class="partner-logo" />
                <span class="partner-name">Vercel</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/twilio.svg" alt="Twilio" class="partner-logo" />
                <span class="partner-name">Twilio</span>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="marquee-content" aria-hidden="true">
              <div class="partner-logo-card">
                <img src="/img/partners/tencent-cloud.svg" alt="Tencent Cloud" class="partner-logo" />
                <span class="partner-name">Tencent Cloud</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/cloudflare.svg" alt="Cloudflare" class="partner-logo" />
                <span class="partner-name">Cloudflare</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/openai.svg" alt="OpenAI" class="partner-logo" />
                <span class="partner-name">OpenAI</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/anthropic.svg" alt="Anthropic" class="partner-logo" />
                <span class="partner-name">Anthropic</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/google-cloud.svg" alt="Google Cloud" class="partner-logo" />
                <span class="partner-name">Google Cloud</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/github.svg" alt="GitHub" class="partner-logo" />
                <span class="partner-name">GitHub</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/docker.svg" alt="Docker" class="partner-logo" />
                <span class="partner-name">Docker</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/stripe.svg" alt="Stripe" class="partner-logo" />
                <span class="partner-name">Stripe</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/vercel.svg" alt="Vercel" class="partner-logo" />
                <span class="partner-name">Vercel</span>
              </div>
              <div class="partner-logo-card">
                <img src="/img/partners/twilio.svg" alt="Twilio" class="partner-logo" />
                <span class="partner-name">Twilio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECURITY -->
    <section class="section security-section">
      <div class="container">
        <div class="sec-split">
          <div>
            <div class="badge badge-green" style="margin-bottom: 1.25rem; display: inline-flex;">
              <FaIcon icon="lock" style="font-size:0.7rem;" />
              企業級資安
            </div>
            <h2 style="margin-bottom: 0.875rem;">數據安全是我們最重視</h2>
            <p style="margin-bottom: 2rem; color: #64748B; max-width: 460px;">
              對話記錄存亞太區雲端 · 唔訓練模型 · 唔做廣告<br>
              <span style="font-size: 0.9rem; margin-top: 0.5rem; display: block;">精心挑選雲端伺服器及地區</span>
            </p>
            <div class="security-points-list">
              <div v-for="s in securityPoints" :key="s.title" class="security-badge">
                <div class="security-icon">
                  <FaIcon :icon="s.icon" />
                </div>
                <div>
                  <div class="security-title">{{ s.title }}</div>
                  <div class="security-desc">{{ s.desc }}</div>
                </div>
              </div>
            </div>
            <NuxtLink to="/security" class="btn btn-outline" style="margin-top: 2rem;">
              查看完整安全架構
              <FaIcon icon="arrow-right" style="font-size:0.75rem;" />
            </NuxtLink>
          </div>
          <div class="cert-grid">
            <div v-for="cert in certs" :key="cert.label" class="cert-card">
              <div class="cert-icon">
                <FaIcon :icon="cert.icon" />
              </div>
              <div class="cert-label">{{ cert.label }}</div>
              <div class="cert-sub">{{ cert.sub }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI COACH -->
    <section class="section section-alt">
      <div class="container">
        <div class="coach-split">
          <div>
            <div class="badge badge-blue" style="margin-bottom: 1.25rem; display: inline-flex;">
              <FaIcon icon="graduation-cap" style="font-size:0.7rem;" />
              AI 教練
            </div>
            <h2 style="margin-bottom: 0.875rem;">唔識用？有人教你</h2>
            <p style="margin-bottom: 1.75rem; color: #64748B; max-width: 420px;">真人技術團隊，WhatsApp 廣東話全程支援，確保你用到 SecrexAI 嘅全部價值。</p>
            <ul class="coach-list">
              <li v-for="item in coachFeatures" :key="item">
                <FaIcon icon="check" style="color: #60A5FA; flex-shrink: 0; margin-top: 3px;" />
                {{ item }}
              </li>
            </ul>
            <div class="coach-price-row" style="text-align:center;">
            </div>
            <NuxtLink to="/ai-coach" class="btn btn-primary">
              了解 AI 教練服務
              <FaIcon icon="arrow-right" style="font-size:0.75rem;" />
            </NuxtLink>
          </div>
          <div class="card coach-card">
            <div class="coach-card-icon">
              <FaIcon icon="graduation-cap" />
            </div>
            <h3 style="margin-bottom: 0.5rem; font-size: 1.125rem; text-align:center;">AI 教練增值服務</h3>
            <p style="font-size: 0.8125rem; color: #475569; margin-bottom: 1.5rem; text-align:center;">可配合任何方案使用</p>
            <div class="coach-card-list">
              <div class="coach-card-item"><FaIcon icon="check" style="color:#4ADE80;" /> 30 分鐘個人化 Onboarding</div>
              <div class="coach-card-item"><FaIcon icon="check" style="color:#4ADE80;" /> 調教 AI 個性同工作習慣</div>
              <div class="coach-card-item"><FaIcon icon="check" style="color:#4ADE80;" /> WhatsApp 廣東話技術支援</div>
              <div class="coach-card-item"><FaIcon icon="check" style="color:#4ADE80;" /> 辦公時間 WhatsApp 無限次支援</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">
            <FaIcon icon="credit-card" style="font-size:0.7rem;" />
            定價
          </div>
          <h2>簡單透明定價</h2>
          <p>無隱藏費用，無最低消費</p>
        </div>
        <PricingPlans />
        <div style="text-align: center; margin-top: 2rem;">
          <NuxtLink to="/pricing" class="btn btn-outline">
            查看所有方案 →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">
            <FaIcon icon="circle-info" style="font-size:0.7rem;" />
            常見問題
          </div>
          <h2>你可能想問嘅問題</h2>
        </div>
        <div style="max-width: 760px; margin: 0 auto;">
          <HomeFaq />
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/faq" class="btn btn-outline">
            睇所有常見問題
            <FaIcon icon="arrow-right" style="font-size:0.75rem;" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section cta-section">
      <div class="glow-orb glow-purple" style="width:600px;height:600px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.2;"></div>
      <div class="container text-center cta-inner">
        <div class="badge badge-blue" style="margin-bottom: 1.5rem;">
          <FaIcon icon="rocket" style="font-size:0.7rem;" />
          即刻開始
        </div>
        <h2 class="cta-h2">
          14 日免費試用<br><span class="gradient-text">免費試用，隨時取消</span>
        </h2>
        <p class="cta-sub">現在登記，即刻體驗 SecrexAI 如何改變你嘅工作方式</p>
        <div class="cta-btns">
          <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">
            <FaIcon icon="rocket" />
            開始 14 日免費試用
          </NuxtLink>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
            <FaIcon :icon="['fab', 'whatsapp']" />
            WhatsApp 查詢
          </a>
        </div>
        <p class="cta-note">
          有問題？<a :href="whatsappUrl" target="_blank" rel="noopener" style="color: #60A5FA;">WhatsApp +852 9645 6787</a> 聯絡我們
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const whatsappUrl = config.public.whatsappUrl

const heroWords = [
  '識用電腦既 AI Agent',
  '24 小時全能 AI 秘書',
  '廣東話原生 AI 員工',
  '永久記憶智能助理',
  '60+ 技能一站整合',
]

const painPoints = [
  {
    icon: 'rocket',
    title: '一諗起就有人做',
    problem: '經常想起有嘢要做，但同事未開工，自己又多野做分唔到身',
    solution: 'SecrexAI 24/7 上線，你幾時想起即時幫你處理',
  },
  {
    icon: 'person-running',
    title: '出街無電腦，做唔到嘢',
    problem: '離開公司就乜都做唔到，手機又應付唔到工作需要',
    solution: 'SecrexAI 幫你用電腦處理工作，有手機就得了',
  },
  {
    icon: 'ban',
    title: 'ChatGPT 香港用唔到？',
    problem: '需要 VPN，複雜又有法律風險',
    solution: '直接 WhatsApp 廣東話，零設定用 GPT / Claude / Gemini',
  },
  {
    icon: 'brain',
    title: 'AI 每次唔記得你係誰',
    problem: '每次重頭解釋背景，浪費時間',
    solution: '永久記憶系統，越用越識你的工作習慣同偏好',
  },
  {
    icon: 'wallet',
    title: '訂了一堆工具好貴好散',
    problem: '每月 HK$2,000+ 訂閱費，仲要逐個登入',
    solution: '一個平台，60+ 技能全包，一個訂閱解決所有工具需求',
  },
  {
    icon: 'layer-group',
    title: '太多 AI App，難搵返啲資料',
    problem: '客戶資料、訂單、會議記錄散落各處，容易漏跟進',
    solution: 'AI 統一整理資訊，自動排程提醒，確保每個跟進都唔漏',
  },
]

const securityPoints = [
  { icon: 'database', title: '對話記錄存亞太區雲端', desc: 'Tencent Cloud 企業級數據中心，唔做廣告、唔訓練模型' },
  { icon: 'shield', title: '企業級認證底層基礎設施', desc: 'ISO 27001 / SOC 2 Type II / CSA STAR 多重認證' },
  { icon: 'file-shield', title: 'PDPO 合規', desc: '香港公司運營，符合個人資料（私隱）條例要求' },
  { icon: 'lock', title: '帳號獨立隔離', desc: '端到端加密，每個用戶帳號完全獨立，唔會互相存取' },
]

const certs = [
  { icon: 'shield', label: 'ISO 27001', sub: 'Tencent Cloud 認證' },
  { icon: 'circle-check', label: 'SOC 2 Type II', sub: '服務安全審計' },
  { icon: 'star', label: 'CSA STAR', sub: '雲端安全聯盟' },
  { icon: 'file-shield', label: 'PDPO 合規', sub: '香港私隱條例' },
  { icon: 'lock', label: '端對端加密', sub: '帳號完全隔離' },
  { icon: 'globe', label: '數據存亞太區', sub: '企業級雲端主權數據' },
]

const coachFeatures = [
  '30 分鐘個人化 Onboarding，調教 AI 認識你的工作習慣',
  '常見錯誤用法預防，快速上手避免踩雷',
  '掌握 60+ 技能核心用法，即時提升效率',
  '辦公時間 WhatsApp 無限次支援',
]

// All personas pool — more industries
const allPersonas = [
  { emoji: '🏢', name: '中小企老闆陳先生', role: '零售店老闆 · 旺角 · 3 間門市', pain: '每日 WhatsApp 回覆 + 追貨 + 管帳，分身不暇', solution: 'AI 自動整理查詢 + 追蹤訂單 + 生成週報' },
  { emoji: '⭐', name: '美容院老闆娘 Mandy', role: '3 名員工美容院 · 銅鑼灣', pain: '想做 IG 宣傳，但每次唔知寫咩', solution: 'AI 生成廣東話文案 + 配圖 + 預約提醒自動化' },
  { emoji: '🏠', name: '地產代理 Victor', role: '5 年經驗 · 主攻九龍區租務', pain: '放盤文案要中英對照，WhatsApp 跟進好繁瑣', solution: 'AI 自動生成中英放盤文案 + WhatsApp 提醒' },
  { emoji: '📊', name: '會計師 Joyce', role: '4 人所 · 荃灣 · 主要 SME 客戶', pain: 'Chase 客人交單據好費神', solution: 'AI 自動批量個人化 WhatsApp 提醒' },
  { emoji: '🍽️', name: '餐廳東主 Benny', role: '茶餐廳 · 深水埗 · 自己一腳踢', pain: '手寫今日特別餐單好麻煩', solution: 'AI 一句話更新餐單 + 即出 IG Story 圖' },
  { emoji: '🚚', name: '物流公司 Andy', role: '7 人快遞公司 · 葵涌', pain: '派送更新要逐個 WhatsApp', solution: 'AI 批量發送派送狀態 + 自動回覆查詢' },
  { emoji: '🎓', name: '教育中心 Grace', role: '補習社東主 · 沙田 · 80 名學生', pain: '家長查詢好多，回覆追唔上', solution: 'AI 批量回覆家長 + 生成學生個人化反饋' },
  { emoji: '❤️', name: '診所助理 Karen', role: '中醫診所 · 九龍城 · 3 名醫師', pain: '預約重疊，覆診提醒要人手打', solution: 'AI 整理預約 + 批量覆診提醒 + 排程確認' },
  { emoji: '🔨', name: '裝修公司 Thomas', role: '8 人裝修團隊 · 觀塘', pain: '多個工地同時進行，進度跟蹤混亂', solution: 'AI 整合工地進度 + 排程客戶更新訊息' },
  { emoji: '🎨', name: '設計師 Fiona', role: '自由設計師 · 主攻品牌設計', pain: '客戶 Brief 零散，發票追收靠記性', solution: 'AI 整理 Brief 要點 + 自動催收發票' },
  { emoji: '💪', name: '健身教練 Marco', role: '私人教練 · 30 位學員', pain: '課堂時間表手動更新，學員管理費時', solution: 'AI 整理時間表 + 到期前自動提醒續費' },
  { emoji: '⚖️', name: '律師 James', role: '中小型律師行 · 上環', pain: '合約文件長，摘要耗時，案件跟進難', solution: 'AI 快速摘要合約要點 + 案件進度排程提醒' },
  { emoji: '🎂', name: '烘焙店 Annie', role: '手工蛋糕 · 大埔 · 網上為主', pain: 'WhatsApp 訂單整理好亂，容易漏單', solution: 'AI 整理訂單成清單 + 取貨前自動提示客人' },
  { emoji: '🛒', name: '電商老闆 Danny', role: 'Shopify 網店 · 主攻美妝護膚', pain: '產品描述要一個個寫，客服查詢多', solution: 'AI 批量生成產品文案 + 標準回覆範本' },
  { emoji: '☂️', name: '保險代理 Sandra', role: '10 年資歷 · 服務 200+ 客戶', pain: '保單續期提醒靠記性，跟進容易漏', solution: 'AI 批量個人化到期提醒 + 推薦文案生成' },
]

// Display 6 personas, randomly flip one card every 5 seconds
const displayPersonas = ref([...allPersonas.slice(0, 6)])
const flippingIndex = ref(-1)
const fadingIndex = ref(-1)
let flipTimer = null

const rotateOneCard = () => {
  // Pick a random index to flip
  const idx = Math.floor(Math.random() * 6)

  // Step 1: Fade out content FIRST (opacity → 0, 200ms CSS transition)
  fadingIndex.value = idx

  // Step 2: Wait for next tick + rAF to ensure opacity fade is painted,
  //         then wait 220ms for CSS transition to fully complete
  nextTick(() => {
    requestAnimationFrame(() => {
      // After content has fully faded out (220ms), swap content + trigger flip
      setTimeout(() => {
        // Swap persona content while invisible
        const currentNames = displayPersonas.value.map(p => p.name)
        const pool = allPersonas.filter(p => !currentNames.includes(p.name))
        if (pool.length === 0) {
          fadingIndex.value = -1
          return
        }
        const newPersona = pool[Math.floor(Math.random() * pool.length)]
        const updated = [...displayPersonas.value]
        updated[idx] = newPersona
        displayPersonas.value = updated

        // Step 3: Use nextTick + rAF to ensure content swap is painted,
        //         THEN trigger the flip animation
        nextTick(() => {
          requestAnimationFrame(() => {
            // Now trigger the flip animation (content is invisible + swapped)
            flippingIndex.value = idx

            // Step 4: Remove fading class after flip has started (60ms)
            //         so content fades back in while flip is underway
            setTimeout(() => {
              fadingIndex.value = -1
            }, 60)

            // Step 5: Remove flipping class after flip animation completes (600ms)
            setTimeout(() => {
              flippingIndex.value = -1
            }, 620)
          })
        })
      }, 220) // wait for opacity CSS transition to fully complete
    })
  })
}

onMounted(() => {
  flipTimer = setInterval(rotateOneCard, 5000)
})
onUnmounted(() => {
  if (flipTimer) clearInterval(flipTimer)
})
</script>

<style scoped>
/* ── Hero ── */
.hero-badge {
  margin-bottom: 1.25rem;
  display: inline-flex;
}
.hero-h1 {
  font-size: clamp(1.875rem, 4.5vw, 3.25rem);
  line-height: 1.13;
  letter-spacing: -0.025em;
  font-weight: 800;
  margin-bottom: 1.25rem;
}
.hero-sub {
  font-size: 1.0625rem;
  margin-bottom: 2rem;
  max-width: 500px;
  color: #64748B;
  line-height: 1.65;
}
.hero-cta-row {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
}
.trust-row {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  align-items: center;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: #475569;
}

/* ── Pain Points ── */
.pain-grid {
  gap: 1.25rem;
  max-width: 920px;
  margin: 0 auto;
}
.pain-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.pain-icon-wrap {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60A5FA;
  font-size: 1rem;
  flex-shrink: 0;
}
.pain-solution {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: #4ADE80;
  font-weight: 600;
}

/* ── Persona Cards — simple fade in/out swap ── */
.persona-flip-wrap {
  height: 100%;
}
.persona-flip-inner {
  position: relative;
  height: 100%;
  transition: opacity 0.35s ease;
}
/* Fade out during swap */
.persona-flip-wrap.flipping .persona-flip-inner {
  opacity: 0;
}
/* Content fade out for swap */
.persona-flip-inner.content-fading {
  opacity: 0;
  transition: opacity 0.2s ease;
}
/* Single face only — no dual-face confusion */
.persona-front,
.persona-back {
  display: none;
}
.persona-front {
  display: block;
}

/* ── Security ── */
.security-section {
  background: linear-gradient(135deg, #09090B 0%, #0F1629 100%);
}
.sec-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.security-points-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.security-title {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.2rem;
  color: var(--text-primary);
}
.security-desc {
  font-size: 0.8125rem;
  color: #475569;
}

/* Cert grid */
.cert-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
  align-self: center;
}
.cert-card {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 0.875rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  transition: all 0.2s;
}
.cert-card:hover {
  border-color: rgba(34, 197, 94, 0.25);
  background: rgba(34, 197, 94, 0.04);
}
.cert-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: rgba(34, 197, 94, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: #4ADE80;
  margin-bottom: 0.25rem;
}
.cert-label {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-primary);
}
.cert-sub {
  font-size: 0.75rem;
  color: #475569;
}

/* ── AI Coach ── */
.coach-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 920px;
  margin: 0 auto;
}
.coach-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}
.coach-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.9375rem;
  color: #64748B;
}
.coach-price-row {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.coach-price {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
}
.coach-price-sub {
  font-size: 0.875rem;
  color: #475569;
}
.coach-card {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.03) 100%);
}
.coach-card-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #60A5FA;
  margin: 0 auto 1.25rem;
}
.coach-card-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  text-align: left;
}
.coach-card-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748B;
}

/* ── Final CTA ── */
.cta-section {
  background: linear-gradient(135deg, #1E1B4B 0%, #0F1629 50%, #09090B 100%);
  position: relative;
  overflow: hidden;
}
.cta-inner {
  position: relative;
  z-index: 1;
}
.cta-h2 {
  font-size: clamp(1.625rem, 4vw, 2.625rem);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}
.cta-sub {
  font-size: 1.0625rem;
  max-width: 480px;
  margin: 0 auto 2.25rem;
  color: #64748B;
}
.cta-btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
}
.cta-note {
  font-size: 0.8125rem;
  color: #475569;
}

/* ── Hero break ── */
.hero-br { display: none; }

/* ── Responsive ── */
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .hero-h1 { font-size: clamp(1.75rem, 6.5vw, 2.5rem); margin-bottom: 1rem; }
  .hero-sub { font-size: 0.9375rem; margin-bottom: 1.5rem; max-width: 100%; }
  .hero-br { display: inline; }
  .hero-cta-row { flex-direction: column; gap: 0.75rem; }
  .hero-cta-row .btn { width: 100%; justify-content: center; }
  .trust-row { gap: 0.875rem; }
  .trust-item { font-size: 0.75rem; }

  .sec-split { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  .cert-grid { grid-template-columns: repeat(3, 1fr); gap: 0.625rem; }
  .cert-card { padding: 0.875rem 0.75rem; }

  .coach-split { grid-template-columns: 1fr; gap: 2rem; max-width: 100%; }

  .cta-btns { flex-direction: column; align-items: center; }
  .cta-btns .btn { width: 100%; max-width: 320px; justify-content: center; }
}

@media (max-width: 480px) {
  .cert-grid { grid-template-columns: repeat(2, 1fr); }
}

/* ── Partners Section — Marquee ─────────── */
.marquee-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
}

/* Gradient shadows on both sides */
.marquee-gradient-left,
.marquee-gradient-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.marquee-gradient-left {
  left: 0;
  background: linear-gradient(to right, #0a0f1e 0%, transparent 100%);
}
.marquee-gradient-right {
  right: 0;
  background: linear-gradient(to left, #0a0f1e 0%, transparent 100%);
}

/* Track — the scrolling container */
.marquee-track {
  display: flex;
  overflow: hidden;
  width: 100%;
}

/* Content — the row of logos that scrolls */
.marquee-content {
  display: flex;
  gap: 1.25rem;
  flex-shrink: 0;
  animation: marquee-scroll 30s linear infinite;
  padding-right: 1.25rem;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

/* Pause on hover */
.marquee-wrapper:hover .marquee-content {
  animation-play-state: paused;
}

.partner-logo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 1rem;
  flex-shrink: 0;
  transition: all .2s ease;
  min-width: 120px;
}
.partner-logo-card:hover {
  background: rgba(255,255,255,.07);
  border-color: rgba(59,130,246,.3);
  transform: translateY(-2px);
}
.partner-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.partner-logo-card:hover .partner-logo {
  filter: brightness(1.15);
}
.partner-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748B;
  text-align: center;
}
@media (max-width: 768px) {
  .partner-logo-card { padding: 1rem 1rem; min-width: 100px; }
  .partner-logo { width: 36px; height: 36px; }
  .marquee-gradient-left,
  .marquee-gradient-right { width: 40px; }
}
</style>
