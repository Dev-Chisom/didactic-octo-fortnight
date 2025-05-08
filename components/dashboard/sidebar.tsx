'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Layers,
  BarChart2,
  Users,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  
  return (
    <div className={cn("w-64 border-r bg-card flex-shrink-0", className)}>
      <div className="h-16 border-b flex items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="font-semibold text-lg">ProjectFlow</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 h-[calc(100vh-4rem)]">
        <div className="px-3 py-4">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-4 py-2">
              MAIN
            </p>
            <NavItem 
              href="/dashboard" 
              icon={LayoutDashboard} 
              active={pathname === '/dashboard'}
              label="Dashboard"
            />
            <NavItem 
              href="/projects" 
              icon={Layers} 
              active={pathname === '/projects' || pathname.startsWith('/projects/')}
              label="Projects"
            />
            <NavItem 
              href="/analytics" 
              icon={BarChart2} 
              active={pathname === '/analytics'}
              label="Analytics"
            />
            <NavItem 
              href="/team" 
              icon={Users} 
              active={pathname === '/team'}
              label="Team"
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 px-4", 
          active && "bg-accent text-accent-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </Button>
    </Link>
  );
}