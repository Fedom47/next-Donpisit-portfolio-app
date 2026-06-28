import { Sarabun, Prompt, Kanit } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// ฟอนต์ที่ 1
const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
  variable: '--font-sarabun',
})

// ฟอนต์ที่ 2
const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '600'],
  variable: '--font-prompt',
})

// ฟอนต์ที่ 3
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
  variable: '--font-kanit',
})

export const metadata = {
  title: 'Portfolio - ชื่อของฉัน',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${sarabun.variable} ${prompt.variable} ${kanit.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}