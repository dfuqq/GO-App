/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
	eslint: {
		ignoreDuringBuilds: false,
	},
};

export default nextConfig;
