import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import { MaterialIconsLoader } from "./components/ui/MaterialIconsLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "West Edmonton Mall | The World's Original Mega-Mall",
  description:
    "An immersive sales deck for West Edmonton Mall — 5.3M sq ft, 30M annual visitors, world-class retail, entertainment, and events in Edmonton, Alberta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} dark antialiased`}
    >
      <head>
        <meta name="theme-color" content="#131315" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
        <ScrollProgress />
        <Navigation />
        {children}
        {/*
          Injects Material Symbols CSS after hydration — non-blocking.
          next/script only works for JS, not CSS, so we use a client
          component that appends a <link> to <head> via useEffect.
        */}
        <MaterialIconsLoader />
      </body>
    </html>
  );
}
