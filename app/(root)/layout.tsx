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
  title: 'RedMix',
  description:  "Welcome to RedMix, your ultimate destination for premium vehicle spare parts in Sri Lanka. Whether you're a car enthusiast, professional mechanic, or a vehicle owner in need of reliable replacement parts, we've got you covered. Our catalog features genuine, cost-effective spare parts for all major makes and models. With a steadfast commitment to excellence, we provide a seamless online shopping experience, swift delivery, and exceptional customer support. Trust us to keep your vehicles running smoothly. Explore our comprehensive automotive solutions today, and let RedMix be your trusted partner in ensuring your vehicles operate at their best.",
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
