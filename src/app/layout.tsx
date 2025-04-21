import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SneakerVerse",
  description: "Discover the latest in sneakers, streetwear, and trending essentials. Shop shoes, clothing, and exclusive goods all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </WixClientContextProvider>
      </body>
    </html>
  );
}
