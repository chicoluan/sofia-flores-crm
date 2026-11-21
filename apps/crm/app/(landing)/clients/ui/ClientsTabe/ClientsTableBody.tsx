'use client'

import type { Client } from '@sofiaflores/db'
import type { ReactTable } from '@sofiaflores/ui'
import { TableBody } from '@sofiaflores/ui/components/table'
import type { JSX } from 'react'
import ClientsTableRow from './ClientsTableRow'

type ClientsTableBodyProps = {
  table: ReactTable.Table<Client>
}

export default function ClientsTableBody({
  table,
}: ClientsTableBodyProps): JSX.Element {
  return (
    <TableBody>
      <ClientsTableRow table={table} />
    </TableBody>
  )
}
