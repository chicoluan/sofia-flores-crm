import Avatar from 'boring-avatars'
import type { ButtonHTMLAttributes, JSX } from 'react'
import colors from 'tailwindcss/colors'

export interface AvatarProps {
	size?: number | string
	square?: boolean
	name?: string
	variant?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'
	colors?: string[]
}

type RandomAvatarProps = AvatarProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AvatarProps> & {
		className?: string
	}

export default function BoringAvatar({
	className,
	colors: colorProp = Object.entries(colors.green)
		.filter(([key]) => ['100', '300', '500'].includes(key))
		.map(([, value]) => value),
	name,
	size = 80,
	square = true,
	variant = 'beam',
	...props
}: RandomAvatarProps): JSX.Element {
	return (
		<span type='button' className={className} {...props}>
			<Avatar
				colors={colorProp}
				name={name}
				size={size}
				square={square}
				variant={variant}
			/>
		</span>
	)
}
