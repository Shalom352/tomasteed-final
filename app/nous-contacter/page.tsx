const offices = [
  { code: "UAE", city: "Abu Dhabi", email: "contact@tomasteed.com", coverage: "Siège social · Régulation FSRA", bg: "#327D48", flag: "🇦🇪" },
  { code: "CIV", city: "Abidjan", email: "", coverage: "Coverage depuis Abidjan", bg: "#DC4920", flag: "🇨🇮" },
  { code: "SEN", city: "Dakar", email: "", coverage: "Coverage depuis Dakar", bg: "#327D48", flag: "🇸🇳" },
  { code: "FRA", city: "Paris", email: "", coverage: "Coverage depuis Paris", bg: "#1A3B8C", flag: "🇫🇷" },
];

const contacts = [
  { name: "Mohamed El Fadel Kane", title: "Managing Director", email: "fadel.kane@tomasteed.com", phone: "(+225) 07 07 08 32" },
  { name: "Claude Guillabert", title: "Partner", email: "claude.guillabert@tomasteed.com", phone: "(+225) 07 07 08 63" },
  { name: "Mouhamadou Ben Barka", title: "Managing Partner", email: "contact@tomasteed.com", phone: "" },
  { name: "Rokhya Gueye", title: "Partner", email: "rokhya.gueye@tomasteed.com", phone: "" },
  { name: "Stéphane Lekeufack", title: "Director", email: "stephane.lekeufack@tomasteed.com", phone: "" },
  { name: "Abdel Noah Ango", title: "Vice President", email: "abdel.ango@tomasteed.com", phone: "" },
];

function AvatarIcon() {
  return (
    <div className="avatar">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5.5" fill="#888"/>
        <path d="M3 25c0-6.075 4.925-11 11-11s11 4.925 11 11" fill="#888"/>
      </svg>
    </div>
  );
}

export default function NousContacterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Contacts</h1>
        </div>
      </section>

      {/* Parlons de votre projet */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "16px" }} className="line-orange">
                Parlons de votre projet
              </h2>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
                Chaque projet commence par une conversation. Prenez contact avec nos équipes — nous vous répondrons avec la confidentialité et la diligence qui s&apos;imposent.
              </p>
              <div style={{ marginTop: "24px" }}>
                <a href="mailto:contact@tomasteed.com" className="btn-orange">Nous écrire</a>
              </div>
            </div>
            <div>
              <div className="image-placeholder" style={{ height: "260px", borderRadius: "8px", flexDirection: "column", gap: "8px", background: "#2E2D2C" }}>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem" }}>Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos équipes */}
      <section style={{ background: "#F5F5F5", padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "24px" }}>Nos équipes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {offices.map((o, i) => (
              <div key={i} style={{ background: o.bg, color: "white", borderRadius: "8px", padding: "24px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{o.flag}</div>
                <div style={{ fontWeight: 700, fontSize: "0.8rem", opacity: 0.8, marginBottom: "2px" }}>{o.code}</div>
                <div style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "8px" }}>{o.city}</div>
                {o.email && (
                  <a href={`mailto:${o.email}`} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}>
                    {o.email}
                  </a>
                )}
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", marginTop: "4px" }}>{o.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact persons */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "32px" }} className="line-orange">Contact</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {contacts.map((c, i) => (
              <div key={i} className="contact-person" style={{ borderBottom: "1px solid #F0F0F0", paddingBottom: "20px" }}>
                <AvatarIcon />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#DC4920", marginBottom: "2px" }}>{c.name}</div>
                  <div style={{ color: "#888", fontSize: "0.8rem", marginBottom: "8px", fontWeight: 600 }}>{c.title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC4920" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <a href={`mailto:${c.email}`} style={{ color: "#555", fontSize: "0.8rem", textDecoration: "none", fontWeight: 600 }}>{c.email}</a>
                    </div>
                    {c.phone && (
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC4920" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        <span style={{ color: "#555", fontSize: "0.8rem", fontWeight: 600 }}>{c.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
