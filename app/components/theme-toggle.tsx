'use client'

import { useTheme } from '../contexts/theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl text-[rgb(var(--foreground))] transition-all duration-300 cursor-pointer group"
      style={{
        boxShadow: '4px 4px 8px rgb(var(--shadow-dark) / 0.1), -4px -4px 8px rgb(var(--shadow-light) / 0.4)',
        background: 'rgb(var(--card))'
      }}
      aria-label="Toggle theme"
    >
      <svg
        className={`absolute h-5 w-5 transition-all duration-500 ease-out ${
          theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        className={`absolute h-5 w-5 transition-all duration-500 ease-out ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  )
}
