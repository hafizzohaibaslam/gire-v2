import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "gire-test-bucket.s3.us-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "https://jqbuq22eaejghlipymyv7u5quq0fiuzm.lambda-url.us-west-1.on.aws/api/:path*"
    }
  ]
};

export default nextConfig;
