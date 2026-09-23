import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/lib/theme";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { cookies } from "next/headers";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialTheme = (await cookies()).get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en" className={initialTheme} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider initialTheme={initialTheme}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Manoj | B.Tech Computer Science Student | Software & AI",
    template: "%s | Manoj",
  },
  description:
    "Portfolio of Manoj, a B.Tech Computer Science student building software, AI, automation, and practical technology projects.",
  keywords: [
    "software developer",
    "computer science student",
    "AI",
    "automation",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Manoj" }],
  creator: "Manoj",
  publisher: "Manoj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manoj.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manoj.dev",
    siteName: "Manoj | Portfolio",
    title: "Manoj | B.Tech Computer Science Student | Software & AI",
    description:
      "Portfolio of Manoj, a B.Tech Computer Science student building software, AI, automation, and practical technology projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manoj Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj | B.Tech Computer Science Student",
    description:
      "Portfolio of Manoj, a B.Tech Computer Science student building software, AI, automation, and practical technology projects.",
    images: ["/og-image.png"],
    creator: "@manoj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};