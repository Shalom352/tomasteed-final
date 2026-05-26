import Link from "next/link";

const stats = [
  { num: "12+", label: "Ans d'expérience", desc: "En financements structurés, marchés de capitaux et conseil stratégique" },
  { num: "4", label: "Pays de présence", desc: "Émirats Arabes Unis, Côte d'Ivoire, Sénégal, France" },
  { num: "FSRA", label: "Régulé ADGM", desc: "Abu Dhabi Global Market — standard de conformité international de premier plan" },
];

const values = [
  { num: 1, label: "INTÉGRITÉ", desc: "Nous approchons chaque situation avec transparence et honnêteté dans toutes nos relations." },
  { num: 2, label: "EXCELLENCE", desc: "Nous visons la qualité et la performance dans chaque projet, en offrant des solutions financières à la hauteur des ambitions de nos clients." },
  { num: 3, label: "ENGAGEMENT", desc: "Nous nous sommes fermement à accompagner nos partenaires dans la durée, en contribuant à leur développement économique." },
  { num: 4, label: "ÉTHIQUE", desc: "Nous respectons des normes internationales et adoptons les meilleures pratiques financières mondiales." },
  { num: 5, label: "INNOVATION", desc: "Nous développons des stratégies créatives et adaptables, pour répondre aux besoins futurs des marchés africains." },
];

const domains = [
  { title: "Conseil aux États et aux entreprises", desc: "Accompagnement dans la définition des stratégies de financement et de croissance, évaluation des actifs, analyse de faisabilité et conseil sur les structures de transaction." },
  { title: "Fusions & acquisitions", desc: "Conseil achat ou vente, structuration d'opérations de cession ou d'acquisition, due diligence financière, négociation et accompagnement au closing." },
  { title: "Levée de fonds", desc: "Accompagnement dans la structuration et la levée de dette ou de capital. Identification et mise en relation avec les investisseurs institutionnels les plus adaptés." },
];

const sectors = [
  { title: "Eau & Assainissement", desc: "Investissements essentiels pour l'accès à l'eau potable et le développement durable." },
  { title: "Santé", desc: "Financement d'infrastructures hospitalières, de cliniques et projets innovants." },
  { title: "Agro-Industrie & Agroalimentaire", desc: "Instruments de crédit spécialisés et conseil pour la souveraineté alimentaire." },
];

const clientLogos = [
  "BOAD", "Oryx Energies", "Cargill", "Orange CI", "ATIDI",
  "BADEA", "NASLI", "Porteo Group", "YÉRÉ Group", "Agri Green",
];

const valueAdded = [
  { num: 1, title: "Accès privilégié aux capitaux internationaux", desc: "Une forte connaissance des investisseurs mondiaux et de leurs stratégies. Nous facilitons les transactions et accompagnons la concrétisation de vos projets auprès des meilleurs partenaires financiers." },
  { num: 2, title: "Des solutions financières sur mesure", desc: "Grâce à notre expertise en financements structurés et notre capacité d'innovation, nous disposons d'une ingénierie financière hautement personnalisable, adaptée aux spécificités de chaque client." },
  { num: 3, title: "Engagement ESG — une finance responsable", desc: "Chaque solution que nous concevons intègre les critères ESG dès sa conception. Nous contribuons à la transition économique durable de l'Afrique, en alignant performance financière et impact positif." },
];

function ImagePlaceholderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "#E0E0E0", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: "2.7rem", fontWeight: 900, color: "#DC4920", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
                Votre partenaire pour les opérations qui façonnent l&apos;Afrique.
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#DC4920", marginBottom: "32px", lineHeight: 1.6, fontWeight: 600 }}>
                Conseil stratégique et structuration de financements sur les marchés émergents.
              </p>
              <Link href="/nos-domaines-expertise" className="btn-orange">
                Découvrir nos expertises
              </Link>
            </div>
            <div>
              <div style={{ border: "1px solid #AAAAAA", borderRadius: "6px", padding: "10px 18px", display: "inline-block", marginBottom: "28px", background: "white", fontSize: "0.82rem", color: "#555", fontWeight: 600 }}>
                Alternative Credit Advisor – Régulé FSRA · ADGM
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div style={{ background: "white", border: "1px solid #DDDDDD", borderRadius: "6px", padding: "18px" }}>
                  <div style={{ fontWeight: 800, marginBottom: "6px", fontSize: "0.9rem" }}>Partenaire de long terme</div>
                  <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.5, margin: 0 }}>Nous intervenons sur des transactions complexes, mobilisés autour d&apos;un seul objectif : des résultats mesurables pour vos clients.</p>
                </div>
                <div style={{ background: "white", border: "1px solid #DDDDDD", borderRadius: "6px", padding: "18px" }}>
                  <div style={{ fontWeight: 800, marginBottom: "6px", fontSize: "0.9rem" }}>Ancrage Africain</div>
                  <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.5, margin: 0 }}>Notre présence multisites en Afrique et à l&apos;international nous permet de comprendre les enjeux locaux et d&apos;y répondre avec précision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section style={{ padding: "48px 0", background: "white", borderBottom: "1px solid #F0F0F0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-box" style={{ borderTop: "3px solid #DC4920" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#DC4920", marginBottom: "4px" }}>{s.num}</div>
                <div style={{ fontWeight: 800, marginBottom: "6px", fontSize: "0.9rem" }}>{s.label}</div>
                <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "16px" }}>
            Fondée en 2025, Tomasteed est une banque d&apos;affaires indépendante spécialisée dans la structuration de financements et le conseil en investissements, régulée par la Financial Services Regulatory Authority (FSRA) de Abu Dhabi Global Market (ADGM). Tomasteed est l&apos;une des rares structures africaines à vocation internationale à être soumise aux standards de gouvernance et de conformité du plus exigeant bureau financier international.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "16px" }}>
            Composée d&apos;une équipe de professionnels de nationalités variées, notre équipe compte en moyenne plus de <strong>12 ans d&apos;expérience</strong> en financements structurés, marchés de capitaux et conseil stratégique.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Nous collaborons avec une large diversité d&apos;acteurs — banques locales et régionales, institutions de développement, fonds de private equity et family offices — pour favoriser la circulation des capitaux et accompagner les grandes décisions économiques africaines.
          </p>
        </div>
      </section>

      {/* Nos valeurs */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "8px" }}>Nos valeurs</h2>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.9rem" }}>
            Chez Tomasteed, nos actions et décisions reposent sur des valeurs fortes qui guident notre mission au sein du secteur.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
            {values.map(v => (
              <div key={v.num} style={{ textAlign: "center" }}>
                <div className="value-circle">{v.num}</div>
                <div style={{ fontWeight: 800, marginBottom: "8px", fontSize: "0.85rem" }}>{v.label}</div>
                <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre valeur ajoutée */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "8px" }}>Notre valeur ajoutée</h2>
          <p style={{ color: "#DC4920", fontWeight: 700, marginBottom: "32px", fontSize: "0.95rem" }}>
            Tomasteed, l&apos;innovation financière au service de la concrétisation de vos projets.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {valueAdded.map((v, i) => (
              <div key={i} style={{ background: "#F9F9F9", borderRadius: "8px", padding: "28px", borderTop: "3px solid #DC4920" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#DC4920", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", marginBottom: "16px" }}>{v.num}</div>
                <h3 style={{ fontWeight: 800, marginBottom: "10px", fontSize: "0.95rem" }}>{v.title}</h3>
                <p style={{ color: "#555", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos domaines d'expertise */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "40px" }}>Nos domaines d&apos;expertise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "28px" }}>
            {domains.map((d, i) => (
              <div key={i} className="card" style={{ borderTop: "3px solid #DC4920" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#DC4920", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontWeight: 800, marginBottom: "10px", fontSize: "0.95rem" }}>{d.title}</h3>
                <p style={{ color: "#666", fontSize: "0.83rem", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "right" }}>
            <Link href="/nos-domaines-expertise" style={{ color: "#DC4920", textDecoration: "none", fontWeight: 800, fontSize: "0.9rem" }}>
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* Nos secteurs d'intervention */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "6px" }}>Nos secteurs d&apos;intervention</h2>
          <p style={{ color: "#DC4920", fontWeight: 700, marginBottom: "8px", fontSize: "0.95rem" }}>Une expertise multisectorielle au service du continent.</p>
          <p style={{ color: "#666", marginBottom: "36px", fontSize: "0.9rem" }}>
            Notre couverture sectorielle reflète la diversité des besoins de financement en Afrique et la profondeur de l&apos;expertise de nos équipes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "32px" }}>
            {sectors.map((s, i) => (
              <div key={i} className="sector-card" style={{ background: "#F9F9F9" }}>
                <div className="image-placeholder" style={{ height: "150px" }}><ImagePlaceholderIcon /></div>
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontWeight: 800, marginBottom: "6px", fontSize: "0.9rem" }}>{s.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/nos-secteurs-intervention" className="btn-orange">Voir tous les secteurs</Link>
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "8px" }}>Ils nous font confiance</h2>
          <p style={{ color: "#666", marginBottom: "36px", fontSize: "0.9rem" }}>
            Nous avons l&apos;honneur d&apos;accompagner une large portefeuille de partenaires institutionnels, financiers et privés qui nous témoignent leur confiance au quotidien.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            {clientLogos.map((name, i) => (
              <div key={i} style={{ minWidth: "110px", height: "56px", background: "white", borderRadius: "6px", border: "1px solid #E5E5E5", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px" }}>
                <span style={{ color: "#666", fontSize: "0.75rem", fontWeight: 700, textAlign: "center" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
