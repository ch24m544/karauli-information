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
    default:
      "Karauli District Rajasthan | History, Heritage, Temples, Tourism & Local Services",
    template: "%s | Karauli Information",
  },

  description:
    "Discover Karauli district, Rajasthan — explore history, heritage, Kaila Devi Temple, Madan Mohan Ji Temple, Anjana Mata Temple, Mahavir Jain Temple, Panchna Dam, tourist places, hotels, markets, government services, hospitals, education, jobs, events and local businesses.",

  keywords: [
    "Karauli",
    "Karauli District",
    "Karauli District Rajasthan",
    "Karauli Rajasthan",
    "Karauli tourism",
    "Karauli history",
    "Karauli heritage",

    "Kaila Devi Temple",
    "Kaila Devi Karauli",
    "Kaila Devi Temple Karauli",

    "Madan Mohan Ji Temple Karauli",
    "Madan Mohan Ji Mandir Karauli",
    "Madan Mohan Temple Karauli",

    "Anjana Mata Temple Karauli",
    "Anjana Mata Mandir Karauli",
    "Anjana Mata Temple Rajasthan",

    "Mahavir Jain Temple Karauli",
    "Mahavir Jain Mandir Karauli",
    "Mahavir Jain Temple Rajasthan",

    "Panchna Dam Karauli",
    "Panchna Dam Rajasthan",

    "Karauli tourist places",
    "Karauli tourist attractions",
    "Karauli places to visit",
    "Karauli hotels",
    "Karauli restaurants",
    "Karauli markets",
    "Karauli government services",
    "Karauli hospitals",
    "Karauli schools",
    "Karauli colleges",
    "Karauli jobs",
    "Karauli local businesses",
    "Karauli events",
  ],

  authors: [
    {
      name: "Karauli Information",
    },
  ],

  creator: "Karauli Information",

  publisher: "Karauli Information",

  alternates: {
    canonical: "https://karaulis.in",
  },

  openGraph: {
    title:
      "Karauli District Rajasthan | History, Heritage, Temples & Tourism",

    description:
      "Explore Karauli district, Rajasthan — history, heritage, Kaila Devi Temple, Madan Mohan Ji Temple, Anjana Mata Temple, Mahavir Jain Temple, Panchna Dam, tourist places, hotels, markets, government services, hospitals, education, jobs and local businesses.",

    url: "https://karaulis.in",

    siteName: "Karauli Information",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/karauli-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Karauli Fort and Panchna Dam, Rajasthan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Karauli District Rajasthan | History, Heritage, Temples & Tourism",

    description:
      "Discover Karauli's history, Kaila Devi Temple, Madan Mohan Ji Temple, Anjana Mata Temple, Mahavir Jain Temple, Panchna Dam, tourism and local services.",

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

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}