import z from 'zod'

// SCHEMA
export const DialogSchema = z.enum(['addClient', 'addFlower'])

// TYPE
export type DialogType = z.infer<typeof DialogSchema>
