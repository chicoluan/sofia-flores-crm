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
		url: 'clients',
		icon: Users,
		// items: [
		// 	{
		// 		title: 'Lista de Cliente',
		// 		url: '/clients',
		// 		icon: List,
		// 	},
		// 	{
		// 		title: 'Cadastrar Cliente',
		// 		url: '/new-client',
		// 		icon: UserPlus,
		// 	},
		// ],
	},
]

export default items
