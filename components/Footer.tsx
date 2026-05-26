"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#2E2D2C", color: "white", marginTop: "auto" }}>
      <div className="container" style={{ padding: "48px 24px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "40px" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "white", letterSpacing: "-0.5px" }}>
                Tomasteed<span style={{ color: "#DC4920" }}>.</span>
              </span>
            </div>
            <p style={{ color: "#AAAAAA", fontSize: "0.85rem", lineHeight: "1.6", maxWidth: "320px" }}>
              Banque d&apos;affaires indépendante spécialisée dans la structuration de financements et le conseil en investissements sur les marchés africains et à l&apos;international.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 800, marginBottom: "16px", fontSize: "0.9rem", letterSpacing: "0.5px" }}>Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/nos-clients", label: "Nos clients" },
                { href: "/qui-sommes-nous/notre-identite", label: "Notre identité" },
                { href: "/qui-sommes-nous/notre-equipe", label: "Notre équipe" },
                { href: "/carrieres", label: "Nous rejoindre" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: "#AAAAAA", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#AAAAAA")}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <div style={{ fontWeight: 800, marginBottom: "16px", fontSize: "0.9rem", letterSpacing: "0.5px" }}>Suivez-nous :</div>
            <a href="https://www.linkedin.com/company/tomasteed" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", background: "#0077B5", borderRadius: "6px", marginBottom: "20px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <div>
              <a href="mailto:contact@tomasteed.com"
                style={{ color: "#AAAAAA", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "#AAAAAA")}>
                contact@tomasteed.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #444", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ color: "#888", fontSize: "0.8rem" }}>
            Copyright 2026 Tomasteed · Tous droits réservés
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { href: "/politique-confidentialite", label: "Politique de confidentialité" },
              { href: "/mentions-legales", label: "Mentions légales" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: "#888", textDecoration: "none", fontSize: "0.8rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
