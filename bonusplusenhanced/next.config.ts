// import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

export default withPWA({
  // Your Next.js config
  reactStrictMode: true,
});
