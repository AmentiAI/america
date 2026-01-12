import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata = {
  title: 'Patriot Supply Co. - Gear Up, Patriot',
  description: 'Premium apparel and merchandise for Americans who love their country, support law enforcement, and stand for secure borders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
