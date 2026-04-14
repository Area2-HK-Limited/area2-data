// Calendar API endpoint - parses iCal feeds
import { defineEventHandler, getQuery } from 'h3'
import ICAL from 'ical.js'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const icalUrl = query.url as string
  const days = parseInt(query.days as string) || 7

  if (!icalUrl) {
    // Return mock data if no URL provided
    return getMockEvents()
  }

  try {
    // Convert webcal:// to https://
    const fetchUrl = icalUrl.replace('webcal://', 'https://')
    
    const response = await $fetch<string>(fetchUrl, {
      headers: {
        'Accept': 'text/calendar'
      }
    })

    // Parse iCal data
    const jcalData = ICAL.parse(response)
    const comp = new ICAL.Component(jcalData)
    const vevents = comp.getAllSubcomponents('vevent')

    const now = new Date()
    const endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000)

    const events = vevents
      .map((vevent: any) => {
        const event = new ICAL.Event(vevent)
        return {
          id: event.uid,
          title: event.summary,
          description: event.description,
          location: event.location,
          start: event.startDate?.toJSDate()?.toISOString(),
          end: event.endDate?.toJSDate()?.toISOString(),
          allDay: event.startDate?.isDate || false
        }
      })
      .filter((e: any) => {
        if (!e.start) return false
        const eventDate = new Date(e.start)
        return eventDate >= now && eventDate <= endDate
      })
      .sort((a: any, b: any) => new Date(a.start).getTime() - new Date(b.start).getTime())

    return events
  } catch (error) {
    console.error('iCal parsing error:', error)
    return getMockEvents()
  }
})

function getMockEvents() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  
  return [
    {
      id: 'mock-1',
      title: '送沛晨返學',
      location: '深井',
      start: new Date(today.getTime() + 7.5 * 60 * 60 * 1000).toISOString(),
      end: new Date(today.getTime() + 8 * 60 * 60 * 1000).toISOString(),
      allDay: false
    },
    {
      id: 'mock-2',
      title: '工作會議',
      location: '旺角辦公室',
      start: new Date(today.getTime() + 10 * 60 * 60 * 1000).toISOString(),
      end: new Date(today.getTime() + 11 * 60 * 60 * 1000).toISOString(),
      allDay: false
    }
  ]
}
