import Layout from '@sofiaflores/ui/components/layout'
import type { JSX, ReactNode } from 'react'
import MainSidebar from './ui/MainSidebar/MainSidebar'
import { SidebarInset } from '@sofiaflores/ui/components/sidebar'

type DashboardLayoutProps = {
	children: ReactNode
}

export default function DashboardLayout({
	children,
}: DashboardLayoutProps): JSX.Element {
	return (
		<div className='flex min-h-screen w-full'>
			<MainSidebar />
			<SidebarInset className='flex flex-col flex-1 min-w-0'>
				{children}
			</SidebarInset>
		</div>
	)
}
