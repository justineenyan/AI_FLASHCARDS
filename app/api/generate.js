import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = '''You are a flashcard creator. You take in text and create exactly 10 flashcards from it. Both the front and back of each flashcard should be one sentence long. Return the flashcards in the following JSON format:
{
  "flashcards":[
    {
      "front": str,
      "back": str,
    },
  ]
}'''


export async function POST(req) {
  const openai = new OpenAI()
  const data = await req.text()

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data },
    ],
    model: 'gpt-4o',
    response_format: { type: 'json_object' },
  })

  
  const flashcards = JSON.parse(completion.choices[0].message.content)

  return NextResponse.json(flashcards.flashcards)
}