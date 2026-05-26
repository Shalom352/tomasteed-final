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
    desc: "Accompagnement des agences et entités parapubliques dans leurs opérations de financementlevée de fonds, structuration de dette, optimisation des bilansavec une attention particulière à la gouvernance et au respect des mandats publics.",
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
      {/* Hero avec fond photo */}
      <section style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Blurred background layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/logos-clients-grid.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.55)",
          transform: "scale(1.05)",
          zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 0 }}>Nos clients</h1>
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
              <img
                src={
                  activeType === "etats" ? "/images/clients-etats.webp" :
                  activeType === "agences" ? "/images/clients-agences.avif" :
                  activeType === "institutions" ? "/images/clients-institutions.avif" :
                  "/images/clients-sponsors.avif"
                }
                alt={current.label}
                style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "8px", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance */}
      <section style={{ background: "#F5F5F5", padding: "60px 0", overflow: "hidden" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }} className="line-orange">
            Ils nous ont fait confiance
          </h2>
          <p style={{ color: "#666", marginBottom: "40px", fontSize: "0.9rem" }}>
            Nous avons l&apos;honneur d&apos;accompagner une large portefeuille de partenaires institutionnels, financiers et privés qui nous témoignent leur confiance au quotidien.
          </p>
        </div>
        <div className="logo-marquee-container">
          <div className="logo-marquee-track">
            {[
              "BOAD", "Oryx Energies", "Cargill", "Orange CI", "ATIDI",
              "BADEA", "NASLI", "Porteo Group", "YÉRÉ Group", "Agri Green",
              "BOAD", "Oryx Energies", "Cargill", "Orange CI", "ATIDI",
              "BADEA", "NASLI", "Porteo Group", "YÉRÉ Group", "Agri Green"
            ].map((name, i) => {
              const fileMap: Record<string, string> = {
                "BOAD": "boad.svg",
                "Oryx Energies": "oryx-energies.svg",
                "Cargill": "cargill.svg",
                "Orange CI": "orange-ci.svg",
                "ATIDI": "atidi.svg",
                "BADEA": "badea.svg",
                "NASLI": "nasli.svg",
                "Porteo Group": "porteo-group.svg",
                "YÉRÉ Group": "yere-group.svg",
                "Agri Green": "agri-green.svg",
              };
              const fileName = fileMap[name] || "boad.svg";
              return (
                <div key={i} style={{ width: "165px", height: "64px", background: "white", borderRadius: "6px", border: "1px solid #E5E5E5", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", flexShrink: 0, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                  <img src={`/images/logos/${fileName}`} alt={name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", filter: "grayscale(100%) opacity(0.8)" }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
