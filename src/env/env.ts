// 判断开发环境
export const isDev = () => process.env.NEXT_PUBLIC_DEPLOY_ENV === 'development';

// 判断生产环境
export const isProd = () => process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production';

export const getHost = () => {
  return isDev() ? 'localhost' : '43.139.247.92';
};
