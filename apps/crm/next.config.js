/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@sofiaflores/ui',
		'@sofiaflores/better-auth',
		'@sofiaflores/db',
	],
	devIndicators: false,
}

export default nextConfig
