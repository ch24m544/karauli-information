import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karaulis.in"),

  title: {
    default: "Karauli Information | History, Tourism, Temples & Local Services",
    template: "%s | Karauli Information",
  },

  description:
    "Discover Karauli, Rajasthan — explore history, heritage, Kaila Devi Temple, tourist places, hotels, markets, government services, hospitals, education, jobs, events and local businesses.",

  keywords: [
    "Karauli",
    "Karauli Rajasthan",
    "Karauli tourism",
    "Karauli history",
    "Kaila Devi Temple",
    "Karauli tourist places",
    "Karauli hotels",
    "Karauli markets",
    "Karauli government services",
    "Karauli hospitals",
    "Karauli jobs",
    "Karauli local businesses",
  ],

  authors: [{ name: "Karauli Information" }],
  creator: "Karauli Information",
  publisher: "Karauli Information",

  alternates: {
    canonical: "https://karaulis.in",
  },

  openGraph: {
    title: "Karauli Information | History, Tourism & Local Services",
    description:
      "Explore Karauli, Rajasthan — history, heritage, temples, tourist places, hotels, markets, government services, hospitals, education, jobs and local businesses.",
    url: "https://karaulis.in",
    siteName: "Karauli Information",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/karauli-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Karauli Fort and Panchna River, Rajasthan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karauli Information | Rajasthan",
    description:
      "Discover Karauli's history, temples, tourism, local services, businesses and more.",
    images: ["/images/karauli-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}