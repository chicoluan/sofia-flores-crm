import type { JSX } from 'react'
import ClientsHeader from './ui/ClientsHeader'
import ClientsTable from './ui/ClientsTabe/ClientsTable'
import { ClientColumns } from './ui/ClientsTabe/ClientsColumns'
import fetchAllClients from '@/lib/dal/clients'

export default async function ClientsPages(): Promise<JSX.Element> {
  const clients = await fetchAllClients()

  console.log(clients)

  return (
    <section className='flex flex-1 flex-col gap-16 overflow-hidden px-10 py-16'>
      <ClientsHeader />
      <ClientsTable columns={ClientColumns} pageSize={8} data={clients} />
    </section>
  )
}
