// const grpcToHttpStatus = (grpcCode: number): number => {
//     switch (grpcCode) {
//       case status.OK: return 200;
//       case status.INVALID_ARGUMENT: return 400;
//       case status.NOT_FOUND: return 404;
//       case status.PERMISSION_DENIED: return 403;
//       case status.UNAUTHENTICATED: return 401;
//       case status.RESOURCE_EXHAUSTED: return 429;
//       case status.FAILED_PRECONDITION: return 412;
//       case status.UNIMPLEMENTED: return 501;
//       case status.UNAVAILABLE: return 503; // 服务不可用
//       default: return 500; // 其他错误统一返回500
//     }
//   };