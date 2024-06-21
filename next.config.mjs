/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dc.prod.cloud.atriumsports.com",
        port: "",
        pathname: "/b1n81/**",
      },
    ],
  },
};

export default nextConfig;
