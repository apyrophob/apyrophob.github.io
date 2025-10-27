'use client'

import { Navbar } from './nav'
import Footer from './footer'
import { ThemeProvider } from '../contexts/theme-provider'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="max-w-3xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 mt-4">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
