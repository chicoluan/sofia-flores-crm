import '@sofiaflores/ui/styles.css'
import { fontEstiana } from '../lib/font'
import { rootMetadata, viewport } from './metadata'

export const metadata = rootMetadata
export { viewport }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fontEstiana.className}`}>{children}</body>
		</html>
	)
}
