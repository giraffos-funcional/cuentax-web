import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CuentaX — Contabilidad y Remuneraciones para PYMEs Chile",
  description:
    "Contabilidad, remuneraciones y facturacion electronica SII. Todo en una plataforma simple para PYMEs chilenas. Certificado SII.",
  keywords: [
    "contabilidad",
    "remuneraciones",
    "facturacion electronica",
    "SII",
    "PYMEs Chile",
    "liquidaciones de sueldo",
    "libro de compras y ventas",
    "F29",
  ],
  openGraph: {
    title: "CuentaX — Contabilidad y Remuneraciones para PYMEs Chile",
    description:
      "Contabilidad, remuneraciones y facturacion electronica SII. Todo en una plataforma que de verdad es facil de usar.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
