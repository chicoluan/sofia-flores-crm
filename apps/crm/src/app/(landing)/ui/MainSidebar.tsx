'use client'
import { Logo, LogoIcon } from '@sofiaflores/ui/components/logo'
import {
	Sidebar,
	SidebarHeader,
	useSidebar,
} from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'
import MainSidebarContent from './MainSidebarContent'

export default function MainSidebar(): JSX.Element {
	const { open } = useSidebar()
	return (
		<Sidebar className="bg-sidebar py-4">
			<SidebarHeader className="flex items-center justify-center pt-4">
				{open ? <Logo /> : <LogoIcon />}
			</SidebarHeader>
			<MainSidebarContent />
		</Sidebar>
	)
}
