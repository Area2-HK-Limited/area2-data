// Calendar API composable
import { parseISO, format, isToday, isTomorrow, addDays } from 'date-fns'
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'

interface CalendarEvent {
  id: string
  title: string
  description?: string
  location?: string
  start: Date
  end?: Date
  allDay: boolean
  category?: string
  isImportant?: boolean
}

export function useCalendar() {
  const config = useRuntimeConfig()
  const events = ref<CalendarEvent[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const timezone = 'Asia/Hong_Kong'

  async function fetchEvents(icalUrl?: string): Promise<CalendarEvent[]> {
    loading.value = true
    error.value = null

    try {
      // In production, this would fetch from a server endpoint
      // that parses the iCal feed
      const response = await $fetch<any[]>('/api/calendar/events', {
        query: {
          url: icalUrl,
          days: 7
        }
      })

      events.value = response.map(e => ({
        ...e,
        start: parseISO(e.start),
        end: e.end ? parseISO(e.end) : undefined
      }))

      return events.value
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch calendar events:', e)
      return []
    } finally {
      loading.value = false
    }
  }

  const todayEvents = computed(() => 
    events.value
      .filter(e => isToday(e.start))
      .sort((a, b) => a.start.getTime() - b.start.getTime())
  )

  const tomorrowEvents = computed(() => 
    events.value
      .filter(e => isTomorrow(e.start))
      .sort((a, b) => a.start.getTime() - b.start.getTime())
  )

  const upcomingEvents = computed(() => {
    const now = new Date()
    const weekFromNow = addDays(now, 7)
    return events.value
      .filter(e => e.start >= now && e.start <= weekFromNow)
      .sort((a, b) => a.start.getTime() - b.start.getTime())
  })

  function formatEventTime(event: CalendarEvent): string {
    if (event.allDay) return '全日'
    return format(event.start, 'HH:mm')
  }

  function categorizeEvent(title: string): { category: string; isImportant: boolean } {
    const lowerTitle = title.toLowerCase()
    
    // Family events
    if (lowerTitle.includes('沛晨') || lowerTitle.includes('包包') || 
        lowerTitle.includes('家') || lowerTitle.includes('女兒')) {
      return { category: '家庭', isImportant: true }
    }
    
    // Work events
    if (lowerTitle.includes('會議') || lowerTitle.includes('meeting') || 
        lowerTitle.includes('sync') || lowerTitle.includes('客戶')) {
      return { category: '工作', isImportant: true }
    }

    return { category: '其他', isImportant: false }
  }

  return {
    events,
    loading,
    error,
    fetchEvents,
    todayEvents,
    tomorrowEvents,
    upcomingEvents,
    formatEventTime,
    categorizeEvent
  }
}
