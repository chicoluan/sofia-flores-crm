import AuthButton from '@sofiaflores/ui/components/authButton'
import type { JSX } from 'react'

export default function LoginProviders(): JSX.Element {
	return (
		<div className='flex w-full flex-col gap-4'>
			<AuthButton provider='google' />
			<AuthButton provider='apple' />
		</div>
	)
}
