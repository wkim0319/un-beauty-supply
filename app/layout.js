import { Archivo, Archivo_Narrow, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import SchemaOrg from '@/components/SchemaOrg'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-archivo-narrow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://unbeauty.supply'),
  alternates: { canonical: '/' },
  title: "UN Beauty Supply — Detroit's Go-To Beauty Supply for 20+ Years",
  description:
    'Hair, wigs, braiding hair, styling tools & more. 3 stores across Metro Detroit. Real expert help in-store. Call or stop in today.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "UN Beauty Supply — Detroit's Go-To Beauty Supply for 20+ Years",
    description:
      'Hair, wigs, braiding hair, styling tools & more. 3 stores across Metro Detroit. Real expert help in-store.',
    url: 'https://unbeauty.supply',
    siteName: 'UN Beauty Supply',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UN Beauty Supply — Detroit's Go-To Beauty Supply for 20+ Years",
    description:
      'Hair, wigs, braiding hair, styling tools & more. 3 stores across Metro Detroit.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoNarrow.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SchemaOrg />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGV31HGQ9Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGV31HGQ9Q');
          `}
        </Script>
      </body>
    </html>
  )
}
