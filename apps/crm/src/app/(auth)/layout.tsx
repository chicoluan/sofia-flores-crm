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
			<Layout.Content className='space-x-8 lg:grid lg:flex-1'>
				{children}
			</Layout.Content>
		</Layout>
	)
}
