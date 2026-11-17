import Avatar from 'boring-avatars'
import colors from 'tailwindcss/colors'
import type { ComponentProps, HTMLAttributes, JSX } from 'react'

type RandomAvatarProps = ComponentProps<typeof Avatar> &
	HTMLAttributes<HTMLDivElement>

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
		<div className={className} {...props}>
			<Avatar
				colors={colorProp}
				name={name}
				size={size}
				square={square}
				variant={variant}
			/>
		</div>
	)
}
