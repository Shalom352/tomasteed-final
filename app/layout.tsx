import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Tomasteed. – Conseil & Structuration de Financements en Afrique",
  description: "Banque d'affaires indépendante spécialisée dans la structuration de financements et le conseil en investissements sur les marchés africains et à l'international. Régulée FSRA – ADGM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "var(--font-nunito), Avenir, Arial, sans-serif" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
