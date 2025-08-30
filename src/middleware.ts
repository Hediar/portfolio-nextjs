import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 간단한 보호 라우트 미들웨어 (세션/토큰 쿠키 존재 여부 체크)
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/settings');
  if (!isProtected) return NextResponse.next();

  const hasSession = req.cookies.get('session') || req.cookies.get('access_token');
  if (hasSession) return NextResponse.next();

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = '/login';
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};

