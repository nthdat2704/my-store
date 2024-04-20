import { cn } from '@/shared/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/shared/styles/global.css';
import Header from '@/shared/components/layout/header';
import Footer from '@/shared/components/layout/footer';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Man Denim',
  description: 'Just Do It. ',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('relative font-sans', fontSans.variable)}>
        <Header />
        <main className="max-w-[1440px] mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
