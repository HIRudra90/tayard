/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ? Skip ESLint errors during build (for Vercel deploy)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ? Skip TypeScript errors during Vercel build (optional safety)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
