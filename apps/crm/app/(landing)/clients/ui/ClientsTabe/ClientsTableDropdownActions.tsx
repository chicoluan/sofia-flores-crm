'use client'

import { Edit, MoreHorizontal } from '@sofiaflores/ui'
import { Button } from '@sofiaflores/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@sofiaflores/ui/components/dropdown-menu'
import { useRouter } from 'next/navigation'
import type { JSX } from 'react'

type ClientsTableDropdownActionsProps = {
  clientId: string
}

export default function ClientsTableDropdownActions({
  clientId,
}: ClientsTableDropdownActionsProps): JSX.Element {
  const router = useRouter()

  const handleEditClient = () => {
    router.push(`clients/${clientId}`)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={handleEditClient}
          className='flex cursor-pointer items-center justify-between'
        >
          Editar <Edit />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
