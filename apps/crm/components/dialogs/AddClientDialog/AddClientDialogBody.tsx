'use client'

import type { ClientForm } from '@sofiaflores/db/schemas/clients/ClientFormSchema'
import { CalendarIcon } from '@sofiaflores/ui'
import { Button } from '@sofiaflores/ui/components/button'
import { Calendar } from '@sofiaflores/ui/components/calendar'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@sofiaflores/ui/components/form'
import { Input } from '@sofiaflores/ui/components/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@sofiaflores/ui/components/popover'
import { Textarea } from '@sofiaflores/ui/components/textarea'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'

export default function AddClientDialogBody(): JSX.Element {
	const { control } = useFormContext<ClientForm>()

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-3'>
				<h3 className='text-sm font-medium'>Informações pessoais</h3>

				<div className='grid grid-cols-2 gap-3'>
					<FormField
						control={control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome *</FormLabel>
								<FormControl>
									<Input placeholder='Nome' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sobrenome *</FormLabel>
								<FormControl>
									<Input placeholder='Sobrenome' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={control}
					name='cpf'
					render={({ field }) => (
						<FormItem>
							<FormLabel>CPF</FormLabel>
							<FormControl>
								<Input placeholder='000.000.000-00' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='birthday'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Data de nascimento</FormLabel>

							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant='outline'
											className='w-full justify-between font-normal'
										>
											{field.value ? (
												format(parseISO(field.value), 'dd/MM/yyyy', {
													locale: ptBR,
												})
											) : (
												<span className='text-muted-foreground'>
													Selecione uma data
												</span>
											)}

											<CalendarIcon className='size-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>

								<PopoverContent className='w-auto p-0' align='start'>
									<Calendar
										mode='single'
										selected={field.value ? parseISO(field.value) : undefined}
										onSelect={(date) =>
											field.onChange(date ? format(date, 'yyyy-MM-dd') : '')
										}
										disabled={(date) => date > new Date()}
										captionLayout='dropdown'
										locale={ptBR}
									/>
								</PopoverContent>
							</Popover>

							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			{/* Contact information */}
			<div className='flex flex-col gap-3'>
				<h3 className='text-sm font-medium'>Informações de contato</h3>

				<FormField
					control={control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Telefone / WhatsApp</FormLabel>
							<FormControl>
								<Input type='tel' placeholder='(88) 99999-9999' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='cliente@email.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			{/* Additional information */}
			<div className='flex flex-col gap-3'>
				<h3 className='text-sm font-medium'>Observações</h3>

				<FormField
					control={control}
					name='notes'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder='Flores favoritas, preferências, observações...'
									rows={3}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	)
}
