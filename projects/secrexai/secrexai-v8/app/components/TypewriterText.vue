<template>
  <span class="typewriter-text">
    <span class="typewriter-prefix gradient-text" v-if="prefix">{{ prefix }}</span><span class="typewriter-word gradient-text">{{ displayText }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  words: {
    type: Array,
    default: () => [],
  },
  prefix: {
    type: String,
    default: '',
  },
  typeSpeed: {
    type: Number,
    default: 72,
  },
  deleteSpeed: {
    type: Number,
    default: 42,
  },
  pauseMs: {
    type: Number,
    default: 2000,
  },
})

const displayText = ref('')
let wordIndex = 0
let charIndex = 0
let timeout = null

const sleep = (ms) => new Promise((r) => { timeout = setTimeout(r, ms) })

const typeLoop = async () => {
  while (true) {
    const word = props.words[wordIndex % props.words.length]
    // type
    while (charIndex < word.length) {
      displayText.value = word.slice(0, ++charIndex)
      await sleep(props.typeSpeed)
    }
    // pause at full word
    await sleep(props.pauseMs)
    // delete
    while (charIndex > 0) {
      displayText.value = word.slice(0, --charIndex)
      await sleep(props.deleteSpeed)
    }
    await sleep(300)
    wordIndex++
  }
}

onMounted(() => { typeLoop() })
onUnmounted(() => { if (timeout) clearTimeout(timeout) })
</script>

<style scoped>
.typewriter-text {
  display: inline;
}
.typewriter-word {
  display: inline-block;
  background: linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-right: 2px solid rgba(96,165,250,0.8);
  padding-right: 2px;
  animation: typewriterCursor 0.85s step-end infinite;
}
.typewriter-prefix {
  display: inline-block;
  background: linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes typewriterCursor {
  0%, 100% { border-color: rgba(96,165,250,0.8); }
  50% { border-color: transparent; }
}
</style>
