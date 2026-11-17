/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@sofiaflores/ui',
		'@sofiaflores/better-auth',
		'@sofiaflores/tsconfig',
		'@sofiaflores/db',
	],
}

export default nextConfig
