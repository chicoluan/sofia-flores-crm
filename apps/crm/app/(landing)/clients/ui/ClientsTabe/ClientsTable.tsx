'use client'

import { Table } from '@sofiaflores/ui/components/table'
import { useState, type JSX } from 'react'
import ClientsTableHeader from './ClientsTableHeader'
import { ReactTable } from '@sofiaflores/ui'
import type { Client } from '@sofiaflores/db'
import ClientsTableBody from './ClientsTableBody'

type ClientsTableProps = {
  columns: ReactTable.ColumnDef<Client>[]
  data: Client[]
  pageSize?: number
}

export default function ClientsTable({
  columns,
  data,
  pageSize = 12,
}: ClientsTableProps): JSX.Element {
  const [sorting, setSorting] = useState<ReactTable.SortingState>([])
  const [columnFilters, setColumnFilters] =
    useState<ReactTable.ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  const table = ReactTable.useReactTable({
    data,
    columns,
    getCoreRowModel: ReactTable.getCoreRowModel(),
    getPaginationRowModel: ReactTable.getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: ReactTable.getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: ReactTable.getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })
  return (
    <Table>
      <ClientsTableHeader table={table} />
      <ClientsTableBody table={table} />
    </Table>
  )
}
