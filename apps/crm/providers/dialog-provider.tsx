import AddClientDialog from '@/components/dialogs/AddClientDialog/AddClientDialog'
import AddFlowersDialog from '@/components/dialogs/AddFlowersDialog/AddFlowersDialog'
import { useMountedState } from 'react-use'

export const DialogProvider = () => {
	const isMounted = useMountedState()
	if (!isMounted) {
		return null
	}

	return <>
	<AddClientDialog />
	<AddFlowersDialog />
	</>
}
