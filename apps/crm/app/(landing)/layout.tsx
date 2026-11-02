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
		<div className='flex flex-col min-h-screen w-full'>
			<MainSidebar />
			<SidebarInset>{children}</SidebarInset>
		</div>
	)
}
