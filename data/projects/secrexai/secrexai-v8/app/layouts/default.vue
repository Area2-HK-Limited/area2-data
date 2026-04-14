<template>
  <div>
    <!-- Header -->
    <header class="site-header">
      <nav class="nav-inner">
        <NuxtLink to="/" class="nav-logo">
          <img src="/img/secrexai-logo.png" alt="SecrexAI" class="nav-logo-img" style="height:28px; width:auto; object-fit:contain; vertical-align: middle;" />
          <span>Secrex</span><span class="gradient-text">AI</span>
          <div class="nav-logo-dot"></div>
        </NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/features">功能</NuxtLink></li>
          <li><NuxtLink to="/pricing">定價</NuxtLink></li>
          <li><NuxtLink to="/security">安全</NuxtLink></li>
          <li><NuxtLink to="/ai-coach">AI 教練</NuxtLink></li>
          <li><NuxtLink to="/integrations">整合</NuxtLink></li>
          <li><NuxtLink to="/about">關於</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
        </ul>
        <div class="nav-cta">
          <div style="position: relative; display: inline-flex;">
            <button class="btn-audio" @click="playIntro" :title="isPlaying ? '🔊 暫停播放' : '▶️ 播放品牌語音'">
              <FaIcon v-if="!isPlaying" icon="play" style="font-size: 0.75rem;" />
              <FaIcon v-else icon="pause" style="font-size: 0.75rem;" />
            </button>
            <span v-if="showTooltip" class="play-tooltip">不如聽下我介紹</span>
          </div>
          <NuxtLink to="/subscribe" class="btn btn-primary">免費試用</NuxtLink>
          <button class="hamburger" @click="toggleMenu" aria-label="選單">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div class="mobile-menu" :class="{ open: menuOpen }">
        <NuxtLink to="/features" @click="menuOpen = false">功能</NuxtLink>
        <NuxtLink to="/pricing" @click="menuOpen = false">定價</NuxtLink>
        <NuxtLink to="/security" @click="menuOpen = false">安全</NuxtLink>
        <NuxtLink to="/ai-coach" @click="menuOpen = false">AI 教練</NuxtLink>
        <NuxtLink to="/integrations" @click="menuOpen = false">整合</NuxtLink>
        <NuxtLink to="/about" @click="menuOpen = false">關於</NuxtLink>
        <NuxtLink to="/faq" @click="menuOpen = false">FAQ</NuxtLink>
        <NuxtLink to="/subscribe" class="btn btn-primary" style="margin-top: 0.5rem" @click="menuOpen = false">免費試用</NuxtLink>
      </div>
    </header>

    <!-- Page content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <div class="footer-logo-wrap">
                <span class="footer-logo-text">{{ footerWord }}</span><span class="gradient-text">AI</span>
              </div>
              <div class="footer-slogan">Your work, handled.</div>
            </div>
            <p style="font-size: 0.875rem; max-width: 240px; margin-bottom: 1.25rem;">香港 SME 專屬 WhatsApp AI 秘書</p>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-whatsapp" style="font-size: 0.8125rem; padding: 0.5rem 1rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +852 9645 6787
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>產品</h4>
            <ul>
              <li><NuxtLink to="/features">功能介紹</NuxtLink></li>
              <li><NuxtLink to="/pricing">定價方案</NuxtLink></li>
              <li><NuxtLink to="/ai-coach">AI 教練</NuxtLink></li>
              <li><NuxtLink to="/subscribe">免費試用</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>公司</h4>
            <ul>
              <li><NuxtLink to="/about">關於我們</NuxtLink></li>
              <li><NuxtLink to="/security">資訊安全</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>資源</h4>
            <ul>
              <li><NuxtLink to="/faq">常見問答</NuxtLink></li>
              <li><NuxtLink to="/privacy">私隱政策</NuxtLink></li>
              <li><NuxtLink to="/terms">服務條款</NuxtLink></li>
              <li><NuxtLink to="/disclaimer">免責聲明</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>聯絡</h4>
            <ul>
              <li><a href="https://wa.me/85296456787" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://wa.me/85296456787" target="_blank" rel="noopener">聯絡我們</a></li>
              <li><a href="https://www.hostlink.com.hk" target="_blank" rel="noopener">Hostlink</a></li>
              <li><a href="https://www.area2.com" target="_blank" rel="noopener">Area2</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© {{ new Date().getFullYear() }} SecrexAI. Area2 (HK) Limited. 版權所有.</p>
          <p>香港特別行政區 | PDPO 合規 | 用戶對話記錄存亞太區雲端</p>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Float -->
    <a :href="whatsappUrl" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp 聯絡我們">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const whatsappUrl = config.public.whatsappUrl
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }

