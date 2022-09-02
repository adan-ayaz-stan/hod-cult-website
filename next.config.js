/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.logodesign.net"],
  },
  typescript: {
  ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
