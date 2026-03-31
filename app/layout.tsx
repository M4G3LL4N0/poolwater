import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POOL WATER",
  description:
    "POOL WATER is a late-night social playground built around pool tables, arcade energy, movement, food, and a room that actually feels alive.",
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
