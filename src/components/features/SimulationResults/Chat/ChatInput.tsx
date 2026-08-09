import { Button } from "@/components/shared/Button"
import { Input } from "@/components/shared/Input"
import { SendHorizontal } from "lucide-react"
import { useState } from "react"

interface ChatInputProps {
  isLoading: boolean
  onSend: (message: string) => void
}

export function ChatInput({
  isLoading,
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState('')

  function handleSubmit() {
    const value = message.trim()

    if (!value) {
      return
    }

    onSend(value)
    setMessage('')
  }

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex-1">
        <Input
          placeholder="Quais são os investimentos mais seguros que posso usar para que minha renda aumente?"
          value={message}
          disabled={isLoading}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit()
            }
          }}
        />
      </div>

      <Button
        variant="primary"
        disabled={isLoading}
        className="h-14 w-14 rounded-2xl p-0"
        onClick={handleSubmit}
      >
        <SendHorizontal size={22} />
      </Button>
    </div>
  )
}