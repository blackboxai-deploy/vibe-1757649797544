import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/contexts/AppContext'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wondr Analytics Platform',
  description: 'Interactive geospatial platform for Wondr adoption analysis across Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <div className="min-h-screen bg-slate-50">
            {children}
          </div>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  )
}