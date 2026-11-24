import { prisma } from '../../../client'
import type { FlowersForm } from '../../../schemas/stock/flowers/FlowersFormSchema'

export async function addFlowerStock(data: FlowersForm) {
  return await prisma.flower.create({
    data: {
      name: data.name,
      variety: data.variety,
      category: data.category,
      color: data.color,
      unit: data.unit,
      quantity: data.quantity,
      minQuantity: data.minQuantity,
      costPrice: data.costPrice,
      sellingPrice: data.sellingPrice,
      supplierId: data.supplierId,
      description: data.description,
      notes: data.notes,
    },
  })
}
