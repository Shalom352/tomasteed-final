const sectors = [
  { title: "Agro-Industrie & Agroalimentaire", desc: "Nous accompagnons les acteurs de l'agro-industrie dans la structuration et le financement de leurs chaînes de valeur agricoles, et la création d'infrastructures durables." },
  { title: "Santé", desc: "Nous facilitons le financement de cliniques, d'hôpitaux et de projets innovants, améliorant de l'accès à la santé et la promotion de solutions médicales de qualité adaptées aux réalités du continent." },
  { title: "Mines & Industries extractives", desc: "Solutions financières adaptées aux projets miniers, pétroliers et extractifs. Connaissance approfondie des standards internationaux et des spécificités réglementaires locales." },
  { title: "Hôtellerie, Distribution & Immobilier", desc: "Structuration de financements pour des projets hôteliers, de distribution et immobiliers résidentiels et tertiaires à l'échelle africaine." },
  { title: "Infrastructures & Construction", desc: "Nous proposons des financements pour les projets de construction, qu'il s'agisse d'infrastructures publiques ou privées, en respectant les plus hauts standards de qualité et les exigences locales." },
  { title: "Pétrole & Gaz", desc: "Nous accompagnons les entreprises du secteur pétrolier et guidons dans la mobilisation du capital pour la production, la distribution et la sécurisation de projets énergétiques complexes." },
  { title: "Industrie Manufacturière", desc: "Nous soutenons le développement de l'industrie manufacturière en Afrique, en favorisant la modernisation des usines et l'augmentation des capacités productives et la valeur ajoutée locale." },
  { title: "Eau & Assainissement", desc: "Nous structurons des financements pour des projets d'accès à l'eau potable et l'assainissement, contribuant au développement humain et à la croissance durable en Afrique." },
  { title: "Énergie Renouvelable", desc: "Nous mobilisons des capitaux pour la transition énergétique africaine — solaire, éolien, hydraulique — afin de développer des infrastructures à impact positif et durables." },
];

function ImagePlaceholderIcon() {
  return (
    <div className="image-placeholder" style={{ height: "160px" }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    </div>
  );
}

export default function NosSecteurPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Nos secteurs d&apos;intervention</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 40px", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>Nos secteurs d&apos;intervention</h2>
          <p style={{ color: "#DC4920", fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>
            Une expertise multisectorielle au service du continent.
          </p>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Notre couverture sectorielle reflète la diversité des besoins de financement en Afrique et la profondeur de l&apos;expertise de nos équipes.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section style={{ padding: "0 0 60px", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {sectors.map((s, i) => (
              <div key={i} className="sector-card" style={{ background: "#F9F9F9" }}>
                <ImagePlaceholderIcon />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontWeight: 800, marginBottom: "10px", fontSize: "0.9rem" }}>{s.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
