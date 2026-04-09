<template>
  <div class="container mx-auto px-4 py-8 max-w-7xl">
    <!-- Header -->
    <header class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-white flex items-center gap-3">
            <UIcon name="i-lucide-activity" class="w-8 h-8 text-sky-400" />
            Daily Pulse
          </h1>
          <p class="text-gray-400 mt-1">{{ greeting }}, {{ userName }} 👋</p>
        </div>
        <div class="text-right">
          <p class="text-2xl font-mono text-white">{{ currentTime }}</p>
          <p class="text-gray-400">{{ currentDate }}</p>
        </div>
      </div>
    </header>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column: Calendar & Weather -->
      <div class="lg:col-span-2 space-y-6">
        <!-- AI Briefing Card -->
        <UCard class="overflow-hidden">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-amber-400" />
              <span class="font-semibold">今日 Briefing</span>
              <UBadge color="sky" variant="soft" size="xs">AI Generated</UBadge>
            </div>
          </template>
          
          <div v-if="briefingLoading" class="space-y-3">
            <USkeleton class="h-4 w-full" />
            <USkeleton class="h-4 w-3/4" />
            <USkeleton class="h-4 w-5/6" />
          </div>
          <div v-else class="prose prose-invert prose-sm max-w-none">
            <p class="text-gray-300 leading-relaxed">{{ briefing }}</p>
          </div>
        </UCard>

        <!-- Calendar Events -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-calendar" class="w-5 h-5 text-sky-400" />
                <span class="font-semibold">今日活動</span>
              </div>
              <UBadge :color="events.length > 0 ? 'green' : 'gray'" variant="soft">
                {{ events.length }} 項
              </UBadge>
            </div>
          </template>

          <div v-if="eventsLoading" class="space-y-3">
            <USkeleton v-for="i in 3" :key="i" class="h-16 w-full" />
          </div>
          <div v-else-if="events.length === 0" class="text-center py-8">
            <UIcon name="i-lucide-calendar-check" class="w-12 h-12 text-gray-600 mx-auto mb-2" />
            <p class="text-gray-500">今日無安排，好好休息 💤</p>
          </div>
          <div v-else class="space-y-3">
            <div 
              v-for="event in events" 
              :key="event.id"
              class="flex items-start gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <div class="flex-shrink-0 w-16 text-center">
                <div class="text-sky-400 font-mono font-bold">{{ event.time }}</div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-white truncate">{{ event.title }}</p>
                <p v-if="event.location" class="text-sm text-gray-400 flex items-center gap-1">
                  <UIcon name="i-lucide-map-pin" class="w-3 h-3" />
                  {{ event.location }}
                </p>
              </div>
              <UBadge 
                :color="event.isImportant ? 'red' : 'gray'" 
                variant="soft"
                size="xs"
              >
                {{ event.category }}
              </UBadge>
            </div>
          </div>
        </UCard>

        <!-- Tomorrow Preview -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-calendar-days" class="w-5 h-5 text-purple-400" />
              <span class="font-semibold">聽日預告</span>
            </div>
          </template>
          
          <div v-if="tomorrowEvents.length === 0" class="text-gray-500 text-center py-4">
            聽日暫時無安排
          </div>
          <div v-else class="space-y-2">
            <div 
              v-for="event in tomorrowEvents" 
              :key="event.id"
              class="flex items-center gap-3 text-sm"
            >
              <span class="text-gray-400 font-mono w-12">{{ event.time }}</span>
              <span class="text-gray-300">{{ event.title }}</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Right Column: Weather & Market -->
      <div class="space-y-6">
        <!-- Weather Card -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-cloud-sun" class="w-5 h-5 text-amber-400" />
              <span class="font-semibold">天氣</span>
            </div>
          </template>

          <div v-if="weatherLoading" class="space-y-4">
            <USkeleton class="h-20 w-full" />
          </div>
          <div v-else class="space-y-4">
            <!-- Main Weather -->
            <div 
              v-for="loc in weather" 
              :key="loc.location"
              class="flex items-center justify-between p-3 rounded-lg bg-gray-800/50"
            >
              <div>
                <p class="text-sm text-gray-400">{{ loc.location }}</p>
                <p class="text-2xl font-bold text-white">{{ loc.temperature }}°C</p>
                <p class="text-sm text-gray-400">{{ loc.condition }}</p>
              </div>
              <div class="text-right">
                <UIcon :name="getWeatherIcon(loc.condition)" class="w-12 h-12 text-amber-400" />
                <p class="text-xs text-gray-500 mt-1">
                  💧 {{ loc.humidity }}% | ☂️ {{ loc.rainChance }}%
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Market Card -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-trending-up" class="w-5 h-5 text-green-400" />
              <span class="font-semibold">SPX 走勢</span>
            </div>
          </template>

          <div v-if="marketLoading" class="space-y-4">
            <USkeleton class="h-32 w-full" />
          </div>
          <div v-else class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-3xl font-bold text-white">{{ marketData.price }}</p>
                <p :class="marketData.changePercent >= 0 ? 'text-green-400' : 'text-red-400'" class="flex items-center gap-1">
                  <UIcon :name="marketData.changePercent >= 0 ? 'i-lucide-trending-up' : 'i-lucide-trending-down'" class="w-4 h-4" />
                  {{ marketData.changePercent >= 0 ? '+' : '' }}{{ marketData.changePercent.toFixed(2) }}%
                </p>
              </div>
              <div class="text-right text-sm text-gray-400">
                <p>Open: {{ marketData.open }}</p>
                <p>High: {{ marketData.high }}</p>
                <p>Low: {{ marketData.low }}</p>
              </div>
            </div>
            
            <!-- Mini Chart Placeholder -->
            <div class="h-24 bg-gray-800/50 rounded-lg flex items-center justify-center">
              <canvas ref="chartCanvas" class="w-full h-full"></canvas>
            </div>
            
            <p class="text-xs text-gray-500 text-center">
              最後更新: {{ marketData.lastUpdate }}
            </p>
          </div>
        </UCard>

        <!-- Quick Actions -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-zap" class="w-5 h-5 text-yellow-400" />
              <span class="font-semibold">快捷操作</span>
            </div>
          </template>

          <div class="grid grid-cols-2 gap-3">
            <UButton 
              color="gray" 
              variant="soft" 
              block
              @click="refreshAll"
            >
              <UIcon name="i-lucide-refresh-cw" class="w-4 h-4 mr-2" />
              刷新全部
            </UButton>
            <UButton 
              color="sky" 
              variant="soft" 
              block
              @click="generateBriefing"
            >
              <UIcon name="i-lucide-sparkles" class="w-4 h-4 mr-2" />
              AI 總結
            </UButton>
            <UButton 
              color="purple" 
              variant="soft" 
              block
              as="a"
              href="https://atm-d.hestocket.com/login"
              target="_blank"
            >
              <UIcon name="i-lucide-bar-chart-3" class="w-4 h-4 mr-2" />
              ATM Dashboard
            </UButton>
            <UButton 
              color="gray" 
              variant="soft" 
              block
              @click="showSettings = true"
            >
              <UIcon name="i-lucide-settings" class="w-4 h-4 mr-2" />
              設定
            </UButton>
          </div>
        </UCard>

        <!-- Important Dates -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-heart" class="w-5 h-5 text-red-400" />
              <span class="font-semibold">重要日子</span>
            </div>
          </template>

          <div class="space-y-2">
            <div 
              v-for="date in upcomingDates" 
              :key="date.event"
              class="flex items-center justify-between text-sm"
            >
              <span class="text-gray-300">{{ date.event }}</span>
              <UBadge :color="date.daysUntil <= 7 ? 'red' : 'gray'" variant="soft" size="xs">
                {{ date.daysUntil === 0 ? '今日!' : `${date.daysUntil} 日後` }}
              </UBadge>
            </div>
          </div>
        </UCard>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-center text-gray-500 text-sm">
      <p>Daily Pulse v1.0 • Built with 💙 by M01</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { zhHK } from 'date-fns/locale'
