import { openai } from '@/lib/openai'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const topic = searchParams.get('topic')

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Using pptxgenjs write code to make a PowerPoint about ${topic}`
      }
    ]
  })
  console.log(completion)
  return NextResponse.json({ pp: 'hi' })
}
