import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "POOL WATER | Don’t just go out. Jump in.",
  description: "A late-night adult social game floor built around pool, arcade glow, food, and natural interaction.",
};

export const viewport = {
  themeColor: "#02050a",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#02050a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
