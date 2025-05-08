'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();
  
  const links = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      active: pathname === '/dashboard',
    },
    {
      href: '/projects',
      label: 'Projects',
      active: pathname === '/projects' || pathname.startsWith('/projects/'),
    },
    {
      href: '/analytics',
      label: 'Analytics',
      active: pathname === '/analytics',
    },
    {
      href: '/team',
      label: 'Team',
      active: pathname === '/team',
    },
  ];
  
  return (
    <nav className="hidden md:flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            link.active ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}