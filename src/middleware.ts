import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
//   const session = request.cookies.get('session')?.value;

//   if (!session && !request.nextUrl.pathname.startsWith('/login')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

const response = NextResponse.next()
  // 添加滚动控制响应头[7](@ref)
  response.headers.set('x-scroll-control', 'force-reset')
  return response
}