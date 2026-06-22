// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16: reactCompiler is now a top-level option (not under experimental)
  reactCompiler: true,

  // Keep webpack config for GLB/GLTF and GLSL asset handling.
  // Dev server runs with --webpack flag (see package.json) to use this config.
  webpack: (config) => {
    config.module.rules.push(
      { test: /\.(glb|gltf)$/, use: 'file-loader' },
      { test: /\.(glsl|vs|fs|vert|frag)$/, use: 'raw-loader' }
    )
    return config
  }
}

module.exports = nextConfig
