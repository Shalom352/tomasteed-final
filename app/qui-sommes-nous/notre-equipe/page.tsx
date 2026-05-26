"use client";
import Link from "next/link";
import { useState } from "react";

const team = [
  { name: "Mohamed El Fadel Kane", title: "Managing Director", location: "Côte d'Ivoire", email: "fadel.kane@tomasteed.com", bio: "Managing Director de Tomasteed.", photo: "/images/team/kane.png" },
  { name: "Moustapha Ben Barka", title: "Managing Partner", location: "Côte d'Ivoire", email: "contact@tomasteed.com", bio: "Managing Partner chez Tomasteed.", photo: "/images/team/benbarka.png" },
  { name: "Claude Guillabert", title: "Partner", location: "Côte d'Ivoire", email: "claude.guillabert@tomasteed.com", bio: "Partner chez Tomasteed.", photo: "/images/team/guillabert.png" },
  { name: "Rokhya Gueye", title: "Partner", location: "France", email: "rokhya.gueye@tomasteed.com", bio: "Partner chez Tomasteed.", photo: "/images/team/gueye.png" },
  { name: "Stéphane Lekeufack", title: "Director", location: "Côte d'Ivoire", email: "stephane.lekeufack@tomasteed.com", bio: "Director chez Tomasteed.", photo: "/images/team/lekeufack.png" },
  { name: "Abd'Al Nazir ANGO", title: "Vice President", location: "Côte d'Ivoire", email: "abdel.ango@tomasteed.com", bio: "Vice President chez Tomasteed.", photo: "/images/team/nazir.jpg" },
  { name: "Ange Emmanuel Aynoe", title: "Associate", location: "Côte d'Ivoire", email: "ange.aynoe@tomasteed.com", bio: "Associate chez Tomasteed.", photo: "/images/team/ange.png" },
  { name: "Siddiq KONÉ", title: "Analyste financier", location: "Côte d'Ivoire", email: "siddy.kone@tomasteed.com", bio: "Analyste financier chez Tomasteed.", photo: "/images/team/siddiq.jpg" },
  { name: "Mahmoud Samasso", title: "Analytics", location: "France", email: "mahmoud.samasso@tomasteed.com", bio: "Analytics chez Tomasteed.", photo: "/images/team/mahmoud.jpg" },
];

const locationColors: Record<string, string> = {
  "Côte d'Ivoire": "#1C1C2E",
  "Émirats Arabes Unis": "#1C1C2E",
  "France": "#1C1C2E",
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
          backgroundImage: "url('/images/equipe-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.55)",
          transform: "scale(1.05)",
          zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 0 }}>Notre équipe</h1>
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
                <img src={member.photo} alt={member.name} style={{ width: "100%", height: "180px", objectFit: "cover", objectPosition: "top", display: "block" }} />
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
