"use client";
import { useState } from "react";
import Link from "next/link";

const criteria = [
  {
    title: "Rigueur & excellence analytique",
    desc: "Une maîtrise solide des fondamentaux financiers : modélisation, structuration, analyse de crédit. Nous attendons des standards élevés dans chaque livrable, sans exception.",
  },
  {
    title: "Sens du client & de l'engagement",
    desc: "La capacité à comprendre les enjeux de nos clients, à anticiper leurs besoins et à s'impliquer dans la duréebien au-delà de la simple exécution technique.",
  },
  {
    title: "Connaissance de l'Afrique",
    desc: "Une compréhension des marchés africainsleur complexité, leurs dynamiques, leurs opportunités. Une expérience ou un ancrage africain est un atout déterminant.",
  },
  {
    title: "Intégrité & discrétion",
    desc: "Nous travaillons sur des mandats sensibles pour des clients exigeants. L'intégrité n'est pas un principe affichéc'est une condition non négociable pour exercer chez Tomasteed.",
  },
];

export default function CarrieresPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Analyste",
    coverLetter: "",
  });
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !cvFile) {
      alert("Veuillez remplir les champs obligatoires (Nom, Email et CV).");
      return;
    }
    
    setStatus("submitting");
    
    // Simulate candidate dossier submission with delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "Analyste",
        coverLetter: "",
      });
      setCvFile(null);
    }, 1500);
  };

  return (
    <div>
      {/* Hero avec fond photo flouté */}
      <section style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Blurred background layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/carrieres-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.55)",
          transform: "scale(1.05)",
          zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 0 }}>Carrières</h1>
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
            Travailler chez Tomasteed, c&apos;est intervenir sur des transactions complexes, aux côtés d&apos;une équipe sénior entièrement dédiée à chaque mandat. Nos collaborateurs bénéficient d&apos;une exposition directe aux clients, aux marchés et aux prises de décisiondès les premiers mois.
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

      {/* Engagement ESG */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "32px" }} className="line-orange">
            Engagement ESG
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "16px" }}>
                Chez Tomasteed, l&apos;engagement ESG est intégré dès la conception de chaque solution de financement. Nous contribuons à une finance responsable en alignant performance financière et impact positif sur le continent africain.
              </p>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
                Nos collaborateurs participent activement à des transactions à fort impacttransition énergétique, accès à l&apos;eau, développement agricoledans un environnement qui valorise la contribution individuelle.
              </p>
            </div>
            <div>
              <img
                src="/images/carrieres-esg.avif"
                alt="Engagement ESG"
                style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "8px", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Postuler / Formulaire de Candidature */}
      <section style={{ padding: "60px 0", background: "#F5F5F5" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "stretch" }}>
            
            {/* Formulaire de Candidature à gauche */}
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", color: "#1C1C2E" }}>
                Déposer votre candidature
              </h2>
              <p style={{ color: "#555", lineHeight: 1.6, fontSize: "0.88rem", marginBottom: "28px" }}>
                Vous souhaitez participer activement aux opérations financières majeures du continent ? Déposez votre dossier complet. Nous analysons chaque candidature avec le plus haut niveau d&apos;attention et de discrétion.
              </p>

              {status === "success" ? (
                <div style={{ background: "#F4FDF7", border: "1px solid #D1F2DB", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#327D48", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", margin: "0 auto 16px" }}>✓</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1E5A34", marginBottom: "12px" }}>Candidature Transmise</h3>
                  <p style={{ color: "#2E5A3E", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                    Nous vous remercions pour l&apos;intérêt que vous portez à Tomasteed. Votre dossier a bien été enregistré avec le plus haut niveau de confidentialité. Notre équipe de sélection l&apos;analysera en détail et vous apportera une réponse sous deux semaines.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="btn-orange" 
                    style={{ marginTop: "24px", padding: "8px 20px", fontSize: "0.8rem", border: "none" }}>
                    Soumettre une autre candidature
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Nom complet <span style={{ color: "#DC4920" }}>*</span></label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        required
                        placeholder="Ex: Ange Aynoe" 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", background: "white" }} 
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Adresse email <span style={{ color: "#DC4920" }}>*</span></label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required
                        placeholder="candidat@email.com" 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", background: "white" }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="+225..." 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", background: "white" }} 
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Poste ciblé <span style={{ color: "#DC4920" }}>*</span></label>
                      <select 
                        name="position" 
                        value={formData.position} 
                        onChange={handleChange}
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", background: "white" }}
                      >
                        <option value="Analyste">Analyste financier</option>
                        <option value="Associate">Associate / Vice President</option>
                        <option value="Director">Director</option>
                        <option value="Partner">Partner</option>
                        <option value="Candidature Spontanée">Candidature Spontanée</option>
                      </select>
                    </div>
                  </div>

                  {/* CV File Upload */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Curriculum Vitae (CV) <span style={{ color: "#DC4920" }}>*</span></label>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px", border: "1px dashed #CCC", borderRadius: "4px", padding: "12px 16px", background: "white" }}>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", zIndex: 2 }}
                      />
                      <div style={{ background: "#E8552E", color: "white", padding: "6px 12px", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 700, zIndex: 1 }}>
                        Choisir un fichier
                      </div>
                      <span style={{ fontSize: "0.8rem", color: cvFile ? "#2E2D2C" : "#888", fontWeight: cvFile ? 600 : 400, zIndex: 1 }}>
                        {cvFile ? cvFile.name : "Format PDF, DOC ou DOCX (Max 5Mo)"}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Lettre de motivation / Message</label>
                    <textarea 
                      name="coverLetter" 
                      value={formData.coverLetter} 
                      onChange={handleChange}
                      placeholder="Exprimez en quelques mots les raisons qui vous poussent à rejoindre l'équipe de Tomasteed..." 
                      rows={4}
                      style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", resize: "vertical", fontFamily: "inherit", background: "white" }} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="btn-orange" 
                    style={{ border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", width: "100%", transition: "all 0.3s" }}>
                    {status === "submitting" ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="spinner" style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 0 1-9 9m-9-9a9 9 0 0 1 9-9"/>
                        </svg>
                        <span>Transmission sécurisée du dossier...</span>
                      </>
                    ) : (
                      <span>Soumettre ma candidature</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Illustration à droite */}
            <div style={{ display: "flex" }}>
              <img
                src="/images/carrieres-hero.png"
                alt="Rejoindre Tomasteed"
                style={{ width: "100%", height: "100%", minHeight: "440px", objectFit: "cover", borderRadius: "8px", display: "block", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Spinner Keyframe */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
