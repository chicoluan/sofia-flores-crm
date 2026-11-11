import z from 'zod'

// SCHEMAS
export const CpfSchema = z
	.string()
	.transform((value) => value.replace(/\D/g, ''))
	.refine(
		(cpf) => {
			if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
				return false
			}

			const calculateDigit = (digits: string, factor: number) => {
				const total = digits
					.split('')
					.reduce((sum, digit) => sum + Number(digit) * factor--, 0)

				const remainder = (total * 10) % 11

				return remainder === 10 ? 0 : remainder
			}

			const firstDigit = calculateDigit(cpf.slice(0, 9), 10)

			const secondDigit = calculateDigit(cpf.slice(0, 9) + firstDigit, 11)

			return firstDigit === Number(cpf[9]) && secondDigit === Number(cpf[10])
		},
		{
			message: 'CPF inválido.',
		},
	)

export const ClientFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.min(2, 'O nome deve ter pelo menos 2 caracteres.')
		.max(100, 'Nome muito longo.'),

	lastName: z
		.string()
		.trim()
		.min(2, 'O sobrenome deve ter pelo menos 2 caracteres.')
		.max(100, 'Sobrenome muito longo.'),

	cpf: z
		.string()
		.optional()
		.default('')
		.transform((value) => value.replace(/\D/g, ''))
		.pipe(z.union([z.literal(''), CpfSchema])),

	phone: z
		.string()
		.optional()
		.default('')
		.transform((value) => value.replace(/\D/g, ''))
		.pipe(
			z.union([
				z.literal(''),
				z.string().regex(/^\d{10,11}$/, 'Informe um telefone válido com DDD.'),
			]),
		),

	email: z
		.string()
		.trim()
		.optional()
		.default('')
		.transform((value) => value.toLowerCase())
		.pipe(z.union([z.literal(''), z.email('Informe um e-mail válido.')])),

	birthday: z
		.union([z.literal(''), z.iso.date('Data de nascimento inválida.')])
		.optional()
		.default(''),

	notes: z
		.string()
		.trim()
		.max(1000, 'Máximo de 1000 caracteres.')
		.optional()
		.default(''),
})

// TYPES
export type ClientForm = z.infer<typeof ClientFormSchema>
