import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mikav AI",
    template: "%s | Mikav AI",
  },
  description:
    "Open-source Malayalam AI copilot — know Kerala deep, build Kerala forward. Ask anything about Kerala's art, culture, history, and festivals.",
  metadataBase: new URL("https://mikav.in"),
  keywords: [
    "Mikav",
    "Malayalam AI",
    "Kerala",
    "Kerala culture",
    "Malayalam",
    "open source",
    "AI copilot",
    "Kerala art",
    "Kerala history",
    "Kerala festivals",
  ],
  authors: [{ name: "Mikav", url: "https://mikav.in" }],
  creator: "Mikav",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mikav.in",
    siteName: "Mikav AI",
    title: "Mikav AI — Open-source Malayalam AI Copilot",
    description:
      "Know Kerala deep, build Kerala forward. Native Malayalam AI for art, culture, history, and festivals.",
    images: [
      {
        url: "/icons/app/icon-dark.png",
        width: 512,
        height: 512,
        alt: "Mikav AI",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mikav AI — Open-source Malayalam AI Copilot",
    description:
      "Know Kerala deep, build Kerala forward. Native Malayalam AI for art, culture, history, and festivals.",
    images: ["/icons/app/icon-dark.png"],
  },
  icons: {
    icon: "/icons/app/favicon.png",
    apple: "/icons/app/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
