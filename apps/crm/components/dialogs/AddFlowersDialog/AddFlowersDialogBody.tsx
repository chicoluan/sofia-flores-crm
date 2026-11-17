import type { JSX } from 'react'

export default function AddFlowersDialogBody(): JSX.Element {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-3'>
				<h3 className='text-sm font-medium'>Informações Florais</h3>

				<div className='grid grid-cols-2 gap-3'></div>
			</div>
		</div>
	)
}
