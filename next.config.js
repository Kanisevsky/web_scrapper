/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["m.media-amazon.co.uk"],
  },
};

module.exports = nextConfig;
