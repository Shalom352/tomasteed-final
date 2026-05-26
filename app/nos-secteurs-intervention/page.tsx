const sectors = [
  {
    title: "Eau & Assainissement",
    desc: "Structuration de financements pour l'accès à l'eau potable et l'assainissement. Des investissements essentiels pour le développement humain et la croissance durable en Afrique.",
  },
  {
    title: "Santé",
    desc: "Financement d'infrastructures hospitalières, de cliniques et de projets innovants. Amélioration de l'offre de soins et promotion de solutions médicales adaptées aux réalités du continent.",
  },
  {
    title: "Agro-Industrie & Agroalimentaire",
    desc: "Projets agro-industriels, instruments de crédit spécialisés, solutions d'import/export, instruments de crédit spécialisés et conseil stratégique pour la souveraineté alimentaire et la création de valeur agricole.",
  },
  {
    title: "Énergie & Ressources naturelles",
    desc: "Accompagnement dans la structuration de projets énergétiques — électricité, renouvelable, pétrole/gaz. Soutien aux investissements dans les environnements réglementaires complexes.",
  },
  {
    title: "Infrastructures & Secteur public",
    desc: "Financement d'infrastructures hospitalières, de cliniques et de projets innovants. Amélioration de l'offre de soins et promotion de solutions médicales de qualité adaptées aux réalités du continent.",
  },
  {
    title: "Industrie Manufacturière",
    desc: "Financement de la modernisation industrielle – usines, chaînes de production, zones industrielles. Accompagnement stratégique pour le renforcement de la valeur ajoutée locale.",
  },
  {
    title: "Télécommunications, Médias & Technologie",
    desc: "Financement de licences, d'infrastructures télécoms et des plateformes numériques. Soutien à la transformation digitale et à l'émergence de l'économie de la connaissance en Afrique.",
  },
  {
    title: "Immobilier & Construction",
    desc: "Structuration de financements pour des projets immobiliers résidentiels et tertiaires. Accompagnement dans la croissance des promoteurs et bailleurs sociaux à l'échelle africaine.",
  },
  {
    title: "Mines & Industries extractives",
    desc: "Solutions financières adaptées aux projets miniers, pétroliers et extractifs. Connaissance approfondie des standards internationaux et des spécificités réglementaires locales.",
  },
];

function ImagePlaceholder() {
  return (
    <div className="image-placeholder" style={{ height: "160px" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
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
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>Nos secteurs d&apos;intervention</h2>
          <p style={{ color: "#E8552E", fontWeight: 600, marginBottom: "8px", fontSize: "1rem" }}>
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
                <ImagePlaceholder />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "10px", fontSize: "0.95rem" }}>{s.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