import { useUserProfile } from '~/utils/userProfile'

// State
const { user, loadProfile } = useUserProfile()
const showSettings = ref(false)
const chartCanvas = ref<HTMLCanvasElement | null>(null)

// Computed for display names to keep template clean
const userName = computed(() => user.value.name || 'User')

// Loading states
const briefingLoading = ref(true)
const eventsLoading = ref(true)
const weatherLoading = ref(true)
const marketLoading = ref(true)

// Data
const briefing = ref('正在生成今日 briefing...')
const events = ref<any[]>([])
const tomorrowEvents = ref<any[]>([])
const weather = ref<any[]>([])
const marketData = ref({
  price: '---',
  open: '---',
  high: '---',
  low: '---',
  changePercent: 0,
  lastUpdate: '---'
})
const upcomingDates = ref<any[]>([])

// Computed
const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 6) return '夜深了'
  if (hour < 12) return '早晨'
  if (hour < 14) return '午安'
  if (hour < 18) return '下午好'
  if (hour < 22) return '晚上好'
  return '夜深了'
})

const currentTime = ref('')
const currentDate = ref('')

// Update time every second
onMounted(async () => {
  // Load User Profile FIRST
  await loadProfile()

  const updateTime = () => {
    const now = new Date()
    currentTime.value = format(now, 'HH:mm:ss')
    currentDate.value = format(now, 'yyyy年M月d日 EEEE', { locale: zhHK })
  }
  updateTime()
  setInterval(updateTime, 1000)
  
  // Load data
  loadAllData()
  loadUpcomingDates()
})

