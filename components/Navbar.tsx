"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [quiOpen, setQuiOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav style={{ background: "white", borderBottom: "1px solid #E5E5E5", position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#2E2D2C", letterSpacing: "-0.5px" }}>
            Tomasteed<span style={{ color: "#DC4920" }}>.</span>
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Qui sommes-nous dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setQuiOpen(true)} onMouseLeave={() => setQuiOpen(false)}>
            <span className={`nav-link${isActive("/qui-sommes-nous") ? " active" : ""}`}
              style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              Qui sommes-nous
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
            </span>
            {quiOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "white", border: "1px solid #E5E5E5", borderRadius: "6px", minWidth: "185px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", padding: "8px 0", zIndex: 200 }}>
                <Link href="/qui-sommes-nous/notre-identite"
                  style={{ display: "block", padding: "10px 20px", color: "#333", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#DC4920")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333")}>
                  Notre identité
                </Link>
                <Link href="/qui-sommes-nous/notre-equipe"
                  style={{ display: "block", padding: "10px 20px", color: "#333", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#DC4920")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333")}>
                  Notre équipe
                </Link>
              </div>
            )}
          </div>

          <Link href="/nos-domaines-expertise" className={`nav-link${isActive("/nos-domaines-expertise") ? " active" : ""}`}>
            Nos domaines d&apos;expertise
          </Link>
          <Link href="/nos-secteurs-intervention" className={`nav-link${isActive("/nos-secteurs-intervention") ? " active" : ""}`}>
            Nos secteurs d&apos;intervention
          </Link>
          <Link href="/nos-clients" className={`nav-link${isActive("/nos-clients") ? " active" : ""}`}>
            Nos clients
          </Link>
          <Link href="/carrieres" className={`nav-link${isActive("/carrieres") ? " active" : ""}`}>
            Carrières
          </Link>
          <Link href="/nous-contacter" className={`nav-link${isActive("/nous-contacter") ? " active" : ""}`}>
            Nous contacter
          </Link>
        </div>

        {/* Language selector */}
        <div style={{ position: "relative" }} onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
          <span style={{
            cursor: "pointer",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "#DC4920",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: "2px solid #DC4920",
            borderRadius: "20px",
            padding: "5px 12px",
            letterSpacing: "0.5px",
            transition: "all 0.2s",
          }}>
            FR <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10z"/></svg>
          </span>
          {langOpen && (
            <div style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", background: "white", border: "1px solid #E5E5E5", borderRadius: "8px", minWidth: "90px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", padding: "6px 0", zIndex: 200 }}>
              <span style={{ display: "block", padding: "9px 18px", fontSize: "0.85rem", cursor: "pointer", color: "#DC4920", fontWeight: 800, background: "rgba(220,73,32,0.06)" }}>FR</span>
              <span style={{ display: "block", padding: "9px 18px", fontSize: "0.85rem", cursor: "pointer", color: "#444", fontWeight: 600 }}>EN</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
