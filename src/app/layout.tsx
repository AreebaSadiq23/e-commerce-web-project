import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PromoBanner from "@/components/header/promobanner";
import Footer from "@/components/footer/footer";
import { AppProvider } from "../app/context/AppContext"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
        <PromoBanner/>
        {children}
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
