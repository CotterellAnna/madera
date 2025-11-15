/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  distDir: "/madera",
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  assetPrefix: "/madera",
  basePath: "/madera",
};

export default nextConfig;
