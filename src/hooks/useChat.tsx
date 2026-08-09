import type { InsightData } from "@/services/aiService"
import { useSimulationStorage } from "./useSimulationStorage"
import { useState } from "react"
import type { ChatMessage } from "@/data/chat"
import { getChatResponse } from "@/services/aiChatService"

interface UseChatProps {
  simulationId: string
  insight: InsightData
}

export function useChat({
  simulationId,
  insight,
}: UseChatProps) {
  const {
    getFormData,
    updateSimulation,
  } = useSimulationStorage()

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const simulation = getFormData(simulationId)
    return simulation?.messages ?? []
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function sendMessage(text: string) {
    const simulation = getFormData(simulationId)

    if (!simulation) {
      return
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      createdAt: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    const updatedMessages = [
      ...messages,
      userMessage,
    ]

    setMessages(updatedMessages)

    updateSimulation(simulationId, {
      ...simulation,
      messages: updatedMessages,
    })

    setIsLoading(true)
    setError(null)

    try {
      const response = await getChatResponse({
        insight,
        question: text,
				history: updatedMessages,
      })

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        createdAt: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }

      const finalMessages = [
        ...updatedMessages,
        assistantMessage,
      ]

      setMessages(finalMessages)

      updateSimulation(simulationId, {
        ...simulation,
        messages: finalMessages,
      })
    } catch {
      setError('Erro ao conversar com a IA.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  }
}