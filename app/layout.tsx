import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/back-to-top";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Priworth - template built with shadcndesign.com",
  description:
    "Priworth is a modern and clean SaaS shadcn/ui template built with Priworth",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          {children}
          <BackToTop />
        </body>
      </html>
    </>
  );
}
