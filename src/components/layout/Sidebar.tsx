
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  ShoppingCart, 
  BarChart2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface SidebarProps {
  className?: string;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/',
    active: true,
  },
  {
    icon: Users,
    label: 'NGOs',
    path: '/ngos',
  },
  {
    icon: BookOpen,
    label: 'Notebooks',
    path: '/notebooks',
  },
  {
    icon: ShoppingCart,
    label: 'Orders',
    path: '/orders',
  },
  {
    icon: BarChart2,
    label: 'Reports',
    path: '/reports',
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 border-r bg-white h-screen flex flex-col", className)}>
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 bg-indigo-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">LS</span>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button
              variant={item.active ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-left font-normal",
                item.active && "bg-slate-100"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
