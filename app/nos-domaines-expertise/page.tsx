"use client";
import { useState } from "react";

const tabs = [
  {
    id: "conseil",
    label: "Conseil aux États et aux entreprises",
    title: "Conseil aux États et aux entreprises",
    desc: "Tomasteed accompagne gouvernements, institutions publiques et entreprises dans leurs décisions financières et stratégiques les plus complexes. Notre connaissance des marchés africains et de leurs interfaces avec les grands centres financiers mondiaux nous permet de concevoir des solutions adaptées, robustes et alignées sur les objectifs de long terme de nos clients.",
    items: [
      { num: 1, name: "Conseil stratégique & financier", desc: "Accompagnement dans la définition des stratégies de financement et de croissance, évaluation des actifs et entreprises, analyse de la faisabilité et conseil sur les structures de transaction les plus adaptées aux objectifs du client." },
      { num: 2, name: "Conseil en restructuration de dette", desc: "Analyse des structures d'endettement existantes, identification des leviers d'optimisation et accompagnement dans les négociations avec les créanciers." },
      { num: 3, name: "Conseil en gouvernance financière", desc: "Mise en place de cadres de gouvernance financière robustes, formation des équipes et accompagnement dans la structuration des fonctions financières." },
    ],
  },
  {
    id: "structuration",
    label: "Structuration de financement",
    title: "Structuration de financement",
    desc: "Nous structurons des solutions de financement complexes et sur mesure pour des projets d'infrastructure, des opérations de corporate finance et des transactions sur les marchés des capitaux africains.",
    items: [
      { num: 1, name: "Financement de projets", desc: "Structuration de project finance pour des infrastructures majeuresénergie, eau, transportavec une expertise reconnue sur les mécanismes de garantie disponibles en Afrique." },
      { num: 2, name: "Syndication de dette", desc: "Organisation et coordination de syndicats bancaires pour la levée de financements importants auprès d'institutions financières locales et internationales." },
      { num: 3, name: "Instruments hybrides", desc: "Conception et structuration d'instruments financiers hybrides combinant dette et capital pour optimiser la structure de financement des clients." },
    ],
  },
  {
    id: "fusions",
    label: "Fusions & Acquisitions",
    title: "Fusions & Acquisitions",
    desc: "Notre équipe F&A accompagne les acteurs africains et internationaux dans leurs opérations de croissance externe, de cession ou de partenariat stratégique, avec une maîtrise des spécificités des marchés africains.",
    items: [
      { num: 1, name: "Conseil côté acquéreur", desc: "Identification de cibles, analyse stratégique, valorisation, due diligence financière et accompagnement dans les négociations jusqu'au closing." },
      { num: 2, name: "Conseil côté vendeur", desc: "Préparation à la cession, organisation du processus de vente compétitif, sélection des acquéreurs potentiels et optimisation des conditions de la transaction." },
      { num: 3, name: "Partenariats stratégiques", desc: "Identification et structuration de partenariats entre acteurs africains et internationaux pour développer des positions compétitives durables." },
    ],
  },
  {
    id: "levee",
    label: "Levée de fonds",
    title: "Levée de fonds",
    desc: "Nous accompagnons nos clients dans leurs levées de fonds en capital et en dette, en mobilisant notre réseau d'investisseurs institutionnels africains et internationaux.",
    items: [
      { num: 1, name: "Levée de capital", desc: "Structuration et exécution de levées de fonds en equity auprès de fonds de private equity, family offices et investisseurs institutionnels." },
      { num: 2, name: "Levée de dette", desc: "Structuration et placement de dette obligataire ou bancaire auprès d'institutions financières de développement et d'investisseurs privés." },
      { num: 3, name: "Impact & Green Finance", desc: "Mobilisation de financements à impact et de green bonds pour des projets répondant aux critères ESG des investisseurs internationaux." },
    ],
  },
];

export default function NosDomainesExpertisePage() {
  const [activeTab, setActiveTab] = useState("conseil");
  const current = tabs.find(t => t.id === activeTab)!;

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Nos domaines d&apos;expertise</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>Nos domaines d&apos;expertise</h2>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "32px" }}>
            Tomasteed fournit des services de conseil financier de haut niveau aux acteurs publics et privés opérant sur les marchés africains. Notre équipe sénior intervient sur l&apos;intégralité du cycle de financement et de transaction – du cadrage stratégique jusqu&apos;à l&apos;exécution.
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "2px solid #E5E5E5", gap: "0", overflowX: "auto" }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`expertise-tab${activeTab === tab.id ? " active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer" }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section style={{ padding: "48px 0 60px", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            <div>
              <h2 style={{ color: "#E8552E", fontWeight: 700, fontSize: "1.4rem", marginBottom: "16px" }}>
                {current.title}
              </h2>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "32px" }}>
                {current.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {current.items.map(item => (
                  <div key={item.num} style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#E8552E", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0 }}>
                      {item.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "6px", fontSize: "0.9rem", color: "#E8552E" }}>{item.name}</div>
                      <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="image-placeholder" style={{ height: "320px", borderRadius: "8px", flexDirection: "column", gap: "12px" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#AAAAAA"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span style={{ color: "#AAAAAA", fontSize: "0.8rem" }}>Visuel du slider affiché dynamiquement en fonction du service présenté.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
