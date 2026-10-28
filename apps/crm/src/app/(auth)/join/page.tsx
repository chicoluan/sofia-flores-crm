import Image from 'next/image'
import type { JSX } from 'react'
import Login from './ui/Login'

export default function LoginPage(): JSX.Element {
	return (
		<div className="flex h-screen w-full">
			<div className="flex w-full items-center justify-center lg:w-1/2">
				<Login />
			</div>
			<div className="relative hidden lg:block lg:w-1/2">
				<Image
					fill
					src="/assets/Login Asset.png"
					className="object-cover"
					alt=""
				/>
			</div>
		</div>
	)
}
