// import type { Metadata } from 'next'
// import { Geist, Geist_Mono, Tajawal } from 'next/font/google'
// // import { Analytics } from '@vercel/analytics/next'
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages, getLocale } from 'next-intl/server';
// import '../globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });
// const tajawal = Tajawal({ 
//   weight: ['300', '400', '500', '700', '800'],
//   subsets: ["arabic"],
//   variable: '--font-tajawal'
// });

// export const metadata: Metadata = {
//   title: 'Sirgad - Your Trusted IT Partner',
//   description: 'Innovative technology solutions for a digital world',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   const locale = await getLocale();
//   const messages = await getMessages();
//   const isRTL = locale === 'ar';

//   return (
//     <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${tajawal.variable}`}>
//       <body className={`${isRTL ? 'font-tajawal' : 'font-sans'} antialiased`}>
//         <NextIntlClientProvider messages={messages} locale={locale}>
//           {children}
//         </NextIntlClientProvider>
//         {/* <Analytics /> */}
//       </body>
//     </html>
//   )
// }
// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Tajawal } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import '../globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700', '800'],
  subsets: ["arabic"],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: 'Sirgad - Your Trusted IT Partner',
  description: 'Innovative technology solutions for a digital world',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${tajawal.variable}`}>
      <body className={`${isRTL ? 'font-tajawal' : 'font-sans'} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}