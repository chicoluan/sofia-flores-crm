import { useDialog } from '@/hooks/store/use-dialog-store'
import type { ClientForm } from '@sofiaflores/db/schemas/clients/ClientFormSchema'
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

export default function AddClientDialog(): JSX.Element {
	const { isOpen, onClose, data, type } = useDialog()

	const isDialogOpen = isOpen && type === 'addClient'

	const methods = useForm<ClientForm>()

	const onSubmitForm = async () => {
		try {
			// Call the api route to add the client using the query
			console.log('Create the client')
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
