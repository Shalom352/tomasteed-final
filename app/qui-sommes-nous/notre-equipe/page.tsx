"use client";
import Link from "next/link";
import { useState } from "react";

const team = [
  { name: "Mohamed El Fadel Kane", title: "Managing Director", location: "Côte d'Ivoire", email: "fadel.kane@tomasteed.com", bio: "Managing Director de Tomasteed. Fondateur de Tomasteed, il apporte une expérience approfondie en structuration de financements et en conseil stratégique sur les marchés africains." },
  { name: "Claude Guillabert", title: "Partner", location: "Côte d'Ivoire", email: "claude.guillabert@tomasteed.com", bio: "Partner chez Tomasteed. Spécialisé dans les transactions de capital-investissement et la structuration de financements d'infrastructure en Afrique subsaharienne." },
  { name: "Stéphane Lekeufack", title: "Director", location: "Côte d'Ivoire", email: "stephane.lekeufack@tomasteed.com", bio: "Director chez Tomasteed. Expert en modélisation financière, structuration de dette et analyse crédit sur les marchés africains." },
  { name: "Abdel Noah Ango", title: "Vice President", location: "Côte d'Ivoire", email: "abdel.ango@tomasteed.com", bio: "Vice President chez Tomasteed. Il dispose d'une forte expérience en structuration de financements à fort impact sur les marchés africains." },
  { name: "Ange Emmanuel Aynoe", title: "Analyste", location: "Côte d'Ivoire", email: "ange.aynoe@tomasteed.com", bio: "Analyste chez Tomasteed, spécialisé dans la modélisation financière et l'analyse de transactions complexes." },
  { name: "Gadidou Koné", title: "Analytics", location: "Côte d'Ivoire", email: "siddy.kone@tomasteed.com", bio: "Analytics chez Tomasteed. Contribue aux analyses quantitatives et à la structuration des solutions financières." },
  { name: "Mouhamadou Ben Barka", title: "Managing Partner", location: "Émirats Arabes Unis", email: "contact@tomasteed.com", bio: "Managing Partner chez Tomasteed basé à Abu Dhabi. Responsable des opérations et du développement sur le marché du Moyen-Orient et d'Afrique du Nord." },
  { name: "Rokhya Gueye", title: "Partner", location: "France", email: "rokhya.gueye@tomasteed.com", bio: "Partner chez Tomasteed basée à Paris. Expertise en conseil financier stratégique aux États et aux grandes entreprises africaines sur leurs opérations de financement." },
  { name: "Mahmoud Samasso", title: "Analytics", location: "France", email: "mahmoud.samasso@tomasteed.com", bio: "Analytics chez Tomasteed basé à Paris. Contribue aux analyses de marché et aux études sectorielles pour les clients européens et africains." },
];

function AvatarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="8" fill="#AAAAAA"/>
      <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#AAAAAA"/>
    </svg>
  );
}

const locationColors: Record<string, string> = {
  "Côte d'Ivoire": "#DC4920",
  "Émirats Arabes Unis": "#327D48",
  "France": "#1A3B8C",
};

export default function NotreEquipePage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#F5F5F5", padding: "12px 0", borderBottom: "1px solid #E5E5E5" }}>
        <div className="container" style={{ fontSize: "0.82rem", color: "#666" }}>
          <Link href="/qui-sommes-nous/notre-equipe" style={{ color: "#666", textDecoration: "none", fontWeight: 600 }}>Qui sommes-nous ?</Link>
          {" "}&gt;{" "}
          <span style={{ color: "#DC4920", fontWeight: 700 }}>Notre équipe</span>
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
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px" }} className="line-orange">
            Une équipe sénior d&apos;une rare profondeur
          </h2>
          <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Tomasteed est dirigée par des professionnels dont les trajectoires conjuguent expérience institutionnelle, rigueur technique et connaissance opérationnelle des marchés africains. Notre équipe compte en moyenne plus de 12 ans d&apos;expérience dans les plus grandes institutions financières internationales.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ padding: "0 0 60px", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {team.map((member, i) => (
              <div key={i} className="team-card" onClick={() => setSelected(selected === i ? null : i)}>
                <div className="image-placeholder" style={{ height: "180px", flexDirection: "column", gap: "8px" }}>
                  <AvatarIcon />
                </div>
                <div style={{ padding: "16px" }}>
                  <div style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: "2px" }}>{member.name}</div>
                  <div style={{ color: "#888", fontSize: "0.78rem", marginBottom: "6px" }}>{member.title}</div>
                  <span style={{ display: "inline-block", background: locationColors[member.location] || "#888", color: "white", fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", borderRadius: "10px" }}>
                    {member.location}
                  </span>
                </div>
                {selected === i && (
                  <div style={{ padding: "0 16px 16px", borderTop: "1px solid #F0F0F0" }}>
                    <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.6, margin: "12px 0 8px" }}>{member.bio}</p>
                    <a href={`mailto:${member.email}`} style={{ color: "#DC4920", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none" }}>{member.email}</a>
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
