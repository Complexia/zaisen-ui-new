/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "example.com"],
  },
  reactStrictMode: true,
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    ALCHEMY_NETWORK: process.env.ALCHEMY_NETWORK,
    NEXT_PUBLIC_ALCHEMY_NETWORK: process.env.NEXT_PUBLIC_ALCHEMY_NETWORK,
    NEXT_PUBLIC_DEFAULT_CHAIN: process.env.NEXT_PUBLIC_DEFAULT_CHAIN,

    // Airstack
    AIRSTACK_API_KEY: process.env.AIRSTACK_API_KEY,
    AIRSTACK_ENDPOINT: process.env.AIRSTACK_ENDPOINT,
  },
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
