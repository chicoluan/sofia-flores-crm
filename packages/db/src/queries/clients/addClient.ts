import { prisma } from '../../client'
import type { ClientForm } from '../../schemas/clients/ClientFormSchema'

export async function addClient(data: ClientForm) {
	return await prisma.client.create({
		data: {
			firstname: data.firstName,
			lastname: data.lastName || null,
			email: data.email || null,
			phone: data.phone || null,
		},
	})
}
