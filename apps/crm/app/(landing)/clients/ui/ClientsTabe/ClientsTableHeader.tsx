'use client'

import { ReactTable } from '@sofiaflores/ui'
import {
  TableHead,
  TableHeader,
  TableRow,
} from '@sofiaflores/ui/components/table'
import type { JSX } from 'react'

type ClientsTableHeaderProps<TData> = {
  table: ReactTable.Table<TData>
}

export default function ClientsTableHeader<TData>({
  table,
}: ClientsTableHeaderProps<TData>): JSX.Element {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : ReactTable.flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}
