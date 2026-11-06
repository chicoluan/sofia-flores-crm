import type { Metadata, Viewport } from 'next'

export const rootMetadata: Metadata = {
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
	},
	title: {
		default: 'Sofia Flores',
		template: '%s | Sofia Flores',
	},
	description: 'Sofia Flores - Floricultura no Cariri',
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: '/',
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}
