/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "passport-local-mongoose"],
    // serverActions: true,
  },
};

module.exports = nextConfig;
