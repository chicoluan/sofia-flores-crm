import AddClientDialog from '@/components/dialogs/AddClientDialog/AddClientDialog'
import { useMountedState } from 'react-use'

export const DialogProvider = () => {
	const isMounted = useMountedState()
	if (!isMounted) {
		return null
	}

	return <AddClientDialog />
}
