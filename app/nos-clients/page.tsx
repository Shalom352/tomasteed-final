"use client";
import { useState } from "react";

const clientTypes = [
  {
    id: "etats",
    label: "États et gouvernements souverains",
    desc: "Structuration de financements de projets stratégiques, gestion de la dette publique, mobilisation de capitaux à long terme et mise en place de mécanismes de partage des risques. Nous apportons aux États la rigueur analytique et la créativité financière qu'exigent leurs engagements de développement.",
  },
  {
    id: "agences",
    label: "Agences publiques et entités parapubliques",
    desc: "Accompagnement des agences et entités parapubliques dans leurs opérations de financement — levée de fonds, structuration de dette, optimisation des bilans — avec une attention particulière à la gouvernance et au respect des mandats publics.",
  },
  {
    id: "institutions",
    label: "Institutions Financières, Entreprises et groupes",
    desc: "Conseil stratégique et financier pour les grandes entreprises et groupes africains dans leurs opérations de croissance externe, refinancement, diversification des sources de financement et optimisation de leur structure financière.",
  },
  {
    id: "sponsors",
    label: "Sponsors et développeurs de projets",
    desc: "Accompagnement des développeurs privés dans la structuration et la levée de financements pour des projets d'infrastructure, d'énergie ou de services essentiels en Afrique, en mobilisant les instruments de financement les plus adaptés.",
  },
];

export default function NosClientsPage() {
  const [activeType, setActiveType] = useState("etats");
  const current = clientTypes.find(c => c.id === activeType)!;

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Nos clients</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 32px", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }} className="line-orange">
            Une clientèle exigeante, des mandats de premier plan
          </h2>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Nous accompagnons des acteurs publics et privés dont les enjeux de financement requièrent une expertise de très haut niveau, une exécution rigoureuse et une confidentialité absolue.
          </p>
        </div>
      </section>

      {/* Client type tabs */}
      <section style={{ padding: "0 0 60px", background: "white" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {clientTypes.map(ct => (
              <button
                key={ct.id}
                onClick={() => setActiveType(ct.id)}
                className={`client-tab${activeType === ct.id ? " active" : ""}`}
              >
                {ct.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.4, color: "#1A1A1A" }}>
                {current.desc}
              </p>
            </div>
            <div>
              <div className="image-placeholder" style={{ height: "260px", borderRadius: "8px", flexDirection: "column", gap: "8px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem" }}>Image illustrative du profil client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance */}
      <section style={{ background: "#F5F5F5", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }} className="line-orange">
            Ils nous ont fait confiance
          </h2>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.9rem" }}>
            Nous avons l&apos;honneur d&apos;accompagner une large portefeuille de partenaires institutionnels, financiers et privés qui nous témoignent leur confiance au quotidien.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} style={{ width: "130px", height: "65px", background: "white", borderRadius: "6px", border: "1px solid #E5E5E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#AAAAAA", fontSize: "0.75rem", fontWeight: 600 }}>Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
