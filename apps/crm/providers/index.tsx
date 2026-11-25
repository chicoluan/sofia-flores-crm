'use client'

import { SidebarProvider } from '@sofiaflores/ui/components/sidebar'
import type { JSX, ReactNode } from 'react'
import { DialogProvider } from './dialog-provider'
import SonnerProvider from './sonner-provider'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <SidebarProvider>
      <DialogProvider />
      <SonnerProvider />
      {children}
    </SidebarProvider>
  )
}
