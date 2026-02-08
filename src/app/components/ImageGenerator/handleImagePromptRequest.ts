import OpenAI from 'openai'

const handleImagePromptRequest = async ({ content }: { content: string }): Promise<string> => {
	const apiKey = process.env.OPENAI_API_KEY
	if (!apiKey) throw new Error('OpenAI API key is not configured')
	const client = new OpenAI({ apiKey })

	const response = await client.responses.create({
		model: 'gpt-5',
		text: {
			verbosity: 'medium',
		},
		reasoning: {
			effort: 'high',
		},
		instructions:
			process.env.GENERATE_IMAGE_INSTRUCTIONS ||
			'Generate an OpenGraph preview image prompt for DALLE 3 based on the provided content.',
		input: content,
	})

	const result = response.output_text
	if (!result) {
		throw new Error('No prompt generated from content')
	}
	return result
}
export default handleImagePromptRequest
