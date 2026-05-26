const criteria = [
  {
    title: "Rigueur & excellence analytique",
    desc: "Une maîtrise solide des fondamentaux financiers : modélisation, structuration, analyse de crédit. Nous attendons des standards élevés dans chaque livrable, sans exception.",
  },
  {
    title: "Sens du client & de l'engagement",
    desc: "La capacité à comprendre les enjeux de nos clients, à anticiper leurs besoins et à s'impliquer dans la durée — bien au-delà de la simple exécution technique.",
  },
  {
    title: "Connaissance de l'Afrique",
    desc: "Une compréhension des marchés africains — leur complexité, leurs dynamiques, leurs opportunités. Une expérience ou un ancrage africain est un atout déterminant.",
  },
  {
    title: "Intégrité & discrétion",
    desc: "Nous travaillons sur des mandats sensibles pour des clients exigeants. L'intégrité n'est pas un principe affiché — c'est une condition non négociable pour exercer chez Tomasteed.",
  },
];

export default function CarrieresPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Carrières</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 40px", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "16px" }} className="line-orange">
            Rejoindre Tomasteed.
          </h2>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "16px" }}>
            Tomasteed est une institution en construction. Nous recrutons des professionnels qui partagent notre ambition : bâtir une banque d&apos;affaires africaine de référence, fondée sur l&apos;excellence technique, l&apos;intégrité et l&apos;engagement.
          </p>
          <p style={{ color: "#333", fontWeight: 600, lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "16px" }}>
            Travailler chez Tomasteed, c&apos;est intervenir sur des transactions complexes, aux côtés d&apos;une équipe sénior entièrement dédiée à chaque mandat. Nos collaborateurs bénéficient d&apos;une exposition directe aux clients, aux marchés et aux prises de décision — dès les premiers mois.
          </p>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Nous n&apos;offrons pas de carrière standardisée. Nous offrons un environnement exigeant, stimulant et réellement méritocratique, où la qualité du travail est reconnue et la progression rapide est possible.
          </p>
        </div>
      </section>

      {/* Ce que nous recherchons */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ color: "#E8552E", fontWeight: 700, fontSize: "1.2rem", marginBottom: "32px" }}>
            Ce que nous recherchons
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {criteria.map((c, i) => (
              <div key={i} style={{ background: "white", padding: "24px", borderRadius: "6px", border: "1px solid #E5E5E5" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "10px", fontSize: "0.95rem" }}>{c.title}</h3>
                <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement ESG + Postuler */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "32px" }} className="line-orange">
            Engagement ESG
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div style={{ background: "#1C1C2E", color: "white", padding: "36px", borderRadius: "8px" }}>
              <p style={{ lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "20px" }}>
                Pour postuler, envoyez votre CV et une lettre de motivation à{" "}
                <a href="mailto:careers@tomasteed.com" style={{ color: "#E8552E", fontWeight: 600 }}>
                  careers@tomasteed.com
                </a>{" "}
                en précisant le poste visé et vos disponibilités.
              </p>
              <p style={{ lineHeight: 1.7, fontSize: "0.9rem", color: "#AAAAAA" }}>
                Toute candidature reçoit une réponse dans les deux semaines suivant sa réception.
              </p>
            </div>
            <div>
              <div className="image-placeholder" style={{ height: "260px", borderRadius: "8px", flexDirection: "column", gap: "8px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem" }}>Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
