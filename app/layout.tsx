import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | POOL WATER',
    default: 'POOL WATER'
  },
  description: "A late-night social playground built around pool tables, arcade energy, movement, food, and rooms that actually feel alive.",
  openGraph: {
    title: 'POOL WATER',
    description: 'The late-night social playground where pool tables meet arcade energy, movement, and real food.',
    url: 'https://poolwater.com',
    siteName: 'POOL WATER',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POOL WATER',
    description: 'The late-night social playground where pool tables meet arcade energy, movement, and real food.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
