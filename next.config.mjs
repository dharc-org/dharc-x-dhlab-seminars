/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath and assetPrefix in production for GitHub Pages
  ...(isProd && {
    basePath: '/dharc-x-dhlab-seminars',
    assetPrefix: '/dharc-x-dhlab-seminars',
  }),
};

export default nextConfig;
