import type { JSX } from 'react'
import ClientsHeader from './ui/header'

export default function ClientsPages(): JSX.Element {
	return (
		<section className='flex flex-1 py-16 px-10 flex-col gap-16 overflow-hidden'>
			<ClientsHeader />
		</section>
	)
}
