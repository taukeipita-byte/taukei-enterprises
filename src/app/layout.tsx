import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taukeienterprises.com"),
  title: {
    default: "Taukei Enterprises | Building Businesses. Creating Impact.",
    template: "%s | Taukei Enterprises",
  },
  description:
    "Taukei Enterprises is a diversified California-based holding company dedicated to building exceptional businesses and creating lasting value for communities. Founded by Pita G. Taukei.",
  keywords: [
    "Taukei Enterprises",
    "holding company California",
    "business investments",
    "family-owned business",
    "Santa Rosa businesses",
    "Sonoma County businesses",
    "business acquisitions",
    "home care investments",
    "Pita Taukei",
    "Providential Fijian Home Care",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taukeienterprises.com",
    siteName: "Taukei Enterprises",
    title: "Taukei Enterprises | Building Businesses. Creating Impact.",
    description:
      "A diversified California-based holding company dedicated to building exceptional businesses and creating lasting value.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taukei Enterprises — Building Businesses. Creating Impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taukei Enterprises",
    description: "Building Businesses. Creating Impact. Strengthening Communities.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
