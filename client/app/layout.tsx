import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jiva",
  description: "A productivity and safety management app for coal mines.",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "256x256",
        type: "image/png",
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} antialiased min-h-full flex flex-col relative bg-black`}
      >
        <Navbar />
        <main className="flex-1 w-full pt-[72px] sm:pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
