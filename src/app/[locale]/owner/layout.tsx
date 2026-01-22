'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PackagePlus, Package, Info, LogOut } from 'lucide-react';

const tabs = [
  {
    label: 'Items',
    href: '/owner/items',
    icon: Package,
  },
  {
    label: 'Add Item',
    href: '/owner/add-item',
    icon: PackagePlus,
  },
  {
    label: 'Information',
    href: '/owner/info',
    icon: Info,
  },
];

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-600">Owner Dashboard</h1>
        <button
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600"
          onClick={() => console.log('logout')}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </header>

      {/* Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6">
        <ul className="flex space-x-4">
          {tabs.map((tab) => {
            const isActive =
              pathname === tab.href || pathname.startsWith(tab.href + '/');
            const Icon = tab.icon;
            return (
              <li key={tab.label}>
                <Link
                  href={tab.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
