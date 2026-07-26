import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-gfdg3.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sepideh Nilforoushan | React & Next.js Frontend Developer',
    template: '%s | Sepideh Nilforoushan',
  },
  description:
    'React & Next.js frontend developer with banking and enterprise UI experience. Fast, responsive interfaces that ship on deadline.',
  keywords: [
    'hire React developer',
    'Next.js freelancer',
    'Upwork frontend developer',
    'Figma to React',
    'TypeScript developer',
    'responsive web development',
  ],
  authors: [{ name: 'Sepideh Nilforoushan' }],
  creator: 'Sepideh Nilforoushan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sepideh Nilforoushan Portfolio',
    title: 'Sepideh Nilforoushan | React & Next.js Frontend Developer',
    description:
      'Frontend developer with banking and enterprise UI experience. React, Next.js, and reliable delivery on deadline.',
    images: [
      {
        url: '/ventura-camping.webp',
        width: 1200,
        height: 630,
        alt: 'Sepideh Nilforoushan — Frontend Developer portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sepideh Nilforoushan | React & Next.js Frontend Developer',
    description:
      'React & Next.js frontend developer — banking UI experience, responsive interfaces, delivery on deadline.',
    images: ['/ventura-camping.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-[#003258]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
