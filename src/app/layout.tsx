import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { TooltipProvider } from "@/components/ui/Tooltip";
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`flex flex-col`}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Navbar />
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
