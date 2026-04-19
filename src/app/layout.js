import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Ahana Gynaecare & IVF | Bhubaneswar',
  description: 'Ahana Gynaecare & IVF — Premier women\'s healthcare and fertility center in Bhubaneswar. Expert IVF, Obstetrics & Gynaecology services since 2018.',
  keywords: 'IVF Bhubaneswar, Gynaecare, fertility clinic, obstetrics, Dr Sujit Kumar Behera, Ahana Gynaecare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  )
}