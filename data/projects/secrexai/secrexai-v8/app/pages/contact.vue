<template>
  <div class="contact-page">
    <header class="hero">
      <h1>聯絡我們</h1>
      <p>有任何問題，歡迎聯絡我哋</p>
    </header>

    <div class="contact-grid">
      <div class="contact-card">
        <span class="icon">💬</span>
        <h3>WhatsApp</h3>
        <p>+852 9645 6787</p>
        <a href="https://wa.me/85296456787" target="_blank">立即聯絡 →</a>
      </div>
      <div class="contact-card">
        <span class="icon">📧</span>
        <h3>電郵</h3>
        <p>eric@hostlink.com.hk</p>
        <a href="mailto:eric@hostlink.com.hk">發送電郵 →</a>
      </div>
    </div>

    <form class="contact-form" @submit.prevent="submit">
      <h2>或者填寫訊息</h2>
      <div class="form-group">
        <input v-model="form.name" type="text" placeholder="你的名稱" required>
        <input v-model="form.email" type="email" placeholder="電郵地址" required>
      </div>
      <input v-model="form.subject" type="text" placeholder="主題" required>
      <textarea v-model="form.message" placeholder="你想問咩？" rows="5" required></textarea>
      <button type="submit" class="btn-primary" :disabled="loading">
        {{ loading ? '發送中...' : '發送訊息' }}
      </button>
      <p v-if="submitted" class="success">✅ 收到！我哋會盡快回覆你</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)
const loading = ref(false)
const error = ref('')

const submit = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://form-api.area2hk-sub.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact',
        data: {
          name: form.name,
          email: form.email,
          company: form.subject,
          message: form.message
        }
      })
    })
    const json = await res.json()
    if (json.success) {
      submitted.value = true
      form.name = form.email = form.subject = form.message = ''
    } else {
      error.value = json.error || '提交失敗，請稍後再試'
    }
  } catch (e) {
    error.value = '網絡錯誤，請稍後再試'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.hero {
  text-align: center;
  margin-bottom: 3rem;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.contact-card .icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}
.contact-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.contact-card p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}
.contact-card a {
  color: var(--blue-bright);
  text-decoration: none;
  font-weight: 600;
}
.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
}
.contact-form h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
input, textarea {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  color: var(--text-primary);
  font-size: 1rem;
  margin-bottom: 1rem;
}
textarea {
  resize: vertical;
}
.btn-primary {
  background: var(--gradient-cta);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
}
.success {
  margin-top: 1rem;
  color: var(--green);
  text-align: center;
}
@media (max-width: 768px) {
  .contact-grid, .form-group {
    grid-template-columns: 1fr;
  }
}
</style>
