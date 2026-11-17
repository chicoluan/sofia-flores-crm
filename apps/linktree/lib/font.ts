import { Poppins as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const fontKaftan = localFont({
  src: '../public/fonts/kaftan-trial/kaftan-trial.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-kaftan-family',
  display: 'swap',
})
