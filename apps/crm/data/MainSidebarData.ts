import type { MainSidebarMenuItem } from '@sofiaflores/db/schemas/MainSidebarSchema'
import {
	Flower2,
	LayoutDashboard,
	Package,
	Settings2,
	ShoppingCartPlus,
	Users,
} from '@sofiaflores/ui'

const items: MainSidebarMenuItem[] = [
	{
		title: 'Início',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Clientes',
		url: '/clients',
		icon: Users,
	},
	{
		title: 'Gestão de Pedidos',
		url: '/orders',
		icon: ShoppingCartPlus,
	},
	{
		title: 'Estoque',
		url: '/stock',
		icon: Package,
		items: [
			{
				title: 'Flores',
				icon: Flower2,
				url: '/stock/flowers',
			},
			// {
			// 	title: 'Relatórios',
			// 	icon:
			// }
		],
	},
	{
		title: 'Configurações',
		url: '/settings',
		icon: Settings2,
	},
]

export default items
