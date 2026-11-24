import { auth } from '@sofiaflores/better-auth/auth'
import { ClientFormSchema } from '@sofiaflores/db/schemas/clients/ClientFormSchema'
import { headers } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import { addClient } from '@sofiaflores/db/queries/clients/addClient'

export async function POST(request: NextRequest) {
  try {
    // GET SESSION
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // DATA
    const body = await request.json()

    // VALIDATION
    const validation = ClientFormSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Invalid client data',
          issues: validation.error,
        },
        { status: 400 },
      )
    }

    // QUERY
    const client = await addClient(validation.data)

    // RESPONSE
    return NextResponse.json(
      {
        message: 'Client created successfully',
        client,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[POST /api/clients]', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
