import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

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
const nunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",  // Adjust based on the weights available in the variable font
});

import type { Viewport } from "next";

// Define metadata constants with updated app details
const APP_NAME = "OCBC BonusMax - Demo";
const APP_DEFAULT_TITLE = "OCBC BonusMax - Demo";
const APP_TITLE_TEMPLATE = "%s - OCBC BonusMax Demo";
const APP_DESCRIPTION = "Explore OCBC BonusMax Demo: see how you can achieve your financial goals with high-yield savings, cashback, and rewards for life's big-ticket expenses.";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};


export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
