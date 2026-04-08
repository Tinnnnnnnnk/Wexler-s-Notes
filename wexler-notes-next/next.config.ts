import type { NextConfig } from 'next'

const isProductionBuild = process.env.NODE_ENV === 'production'
const isEditorEnabled = process.env.NEXT_PUBLIC_EDITOR_ENABLED === 'true'

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
    NEXT_PUBLIC_EDITOR_ENABLED: isEditorEnabled.toString(),
  },
}

export default nextConfig
