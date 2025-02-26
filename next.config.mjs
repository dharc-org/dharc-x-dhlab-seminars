/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Based on your package.json homepage, you're using a custom GitHub Pages domain
  // If you're using dharc-x-dhlab-seminars.github.io, you don't need a basePath
  // If you're using username.github.io/repo-name, uncomment and set this:
  // basePath: '/repo-name',
};

export default nextConfig;