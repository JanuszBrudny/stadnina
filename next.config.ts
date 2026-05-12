import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	allowedDevOrigins: ['192.168.1.103'],
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
}

export default nextConfig
