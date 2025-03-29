import { commentrpc } from '@/stubs/commentrpc';
import { ChannelCredentials } from '@grpc/grpc-js';

export const getCommentRpc = () => {
  // 1. 初始化 gRPC 客户端
  const client = new commentrpc.CommentrpcClient(
    'localhost:8101',
    ChannelCredentials.createInsecure(),
  );

  return client;
};
