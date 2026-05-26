"use client";
import { useState } from "react";
import Link from "next/link";

const offices = [
  { code: "UAE", city: "Abu Dhabi", email: "contact@tomasteed.com", coverage: "Siège social · Régulation FSRA", bg: "#327D48", flag: "🇦🇪" },
  { code: "CIV", city: "Abidjan", email: "", coverage: "Coverage depuis Abidjan", bg: "#DC4920", flag: "🇨🇮" },
  { code: "SEN", city: "Dakar", email: "", coverage: "Coverage depuis Dakar", bg: "#327D48", flag: "🇸🇳" },
  { code: "FRA", city: "Paris", email: "", coverage: "Coverage depuis Paris", bg: "#1A3B8C", flag: "🇫🇷" },
];

export default function NousContacterPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "Structuration de financement",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Veuillez remplir les champs obligatoires (Nom, Email, Message).");
      return;
    }
    
    setStatus("submitting");
    
    // Simulate premium submission with delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "Structuration de financement",
        message: "",
      });
    }, 1200);
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
          backgroundImage: "url('/images/contact-bureau.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.55)",
          transform: "scale(1.05)",
          zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 0 }}>Contacts</h1>
        </div>
      </section>

      {/* Parlons de votre projet / Formulaire */}
      <section style={{ padding: "60px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "stretch" }}>
            
            {/* Formulaire à gauche */}
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }} className="line-orange">
                Parlons de votre projet
              </h2>
              <p style={{ color: "#555", lineHeight: 1.6, fontSize: "0.88rem", marginBottom: "28px" }}>
                Chaque grand projet commence par une conversation. Prenez contact avec nos équipes – nous vous répondrons avec le niveau de confidentialité et la diligence que requièrent vos démarches.
              </p>

              {status === "success" ? (
                <div style={{ background: "#F4FDF7", border: "1px solid #D1F2DB", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#327D48", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", margin: "0 auto 16px" }}>✓</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1E5A34", marginBottom: "12px" }}>Message Transmis</h3>
                  <p style={{ color: "#2E5A3E", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                    Nous vous remercions pour votre message. Votre demande a bien été enregistrée avec le plus haut niveau de confidentialité. Un de nos associés prendra contact avec vous sous 24 heures ouvrées.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="btn-orange" 
                    style={{ marginTop: "24px", padding: "8px 20px", fontSize: "0.8rem", border: "none" }}>
                    Envoyer un autre message
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
                        placeholder="Ex: Mohamed Koné" 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920" }} 
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Entreprise / Institution</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange}
                        placeholder="Ex: Cabinet d'investissements" 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920" }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Adresse email <span style={{ color: "#DC4920" }}>*</span></label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required
                        placeholder="nom@entreprise.com" 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920" }} 
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="+225..." 
                        style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920" }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Sujet d&apos;intérêt <span style={{ color: "#DC4920" }}>*</span></label>
                    <select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                      style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", background: "white" }}
                    >
                      <option value="Structuration de financement">Structuration de financement / Alternative Credit</option>
                      <option value="Fusions &amp; Acquisitions">Fusions &amp; Acquisitions (M&amp;A)</option>
                      <option value="Levée de fonds">Levée de fonds (Dette &amp; Capital)</option>
                      <option value="Conseil stratégique &amp; financier">Conseil stratégique &amp; financier</option>
                      <option value="Recrutement / Carrières">Opportunités de Carrières</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444" }}>Votre message <span style={{ color: "#DC4920" }}>*</span></label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      required
                      placeholder="Décrivez brièvement les contours de votre dossier ou votre demande..." 
                      rows={5}
                      style={{ border: "1px solid #DDD", borderRadius: "4px", padding: "10px 14px", fontSize: "0.85rem", outlineColor: "#DC4920", resize: "vertical", fontFamily: "inherit" }} 
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
                        <span>Transmission sécurisée en cours...</span>
                      </>
                    ) : (
                      <span>Initier le contact sécurisé</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Image d'illustration à droite */}
            <div style={{ display: "flex" }}>
              <img
                src="/images/contact-bureau.png"
                alt="Bureau Tomasteed"
                style={{ width: "100%", height: "100%", minHeight: "440px", objectFit: "cover", borderRadius: "8px", display: "block", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Nos présences */}
      <section style={{ background: "#F5F5F5", padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "24px" }}>Nos équipes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {offices.map((o, i) => (
              <div key={i} style={{ background: o.bg, color: "white", borderRadius: "8px", padding: "24px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "6px" }}>{o.flag}</div>
                <div style={{ fontWeight: 700, fontSize: "0.8rem", opacity: 0.8, marginBottom: "2px" }}>{o.code}</div>
                <div style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "8px" }}>{o.city}</div>
                {o.email && (
                  <a href={`mailto:${o.email}`} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}>
                    {o.email}
                  </a>
                )}
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", marginTop: "4px" }}>{o.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Keyframe spinner style embedded in component */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
