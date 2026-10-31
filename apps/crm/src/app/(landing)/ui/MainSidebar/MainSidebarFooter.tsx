'use client'

import { EllipsisVertical } from '@sofiaflores/ui'
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@sofiaflores/ui/components/dropdown-menu'
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@sofiaflores/ui/components/sidebar'
import UserAvatar from '@sofiaflores/ui/components/userAvatar'
import type { JSX } from 'react'

export default function MainSidebarFooter(): JSX.Element {
	const { open } = useSidebar()
	return (
		<SidebarFooter className='gap-2 p-2'>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size='lg'
								className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
							>
								<UserAvatar />
								<div
									className={
										open ? 'flex flex-col text-nowrap text-sm' : 'hidden'
									}
								>
									<p className='font-semibold text-sm'>Sofia Flores Cariri</p>
									<p className='font-normal text-xs'>
										sofiafloresedecoracoes@gmail.com
									</p>
								</div>
								<EllipsisVertical className='ml-auto size-4' />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
			{/* <div className='flex w-full items-center gap-2'>
				<UserAvatar />
				<div className={open ? 'flex flex-col text-nowrap text-sm' : 'hidden'}>
					<p className='font-semibold text-sm'>Sofia Flores Cariri</p>
					<p className='font-normal text-xs'>
						sofiafloresedecoracoes@gmail.com
					</p>
				</div>
			</div> */}
		</SidebarFooter>
	)
}
