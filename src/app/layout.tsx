import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SOC Analyst Portfolio | Cybersecurity Professional',
  description: 'Cybersecurity SOC Analyst portfolio showcasing projects, skills, and certifications.',
  keywords: ['SOC Analyst', 'Cybersecurity', 'SIEM', 'Threat Analysis', 'Security'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'SOC Analyst Portfolio',
    description: 'Cybersecurity professional portfolio',
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Cybersecurity SOC Analyst portfolio showcasing projects, skills, and certifications." />
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
