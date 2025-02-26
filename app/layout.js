import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NavBar, Footer} from "../components"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meta Mint",
  description: "Seamless, cutting-edge NFT experience for creators & collectors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
