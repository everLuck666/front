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


export const getAuthRpcClient = async () => {
  // 1. 初始化 gRPC 客户端
  const client = new authserve.AuthserveClient(
    'localhost:9697',
    ChannelCredentials.createInsecure(),
  );

   // 2. 等待通道就绪（5秒超时）
   await new Promise((resolve, reject) => {
    client.waitForReady(Date.now() + 5000, (err) =>
      err ? reject(err) : resolve(true),
    );
  });

  return client;
};