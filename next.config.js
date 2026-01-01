/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Esta linha garante que o Next.js gere os arquivos no local que a Vercel espera
  output: 'standalone',
}

module.exports = nextConfig
