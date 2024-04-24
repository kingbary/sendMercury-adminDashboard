/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dplxh8dad/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "www.icon.ico",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
