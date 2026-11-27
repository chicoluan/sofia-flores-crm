import type { Metadata, Viewport } from 'next'

export const rootMetadata: Metadata = {
  metadataBase: new URL('https://sofialorescariri.com'),

  applicationName: 'Sofia Flores',

  title: {
    default: 'Sofia Flores | Flores, Buquês e Presentes no Cariri',
    template: '%s | Sofia Flores',
  },

  description:
    'Surpreenda com a beleza das flores. Conheça nossos buquês, arranjos florais, presentes e decorações especiais. Atendimento em Crato e região do Cariri - CE.',

  keywords: [
    'Sofia Flores',
    'floricultura no Cariri',
    'floricultura em Crato',
    'buquês de flores',
    'buquê de rosas',
    'arranjos florais',
    'flores para presente',
    'presentes especiais',
    'decoração de casamento',
    'decoração floral',
    'flores em Crato CE',
    'floricultura Crato Ceará',
  ],

  authors: [
    {
      name: 'Sofia Flores',
    },
  ],

  creator: 'Sofia Flores',
  publisher: 'Sofia Flores',

  icons: {
    icon: [
      {
        url: '/favicon.svg',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Sofia Flores',
    title: 'Sofia Flores | Flores que encantam',
    description:
      'Descubra nossos buquês, arranjos, presentes e decorações florais. Entre em contato, conheça nosso catálogo e encontre nossa localização.',
    images: [
      {
        url: '/img/openGraph/openGraph.png',
        width: 1200,
        height: 630,
        alt: 'Sofia Flores - Buquês, arranjos e presentes florais',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sofia Flores | Flores que encantam',
    description:
      'Buquês, arranjos florais, presentes e decorações especiais no Cariri.',
    images: ['/img/openGraph/openGraph.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F8F6F0',
}
