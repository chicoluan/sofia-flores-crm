import type { JSX } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

import { cn } from '../lib/utils'
import BoringAvatar from './boriongAvatar'

type UserAvatarProps = {
	className?: string
	image?: string
	id?: string
}

export default function UserAvatar({
	className,
	image,
	id,
}: UserAvatarProps): JSX.Element {
	if (image) {
		return (
			<Avatar className={className}>
				<AvatarImage className={className} src={image} />
				<AvatarFallback />
			</Avatar>
		)
	}

	return (
		<BoringAvatar
			className={cn('overflow-hidden rounded-md', className)}
			name={id}
			size={40}
		/>
	)
}
