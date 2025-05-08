import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
// import ClientDashboardLayout from '@/components/dashboard/client-dashboard-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'ProjectFlow - Effortless Project Management',
  description: 'A powerful, intuitive project management tool with Kanban boards, task assignment, and analytics to help teams deliver outstanding results.',
  keywords: 'project management, kanban boards, task management, team collaboration, project analytics',
  authors: [{ name: 'ProjectFlow Team' }],
  creator: 'ProjectFlow',
  publisher: 'ProjectFlow',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://projectflow.com',
    title: 'ProjectFlow - Effortless Project Management',
    description: 'A powerful, intuitive project management tool with Kanban boards, task assignment, and analytics to help teams deliver outstanding results.',
    siteName: 'ProjectFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProjectFlow - Effortless Project Management',
    description: 'A powerful, intuitive project management tool with Kanban boards, task assignment, and analytics to help teams deliver outstanding results.',
    creator: '@projectflow',
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
