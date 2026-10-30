import { createAuthClient } from 'better-auth/client'
import { usernameClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
	baseURL:
		typeof window !== 'undefined'
			? window.location.origin
			: process.env.BETTER_AUTH_URL || '',
	fetchOptions: {
		credentials: 'include',
	},
	plugins: [usernameClient()],
})

export const {
	signIn,
	signOut,
	signUp,
	useSession,
	requestPasswordReset,
	resetPassword,
} = authClient
