import z from 'zod'

// SCHEMAS
export const FlowerSchema = z.object({
	id: z.string().uuid(),

	name: z.string(),
	variety: z.string().nullable(),

	category: z.string(),
	color: z.string().nullable(),

	unit: z.enum(['stem', 'bunch', 'box', 'pot']),

	quantity: z.number(),
	minQuantity: z.number(),

	costPrice: z.number(),
	sellingPrice: z.number(),

	supplierId: z.string().uuid().nullable(),

	description: z.string().nullable(),
	notes: z.string().nullable(),

	createdAt: z.date(),
	updatedAt: z.date(),
})

// TYPES
export type Flower = z.infer<typeof FlowerSchema>
