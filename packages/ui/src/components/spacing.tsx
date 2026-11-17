import { cva } from 'class-variance-authority'

export const spacingVariants = cva('', {
	variants: {
		variant: {
			section: 'py-10 md:py-16 xl:py-24',
			footer: 'py-6 md:py-10 xl:py-18',
		},
	},
	defaultVariants: {
		variant: 'section',
	},
})
