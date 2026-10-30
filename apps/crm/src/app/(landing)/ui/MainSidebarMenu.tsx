'use client'

import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import { SidebarMenu } from '@sofiaflores/ui/components/sidebar'
import type { JSX } from 'react'
import MainSidebarMenuCollapsible from './MainSidebarMenuCollapsible'
import MainSidebarMenuItems from './MainSidebarMenuItems'

type MainSidebarMenuProps = {
	items: MainSidebarMenuItem[]
}

export default function MainSidebarMenu({
	items,
}: MainSidebarMenuProps): JSX.Element {
	return (
		<SidebarMenu>
			{items.map((item) =>
				item.items && item.items?.length > 0 ? (
					<MainSidebarMenuCollapsible item={item} key={item.title} />
				) : (
					<MainSidebarMenuItems item={item} key={item.title} />
				),
			)}
		</SidebarMenu>
	)
}
