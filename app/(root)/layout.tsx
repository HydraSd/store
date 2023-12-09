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
  title: 'RedMix - Your Ultimate Source for Affordable Vehicle Spare Parts in Sri Lanka',
  description:  "Discover the best selection of genuine and affordable vehicle spare parts at RedMix. We cater to car enthusiasts, professional mechanics, and vehicle owners in Sri Lanka, offering a comprehensive range for all major makes and models. Enjoy a seamless online shopping experience, quick delivery, and outstanding customer support. Trust RedMix to keep your vehicles running smoothly. Explore our extensive inventory today for quality and affordability in every spare part you need!"
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
