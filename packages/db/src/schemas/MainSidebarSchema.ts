import z from 'zod'
import type { LucideIcon } from '../../../ui/src'

const iconSchema = z.custom<LucideIcon>((val) => typeof val === 'function', {
	error: 'Expected a LucideIcon component',
})

export const MainSidebarSubItemSchema = z.object({
	title: z.string(),
	url: z.string(),
	icon: iconSchema,
})

export const MainSidebarMenuItemSchema = z.object({
	title: z.string(),
	url: z.string(),
	icon: iconSchema,
	isActive: z.boolean().optional(),
	items: z.array(MainSidebarSubItemSchema).optional(),
})
