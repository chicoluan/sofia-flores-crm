'use client'

import { useDialog } from '@/hooks/store/use-dialog-store'
import { Plus } from '@sofiaflores/ui'
import { Button } from '@sofiaflores/ui/components/button'
import type { JSX } from 'react'

export default function FlowersHeader(): JSX.Element {
	const { onOpen } = useDialog()
	return (
		<div className='flex items-center justify-between'>
			<Button
				className='hover:cursor-pointer'
				onClick={() => onOpen('addFlower', {})}
			>
				<Plus />
				Adiciona Flor
			</Button>
		</div>
	)
}
