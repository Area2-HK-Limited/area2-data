<template>
  <div class="min-h-screen bg-[#0A0A0F] text-[#E2E8F0]">
    <!-- Navigation -->
    <header class="nav-dark sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 text-white font-black text-xl no-underline">
            <span class="text-2xl">🤖</span>
            <span class="gradient-text">PersonAI</span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-1">
            <NuxtLink to="/features" class="nav-link">功能</NuxtLink>
            <NuxtLink to="/pricing" class="nav-link">定價</NuxtLink>
            <NuxtLink to="/security" class="nav-link">安全</NuxtLink>
            <NuxtLink to="/ai-coach" class="nav-link">AI 教練</NuxtLink>
            <NuxtLink to="/about" class="nav-link">關於</NuxtLink>
          </nav>

          <!-- CTA -->
          <div class="flex items-center gap-3">
            <NuxtLink to="/early-access" class="hidden sm:inline-flex btn-whatsapp text-sm px-5 py-2.5 rounded-lg">
              🚀 優先登記
            </NuxtLink>
            <!-- Mobile menu button -->
            <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-400 hover:text-white p-2">
              <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileOpen" class="md:hidden border-t border-[#334155] py-4 space-y-1">
          <NuxtLink to="/features" class="mobile-nav-link" @click="mobileOpen = false">功能介紹</NuxtLink>
          <NuxtLink to="/pricing" class="mobile-nav-link" @click="mobileOpen = false">定價方案</NuxtLink>
          <NuxtLink to="/security" class="mobile-nav-link" @click="mobileOpen = false">資訊安全</NuxtLink>
          <NuxtLink to="/ai-coach" class="mobile-nav-link" @click="mobileOpen = false">AI 教練</NuxtLink>
          <NuxtLink to="/about" class="mobile-nav-link" @click="mobileOpen = false">關於我們</NuxtLink>
          <NuxtLink to="/early-access" class="mobile-nav-link font-bold text-green-400" @click="mobileOpen = false">🚀 優先登記</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <NuxtPage />

    <!-- Footer -->
    <footer class="bg-[#0D1117] border-t border-[#1E293B] pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <!-- Brand -->
          <div class="col-span-1">
            <div class="flex items-center gap-2 text-white font-black text-xl mb-4">
              <span class="text-2xl">🤖</span>
              <span class="gradient-text">PersonAI</span>
            </div>
            <p class="text-[#64748B] text-sm leading-relaxed mb-4">
              住喺你 WhatsApp 的<br>24 小時全能 AI 助手
            </p>
            <div class="flex gap-3">
              <a href="https://wa.me/85296456787?text=你好！我想了解 PersonAI" target="_blank" class="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">WhatsApp 查詢</a>
            </div>
          </div>

          <!-- Product -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">產品</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/features" class="footer-link">功能介紹</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="footer-link">定價方案</NuxtLink></li>
              <li><NuxtLink to="/security" class="footer-link">資訊安全</NuxtLink></li>
              <li><NuxtLink to="/ai-coach" class="footer-link">AI 教練</NuxtLink></li>
              <li><NuxtLink to="/early-access" class="footer-link text-green-400">優先登記</NuxtLink></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">公司</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/about" class="footer-link">關於我們</NuxtLink></li>
              <li><NuxtLink to="/faq" class="footer-link">常見問題</NuxtLink></li>
              <li><NuxtLink to="/contact" class="footer-link">聯絡我們</NuxtLink></li>
            </ul>
          </div>

          <!-- Legal & Contact -->
          <div>
            <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">聯絡及法律</h4>
            <ul class="space-y-3">
              <li class="text-[#64748B] text-sm flex items-center gap-2">📱 WhatsApp: +852 9645 6787</li>
              <li class="text-[#64748B] text-sm flex items-center gap-2">✉️ eric@hostlink.com.hk</li>
              <li><NuxtLink to="/privacy" class="footer-link">私隱聲明</NuxtLink></li>
              <li><NuxtLink to="/terms" class="footer-link">服務條款</NuxtLink></li>
              <li><NuxtLink to="/disclaimer" class="footer-link">免責聲明</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="divider mb-8"></div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[#475569] text-sm">
            © 2026 PersonAI · Hostlink (HK) Limited × Area2 (HK) Limited · 版權所有
          </p>
          <div class="flex flex-wrap gap-2 justify-center">
            <span class="trust-badge">🇭🇰 香港公司</span>
            <span class="trust-badge">🔒 PDPO 合規</span>
            <span class="trust-badge">🇯🇵 數據存日本</span>
            <span class="trust-badge">✅ ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/85296456787?text=你好！我想了解 PersonAI"
      target="_blank"
      class="wa-float"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="hidden sm:inline">WhatsApp 查詢</span>
    </a>
  </div>
</template>

<script setup>
const mobileOpen = ref(false)
</script>

<style scoped>
.nav-link {
  color: #94A3B8;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  color: #E2E8F0;
  background: rgba(51, 65, 85, 0.5);
}

.mobile-nav-link {
  display: block;
  color: #94A3B8;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  color: #E2E8F0;
  background: rgba(51, 65, 85, 0.5);
}

.footer-link {
  color: #64748B;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #E2E8F0;
}
</style>
