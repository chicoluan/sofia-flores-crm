import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import { LayoutDashboard, List, UserPlus, Users } from '@sofiaflores/ui'

const items: MainSidebarMenuItem[] = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Clientes',
		url: '/dashboard',
		icon: Users,
		items: [
			{
				title: 'Cadastrar Cliente',
				url: '/new-client',
				icon: UserPlus,
			},
			{
				title: 'Lista de Cliente',
				url: '/clients',
				icon: List,
			},
		],
	},
]

export default items
