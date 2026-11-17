import { Search, ShoppingCartPlus, User } from '@sofiaflores/ui'
import { LogoComplete } from '@sofiaflores/ui/components/logo'
import Link from 'next/link'
import type { JSX } from 'react'
import type { User as UserType } from '@sofiaflores/db'

type HeaderProps = {
	user?: UserType
}

export default function Header({ user }: HeaderProps): JSX.Element {
	console.log(user)
	return (
		<div className='flex items-center justify-around px-16 py-4 bg-[#414A43] h-28'>
			<LogoComplete className='w-56 text-[414A43]' />
			<div className='flex items-center justify-center gap-20'>
				<Link href='#' className='uppercase text-[#FAF1E2]'>
					Flores
				</Link>
				<Link href='#' className='uppercase text-[#FAF1E2]'>
					Comprar
				</Link>
				<Link href='#' className='uppercase text-[#FAF1E2]'>
					Eventos
				</Link>
				<Link href='#' className='uppercase text-[#FAF1E2]'>
					Sobre Nós
				</Link>
			</div>
			<div className='flex items-center gap-4'>
				<Search className='text-[#FAF1E2]' />
				<User className='text-[#FAF1E2]' />
				<ShoppingCartPlus className='text-[#FAF1E2]' />
			</div>
		</div>
	)
}
