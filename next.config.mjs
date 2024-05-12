/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol: 'https',
            },
            {
                hostname: 'secure.rezserver.com',
                protocol: 'https',
            },
            {
                hostname: 'via.placeholder.com',
                protocol: 'http',
            }
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    experimental: {
        instrumentationHook: true,
    }
};

export default nextConfig;
