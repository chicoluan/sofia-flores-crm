import type z from 'zod'
import type * as Schemas from './schemas'

// Main Sidebar
export type MainSidebarSubItem = z.infer<
	typeof Schemas.MainSidebarSubItemSchema
>
export type MainSidebarMenuItem = z.infer<
	typeof Schemas.MainSidebarMenuItemSchema
>
