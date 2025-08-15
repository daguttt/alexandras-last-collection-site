import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Nunito_Sans } from 'next/font/google';

import { PostHogProvider } from '@/components/posthog-provider';

import './globals.css';

const fogtwono5 = localFont({
  src: './fogtwono5.woff2',
  display: 'swap',
  fallback: ['serif'],
  variable: '--font-fogtwono5',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Alexandra Ortiz',
  description: 'Joyería, ediciones únicas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fogtwono5.variable} ${nunitoSans.variable} font-body motion-safe:scroll-smooth`}
    >
      <head></head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
