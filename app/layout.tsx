import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Kue — Freshly Baked Cakes",
  description:
    "Discover freshly baked cakes made with care by Sunqiest. Find a sweet treat for every celebration and everyday moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />

        {children}

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}