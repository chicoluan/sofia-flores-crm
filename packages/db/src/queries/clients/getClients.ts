import { prisma } from '../../client'

export async function getClients() {
  return prisma.client.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}
