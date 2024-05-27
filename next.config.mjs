/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// import bundleAnalyzer from "@next/bundle-analyzer";
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === "false",
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   output: "standalone",
//   distDir: "build",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default withBundleAnalyzer(nextConfig);
