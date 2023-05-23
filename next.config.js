/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "passport-local-mongoose"],
  },
};

module.exports = nextConfig;
