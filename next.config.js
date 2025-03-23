/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reduce unnecessary refreshes in development
  webpack: (config, { dev, isServer }) => {
    // Only enable hot reloading for significant changes
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        // Ignore node_modules and other unnecessary files
        ignored: ['**/node_modules/**', '**/.git/**', '**/*.{json,md}'],
        // Add a small delay before triggering refresh
        aggregateTimeout: 300,
        // Reduce polling frequency
        poll: false,
      };
    }
    return config;
  },
  // Optimize page reloads
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Disable unnecessary features in development
  reactStrictMode: true,
  poweredByHeader: false,
  // Optimize image handling
  images: {
    minimumCacheTTL: 60,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 