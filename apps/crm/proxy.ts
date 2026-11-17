import { auth } from '@sofiaflores/better-auth/auth'
import { NextResponse, type NextRequest } from 'next/server'

const allowedOrigins = ['localtest.me', 'localhost']

export async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl

	// Static assets
	const isStaticAsset =
		pathname.startsWith('/_next') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/img') ||
		pathname.startsWith('/assets') ||
		pathname.startsWith('/robots') ||
		pathname.startsWith('/manifest') ||
		pathname.startsWith('/sitemap')

	if (isStaticAsset) {
		return NextResponse.next()
	}

	// Handle CORS preflight
	if (req.method === 'OPTIONS') {
		return new NextResponse(null, { status: 204 })
	}

	// Get current session
	const session = await auth.api.getSession({
		headers: req.headers,
	})

	const isAuthPage = pathname.startsWith('/auth')
	const isJoinPage = pathname.startsWith('/join')
	const isAuthApi = pathname.startsWith('/api/auth')

	// Root redirect
	if (pathname === '/') {
		return NextResponse.redirect(
			new URL(session ? '/dashboard' : '/join', req.url),
		)
	}

	// Public routes
	if (isAuthApi || isAuthPage) {
		return NextResponse.next()
	}

	// Unauthenticated users
	if (!session && !isJoinPage) {
		return NextResponse.redirect(new URL('/join', req.url))
	}

	// Authenticated users shouldn't access join
	if (session && isJoinPage) {
		return NextResponse.redirect(new URL('/dashboard', req.url))
	}

	// Continue request
	const response = NextResponse.next()

	// CORS headers
	const origin = req.headers.get('origin')

	if (origin) {
		const hostname = new URL(origin).hostname

		if (allowedOrigins.some((domain) => hostname.endsWith(domain))) {
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

	return response
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
