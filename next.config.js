/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.immediate.co.uk",
      },
    ],
  },
};

module.exports = nextConfig;
