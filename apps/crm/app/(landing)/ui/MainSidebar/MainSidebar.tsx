'use client'
import { Logo, LogoIcon } from '@sofiaflores/ui/components/logo'
import {
	Sidebar,
	SidebarHeader,
	SidebarRail,
} from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'
import MainSidebarContent from './MainSidebarContent'
import MainSidebarFooter from './MainSidebarFooter'

export default function MainSidebar(): JSX.Element {
	return (
		<Sidebar collapsible='icon' className='bg-sidebar py-4'>
			<SidebarHeader className='flex items-center justify-center'>
				<Logo className='w-40 transition-all duration-200 ease-linear group-data-[collapsible=icon]:scale-95 group-data-[collapsible=icon]:opacity-0' />

				<LogoIcon className='absolute size-8 scale-95 rounded-md opacity-0 transition-all duration-200 ease-linear group-data-[collapsible=icon]:scale-100 group-data-[collapsible=icon]:opacity-100' />
			</SidebarHeader>
			<MainSidebarContent />
			<MainSidebarFooter />
			<SidebarRail />
		</Sidebar>
	)
}
