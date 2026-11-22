import { useDialog } from '@/hooks/store/use-dialog-store'
import api from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	FlowersFormSchema,
	type FlowersForm,
	type FlowersFormInput,
} from '@sofiaflores/db/schemas/stock/flowers/FlowersFormSchema'
import { Button } from '@sofiaflores/ui/components/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@sofiaflores/ui/components/dialog'
import { Form } from '@sofiaflores/ui/components/form'
import type { JSX } from 'react'
import { useForm } from 'react-hook-form'

export default function AddFlowersDialog(): JSX.Element {
	const { isOpen, onClose, type, data } = useDialog()

	const isDialogOpen = isOpen && type === 'addFlower'

	// Methods
	const methods = useForm<FlowersFormInput, unknown, FlowersForm>({
		resolver: zodResolver(FlowersFormSchema),
		defaultValues: {
			name: '',
			variety: '',
			category: '',
			color: '',
			unit: 'stem',
			quantity: 0,
			minQuantity: 0,
			costPrice: 0,
			sellingPrice: 0,
			supplierId: '',
			description: '',
			notes: '',
		},
	})

	const onSubmitForm = async (values: FlowersForm) => {
		try {
			const { data } = await api.post('/stock/flowers', values)
			onClose()
			methods.reset()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Dialog open={isDialogOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-md'>
				<DialogHeader>
					<DialogTitle>Adicionar Flor</DialogTitle>
					<DialogDescription>
						Preencha os dados abaixo para adicionar a sua flor.
					</DialogDescription>
				</DialogHeader>

				<Form {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmitForm)}>
						<DialogFooter className='pt-4'>
							<DialogClose asChild>
								<Button variant='outline'>Cancelar</Button>
							</DialogClose>

							<Button type='submit' disabled={methods.formState.isSubmitting}>
								{methods.formState.isSubmitting
									? 'Adicionando Flor...'
									: 'Adicionar Flor'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
