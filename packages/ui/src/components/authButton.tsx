'use client'
import type { JSX } from 'react/jsx-runtime'
import { Button } from './button'
import { Apple, Google } from './icon'
import { signIn } from '@sofiaflores/better-auth/auth-client'

type AuthButtonProps = {
	provider: 'google' | 'apple'
}

export default function AuthButton({ provider }: AuthButtonProps): JSX.Element {
	const isGoogle = provider === 'google'

	const handleLogin = async () => {
		try {
			await signIn.social({ provider, callbackURL: '/dashboard' })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Button
			className={`group cursor-pointer transition-colors hover:bg-gray-200 ${isGoogle ? 'bg-background' : 'bg-foreground'}`}
			variant={isGoogle ? 'outline' : 'default'}
			onClick={handleLogin}
		>
			{isGoogle ? (
				<Google className="size-6" />
			) : (
				<Apple className="size-6 text-background group-hover:text-foreground" />
			)}
			<span
				className={
					isGoogle
						? 'text-foreground'
						: 'text-background group-hover:text-foreground'
				}
			>
				Continuar com {isGoogle ? 'o Google' : 'a Apple'}
			</span>
		</Button>
	)
}
