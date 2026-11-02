import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import { LayoutDashboard, Users } from '@sofiaflores/ui'

const items: MainSidebarMenuItem[] = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Clientes',
		url: 'clients',
		icon: Users,
	},
]

export default items
