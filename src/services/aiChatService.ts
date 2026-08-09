import type { ChatMessage } from '@/data/chat'
import type { InsightData } from './aiService'

interface GeminiResponse {
	candidates: {
		content: {
			parts: {
				text: string
			}[]
		}
	}[]
}

const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY)

const MODEL_NAME = 'gemini-flash-latest'

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

async function callGemini(prompt: string) {
	const response = await fetch(GEMINI_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			contents: [
				{
					parts: [
						{
							text: prompt,
						},
					],
				},
			],
		}),
	})

	if (!response.ok) {
		throw new Error('Erro ao consultar o Gemini.')
	}

	return (await response.json()) as GeminiResponse
}

interface GetChatResponseParams {
	insight: InsightData
	question: string
	history: ChatMessage[]
}

export async function getChatResponse({ insight, question, history }: GetChatResponseParams) {
	const conversation = history
		.map((message) => {
			const author = message.role === 'user' ? 'Usuário' : 'Educador Financeiro'

			return `${author}: ${message.content}`
		})
		.join('\n')

	const prompt = `
	Você é um educador financeiro.

O usuário já recebeu o seguinte diagnóstico financeiro:

${JSON.stringify(insight, null, 2)}

Abaixo está todo o histórico da conversa:

${conversation}

O usuário acabou de enviar uma nova pergunta.

Regras importantes:

- Continue a conversa considerando todo o histórico.
- Utilize o diagnóstico como contexto.
- Não repita respostas já dadas.
- Seja objetivo.
- Responda em até um parágrafo.
- Limite a resposta a aproximadamente 120 palavras.
- Não utilize Markdown.
- Não utilize negrito.
- Não utilize títulos.
- Não utilize listas.
- Não utilize emojis.
- Escreva somente texto simples.

Pergunta:

${question}
`

	const response = await callGemini(prompt)

	return response.candidates[0].content.parts[0].text
}
