import { MoveLeft } from '@sofiaflores/ui'
import Link from 'next/link'
import type { JSX } from 'react'

export default function NotFound(): JSX.Element {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
			<div className="text-center">
				<h1 className="mb-4 font-semibold text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
					😴 <br /> Nada encontrado
				</h1>

				<p className="mx-auto max-w-lg text-muted-foreground leading-7">
					De acordo com nossos registros muito precisos, a página que você está
					tentando acessar não existe.
				</p>
			</div>

			<Link className="mt-8 flex items-center space-x-4" href="/">
				<MoveLeft className="size-5" /> <span>Voltar</span>
			</Link>
		</div>
	)
}
