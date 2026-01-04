import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
    default: "Jeet Library | Best Study Library for Students",
    template: "%s | Jeet Library",
  },
  description:
    "Jeet Library offers a peaceful study environment with modern facilities, flexible timings, and affordable plans for students.",

    robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Jeet Library | Best Study Library",
    description:
      "Looking for a silent study library? Jeet Library provides a focused environment with modern facilities.",
    url: "https://jeetlibrary.com",
    siteName: "Jeet Library",
    images: [
      {
        url: "https://jeetlibrary.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeet Library Study Space",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jeet Library | Best Study Library",
    description:
      "Jeet Library offers silent, comfortable study spaces for students and professionals.",
    images: ["https://jeetlibrary.com/og-image.jpg"],
  },

  metadataBase: new URL("https://jeetlibrary.com"),
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
        <Navbar/>
        {children}
         <FloatingWhatsapp />
        <Footer/>
      </body>
    </html>
  );
}
