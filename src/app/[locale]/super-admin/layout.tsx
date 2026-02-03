'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  FileText,
} from 'lucide-react';
import LogoutButton from '@/src/components/ui/Logout';

const navItems = [
  {
    label: 'Dashboard',
    href: '/super-admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Admins',
    href: '/super-admin/admins',
    icon: Users,
  },
  {
    label: 'Owners',
    href: '/super-admin/owners',
    icon: Building2,
  },
  {
    label: 'Reports',
    href: '/super-admin/reports',
    icon: FileText,
  },
  {
    label: 'Stats',
    href: '/super-admin/stats',
    icon: BarChart3,
  },
];

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
        {/* Logo */}
        <div className="border-b border-gray-200 px-6 py-5">
          <Link
            href="/super-admin"
            className="text-xl font-bold text-purple-600"
          >
            Bassni Admin
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + '/');

            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Logout */}
          <LogoutButton />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
