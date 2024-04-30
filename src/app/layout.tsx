import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./_components/header";

import "./globals.css";

import "react-image-gallery/styles/css/image-gallery.css";
import { Footer } from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Photos",
  description: "Test app to test parallel routes and other Next.js features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full justify-start">
            <Header/>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
