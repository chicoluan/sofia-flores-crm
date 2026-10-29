import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from '@sofiaflores/db'
import { toNextJsHandler } from 'better-auth/next-js'
export const auth = betterAuth({
	database: prismaAdapter(prisma, { provider: 'postgresql' }),
	secret: process.env.BETTER_AUTH_SECRET as string,
	baseUrl: process.env.BETTER_AUTH_URL,
	socialProviders: {
		google: {
			prompt: 'select_account',
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`,
		},
	},
	trustedOrigins: ['http://localhost:3001'],
})

export const { GET, POST } = toNextJsHandler(auth.handler)
export { toNextJsHandler }