// Mock data loaders (replace with real API calls)
async function loadAllData() {
  await Promise.all([
    loadBriefing(),
    loadEvents(),
    loadWeather(),
    loadMarketData()
  ])
}

async function loadBriefing() {
  briefingLoading.value = true
  // Simulate API call
  await new Promise(r => setTimeout(r, 1500))
  // Use dynamic name in briefing
  briefing.value = `早晨 ${user.value.name}！今日天氣較涼，記得著多件衫。你有 2 個會議，第一個係 10:00 同 Wheelock 開會。琴晚 SPX 收市升咗 0.34%，市況穩定。今日無特別家庭活動，可以專心工作。`
  briefingLoading.value = false
}

async function loadEvents() {
  eventsLoading.value = true
  await new Promise(r => setTimeout(r, 1000))
  // Use dynamic locations
  events.value = [
    { id: 1, time: '07:30', title: `送${user.value.family.daughter.name}返學`, location: user.value.locations.home, category: '家庭', isImportant: true },
    { id: 2, time: '10:00', title: 'Wheelock 項目會議', location: `${user.value.locations.work}辦公室`, category: '工作', isImportant: true },
    { id: 3, time: '14:00', title: 'Area2 Team Sync', location: 'Online', category: '工作', isImportant: false }
  ]
  tomorrowEvents.value = [
    { id: 1, time: '09:00', title: 'Hostlink 月會' },
    { id: 2, time: '19:00', title: '家庭晚餐' }
  ]
  eventsLoading.value = false
}

async function loadWeather() {
  weatherLoading.value = true
  await new Promise(r => setTimeout(r, 800))
  // Use dynamic locations for weather
  weather.value = [
    { location: user.value.locations.home, temperature: 24, condition: '多雲', humidity: 75, rainChance: 20 },
    { location: user.value.locations.work, temperature: 25, condition: '多雲', humidity: 72, rainChance: 15 }
  ]
  weatherLoading.value = false
}

async function loadMarketData() {
  marketLoading.value = true
  await new Promise(r => setTimeout(r, 1200))
  marketData.value = {
    price: '5,234.56',
    open: '5,220.00',
    high: '5,250.00',
    low: '5,210.00',
    changePercent: 0.34,
    lastUpdate: format(new Date(), 'HH:mm')
  }
  marketLoading.value = false
}

function loadUpcomingDates() {
  const today = new Date()
  
  // Convert config dates to Date objects
  // The format in config is "MM-DD"
  const importantDates = user.value.dates.map(d => {
    const [month, day] = d.date.split('-').map(Number)
    return {
        date: new Date(today.getFullYear(), month - 1, day),
        event: d.event
    }
  })
  
  upcomingDates.value = importantDates
    .map(d => ({
      ...d,
      daysUntil: Math.ceil((d.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    }))
    .filter(d => d.daysUntil >= 0 && d.daysUntil <= 30)
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, 5)
}

function getWeatherIcon(condition: string) {

  const icons: Record<string, string> = {
    '晴天': 'i-lucide-sun',
    '多雲': 'i-lucide-cloud-sun',
    '陰天': 'i-lucide-cloud',
    '雨': 'i-lucide-cloud-rain',
    '雷暴': 'i-lucide-cloud-lightning'
  }
  return icons[condition] || 'i-lucide-cloud-sun'
}

function refreshAll() {
  loadAllData()
}

function generateBriefing() {
  loadBriefing()
}
</script>
