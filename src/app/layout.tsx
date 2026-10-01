import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Niyuga Cosmetics | 100% Natural Skincare & Haircare',
  description:
    'Glow naturally with Niyuga Cosmetics. 100% natural ingredients, organic chemical-free skincare & haircare. 1000+ happy customers. DM to order.',
  keywords: [
    'Niyuga Cosmetics',
    'niyugacosmetics',
    'natural skincare',
    'organic haircare',
    'chemical free skincare',
    'glow naturally',
    'avocado cream',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fffff5] text-[#4a5b35] selection:bg-[#4a5b35] selection:text-[#fffff5]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
