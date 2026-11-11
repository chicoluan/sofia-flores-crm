import z from 'zod'

// SCHEMA
export const DialogSchema = z.enum(['addClient'])

// TYPE
export type DialogType = z.infer<typeof DialogSchema>
