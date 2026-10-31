import '@sofiaflores/ui/styles.css'
import { fontEstiana } from '../lib/font'
import { rootMetadata, viewport } from './metadata'
import Providers from '../providers'

export const metadata = rootMetadata
export { viewport }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${fontEstiana.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
