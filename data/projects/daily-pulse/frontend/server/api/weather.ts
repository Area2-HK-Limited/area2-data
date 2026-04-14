// Weather API endpoint - fetches from HK Observatory
import { defineEventHandler, getQuery } from 'h3'

interface HKOWeatherData {
  temperature: number
  humidity: number
  uvIndex?: number
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locations = ((query.locations as string) || '荃灣,旺角').split(',')

  try {
    // Fetch from HK Observatory API
    const hkoResponse = await $fetch<any>('https://data.weather.gov.hk/weatherAPI/opendata/weather.php', {
      query: {
        dataType: 'rhrread',
        lang: 'tc'
      }
    })

    // Get 9-day forecast for rain chance
    const forecastResponse = await $fetch<any>('https://data.weather.gov.hk/weatherAPI/opendata/weather.php', {
      query: {
        dataType: 'fnd',
        lang: 'tc'
      }
    })

    // Map location data
    const weatherData = locations.map(location => {
      // Find temperature data for location
      const tempData = hkoResponse.temperature?.data?.find((d: any) => 
        d.place?.includes(location) || location.includes(d.place)
      )
      
      // Get general forecast icon/condition
      const todayForecast = forecastResponse.weatherForecast?.[0]
      
      return {
        location,
        temperature: tempData?.value || hkoResponse.temperature?.data?.[0]?.value || 25,
        condition: getConditionFromIcon(hkoResponse.icon?.[0]),
        humidity: hkoResponse.humidity?.data?.[0]?.value || 70,
        rainChance: todayForecast?.PSR ? parseInt(todayForecast.PSR) : 30,
        uvIndex: hkoResponse.uvindex?.data?.[0]?.value
      }
    })

    return weatherData
  } catch (error) {
    console.error('HKO API error:', error)
    
    // Return fallback data
    return locations.map(location => ({
      location,
      temperature: 25,
      condition: '多雲',
      humidity: 70,
      rainChance: 30,
      uvIndex: 5
    }))
  }
})

function getConditionFromIcon(iconCode?: number): string {
  if (!iconCode) return '多雲'
  
  const iconMap: Record<number, string> = {
    50: '晴天',
    51: '晴天',
    52: '多雲',
    53: '多雲',
    54: '多雲',
    60: '密雲',
    61: '密雲',
    62: '有雨',
    63: '有雨',
    64: '驟雨',
    65: '雷暴',
    70: '晴天',
    71: '晴天',
    72: '多雲',
    73: '多雲',
    74: '多雲',
    75: '多雲',
    76: '多雲',
    77: '多雲',
    80: '大風',
    81: '乾燥',
    82: '潮濕',
    83: '霧',
    84: '霧',
    85: '霧',
    90: '炎熱',
    91: '炎熱',
    92: '寒冷',
    93: '寒冷'
  }
  
  return iconMap[iconCode] || '多雲'
}
