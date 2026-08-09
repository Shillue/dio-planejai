import { SimulationForm } from '@/components/features/Simulation/Form'
import { SimulationHero } from '@/components/features/Simulation/Hero'


export function SimulationFormPage() {
	return (
		<main className="px-4 mx-auto max-w-xl py-10 sm:py-14">
			<SimulationHero />
			<SimulationForm />
		</main>
	)
}
