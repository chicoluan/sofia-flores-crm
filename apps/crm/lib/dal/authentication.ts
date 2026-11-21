import { auth } from '@sofiaflores/better-auth/auth'
import { headers } from 'next/headers'

export async function verifySession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    throw new Error('Unauthorized')
  }

  return session
}
