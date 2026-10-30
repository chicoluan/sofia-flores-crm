'use client'

import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import { ChevronRight } from '@sofiaflores/ui'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@sofiaflores/ui/components/collapsible'
import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@sofiaflores/ui/components/sidebar'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

type MainSidebarMenuCollapsibleProps = {
	item: MainSidebarMenuItem
}

export default function MainSidebarMenuCollapsible({
	item,
}: MainSidebarMenuCollapsibleProps): JSX.Element {
	const pathname = usePathname()

	const isChildActive = item.items?.some((sub) => pathname === sub.url) ?? false
	const isParentActive = pathname === item.url || isChildActive
	return (
		<Collapsible
			key={item.title}
			asChild
			defaultOpen={item.isActive || isParentActive}
		>
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton
						isActive={isParentActive}
						className="hover:cursor-pointer"
						tooltip={item.title}
					>
						{item.icon && <item.icon />}
						<span>{item.title}</span>
						<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{item.items?.map((subItem) => {
							const isSubActive = pathname === subItem.url

							return (
								<SidebarMenuSubItem key={subItem.title}>
									<SidebarMenuSubButton asChild isActive={isSubActive}>
										<a href={subItem.url}>
											{subItem.icon && <subItem.icon />}
											<span>{subItem.title}</span>
										</a>
									</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							)
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	)
}
