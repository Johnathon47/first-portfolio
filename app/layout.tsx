import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";



const font = Azeret_Mono({
  weight:['100', '200','300'],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Johnathon's Portfolio",
  description: "Johnathon's Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrolbar">
      <body
        className={`${font.className}`}>
          <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
