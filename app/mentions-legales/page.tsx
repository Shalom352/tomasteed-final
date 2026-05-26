export default function MentionsLegalesPage() {
  return (
    <div style={{ padding: "60px 0 80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#E8552E", marginBottom: "40px" }}>
          Mentions légales
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Éditeur du site</h2>
            <p>Tomasteed Ltd<br/>
            Regulated by the Financial Services Regulatory Authority (FSRA), Abu Dhabi Global Market (ADGM)<br/>
            Abu Dhabi, Émirats Arabes Unis</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Contact</h2>
            <p>Email : <a href="mailto:contact@tomasteed.com" style={{ color: "#E8552E" }}>contact@tomasteed.com</a></p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur ce site (textes, images, graphiques, logos) sont la propriété exclusive de Tomasteed Ltd ou font l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, du contenu du site, sans l&apos;autorisation expresse de Tomasteed Ltd, est interdite et constituerait une contrefaçon.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Limitation de responsabilité</h2>
            <p>Les informations présentes sur ce site sont fournies à titre informatif. Tomasteed Ltd s&apos;efforce de maintenir ces informations à jour mais ne garantit pas l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. Tomasteed Ltd décline toute responsabilité pour toute décision prise sur la base des informations présentées.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Réglementation</h2>
            <p>Tomasteed Ltd est régulée par la Financial Services Regulatory Authority (FSRA) d&apos;Abu Dhabi Global Market (ADGM). Les services financiers présentés sur ce site sont soumis à la réglementation de l&apos;ADGM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
