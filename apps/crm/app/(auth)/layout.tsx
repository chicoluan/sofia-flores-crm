import Layout from '@sofiaflores/ui/components/layout'
import type { JSX, ReactNode } from 'react'

type AuthLayoutProps = {
	children: ReactNode
}

export default async function AuthLayout({
	children,
}: AuthLayoutProps): Promise<JSX.Element> {
	return (
		<Layout className='flex w-full items-center justify-center'>
			{children}
		</Layout>
	)
}
