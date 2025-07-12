import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // مسیرهای عمومی که نیاز به احراز هویت ندارند
  const publicPaths = ['/login', '/register']
  
  // مسیرهای خاصی که باید نادیده گرفته شوند
  const ignoredPaths = ['/api/', '/_next/', '/favicon.ico', '/img/', '/fonts/']
  
  // بررسی اینکه آیا مسیر فعلی باید نادیده گرفته شود
  if (ignoredPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }
  
  // دریافت توکن از کوکی
  const tokenCookie = request.cookies.get('token')
  const token = tokenCookie?.value
  
  // بررسی معتبر بودن توکن
  const isValidToken = token && 
                      token !== 'undefined' && 
                      token !== 'null' && 
                      token.trim() !== '' &&
                      token.length > 10
  
  console.log('Middleware Debug:', {
    pathname,
    hasToken: !!token,
    tokenValue: token ? token.substring(0, 10) + '...' : 'none',
    isValid: isValidToken
  })
  
  // اگر کاربر در صفحه لاگین یا رجیستر است
  if (publicPaths.includes(pathname)) {
    // اگر توکن معتبر دارد، به صفحه اصلی برود
    if (isValidToken) {
      console.log('Redirecting to home - Valid token')
      return NextResponse.redirect(new URL('/', request.url))
    }
    // اگر توکن ندارد، در همان صفحه بماند
    return NextResponse.next()
  }
  
  // برای تمام صفحات دیگر (شامل صفحه اصلی)
  if (!isValidToken) {
    console.log('Redirecting to login - Invalid token')
    const response = NextResponse.redirect(new URL('/login', request.url))
    
    // پاک کردن کوکی‌های نامعتبر
    response.cookies.delete('token')
    response.cookies.set('token', '', { 
      path: '/', 
      maxAge: 0,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    })
    
    return response
  }
  
  // اگر توکن معتبر است، اجازه دسترسی بده
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|img|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}