'use client'

import { SidebarProvider } from '@sofiaflores/ui/components/sidebar'
import type { JSX, ReactNode } from 'react'

type ProvidersProps = {
	children: ReactNode
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
	return <SidebarProvider>{children}</SidebarProvider>
}
