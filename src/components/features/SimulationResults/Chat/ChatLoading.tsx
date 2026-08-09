import { Divider } from '@/components/shared/Divider'
import { Bot } from 'lucide-react'

export function ChatLoading() {
  return (
    <>
      <Divider className="my-4" />
      <div>
        <div className="mb-3 flex items-center gap-2">

          <Bot
            size={18}
            className="text-primary"
          />

          <span className="text-muted-foreground text-sm font-semibold">
            Resposta da IA
          </span>

        </div>

        <p className="text-muted-foreground animate-pulse text-sm">
          Pensando...
        </p>

      </div>
    </>
  )
}