import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "VINZE",
  description: "VINZE project.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" data-theme="DARK" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
