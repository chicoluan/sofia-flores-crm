import { auth } from '@sofiaflores/better-auth/auth'
import { addFlowerStock } from '@sofiaflores/db/queries/stock/flowers/addFlower'
import { FlowersFormSchema } from '@sofiaflores/db/schemas/stock/flowers/FlowersFormSchema'
import { headers } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

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
    const validation = FlowersFormSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Invalid flower stock data',
          issues: validation.error,
        },
        { status: 400 },
      )
    }

    // QUERY
    const flowerStock = await addFlowerStock(validation.data)

    // RESPONSE
    return NextResponse.json(
      {
        message: 'Stock Flower successfully added',
        flowerStock,
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    console.error('[POST /api/stock/flowers]', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
