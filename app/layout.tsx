import type { Metadata } from "next";
import "@/app/globals.scss";
import { Providers } from "@/app/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";

export const metadata: Metadata = {
  title: "VINZE",
  description: "VINZE project.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" data-theme="DARK" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </Providers>
      </body>
    </html>
  );
}
