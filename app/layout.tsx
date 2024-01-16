import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import RootNavbar from '@/components/RootNavbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coding Nav',
  description: 'Coding Nav Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <RootNavbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
