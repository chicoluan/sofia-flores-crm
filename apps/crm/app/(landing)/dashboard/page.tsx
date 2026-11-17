import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from '@sofiaflores/ui/components/breadcrumb'
import { Separator } from '@sofiaflores/ui/components/separator'
import { SidebarTrigger } from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'

export default function DashboardPage(): JSX.Element {
	return (
		<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
			<div className='flex items-center gap-2 px-4'>
				<SidebarTrigger className='hover:cursor-pointer -ml-1' />
				<Separator
					orientation='vertical'
					className='mr-2 data-[orientation=vertical]:h-4:'
				/>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className='hidden md:block'>
							<BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
	)
}
