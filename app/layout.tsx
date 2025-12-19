import type { Metadata } from 'next'
import { Poppins, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estofados Lucrativos | Ganhe R$ 7.000 a R$ 9.000 extras por mês',
  description: 'Aprenda a ganhar de R$ 7.000 a R$ 9.000 EXTRAS por mês oferecendo um serviço simples de limpeza de estofados para os mesmos clientes que você já atende — sem trabalhar mais horas.',
  keywords: ['limpeza de estofados', 'curso online', 'renda extra', 'diarista', 'faxineira', 'estofados lucrativos'],
  authors: [{ name: 'Estofados Lucrativos' }],
  openGraph: {
    title: 'Estofados Lucrativos | Ganhe R$ 7.000 a R$ 9.000 extras por mês',
    description: 'Curso online passo a passo + scripts prontos + modelo de proposta. Aprenda a oferecer limpeza de estofados e aumente sua renda!',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <Script
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

