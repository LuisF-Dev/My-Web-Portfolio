/**  @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.optimaley.com",
                port: "",
                pathname:
                    "/wp-content/uploads/2014/09/foto-perfil-generica.jpg",
            },
        ],
    },
};

export default nextConfig;
