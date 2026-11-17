import type { JSX } from 'react'
import FlowersHeader from './ui/FlowersHeader'

export default function StockFlowersPage(): JSX.Element {
	return (
		<section className='flex flex-1 py-16 px-10 flex-col gap-16 overflow-hidden'>
			<FlowersHeader />
		</section>
	)
}
