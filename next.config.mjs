/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {},
    async redirects() {
      return [
        {
          source: '/old-route',
          destination: '/new-route',
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/task_manager',
          destination: 'http://localhost:3000/task_manager',
        },
      ];
    },
  };
  
  export default nextConfig;
  