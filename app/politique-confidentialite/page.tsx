export default function PolitiqueConfidentialitePage() {
  return (
    <div style={{ padding: "60px 0 80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#E8552E", marginBottom: "40px" }}>
          Politique de confidentialité
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Introduction</h2>
            <p>Tomasteed Ltd (&quot;nous&quot;, &quot;notre&quot;) s&apos;engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Données collectées</h2>
            <p>Nous pouvons collecter les informations suivantes :</p>
            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
              <li>Informations de contact (nom, adresse email) lorsque vous nous contactez</li>
              <li>Données de navigation (adresse IP, pages visitées, durée des visites) via des outils d&apos;analyse</li>
              <li>Informations professionnelles dans le cadre de nos relations commerciales</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Utilisation des données</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Vous informer de nos services, avec votre consentement</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Conservation des données</h2>
            <p>Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales applicables.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Vos droits</h2>
            <p>Conformément à la réglementation applicable en matière de protection des données, vous disposez des droits suivants :</p>
            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p style={{ marginTop: "12px" }}>Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@tomasteed.com" style={{ color: "#E8552E" }}>contact@tomasteed.com</a></p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Cookies</h2>
            <p>Notre site utilise des cookies techniques nécessaires à son fonctionnement. Vous pouvez configurer votre navigateur pour refuser les cookies, ce qui pourrait affecter certaines fonctionnalités du site.</p>
          </div>

          <div>
            <h2 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "12px" }}>Contact</h2>
            <p>Pour toute question relative à cette politique : <a href="mailto:contact@tomasteed.com" style={{ color: "#E8552E" }}>contact@tomasteed.com</a></p>
            <p style={{ marginTop: "8px", color: "#888", fontSize: "0.85rem" }}>Dernière mise à jour : mai 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
