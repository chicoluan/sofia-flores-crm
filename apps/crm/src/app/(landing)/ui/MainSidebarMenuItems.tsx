'use client'
import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import {
	SidebarMenuButton,
	SidebarMenuItem,
} from '@sofiaflores/ui/components/sidebar'
import { usePathname, useRouter } from 'next/navigation'
import type { JSX } from 'react'

type MainSidebarMenuItemsProps = {
	item: MainSidebarMenuItem
}

export default function MainSidebarMenuItems({
	item,
}: MainSidebarMenuItemsProps): JSX.Element {
	const pathname = usePathname()
	const isActive = pathname === item.url
	const route = useRouter()
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				isActive={isActive}
				className="hover:cursor-pointer"
				tooltip={item.title}
				onClick={() => route.push(item.url)}
			>
				{item.icon && <item.icon />}
				<span>{item.title}</span>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}
