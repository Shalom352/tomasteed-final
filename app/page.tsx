import Link from "next/link";

const values = [
  { num: 1, label: "EXCELLENCE", desc: "Des standards analytiques et de structuration au plus haut niveau, sans exception." },
  { num: 2, label: "INNOVATION", desc: "Des solutions de financement sur mesure, adaptées aux réalités des marchés africains." },
  { num: 3, label: "INTÉGRITÉ", desc: "Un conseil orienté exclusivement vers l'intérêt du client, en toute transparence." },
  { num: 4, label: "ENGAGEMENT", desc: "Une équipe entièrement mobilisée autour du succès de chaque mandat." },
];

const domains = [
  {
    title: "Conseil aux États et aux entreprises",
    desc: "Accompagnement dans la définition des stratégies de financement et de croissance, évaluation des actifs et entreprises, analyse de la faisabilité et conseil sur les structures de transaction.",
  },
  {
    title: "Fusions & acquisitions",
    desc: "Conseil achat ou vente, structuration d'opérations de cession ou d'acquisition, due diligence financière, négociation et accompagnement au closing.",
  },
  {
    title: "Levée de fonds",
    desc: "Accompagnement dans la structuration et la levée de dette ou de capital, identification et mise en relation avec les investisseurs institutionnels les plus adaptés.",
  },
];

const sectors = [
  { title: "Eau & Assainissement", desc: "Structuration de financements pour l'accès à l'eau potable et l'assainissement." },
  { title: "Santé", desc: "Financement d'infrastructures hospitalières, de cliniques et de projets innovants." },
  { title: "Agro-Industrie & Agroalimentaire", desc: "Projets agro-industriels, instruments de crédit spécialisés et conseil stratégique." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: "#E0E0E0", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: "2.6rem", fontWeight: 800, color: "#E8552E", lineHeight: 1.2, marginBottom: "20px" }}>
                Votre partenaire pour les opérations qui façonnent l&apos;Afrique.
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#E8552E", marginBottom: "32px", lineHeight: 1.6 }}>
                Conseil stratégique et structuration de financements sur les marchés émergents.
              </p>
              <Link href="/nos-domaines-expertise" className="btn-orange">
                Découvrir nos expertises
              </Link>
            </div>
            <div>
              <div style={{ border: "1px solid #AAAAAA", borderRadius: "6px", padding: "12px 20px", display: "inline-block", marginBottom: "32px", background: "white", fontSize: "0.85rem", color: "#555" }}>
                Alternative Credit Advisor – Régulé FSRA · ADGM
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ background: "white", border: "1px solid #DDDDDD", borderRadius: "6px", padding: "20px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>Partenaire de long terme</div>
                  <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.5, margin: 0 }}>
                    Nous intervenons sur des transactions complexes au cœur d&apos;une équipe dédiée, mobilisée autour d&apos;un seul objectif : des résultats mesurables pour les clients.
                  </p>
                </div>
                <div style={{ background: "white", border: "1px solid #DDDDDD", borderRadius: "6px", padding: "20px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>Ancrage Africain</div>
                  <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.5, margin: 0 }}>
                    Notre présence multisites en Afrique et à l&apos;international nous permet de mieux comprendre les enjeux financiers locaux et d&apos;y répondre avec précision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "16px" }}>
            Tomasteed est une banque d&apos;affaires indépendante spécialisée dans la structuration de financements et le conseil en investissements. Régulé par la Financial Services Regulatory Authority (FSRA) de Abu Dhabi, Tomasteed est l&apos;une des rares structures africaines à vocation internationale à être soumise aux standards de gouvernance et de conformité du plus exigeant bureau financier international.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "16px" }}>
            Tomasteed est née d&apos;une ambition précise : offrir aux acteurs publics et privés africains l&apos;expertise d&apos;une banque d&apos;affaires indépendante, entièrement dédiée à leur développement.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Nous collaborons avec une large diversité d&apos;acteurs — banques locales et régionales, institutions de développement, fonds de private equity et family offices — afin de favoriser la circulation des capitaux et d&apos;accompagner les grandes décisions économiques africaines de premier plan.
          </p>
        </div>
      </section>

      {/* Nos valeurs */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>Nos valeurs</h2>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.95rem" }}>
            Ces valeurs ne sont pas des principes affichés. Elles définissent la manière dont nous travaillons, dont nous nous engageons auprès de nos clients et dont nous construisons des relations de confiance dans la durée.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
            {values.map(v => (
              <div key={v.num} style={{ textAlign: "center" }}>
                <div className="value-circle">{v.num}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.9rem" }}>{v.label}</div>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos domaines d'expertise */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "40px" }}>Nos domaines d&apos;expertise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "32px" }}>
            {domains.map((d, i) => (
              <div key={i} className="card" style={{ borderTop: "3px solid #E8552E" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#E8552E", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "12px", fontSize: "1rem" }}>{d.title}</h3>
                <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "right" }}>
            <Link href="/nos-domaines-expertise" style={{ color: "#E8552E", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* Nos secteurs d'intervention */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>Nos secteurs d&apos;intervention</h2>
          <p style={{ color: "#E8552E", fontWeight: 600, marginBottom: "8px", fontSize: "0.95rem" }}>
            Une expertise multisectorielle au service du continent.
          </p>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.9rem" }}>
            Notre couverture sectorielle reflète la diversité des besoins de financement en Afrique et la profondeur de l&apos;expertise de nos équipes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "32px" }}>
            {sectors.map((s, i) => (
              <div key={i} className="sector-card" style={{ background: "white" }}>
                <div className="image-placeholder" style={{ height: "160px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>{s.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/nos-secteurs-intervention" className="btn-orange">
              Voir tous les secteurs
            </Link>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>Ils nous ont fait confiance</h2>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.9rem" }}>
            Nous avons l&apos;honneur d&apos;accompagner une large portefeuille de partenaires institutionnels, financiers et privés qui nous témoignent leur confiance au quotidien.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ width: "120px", height: "60px", background: "#F0F0F0", borderRadius: "6px", border: "1px solid #E5E5E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem", fontWeight: 600 }}>Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
