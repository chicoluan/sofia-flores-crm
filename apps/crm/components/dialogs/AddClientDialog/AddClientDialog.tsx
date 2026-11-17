import { useDialog } from '@/hooks/store/use-dialog-store'
import {
	ClientFormSchema,
	type ClientForm,
} from '@sofiaflores/db/schemas/clients/ClientFormSchema'
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
import AddClientDialogBody from './AddClientDialogBody'
import { Button } from '@sofiaflores/ui/components/button'
import api from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'

export default function AddClientDialog(): JSX.Element {
	const { isOpen, onClose, type, data } = useDialog()

	const isDialogOpen = isOpen && type === 'addClient'

	// Methods
	const methods = useForm<ClientForm>({
		resolver: zodResolver(ClientFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			cpf: '',
			email: '',
			phone: '',
			birthday: '',
			notes: '',
		},
	})

	// Submit Form
	const onSubmitForm = async (values: ClientForm) => {
		try {
			const { data } = await api.post('/clients', values)

			console.log('Client created:', data)
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
					<DialogTitle>Adicionar Novo Client</DialogTitle>
					<DialogDescription>
						Preencha os dados abaixo para adicionar a sua carteira de clientes.
					</DialogDescription>
				</DialogHeader>

				<Form {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmitForm)}>
						<AddClientDialogBody />

						<DialogFooter className='pt-4'>
							<DialogClose asChild>
								<Button variant='outline'>Cancelar</Button>
							</DialogClose>

							<Button type='submit' disabled={methods.formState.isSubmitting}>
								{methods.formState.isSubmitting
									? 'Cadastrando...'
									: 'Adicionar cliente'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
