import { authserve } from '@/stubs/authserve';
import { ChannelCredentials } from '@grpc/grpc-js';

export const getAuthRpc = () => {
  // 1. 初始化 gRPC 客户端
  const client = new authserve.AuthserveClient(
    'localhost:9697',
    ChannelCredentials.createInsecure(),
  );

  return client;
};
