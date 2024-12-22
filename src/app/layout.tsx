import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tony/projects",
  description: "yo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col`}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
