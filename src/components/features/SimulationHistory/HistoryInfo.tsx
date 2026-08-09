import type { SimulationRecord } from "@/data/simulation"
import { calcMonthlySavings } from "@/utils/simulation"
import { Goal } from "lucide-react"

interface HistoryInfoProps {
  simulation: SimulationRecord
}

export function HistoryInfo({ simulation }: HistoryInfoProps) {
  const monthlySavings = calcMonthlySavings(simulation)

  return (
    <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center md:justify-between">

      {/* Meta */}
      <div className="flex items-center gap-4 md:min-w-64">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted-primary ">
          <Goal
            size={22}
            className="text-primary"
          />
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            {simulation.goalName}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {simulation.createdAt}
          </p>
        </div>

      </div>

      {/* Custo */}
      <div className="space-y-1">

        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Custo da meta
        </p>

        <p className="font-semibold text-foreground">
          {simulation.goalAmount}
        </p>

      </div>

      {/* Prazo */}
      <div className="space-y-1">

        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Prazo
        </p>

        <p className="font-semibold text-foreground">
          {simulation.goalDeadline} meses
        </p>

      </div>

      {/* Economia */}
      <div className="space-y-1">

        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Economia mensal
        </p>

        <p className="font-semibold text-foreground">
          R${' '}
          {monthlySavings.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

      </div>

    </div>
  )
}