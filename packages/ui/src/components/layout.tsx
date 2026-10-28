import type { HTMLAttributes } from 'react'
import { cn } from '../lib/utils'

type LayoutRootProps = HTMLAttributes<HTMLDivElement>

const LayoutRoot = ({ className, ...props }: LayoutRootProps) => {
	return <div className={cn('flex', className)} {...props} />
}

type LayoutHeaderProps = HTMLAttributes<HTMLElement>

const LayoutHeader = ({ className, ...props }: LayoutHeaderProps) => {
	return (
		<>
			<div className="fixed z-50 h-1 w-full bg-[#0062AD]" />

			<header
				className={cn(
					'sticky top-0 z-40 bg-background/80 backdrop-blur-sm dark:bg-[#141618]/80',
					className,
				)}
			>
				<div className="container" {...props} />
			</header>
		</>
	)
}

type LayoutContentProps = HTMLAttributes<HTMLElement>

const LayoutContent = ({ className, ...props }: LayoutContentProps) => {
	return <main className={className} {...props} />
}

type LayoutFooterProps = HTMLAttributes<HTMLElement>

const LayoutFooter = ({ className, ...props }: LayoutFooterProps) => {
	return (
		<div className="bg-white dark:bg-background">
			<footer className={cn('container', className)} {...props} />
		</div>
	)
}

type LayoutProps = typeof LayoutRoot & {
	Header: typeof LayoutHeader
	Content: typeof LayoutContent
	Footer: typeof LayoutFooter
	Aside: typeof LayoutAside
}

const Layout = LayoutRoot as LayoutProps

type LayoutAsideProps = HTMLAttributes<HTMLElement>

const LayoutAside = ({ className, ...props }: LayoutAsideProps) => {
	return (
		<aside
			className={cn('w-56 shrink-0 max-lg:hidden', className)}
			{...props}
		/>
	)
}

Layout.Header = LayoutHeader
Layout.Content = LayoutContent
Layout.Footer = LayoutFooter
Layout.Aside = LayoutAside

export default Layout
