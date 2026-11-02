import type { JSX } from 'react'

export default function DashboardPage(): JSX.Element {
	return (
		<div className='flex flex-1 flex-col gap-16 overflow-hidden'>
			<div className='flex items-center justify-between'>
				<h1 className='font-semibold text-3xl'>Dashboard</h1>
			</div>
		</div>
	)
}
