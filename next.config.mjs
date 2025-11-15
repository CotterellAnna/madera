/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  distDir: "/out",
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