// Footer typewriter: type from Sec prefix, delete back to Sec, type next word (no deletion of shared "Sec")
const footerWord = ref('Sec')
const footerWords = ['Secrex', 'Secretary', 'Secret', 'Security']
const SEC_PREFIX = 'Sec'
let wordIdx = 0      // current word index
let charIdx = 3      // start at "Sec" (3 chars already shown)
let deleting = false
let footerTimer = null

const tick = () => {
  const word = footerWords[wordIdx]
  if (!deleting) {
    // Type forward
    charIdx++
    footerWord.value = word.slice(0, charIdx)
    if (charIdx < word.length) {
      footerTimer = setTimeout(tick, 95)
    } else {
      // Full word shown — pause 1.8s, then start deleting back to "Sec"
      footerTimer = setTimeout(() => {
        deleting = true
        footerTimer = setTimeout(tick, 55)
      }, 1800)
    }
  } else {
    // Delete back to just "Sec"
    charIdx--
    footerWord.value = word.slice(0, charIdx)
    if (charIdx > SEC_PREFIX.length) {
      footerTimer = setTimeout(tick, 55)
    } else {
      // Back to "Sec" — move to next word and start typing
      deleting = false
      wordIdx = (wordIdx + 1) % footerWords.length
      charIdx = SEC_PREFIX.length
      footerTimer = setTimeout(tick, 200)
    }
  }
}

onMounted(() => { tick() })
onUnmounted(() => { if (footerTimer) clearTimeout(footerTimer) })

// Audio player for brand voice intros
const isPlaying = ref(false)
const showTooltip = ref(true)
setTimeout(() => { showTooltip.value = false }, 8000)
const audioEl = ref(null)

const playIntro = () => {
  if (!audioEl.value) {
    audioEl.value = new Audio()
    audioEl.value.addEventListener('ended', () => { isPlaying.value = false })
    audioEl.value.addEventListener('error', () => { isPlaying.value = false })
  }
  if (isPlaying.value) {
    audioEl.value.pause()
    audioEl.value.currentTime = 0
    isPlaying.value = false
    return
  }
  const track = Math.floor(Math.random() * 10) + 1
  const padded = String(track).padStart(2, '0')
  audioEl.value.src = `/audio/intro_${padded}.mp3`
  audioEl.value.play().then(() => { isPlaying.value = true }).catch(() => { isPlaying.value = false })
}
</script>

<style>
/* Mobile menu free trial button */
.mobile-menu .btn-primary {
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
}

/* Play button */
.btn-audio {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  margin-right: 0.5rem;
  color: rgba(255,255,255,0.7);
  padding: 0.25rem;
}
.btn-audio:hover {
  color: #fff;
}
.btn-audio.playing {
  color: #60a5fa;
}
.btn-audio svg {
  display: block;
}
.play-tooltip {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 14, 26, 0.95);
  color: #e2e8f0;
  font-size: 0.75rem;
  white-space: nowrap;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(96, 165, 250, 0.3);
  pointer-events: none;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  animation: tooltip-flash 1.5s ease-in-out infinite;
}
@keyframes tooltip-flash {
  0%, 100% { opacity: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.3), 0 0 0 0 rgba(96, 165, 250, 0.4); }
  50% { opacity: 0.85; box-shadow: 0 4px 12px rgba(0,0,0,0.3), 0 0 8px 2px rgba(96, 165, 250, 0.6); }
}
.play-tooltip::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: rgba(96, 165, 250, 0.3);
}

.footer-brand {
  margin-bottom: 1.25rem;
}
.footer-logo-wrap {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 0.25rem;
  font-size: 1.375rem;
  font-weight: 800;
  line-height: 1.2;
  min-height: 1.7rem;
}
.footer-logo-text {
  display: inline-block;
  background: linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: opacity 0.15s ease;
  border-right: 2px solid rgba(96,165,250,0.6);
  padding-right: 2px;
  animation: blink-cursor 1s step-end infinite;
}
@keyframes blink-cursor {
  0%, 100% { border-color: rgba(96,165,250,0.6); }
  50% { border-color: transparent; }
}
.footer-slogan {
  font-size: 0.75rem;
  color: #64748B;
  font-style: italic;
  letter-spacing: 0.02em;
}
</style>
