import type { DialogType } from '@sofiaflores/db/schemas/DialogSchema'
import { create } from 'zustand'

type DialogStore<T = any> = {
	type: DialogType | null
	data: T | null
	isOpen: boolean
	onOpen: (type: DialogType, data?: T) => void
	onClose: () => void
}

export const useDialog = create<DialogStore>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}))
