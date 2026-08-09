import type { ChatMessage } from "@/data/chat"
import { useEffect, useRef } from "react"
import { ChatMessage as Message } from "./ChatMessage"

interface ChatConversationProps {
  messages: ChatMessage[]
}

export function ChatConversation({ messages }: ChatConversationProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  if (messages.length === 0) {
    return null
  }

  return (
    <div className="mt-5 max-h-105 overflow-y-auto pr-2">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  )
}