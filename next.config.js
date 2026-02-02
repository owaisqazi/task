/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  srcDir: 'src', // important to tell Next.js to look inside src
};

module.exports = nextConfig;
