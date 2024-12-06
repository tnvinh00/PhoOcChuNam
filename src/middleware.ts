import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './supabase';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  let response = NextResponse.next({ request });

  // ignore for admin, login
  if (['/admin', '/login'].every(p => !path.startsWith(p))) {
    response = handleI18nRouting(request);
  }

  return await updateSession(request, response);
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
