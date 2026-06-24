import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "People&Co — Dijital Medya Ajansı",
  description:
    "Sonuç odaklı dijital medya ajansınız olarak, markanızı anlamlı bağlantılar kurarak büyütüyoruz. Şeffaf, profesyonel ve yenilikçi yaklaşımımızla tanışın.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${hanken.variable} ${inter.variable} ${geist.variable}`}
    >
      <body className="antialiased">{children}</body>
      <Script
        defer
        data-domain="peoplencoagency.com"
        src="http://people-and-co-site-plausible-3dead6-31-97-45-52.sslip.io/js/script.file-downloads.outbound-links.tagged-events.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">{`
        window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
      `}</Script>
    </html>
  );
}
