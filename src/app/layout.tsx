import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vivek Dhawan | SOC Analyst Portfolio',
  description: 'BCA final year student and aspiring SOC Analyst with hands-on experience in Linux log analysis, threat detection, Python security tools, and incident response workflows.',
  keywords: ['Vivek Dhawan', 'SOC Analyst', 'Cybersecurity', 'Threat Detection', 'Log Analysis', 'Python Security', 'Incident Response'],
  authors: [{ name: 'Vivek Dhawan' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Vivek Dhawan | SOC Analyst Portfolio',
    description: 'Aspiring SOC Analyst with hands-on experience in cybersecurity operations, Linux log analysis, and Python security automation.',
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
