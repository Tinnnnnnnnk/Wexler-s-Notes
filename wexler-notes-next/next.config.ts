import type { NextConfig } from 'next'

const isProductionBuild = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  ...(isProductionBuild ? { output: 'export' } : {}),
  outputFileTracingRoot: __dirname,
  env: {
    // Accessible in browser via process.env.NEXT_PUBLIC_*
  },
}

export default nextConfig
