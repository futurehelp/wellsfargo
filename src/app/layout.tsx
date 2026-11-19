import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wellsfargo-2026.vercel.app"),
  title: "Wells Fargo | Banking built around you",
  description: "A modernized Wells Fargo homepage concept for everyday banking, lending, and financial guidance.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Wells Fargo | Banking built around you",
    description: "A modernized Wells Fargo homepage concept.",
    images: ["/images/home.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
