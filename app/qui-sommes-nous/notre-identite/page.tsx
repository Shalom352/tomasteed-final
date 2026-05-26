import Link from "next/link";

const distinctions = [
  "Indépendance totale – conseil exclusivement orienté vers l'intérêt du client",
  "Expertise reconnue en structuration et syndication de financements complexes en Afrique",
  "Gouvernement régulé inscrit dans un cadre réglementaire de premier plan (FSRA – ADGM)",
  "Équipe senior et multiculturelle, forte d'une expérience de haut niveau dans les grandes salles de la finance internationale",
  "Présence institutionnelle en Afrique et à l'International au plus près des marchés que nous servons",
  "Engagement ESG intégré dès la conception de chaque solution de financement",
];

const offices = [
  { city: "Abu Dhabi", country: "UAE", flag: "🇦🇪", role: "Siège social & Régulation FSRA" },
  { city: "Abidjan", country: "CIV", flag: "🇨🇮", role: "Couverture Afrique de l'Ouest" },
  { city: "Paris", country: "FRA", flag: "🇫🇷", role: "Couverture Europe" },
  { city: "Dubai", country: "UAE", flag: "🇦🇪", role: "Couverture Moyen-Orient" },
];

export default function NotreIdentitePage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#F5F5F5", padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
        <div className="container" style={{ fontSize: "0.85rem", color: "#666" }}>
          <Link href="/qui-sommes-nous/notre-identite" style={{ color: "#666", textDecoration: "none" }}>Qui sommes-nous ?</Link>
          {" "}&gt;{" "}
          <span style={{ color: "#E8552E" }}>Notre identité</span>
        </div>
      </div>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Notre identité</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
            Fondée en 2020, Tomasteed est une banque d&apos;affaires indépendante spécialisée dans la structuration de financements et le conseil en investissements, régulée par la Financial Services Regulatory Authority (FSRA) de Abu Dhabi. Tomasteed est l&apos;une des rares structures africaines et à vocation internationale à être soumise aux standards de gouvernance et de conformité du plus exigeant bureau financier international.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
            Tomasteed est née d&apos;une ambition précise : offrir aux acteurs publics et privés africains, l&apos;expertise d&apos;une banque d&apos;affaires indépendante, entièrement dédiée à leur développement. Notre équipe se mobilise pour construire avec chaque client — qu&apos;il s&apos;agisse d&apos;institutions financières africaines ou internationales — une maîtrise technique des financements alignée sur les objectifs de long terme de nos clients.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Nous collaborons avec une large diversité d&apos;acteurs — banques locales et régionales, institutions de développement, fonds de private equity et family offices — afin de favoriser la circulation des capitaux, de lever des portefeuilles d&apos;acteurs économiques africains de premier plan.
          </p>
        </div>
      </section>

      {/* Nos équipes */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "32px" }}>Nos équipes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {offices.map((o, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E5E5E5", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{o.flag}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#888", marginBottom: "4px" }}>{o.country}</div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>{o.city}</div>
                <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.4 }}>{o.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui nous distingue */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "32px" }}>Ce qui nous distingue</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {distinctions.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "16px", background: "#F9F9F9", borderRadius: "6px", borderLeft: "3px solid #E8552E" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#E8552E", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>
                  ✓
                </div>
                <p style={{ margin: 0, color: "#333", fontSize: "0.9rem", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
