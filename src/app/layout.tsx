import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { Navigation } from '../components/Navigation'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Paris Trip Guide',
  description: 'A curated guide for our 2 week family trip to Paris.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main className="container">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  )
}
