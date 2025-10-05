import OpenAI from 'openai'

const handleImagePromptRequest = async ({ content }: { content: string }): Promise<string> => {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OpenAI API key is not configured')
  const client = new OpenAI({ apiKey })
  const response = await client.chat.completions.create({
    model: 'gpt-5',
    messages: [
      {
        role: 'system',
        content:
          process.env.GENERATE_IMAGE_INSTRUCTIONS ||
          'Generate an OpenGraph preview image prompt for DALLE 3 based on the provided content.',
      },
      {
        role: 'user',
        content,
      },
    ],
  })

  const result = response.choices[0]?.message.content
  if (!result) {
    throw new Error('No prompt generated from content')
  }
  return result
}
export default handleImagePromptRequest
