import HeaderTop from '@/components/Header/HeaderTop'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
// import Bot from '@/components/Bot'
import MyChatComponent from '@/components/MainBot'
import ToastPorvider from '@/providers/toast-provider'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedMix - Your One-Stop Shop for Quality Vehicle Spare Parts in Sri Lanka',
  description:  "Welcome to RedMix! Explore our extensive catalog of genuine, cost-effective spare parts for all major vehicle makes and models in Sri Lanka. Whether you're a car enthusiast, professional mechanic, or a vehicle owner, RedMix is your reliable source for a wide range of replacement parts. Enjoy a seamless online shopping experience, swift delivery, and exceptional customer support. Keep your vehicles running smoothly with RedMix - Your trusted one-stop shop for all your vehicle spare part needs. Explore our comprehensive automotive solutions today!"
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
        {/* <Footer /> */}
        </body>
    </html>
  )
}
