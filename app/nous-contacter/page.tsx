const offices = [
  { code: "UAE", city: "Abu Dhabi", email: "contact@tomasteed.com", coverage: "", bg: "#2D6A3F", flag: "🇦🇪" },
  { code: "CIV", city: "Abidjan", email: "", coverage: "Coverage depuis Abidjan", bg: "#E8552E", flag: "🇨🇮" },
  { code: "SEN", city: "Dakar", email: "", coverage: "Coverage depuis Dakar", bg: "#2D6A3F", flag: "🇸🇳" },
  { code: "FRA", city: "Paris", email: "", coverage: "Coverage depuis Paris", bg: "#1A3B8C", flag: "🇫🇷" },
];

const contacts = [
  { name: "Mohamed El Fadel Kane", title: "Managing Partner", email: "fadel.kane@tomasteed.com" },
  { name: "Claude Guillabert", title: "Partner", email: "claude.guillabert@tomasteed.com" },
  { name: "Rokhya Gueye", title: "Partner", email: "rokhya.gueye@tomasteed.com" },
  { name: "Stéphane Lekeufack", title: "Director", email: "stephane.lekeufack@tomasteed.com" },
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
              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "16px" }} className="line-orange">
                Parlons de votre projet
              </h2>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
                Chaque projet commence par une conversation. Prenez contact avec nos équipes — nous vous répondrons avec la confidentialité et la diligence qui s&apos;imposent.
              </p>
            </div>
            <div>
              <div className="image-placeholder" style={{ height: "260px", borderRadius: "8px", flexDirection: "column", gap: "8px", background: "#1C1C2E" }}>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem" }}>Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos équipes */}
      <section style={{ background: "#F5F5F5", padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px" }}>Nos équipes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {offices.map((o, i) => (
              <div key={i} style={{ background: o.bg, color: "white", borderRadius: "8px", padding: "20px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>{o.flag}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", opacity: 0.85, marginBottom: "2px" }}>{o.code}</div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>{o.city}</div>
                {o.email && (
                  <a href={`mailto:${o.email}`} style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", textDecoration: "none" }}>
                    {o.email}
                  </a>
                )}
                {o.coverage && (
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{o.coverage}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact persons */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "32px" }} className="line-orange">
            Contact
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {contacts.map((c, i) => (
              <div key={i} className="contact-person" style={{ borderBottom: "1px solid #F0F0F0", paddingBottom: "20px" }}>
                <AvatarIcon />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#E8552E", marginBottom: "2px" }}>{c.name}</div>
                  <div style={{ color: "#888", fontSize: "0.85rem", marginBottom: "8px" }}>{c.title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8552E" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <a href={`mailto:${c.email}`} style={{ color: "#555", fontSize: "0.85rem", textDecoration: "none" }}>
                      {c.email}
                    </a>
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
