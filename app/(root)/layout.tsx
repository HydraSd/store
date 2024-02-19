import { Analytics } from '@vercel/analytics/react';
import HeaderTop from "@/components/Header/HeaderTop";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import MyChatComponent from "@/components/MainBot";
import ToastPorvider from "@/providers/toast-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
// import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOOL Motors: Affordable Spare Parts in Sri Lanka",
  description:
    "DOOL Motors: Your go-to for genuine, affordable vehicle parts in Sri Lanka. Explore a wide range with seamless online shopping and quick delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="v9c2CEKmgiTTg8-_C_9DIsWD0_VFZCFM_7Fkh48uaTI"
        />
        <link rel="icon" href="/logo/logodool.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ToastPorvider />
        <HeaderTop />
        <Header />
        <div className="z-60">
          <MyChatComponent />
        </div>
        {/* <Bot /> */}
        {children}
        <Analytics />
        <SpeedInsights />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
