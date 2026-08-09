import { Divider } from "@/components/shared/Divider"
import type { ChatMessage as Message } from "@/data/chat"
import { Bot, User } from "lucide-react"
interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <>
      <Divider orientation="horizontal" className="my-4" />

      <div>

        <div className="mb-3 flex items-center gap-2">

          {isUser ? (
            <>
              <User
                size={18}
                className="text-primary"
              />

              <span className="text-muted-foreground text-sm font-semibold">
                Você
              </span>
            </>
          ) : (
            <>
              <Bot
                size={18}
                className="text-primary"
              />

              <span className="text-muted-foreground text-sm font-semibold">
                Resposta da IA
              </span>
            </>
          )}

        </div>

        <p
          className={[
            "whitespace-pre-wrap text-sm leading-7",
            isUser
              ? "text-muted-foreground"
              : "text-foreground",
          ].join(" ")}
        >
          {message.content}
        </p>

      </div>
    </>
  )
}