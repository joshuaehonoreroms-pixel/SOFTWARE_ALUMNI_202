import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const metadata: Metadata = {
  title: "SN - Software Engineering Network",
  description: "Connecting Software Engineering Students & Alumni - Network, Learn, Mentor, Grow",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClerkProvider>
          <ConvexProvider client={convex}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Analytics />
            </ThemeProvider>
          </ConvexProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
