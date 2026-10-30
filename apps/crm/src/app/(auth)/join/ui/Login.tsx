import type { JSX } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@sofiaflores/ui/components/card'
import LoginProviders from './LoginProviders'

export default function Login(): JSX.Element {
	return (
		<Card className="w-full max-w-125 p-6">
			<CardHeader className="flex min-h-50 flex-col items-center justify-between">
				<CardTitle className="flex items-center text-center font-light text-[24px] justify-center">
					Faça Login para administrar sua Floricultura
				</CardTitle>
				<CardDescription className="text-center text-base">
					Caso você ainda não tenha uma conta, ela será criada automaticamente
					😉
				</CardDescription>
			</CardHeader>
			<CardContent className="flex w-full flex-col gap-6">
				<LoginProviders />
			</CardContent>
		</Card>
	)
}
