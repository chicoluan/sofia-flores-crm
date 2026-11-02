'use client'

import { auth } from '@sofiaflores/better-auth/auth'
import { authClient } from '@sofiaflores/better-auth/auth-client'
import { EllipsisVertical, LogOut } from '@sofiaflores/ui'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
	const { open, isMobile } = useSidebar()

	const handleLogout = async () => {
		try {
			await authClient.signOut()
		} catch (error) {
			console.error(error)
		}
	}

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
										open ? 'flex items-center justify-between' : 'hidden'
									}
								>
									<div className='flex flex-col text-nowrap text-sm'>
										<p className='font-semibold text-sm'>Sofia Flores Cariri</p>
										<p className='font-normal text-xs'>
											sofiafloresedecoracoes@gmail.com
										</p>
									</div>
									<EllipsisVertical className='size-4' />
								</div>
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
							side={isMobile ? 'bottom' : 'right'}
							align='end'
							sideOffset={4}
						>
							<DropdownMenuItem onClick={handleLogout}>
								<LogOut />
								Sair
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	)
}
