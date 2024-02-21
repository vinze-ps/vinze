import type { Metadata } from "next";
import "@/app/globals.scss";
import { Providers } from "@/app/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
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
          <Navbar />
          <PageAnimatePresence>
            <div className="w-full mx-auto min-h-[calc(100vh-4rem)]">{children}</div>
          </PageAnimatePresence>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
