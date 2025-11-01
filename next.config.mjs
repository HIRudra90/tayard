/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empty turbopack block silences the warning and opts you into Turbopack.
  turbopack: {},
  // NOTE: Removed the custom webpack() alias. Prefer tsconfig paths or relative imports.
};

export default nextConfig;
