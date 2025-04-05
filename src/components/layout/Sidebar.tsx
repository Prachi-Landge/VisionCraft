
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  ShoppingCart, 
  BarChart2,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  // Navigation items with paths
  const navItems: NavItem[] = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/',
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
      icon: Package,
      label: 'Inventory',
      path: '/inventory',
    },
    {
      icon: BarChart2,
      label: 'Reports',
      path: '/reports',
    },
  ];

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
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  isActive && "bg-slate-100"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
