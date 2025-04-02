import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  /* config options here */
  images: {
    domains: ['img0.baidu.com', '43.139.247.92'], // 添加百度图片域名
    // 可选参数（按需配置）：
    deviceSizes: [640, 1080], // 设备适配尺寸
    imageSizes: [32, 64],      // 生成缩略图尺寸
    formats: ['image/webp'],   // 优先输出格式
  }
};

export default nextConfig;
