// Weather API composable
interface WeatherData {
  location: string
  temperature: number
  temperatureHigh?: number
  temperatureLow?: number
  condition: string
  humidity: number
  rainChance: number
  uvIndex?: number
  icon: string
}

export function useWeather() {
  const weather = ref<WeatherData[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchWeather(locations: string[] = ['荃灣', '旺角']): Promise<WeatherData[]> {
    loading.value = true
    error.value = null

    try {
      // Fetch from HK Observatory or Open-Meteo API
      const response = await $fetch<WeatherData[]>('/api/weather', {
        query: { locations: locations.join(',') }
      })

      weather.value = response
      return weather.value
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch weather:', e)
      
      // Return fallback data
      weather.value = locations.map(loc => ({
        location: loc,
        temperature: 25,
        condition: '多雲',
        humidity: 70,
        rainChance: 30,
        icon: 'cloud-sun'
      }))
      return weather.value
    } finally {
      loading.value = false
    }
  }

  function getWeatherIcon(condition: string): string {
    const iconMap: Record<string, string> = {
      '晴天': 'i-lucide-sun',
      '晴朗': 'i-lucide-sun',
      '多雲': 'i-lucide-cloud-sun',
      '密雲': 'i-lucide-cloud',
      '陰天': 'i-lucide-cloud',
      '有雨': 'i-lucide-cloud-rain',
      '驟雨': 'i-lucide-cloud-drizzle',
      '雷暴': 'i-lucide-cloud-lightning',
      '大雨': 'i-lucide-cloud-rain-wind',
      '霧': 'i-lucide-cloud-fog'
    }
    return iconMap[condition] || 'i-lucide-cloud-sun'
  }

  function getWeatherEmoji(condition: string): string {
    const emojiMap: Record<string, string> = {
      '晴天': '☀️',
      '晴朗': '☀️',
      '多雲': '⛅',
      '密雲': '☁️',
      '陰天': '☁️',
      '有雨': '🌧️',
      '驟雨': '🌦️',
      '雷暴': '⛈️',
      '大雨': '🌧️',
      '霧': '🌫️'
    }
    return emojiMap[condition] || '⛅'
  }

  function shouldBringUmbrella(): boolean {
    return weather.value.some(w => w.rainChance > 40)
  }

  return {
    weather,
    loading,
    error,
    fetchWeather,
    getWeatherIcon,
    getWeatherEmoji,
    shouldBringUmbrella
  }
}
