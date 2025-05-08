'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { MainNav } from '@/components/dashboard/main-nav';
import { Sidebar } from '@/components/dashboard/sidebar';
import { UserNav } from '@/components/dashboard/user-nav';
import { MobileNav } from '@/components/dashboard/mobile-nav';

export default function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-shrink-0">
          <Sidebar />
        </aside>
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top navigation */}
          <header className="h-16 border-b flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4">
              <MobileNav />
              <MainNav />
            </div>
            <UserNav />
          </header>
          {/* Main content area */}
          <div className="flex-1 overflow-auto">
            <main className="container mx-auto py-6 px-4 md:px-6">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
} 