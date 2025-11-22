import type { Metadata } from 'next'
import { Geist, Geist_Mono, Tajawal } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import '../globals.css'
import { Toaster } from 'sonner';


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
          <Toaster position="top-right" richColors />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}