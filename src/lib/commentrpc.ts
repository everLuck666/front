import { getHost } from '@/env/env';
import { commentrpc } from '@/stubs/commentrpc';
import { ChannelCredentials } from '@grpc/grpc-js';

export const getCommentRpc = () => {
  // 1. 初始化 gRPC 客户端
  const client = new commentrpc.CommentrpcClient(
    `${getHost()}:8101`,
    ChannelCredentials.createInsecure(),
  );

  return client;
};
