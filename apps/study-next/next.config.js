//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Support deploying Nx apps to platforms like Vercel
    // See: https://nx.dev/recipes/next/deploy-nextjs
    svgr: true,
  },
  // Add any other Next.js config options here
  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
