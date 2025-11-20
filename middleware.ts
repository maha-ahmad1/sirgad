// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
//   const response = NextResponse.next();

//   if (!request.cookies.has('NEXT_LOCALE')) {
//     response.cookies.set('NEXT_LOCALE', 'en');
//   }

//   return response;
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)']
// };
// middleware.ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // التحقق إذا كان المسار يحتوي على لغة معروفة
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // الحصول على اللغة من الكوكي أو استخدام الافتراضية
  const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
  
  // إذا كانت اللغة الإنجليزية، لا نضيف /en للمسار
  if (locale === 'en') {
    // للصفحة الرئيسية، نتركها كما هي
    if (pathname === '/') {
      return NextResponse.next();
    }
    // للمسارات الأخرى، نضيفها بدون /en
    return NextResponse.next();
  } else {
    // للغة العربية، نضيف /ar للمسار
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)'
  ]
};