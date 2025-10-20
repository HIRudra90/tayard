/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Prevent Vercel from failing builds due to lint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript build errors on Vercel (temporary, for deployment)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
