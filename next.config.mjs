/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  basePath: "/madera",
  assetPrefix: "/madera",
  distDir: "docs"
};

export default nextConfig;
