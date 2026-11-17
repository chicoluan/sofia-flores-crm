import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { rootMetadata, viewport } from './metadata'
import { fontSans, fontKaftan } from '@/lib/font'

export const metadata = rootMetadata
export { viewport }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='pt-BR'
			className={cn('scroll-smooth', fontSans.variable, fontKaftan.variable)}
			suppressHydrationWarning
		>
			<body
				className={cn(
					'w-screen overflow-x-hidden bg-primary',
					fontSans.className,
				)}
			>
				{children}
			</body>
		</html>
	)
}
