"use client";
import Link from "next/link";
import { useState } from "react";

const team = [
  { name: "Mohamed El Fadel Kane", title: "Managing Partner", bio: "Fondateur et Managing Partner de Tomasteed. Forte expérience en banque d'investissement et en structuration de financements complexes en Afrique et au Moyen-Orient." },
  { name: "Claude Guillabert", title: "Partner", bio: "Partner chez Tomasteed, spécialisé dans les transactions de capital-investissement et la structuration de financements d'infrastructure en Afrique subsaharienne." },
  { name: "Rokhya Gueye", title: "Partner", bio: "Partner chez Tomasteed. Expertise en conseil financier stratégique aux États et aux grandes entreprises africaines sur leurs opérations de financement." },
  { name: "Stéphane Lekeufack", title: "Director", bio: "Director chez Tomasteed. Spécialiste en modélisation financière, structuration de dette et analyse crédit sur les marchés africains." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
  { name: "Nom Prénom", title: "Fonction", bio: "Description du parcours et de l'expertise du collaborateur." },
];

function AvatarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="8" fill="#AAAAAA"/>
      <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#AAAAAA"/>
    </svg>
  );
}

export default function NotreEquipePage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#F5F5F5", padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
        <div className="container" style={{ fontSize: "0.85rem", color: "#666" }}>
          <Link href="/qui-sommes-nous/notre-equipe" style={{ color: "#666", textDecoration: "none" }}>Qui sommes-nous ?</Link>
          {" "}&gt;{" "}
          <span style={{ color: "#E8552E" }}>Notre équipe</span>
        </div>
      </div>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="section-title">Notre équipe</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "48px 0 32px", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }} className="line-orange">
            Une équipe sénior d&apos;une rare profondeur
          </h2>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Tomasteed est dirigée par des professionnels dont les trajectoires conjuguent expérience institutionnelle, rigueur technique et connaissance opérationnelle des marchés africains.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ padding: "20px 0 60px", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {team.map((member, i) => (
              <div key={i} className="team-card" onClick={() => setSelected(selected === i ? null : i)}>
                {/* Photo placeholder */}
                <div className="image-placeholder" style={{ height: "180px", flexDirection: "column", gap: "8px" }}>
                  <AvatarIcon />
                </div>
                <div style={{ padding: "16px" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{member.name}</div>
                  <div style={{ color: "#888", fontSize: "0.82rem" }}>{member.title}</div>
                </div>

                {/* Expanded bio */}
                {selected === i && (
                  <div style={{ padding: "0 16px 16px", borderTop: "1px solid #F0F0F0" }}>
                    <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6, margin: "12px 0 0" }}>{member.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
