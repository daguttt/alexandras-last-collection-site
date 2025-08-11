import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import localFont from 'next/font/local';

import './globals.css';

const fogtwono5 = localFont({
  src: './fogtwono5.woff2',
  display: 'swap',
  fallback: ['Geist Sans', 'sans-serif'],
  variable: '--font-fogtwono5',
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
    <html lang="en" className={`${fogtwono5.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
