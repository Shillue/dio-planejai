import { SimulationHistoryCard } from '@/components/features/SimulationHistory/SimulationHistoryCard'
import { Button } from '@/components/shared/Button'
import { Modal } from '@/components/shared/Modal'
import { PageHero } from '@/components/shared/PageHero'
import type { SimulationRecord } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { Trash2 } from 'lucide-react'
import {useState } from 'react'

export function SimulationHistoryPage() {
	const { getAllSimulations, deleteSimulation } = useSimulationStorage()

	const [simulations, setSimulations] = useState<SimulationRecord[]>(
		() => getAllSimulations(),
	)

	const [selectedId, setSelectedId] = useState<string | null>(null)

	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOpenDeleteModal = (id: string) => {
		setSelectedId(id)
		setIsModalOpen(true)
	}

	const handleConfirmDelete = () => {
		if (!selectedId) {
			return
		}

		deleteSimulation(selectedId)
		setSimulations(getAllSimulations())
		setSelectedId(null)
		setIsModalOpen(false)
	}

	const handleCloseModal = () => {
		setSelectedId(null)
		setIsModalOpen(false)
	}

	return (
		<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<PageHero
				title="Histórico de Simulações"
				subtitle="Veja todas as simulações realizadas."
			/>

			{simulations.length === 0 ? (
				<p className="mt-10 text-center text-gray-500">
					Nenhuma simulação encontrada.
				</p>
			) : (
				<div className="mt-8 space-y-4">
					{simulations.map((simulation) => (
						<SimulationHistoryCard
							key={simulation.id}
							simulation={simulation}
							onDelete={handleOpenDeleteModal}
						/>
					))}
				</div>
			)}

			<Modal
				isOpen={isModalOpen}
				title="Excluir simulação"
				description="Tem certeza que deseja excluir esta simulação? Essa ação não poderá ser desfeita."
			>
				<Button
					variant="ghost"
					onClick={handleCloseModal}
				>
					Cancelar
				</Button>

				<Button
					variant="primary"
					icon={Trash2}
					onClick={handleConfirmDelete}
				>
					Excluir
				</Button>
			</Modal>
		</main>
	)
}