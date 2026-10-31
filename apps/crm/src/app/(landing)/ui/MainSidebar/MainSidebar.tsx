'use client'
import { Logo, LogoIcon } from '@sofiaflores/ui/components/logo'
import {
	Sidebar,
	SidebarHeader,
	SidebarRail,
	useSidebar,
} from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'
import MainSidebarContent from './MainSidebarContent'
import MainSidebarFooter from './MainSidebarFooter'

export default function MainSidebar(): JSX.Element {
	const { open } = useSidebar()
	return (
		<Sidebar collapsible='icon' className='bg-sidebar py-4'>
			<SidebarHeader className='flex justify-center pt-4'>
				{open ? (
					<LogoIcon className='size-8 rounded-md' />
				) : (
					<LogoIcon className='size-8 rounded-md' />
				)}
			</SidebarHeader>
			<MainSidebarContent />
			<MainSidebarFooter />
			<SidebarRail />
		</Sidebar>
	)
}
