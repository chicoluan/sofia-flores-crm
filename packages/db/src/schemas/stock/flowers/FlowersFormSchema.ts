import z from 'zod'

export const FlowersFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'O nome deve ter pelo menos 2 caracteres.')
		.max(100, 'Nome muito longo.'),
	variety: z.string().trim().optional().default(''),

	category: z.string().min(1, 'Selecione uma categoria.'),

	color: z.string().trim().optional().default(''),

	unit: z.enum(['stem', 'bunch', 'box', 'pot']).default('stem'),

	quantity: z.coerce
		.number()
		.min(0, 'A quantidade não pode ser negativa.')
		.default(0),

	minQuantity: z.coerce
		.number()
		.min(0, 'O estoque mínimo não pode ser negativo.')
		.default(0),

	costPrice: z.coerce.number().min(0, 'O custo não pode ser negativo.'),

	sellingPrice: z.coerce
		.number()
		.min(0, 'O preço de venda não pode ser negativo.'),

	supplierId: z.string().optional().default(''),

	description: z
		.string()
		.trim()
		.max(1000, 'Máximo de 1000 caracteres.')
		.optional()
		.default(''),

	notes: z
		.string()
		.trim()
		.max(1000, 'Máximo de 1000 caracteres.')
		.optional()
		.default(''),
})

export type FlowersForm = z.infer<typeof FlowersFormSchema>
export type FlowersFormInput = z.input<typeof FlowersFormSchema>
