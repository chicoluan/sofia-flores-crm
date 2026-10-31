import Layout from '@sofiaflores/ui/components/layout'
import type { JSX, ReactNode } from 'react'
import MainSidebar from './ui/MainSidebar'
import { SidebarInset } from '@sofiaflores/ui/components/sidebar'

type DashboardLayoutProps = {
	children: ReactNode
}

export default function DashboardLayout({
	children,
}: DashboardLayoutProps): JSX.Element {
	return (
		<Layout className='flex w-full'>
			<MainSidebar />
			<SidebarInset className='flex w-full flex-1 flex-col'>
				{children}
			</SidebarInset>
		</Layout>
	)
}
