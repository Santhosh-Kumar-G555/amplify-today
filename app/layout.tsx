// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-bebas' 
})

const syne = Syne({ 
  weight: ['400', '700', '800'], 
  subsets: ['latin'], 
  variable: '--font-syne' 
})

const dmSans = DM_Sans({ 
  weight: ['400', '500', '700'], 
  subsets: ['latin'], 
  variable: '--font-dm' 
})

const jetbrains = JetBrains_Mono({ 
  weight: ['400'], 
  subsets: ['latin'], 
  variable: '--font-mono' 
})

export const viewport: Viewport = {
  themeColor: '#FF6B00',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://amplifytoday.in'),
  title: 'Amplify Today | Digital Growth for Indian Businesses',
  description: 'Website design, SEO, social media management & digital marketing for small businesses in India. Get found online. Grow faster.',
  keywords: 'website design india, seo bangalore, social media management, digital marketing small business india, amplify today',
  openGraph: {
    title: 'Amplify Today — Your Business. Online. Amplified.',
    description: 'We take offline businesses and make them explode online. Website, SEO, Instagram, Google — everything handled.',
    url: 'https://amplifytoday.in',
    siteName: 'Amplify Today',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplify Today — Digital Growth for India',
    description: 'Website + SEO + Social + Growth. All handled.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="antialiased selection:bg-cyan selection:text-void">
        {children}
      </body>
    </html>
  )
}
