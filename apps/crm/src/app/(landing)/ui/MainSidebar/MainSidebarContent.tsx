'use client'

import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
} from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'
import MainSidebarMenu from './MainSidebarMenu'
import items from '../../../../data/MainSidebarData'

export default function MainSidebarContent(): JSX.Element {
	return (
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel className='mt-4 text-center text-foreground text-xs'>
					Menu
				</SidebarGroupLabel>
				<MainSidebarMenu items={items} />
			</SidebarGroup>
		</SidebarContent>
	)
}
