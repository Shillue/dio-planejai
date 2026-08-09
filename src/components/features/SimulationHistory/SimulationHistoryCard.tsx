import type { SimulationRecord } from '@/data/simulation'
import { HistoryInfo } from './HistoryInfo'
import { HistoryActions } from './HistoryActions'

interface SimulationHistoryCardProps {
	simulation: SimulationRecord
	onDelete: (id: string) => void
}

export function SimulationHistoryCard({ simulation, onDelete }: SimulationHistoryCardProps) {

	return (
		 <div className="bg-card rounded-2xl border border-border p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">

      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        <HistoryInfo simulation={simulation} />

        <HistoryActions
          simulationId={simulation.id}
          onDelete={onDelete}
        />

      </div>

    </div>
	)
}
