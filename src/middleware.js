import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // مسیرهای عمومی
  const publicPaths = ['/login', '/register']

  // اگر توکن وجود ندارد و مسیر فعلی عمومی نیست
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // اگر توکن وجود دارد و مسیر فعلی عمومی است
  if (token && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// فقط روی صفحات اپلیکیشن اجرا شود، نه فایل‌های استاتیک
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|img|fonts|api).*)',
  ],
}