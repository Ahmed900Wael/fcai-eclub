import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.supabase.co",
            },
        ],
    },
    // CSRF protection is enabled by default for Server Actions in Next.js 16
    // No additional configuration needed - framework handles token generation and validation
    experimental: {
        // Ensure server actions are protected
        serverActions: {
            bodySizeLimit: "5mb", // Match our CV upload limit
        },
    },
};

export default nextConfig;
