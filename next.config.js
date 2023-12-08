/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["firebasestorage.googleapis.com", "image.made-in-china.com"],
        formats: ["image/webp"],
    }
}

module.exports = nextConfig
