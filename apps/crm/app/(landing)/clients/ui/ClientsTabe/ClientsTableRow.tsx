'use client'

import type { Client } from '@sofiaflores/db'
import { Columns, ReactTable } from '@sofiaflores/ui'
import { TableCell, TableRow } from '@sofiaflores/ui/components/table'
import { useRouter } from 'next/navigation'
import type { JSX } from 'react'

type ClientsTableRowProps = {
  table: ReactTable.Table<Client>
}
export default function ClientsTableRow({
  table,
}: ClientsTableRowProps): JSX.Element {
  const router = useRouter()
  const rows = table.getRowModel().rows

  return (
    <>
      {rows.length > 0 ? (
        rows.map((row) => (
          <TableRow
            className='cursor-pointer'
            onClick={() => router.push(`clients/${row.original.id}`)}
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {ReactTable.flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext(),
                )}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={Columns.length} className='h-24 text-center'>
            Sem resultado
          </TableCell>
        </TableRow>
      )}
    </>
  )
}
