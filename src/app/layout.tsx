import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout/header";
import { cn } from "@/components/ui/core";
import { ThemeProvider } from "@/components/ui/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteURL = process.env.SITE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    template: "%s | andresas",
    default: "andresas",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="space-y-6 mt-4 mb-6">{children}</main>
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId="G-LMCCY3YD4P" />
    </html>
  );
}
