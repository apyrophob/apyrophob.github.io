'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="mb-4 py-4">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                href={path}
                className={`relative px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-[rgb(var(--primary))]'
                    : 'text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]'
                }`}
                style={isActive ? {
                  boxShadow: 'inset 3px 3px 6px rgb(var(--shadow-dark) / 0.15), inset -3px -3px 6px rgb(var(--shadow-light) / 0.4)',
                  background: 'rgb(var(--card))'
                } : {
                  boxShadow: '4px 4px 8px rgb(var(--shadow-dark) / 0.1), -4px -4px 8px rgb(var(--shadow-light) / 0.4)',
                  background: 'rgb(var(--card))'
                }}
              >
                {name}
              </Link>
            )
          })}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
