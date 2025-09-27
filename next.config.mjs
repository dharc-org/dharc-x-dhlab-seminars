/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dharc-x-dhlab-seminars',
  assetPrefix: '/dharc-x-dhlab-seminars',
};

export default nextConfig;
