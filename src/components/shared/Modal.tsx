import type { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  title: string
  description: string
  children: ReactNode
}

export function Modal({
  isOpen,
  title,
  description,
  children,
}: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="bg-card w-full max-w-md rounded-2xl p-6 shadow-xl">

        <h2 className="text-xl font-semibold text-foreground">
          {title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          {children}
        </div>

      </div>

    </div>
  )
}