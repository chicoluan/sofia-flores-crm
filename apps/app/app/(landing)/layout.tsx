import { auth } from '@sofiaflores/better-auth/auth'
import Layout from '@sofiaflores/ui/components/layout'
import { headers } from 'next/headers'
import type { JSX, ReactNode } from 'react'
import Header from './components/Header'
import { spacingVariants } from '@sofiaflores/ui/components/spacing'

type LandingLayoutProps = {
	children: ReactNode
}

export default async function LadingLayout({
	children,
}: LandingLayoutProps): Promise<JSX.Element> {
	const session = await auth.api.getSession({
		headers: await headers(),
	})

	console.log(session)
	return (
		<Layout className='flex min-h-screen w-full flex-col'>
			<Layout.Header className='fixed w-full'>
				<Header />
			</Layout.Header>
			<Layout.Content className='flex flex-1 flex-col bg-zinc-50 pt-16 dark:bg-background'>
				{children}
			</Layout.Content>
			<div className='bg-zinc-50 dark:bg-background'>
				<Layout.Footer
					className={spacingVariants({ variant: 'footer' })}
				></Layout.Footer>
			</div>
		</Layout>
	)
}
