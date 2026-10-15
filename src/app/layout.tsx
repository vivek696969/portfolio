import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vivek Dhawan | Backend, Network & Security Portfolio',
  description: 'BCA student exploring backend development, network and security engineering, and QA fundamentals through Python scripting, Linux, Wazuh, and practical projects.',
  keywords: ['Vivek Dhawan', 'Backend Development', 'Network Engineering', 'Security Engineering', 'Python', 'Software Testing', 'Linux'],
  authors: [{ name: 'Vivek Dhawan' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Vivek Dhawan | Backend, Network & Security Portfolio',
    description: 'Entry-level technical portfolio covering Python, backend development, networking, security labs, and QA fundamentals.',
    siteName: 'Vivek Dhawan Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-primary text-gray-100 overflow-x-hidden">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
