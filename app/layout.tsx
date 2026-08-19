import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { RevealObserver } from '@/components/RevealObserver';
import { SmoothScroll } from '@/components/SmoothScroll';

const geist = localFont({
  src: '../public/fonts/geist-latin-wght-normal.woff2',
  variable: '--font-geist',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

const geistItalic = localFont({
  src: '../public/fonts/geist-latin-wght-italic.woff2',
  variable: '--font-geist-italic',
  weight: '100 900',
  style: 'italic',
  display: 'swap',
});

const geistMono = localFont({
  src: '../public/fonts/geist-mono-latin-wght-normal.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

const siteUrl = 'https://sugumaran.dev';
const description = 'Sugumaran is an AI/ML and full-stack engineer building browser ML tools, realtime systems, and resilient AI products with Python, FastAPI, and Next.js.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sugumaran — AI/ML & Full-Stack Engineer',
  description,
  authors: [{ name: 'Sugumaran S.' }],
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Sugumaran — AI/ML & Full-Stack Engineer',
    description,
    siteName: 'Sugumaran S.',
    locale: 'en_IN',
    images: [{ url: '/profile.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sugumaran — AI/ML & Full-Stack Engineer',
    description,
    images: ['/profile.jpg'],
  },
};

const themeInit = `
(function () {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((stored || (prefersDark ? 'dark' : 'light')) === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistItalic.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="site-shell text-ink dark:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <RevealObserver />
      </body>
    </html>
  );
}
