import { Button } from "@/components/shared/Button"
import { Divider } from "@/components/shared/Divider"
import { Eye, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface HistoryActionsProps {
  simulationId: string
  onDelete: (id: string) => void
}

export function HistoryActions({
  simulationId,
  onDelete,
}: HistoryActionsProps) {
  const navigate = useNavigate()

  return (
    <>
      {/* Divider do Desktop */}
      <Divider
        orientation="vertical"
        className="hidden md:block"
      />

      {/* Divider do Mobile */}
      <Divider
        orientation="horizontal"
        className="md:hidden"
      />

      <div className="flex items-center justify-around gap-4 md:justify-end">

        <button
          type="button"
          onClick={() => onDelete(simulationId)}
          className="cursor-pointer text-red-500 transition-opacity hover:opacity-70"
        >
          <Trash2 size={25} />
        </button>

        {/* Divider apenas entre os botões no Mobile */}
        <Divider
          orientation="vertical"
          spacing={0}
          className="md:hidden"
        />

        <Button
          variant="secondary"
          icon={Eye}
          onClick={() => navigate(`/resultado/${simulationId}`)}
        >
          Ver detalhes
        </Button>

      </div>
    </>
  )
}