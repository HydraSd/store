import HeaderTop from '@/components/Header/HeaderTop'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
// import Bot from '@/components/Bot'
import MyChatComponent from '@/components/MainBot'
import ToastPorvider from '@/providers/toast-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedMix',
  description:  "Welcome to RedMix, your one-stop destination for high-quality vehicle spare parts in Sri Lanka. Whether you're a car enthusiast, a professional mechanic, or a vehicle owner in need of replacement parts, we've got you covered. Browse through our extensive catalog of genuine and affordable spare parts for all major makes and models. With a commitment to excellence, we offer a seamless online shopping experience, speedy delivery, and exceptional customer service. Trust us to keep your vehicles running smoothly. Start exploring our wide range of automotive solutions today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastPorvider />
        <HeaderTop />
        <Header />
        <div className='z-60'>

    <MyChatComponent />
        </div>
        {/* <Bot /> */}
        {children}
        </body>
    </html>
  )
}
