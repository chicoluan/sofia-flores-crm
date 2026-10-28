import type { Metadata, Viewport } from "next";

export const rootMetadata: Metadata = {
	icons: {
		icon: [{ url: "/favicon.", type: "image/svg+xml" }],
	},
	title: {
		default: "Sofia Flores - CRM",
		template: "%s | Sofia Flores",
	},
	description: "Sofia Flores - Painel de Gestão",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "/",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};
