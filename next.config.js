/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Tell Next.js your source directory
  // This tells Next to look inside `src` folder for pages/app
  srcDir: 'src',
};

module.exports = nextConfig;
