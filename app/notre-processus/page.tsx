const steps = [
  {
    num: 1,
    title: "Due Diligence",
    items: [
      "Analyse détaillée des dimensions financières, techniques, juridiques et sectorielles du projet",
      "Identification des risques potentiels et des opportunités pour les investisseurs",
      "Coordination avec les différentes parties prenantes impliquées dans le processus de financement",
    ],
  },
  {
    num: 2,
    title: "Modélisation Financière",
    items: [
      "Conception et développement de modèles financiers robustes et adaptés au projet",
      "Simulation de scénarios afin d'évaluer la rentabilité, la viabilité et les risques",
      "Support à la prise de décision des investisseurs et des emprunteurs",
    ],
  },
  {
    num: 3,
    title: "Structuration",
    items: [
      "Définition de la structure financière la plus adaptée au projet (dette, equity, quasi-fonds propres)",
      "Intégration des contraintes réglementaires, fiscales et commerciales",
      "Optimisation des conditions de financement (maturité, taux, covenants)",
    ],
  },
  {
    num: 4,
    title: "Mémorandum d'Information",
    items: [
      "Rédaction de documents de présentation de haute qualité (teaser, pitch deck, business plan)",
      "Mise en avant des points forts du projet et de l'équipe de management",
      "Processus de consultation et de retour des investisseurs potentiels",
    ],
  },
  {
    num: 5,
    title: "Partenariats Stratégiques",
    items: [
      "Identification et approche des investisseurs et partenaires financiers les plus adaptés",
      "Analyse comparative des différents projets et termes pour sélectionner les plus adaptés",
      "Négociation des conditions et des termes entre les parties",
    ],
  },
  {
    num: 6,
    title: "Closing Financier",
    items: [
      "Coordination avec les conseils juridiques et financiers pour sécuriser et légaliser la transaction",
      "Vérification des conditions précédentes à l'octroi du financement",
      "Mise en place des conditions préalables et décaissement effectif des fonds",
    ],
  },
];

export default function NotreProcessusPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Notre processus d&apos;accompagnement</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 40px", background: "white" }}>
        <div className="container">
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem", maxWidth: "760px" }}>
            Chez Tomasteed, chaque mandat suit un processus structuré et rigoureux en six étapes. De l&apos;analyse initiale jusqu&apos;au closing, notre équipe vous accompagne à chaque moment critique de la transaction.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "0 0 80px", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {steps.map(step => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "16px" }}>{step.title}</h3>
                <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {step.items.map((item, i) => (
                    <li key={i} style={{ color: "#555", fontSize: "0.82rem", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
