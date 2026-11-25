import { getClients } from '@sofiaflores/db/queries/clients/getClients'
import { verifySession } from './authentication'

export default async function fetchAllClients() {
  await verifySession()

  return getClients()
}
