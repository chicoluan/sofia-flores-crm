import { auth } from '@sofiaflores/better-auth/auth'
import { headers } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

const allowedOrigins = ['localtest.me', 'localhost']

export async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl

	const isPublic =
		pathname === '/' ||
		pathname.startsWith('/auth') ||
		pathname.startsWith('/api/auth') ||
		pathname.startsWith('/_next') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/robots') ||
		pathname.startsWith('/manifest') ||
		pathname.startsWith('/sitemap')

	if (isPublic) {
		return NextResponse.next()
	}

	const isStaticAsset =
		pathname.startsWith('/_next') ||
		pathname.startsWith('/favicon.ico') ||
		pathname.startsWith('/img') ||
		pathname.startsWith('/assets')

	if (isStaticAsset) {
		return NextResponse.next()
	}

	const session = await auth.api.getSession({
		headers: await headers(),
	})

	const isJoinPage = pathname.startsWith('/join')
	const isAuthApi = pathname.startsWith('/api/auth')
	const isLandingPage = pathname === '/'

	if (!session && !isJoinPage && !isLandingPage && !isAuthApi) {
		return NextResponse.redirect(new URL('/join', req.url))
	}

	if (session && isJoinPage) {
		return NextResponse.redirect(new URL('/dashboard', req.url)) // Change '/dashboard' to your main app route
	}

	const origin = req.headers.get('origin')
	const response = NextResponse.next()

	if (origin) {
		const hostname = new URL(origin).hostname
		if (allowedOrigins.some((d) => hostname.endsWith(d))) {
			response.headers.set('Access-Control-Allow-Origin', origin)
			response.headers.set('Access-Control-Allow-Credentials', 'true')
			response.headers.set(
				'Access-Control-Allow-Methods',
				'GET, POST, PUT, DELETE, OPTIONS',
			)
			response.headers.set(
				'Access-Control-Allow-Headers',
				'Content-Type, Authorization',
			)
		}
	}

	if (req.method === 'OPTIONS') {
		return new NextResponse(null, { status: 204, headers: response.headers })
	}

	return response
}
