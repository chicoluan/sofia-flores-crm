import type { MainSidebarMenuItem } from '@sofiaflores/db/types'
import {
	LayoutDashboard,
	Package,
	Settings2,
	ShoppingCartPlus,
	Users,
} from '@sofiaflores/ui'

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
	{
		title: 'Gestão de Pedidos',
		url: 'orders',
		icon: ShoppingCartPlus,
	},
	{
		title: 'Estoque',
		url: 'stock',
		icon: Package,
	},
	{
		title: 'Configurações',
		url: 'settings',
		icon: Settings2,
	},
]

export default items
