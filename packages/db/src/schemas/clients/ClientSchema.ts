import z from 'zod'

export const ClientSchema = z.object({
	id: z.string().uuid(),

	firstName: z.string(),
	lastName: z.string(),

	cpf: z.string().nullable(),
	phone: z.string().nullable(),
	email: z.email().nullable(),

	birthday: z.iso.date().nullable(),

	notes: z.string().nullable(),

	createdAt: z.date(),
	updatedAt: z.date(),
})

export type Client = z.infer<typeof ClientSchema>
