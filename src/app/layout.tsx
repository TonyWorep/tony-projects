import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tonys projects",
  description: "yo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark flex flex-col`}>{children}</body>
    </html>
  );
}
