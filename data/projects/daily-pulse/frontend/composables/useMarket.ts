// Market Data API composable (SPX)
import { format, subDays } from 'date-fns'

interface MarketQuote {
  symbol: string
  price: number
  open: number
  high: number
  low: number
  close: number
  volume: number
  change: number
  changePercent: number
  timestamp: Date
}

interface HistoricalData {
  timestamp: Date
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export function useMarket() {
  const config = useRuntimeConfig()
  const quote = ref<MarketQuote | null>(null)
  const history = ref<HistoricalData[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchQuote(symbol: string = '^SPX'): Promise<MarketQuote | null> {
    loading.value = true
    error.value = null

    try {
      const endDate = format(new Date(), 'yyyy-MM-dd')
      const startDate = format(subDays(new Date(), 5), 'yyyy-MM-dd')
      
      const response = await $fetch<any>(`${config.public.yfinanceApi}`, {
        query: {
          symbol,
          start_date: startDate,
          end_date: endDate,
          interval: '1d',
          api_key: config.public.yfinanceKey
        }
      })

      if (response && response.data && response.data.length > 0) {
        const latest = response.data[response.data.length - 1]
        const previous = response.data[response.data.length - 2] || latest

        quote.value = {
          symbol,
          price: latest.close,
          open: latest.open,
          high: latest.high,
          low: latest.low,
          close: latest.close,
          volume: latest.volume || 0,
          change: latest.close - previous.close,
          changePercent: ((latest.close - previous.close) / previous.close) * 100,
          timestamp: new Date(latest.timestamp || latest.date)
        }
      }

      return quote.value
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch market data:', e)
      return null
    } finally {
      loading.value = false
    }
  }

  async function fetchHistory(
    symbol: string = '^SPX',
    days: number = 30,
    interval: string = '1d'
  ): Promise<HistoricalData[]> {
    loading.value = true
    error.value = null

    try {
      const endDate = format(new Date(), 'yyyy-MM-dd')
      const startDate = format(subDays(new Date(), days), 'yyyy-MM-dd')

      const response = await $fetch<any>(`${config.public.yfinanceApi}`, {
        query: {
          symbol,
          start_date: startDate,
          end_date: endDate,
          interval,
          api_key: config.public.yfinanceKey
        }
      })

      if (response && response.data) {
        history.value = response.data.map((d: any) => ({
          timestamp: new Date(d.timestamp || d.date),
          open: d.open,
          high: d.high,
          low: d.low,
          close: d.close,
          volume: d.volume || 0
        }))
      }

      return history.value
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch market history:', e)
      return []
    } finally {
      loading.value = false
    }
  }

  function formatPrice(price: number): string {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  function formatChange(change: number, percent: number): string {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)} (${sign}${percent.toFixed(2)}%)`
  }

  const isMarketOpen = computed(() => {
    const now = new Date()
    const hours = now.getHours()
    // US market hours in HKT: 21:30 - 04:00 (regular), 22:30 - 05:00 (DST)
    return hours >= 22 || hours < 5
  })

  return {
    quote,
    history,
    loading,
    error,
    fetchQuote,
    fetchHistory,
    formatPrice,
    formatChange,
    isMarketOpen
  }
}
