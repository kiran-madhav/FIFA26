import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";


export const viewport: Viewport = {
  themeColor: "#003da5",
};

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 | USA • Canada • Mexico",
  description:
    "The official fan platform for FIFA World Cup 2026. Live scores, match schedule, group standings, team stats, knockout bracket, and fantasy football for the biggest sporting event on the planet.",
  keywords: ["FIFA", "World Cup", "2026", "football", "soccer", "live scores", "schedule", "standings"],
  openGraph: {
    title: "FIFA World Cup 2026",
    description: "Live scores, schedule, standings and more for FIFA World Cup 2026",
    images: ["/wc2026-trophy.jpg"],
    type: "website",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
