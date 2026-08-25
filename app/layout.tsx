import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const description =
  "Royal Estates is a trusted land developer in Jamshedpur offering premium 30x40 land plots, 1200 sq ft plot options, ownership guidance, and secure investment support.";

export const metadata: Metadata = {
  metadataBase: new URL("https://royalestates.in"),
  title: "Royal Estates | Trusted Land Developer in Jamshedpur",
  description,
  applicationName: "Royal Estates",
  openGraph: {
    title: "Royal Estates | Trusted Land Developer in Jamshedpur",
    description,
    url: "https://royalestates.in",
    siteName: "Royal Estates",
    images: [
      {
        url: "/images/projects/developed-plotted-layout.webp",
        width: 1200,
        height: 630,
        alt: "Royal Estates trusted land developer in Jamshedpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Estates | Trusted Land Developer in Jamshedpur",
    description,
    images: ["/images/projects/developed-plotted-layout.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

