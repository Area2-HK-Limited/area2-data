// AI Briefing generation endpoint
import { defineEventHandler, readBody } from 'h3'

interface BriefingContext {
  userName: string
  events: any[]
  weather: any[]
  market: any
  importantDates: any[]
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<BriefingContext>(event)

  const { userName, events, weather, market, importantDates } = body

  // Build prompt context
  const prompt = buildBriefingPrompt(body)

  try {
    // Call GLM API (ZAI)
    const response = await $fetch<any>('https://api.zai.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.zaiApiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        model: 'glm-4.7',
        messages: [
          {
            role: 'system',
            content: `你係一個友善嘅 AI 助理，幫香港用戶準備每日 briefing。用廣東話回覆，保持簡潔同實用。唔好用敬語，用「你」稱呼用戶。`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      }
    })

    return {
      content: response.choices?.[0]?.message?.content || generateFallbackBriefing(body),
      generatedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error('GLM API error:', error)
    return {
      content: generateFallbackBriefing(body),
      generatedAt: new Date().toISOString()
    }
  }
})

function buildBriefingPrompt(context: BriefingContext): string {
  const { userName, events, weather, market, importantDates } = context
  
  let prompt = `幫 ${userName} 準備今日嘅 morning briefing。\n\n`
  
  // Weather info
  if (weather?.length > 0) {
    prompt += '天氣:\n'
    weather.forEach(w => {
      prompt += `- ${w.location}: ${w.temperature}°C, ${w.condition}, 濕度 ${w.humidity}%, 落雨機會 ${w.rainChance}%\n`
    })
    prompt += '\n'
  }

  // Calendar events
  if (events?.length > 0) {
    prompt += '今日活動:\n'
    events.forEach(e => {
      prompt += `- ${e.time}: ${e.title}`
      if (e.location) prompt += ` (${e.location})`
      prompt += '\n'
    })
    prompt += '\n'
  } else {
    prompt += '今日無特別安排。\n\n'
  }

  // Market data
  if (market) {
    prompt += `SPX 股市: ${market.price}, ${market.changePercent >= 0 ? '升' : '跌'}咗 ${Math.abs(market.changePercent).toFixed(2)}%\n\n`
  }

  // Upcoming important dates
  if (importantDates?.length > 0) {
    const soon = importantDates.filter(d => d.daysUntil <= 7)
    if (soon.length > 0) {
      prompt += '快到嘅重要日子:\n'
      soon.forEach(d => {
        prompt += `- ${d.event} (${d.daysUntil === 0 ? '今日!' : d.daysUntil + ' 日後'})\n`
      })
      prompt += '\n'
    }
  }

  prompt += '用 2-3 句輕鬆嘅語氣總結今日，提供有用嘅建議。如果落雨機會高，提醒帶遮；如果有重要活動，提醒留意時間。'

  return prompt
}

function generateFallbackBriefing(context: BriefingContext): string {
  const { userName, events, weather } = context
  
  let briefing = `早晨 ${userName}！`
  
  if (weather?.[0]) {
    briefing += `今日${weather[0].location}大約 ${weather[0].temperature}°C，${weather[0].condition}。`
    if (weather[0].rainChance > 40) {
      briefing += '記得帶遮出門。'
    }
  }
  
  if (events?.length > 0) {
    briefing += `你今日有 ${events.length} 個活動，第一個係 ${events[0].time} 嘅「${events[0].title}」。`
  } else {
    briefing += '今日無特別安排，可以輕鬆啲。'
  }

  return briefing
}
