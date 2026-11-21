'use client'

import type { Client } from '@sofiaflores/db'
import { ArrowUpDown, type ReactTable } from '@sofiaflores/ui'
import { Button } from '@sofiaflores/ui/components/button'
import { Checkbox } from '@sofiaflores/ui/components/checkbox'
import ClientsTableDropdownActions from './ClientsTableDropdownActions'

export const ClientColumns: ReactTable.ColumnDef<Client>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Selecionar Todos'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Selecionar item'
      />
    ),
  },
  {
    accessorKey: 'name',
    id: 'name',
    header: ({ column }) => {
      return (
        <div className='flex items-center'>
          Nome
          <Button
            variant='ghost'
            size='icon'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <ArrowUpDown className='h-4 w-4' />
          </Button>
        </div>
      )
    },
    cell: ({ cell }) => (
      <p className='line-clamp-1 flex flex-1 items-center truncate'>
        {cell.row.original.firstname}
      </p>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <ClientsTableDropdownActions clientId={row.original.id} />
    ),
  },
]
