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
		<html lang='en'>
			<body className={`overflow-x-hidden  ${fontEstiana.className}`}>
				{children}
			</body>
		</html>
	)
}
