// Importation de React // React import
// Importation des styles des clients // Clients styles import
import "./styles/TrustedClients.css";

// Données des clients // Clients data
const clientsData = [
  { name: "Google", color: "#4285F4", logo: "text" },
  { name: "UiPath", color: "#FA4616", logo: "text-icon" },
  { name: "Insightly", color: "#4B90E2", logo: "icon-text" },
  { name: "Yesware", color: "#66A300", logo: "icon-text" },
  { name: "enablon", color: "#00AEEF", logo: "text" },
  { name: "celect", color: "#D11E39", logo: "box-text" },
  { name: "Digicert", color: "#F7941E", logo: "icon-text" },
  { name: "GreatHorn", color: "#E35205", logo: "icon-text" },
  { name: "ZAIUS", color: "#009BDE", logo: "text" },
  { name: "Snyk", color: "#4C4A73", logo: "icon-text" },
  { name: "SALSIFY", color: "#00A2C7", logo: "icon-text" },
  { name: "bridge", color: "#6A1B9A", logo: "text" },
  { name: "Aronis", color: "#2B2D42", logo: "icon-text" },
  { name: "ninja", color: "#2E3A59", logo: "text" },
  { name: "DOMINO", color: "#8E9EAB", logo: "icon-text" },
  // Fin des données // End of data
];

// Déclaration et exportation du composant TrustedClients // Declaration and export of the TrustedClients component
export default function TrustedClients() {
  // Le composant retourne les éléments JSX suivants // The component returns the following JSX elements
  return (
    // Conteneur principal de la page des clients // Main container of the clients page
    <div className="clients-container">
      {/* Panneau en verre contenant tout le contenu */}
      <div className="clients-glass-panel">
        {/* En-tête de la section des clients */}
        <div className="clients-header">
          {/* Titre principal */}
          <h1 className="clients-title">Our Customers</h1>
          {/* Sous-titre descriptif */}
          <p className="clients-subtitle">
            We work with B2B SaaS & Cybersecurity companies large & small,
            worldwide.
          </p>
          {/* Fin de l'en-tête */}
        </div>

        {/* Grille des logos de clients */}
        <div className="clients-grid">
          {/* Boucle sur les données des clients */}
          {clientsData.map((client, index) => (
            // Enveloppe pour chaque logo avec délai d'animation // Wrapper for each logo with animation delay
            <div
              className="client-logo-wrapper"
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Rendu pour un logo de type texte seul */}
              {client.logo === "text" && (
                <span className="logo-text" style={{ color: client.color }}>
                  {client.name}
                </span>
              )}
              {/* Rendu pour un logo avec une icône suivie de texte (boîte d'icône) */}
              {client.logo === "text-icon" && (
                <div className="logo-flex">
                  {/* Boîte contenant la première lettre */}
                  <span
                    className="logo-icon-box"
                    style={{ background: client.color, color: "#fff" }}
                  >
                    {client.name.charAt(0)}
                  </span>
                  {/* Texte du logo */}
                  <span className="logo-text" style={{ color: client.color }}>
                    {client.name}
                  </span>
                </div>
              )}
              {/* Rendu pour un logo avec une icône SVG générique */}
              {client.logo === "icon-text" && (
                <div className="logo-flex">
                  {/* Icône SVG */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={client.color}
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8M8 12h8"></path>
                  </svg>
                  {/* Texte du logo (gris clair) */}
                  <span
                    className="logo-text"
                    style={{ color: "var(--text-light)" }}
                  >
                    {client.name}
                  </span>
                </div>
              )}
              {/* Rendu pour un logo avec texte dans une boîte de couleur pleine */}
              {client.logo === "box-text" && (
                <span
                  className="logo-box-text"
                  style={{ background: client.color }}
                >
                  {client.name}
                </span>
              )}
              {/* Fin de l'enveloppe du logo */}
            </div>
          ))}
          {/* Fin de la grille */}
        </div>

        {/* Pied de page de la section (avis clients) */}
        <div className="clients-footer">
          {/* Conteneur des étoiles */}
          <div className="stars-container">
            {/* Création de 5 étoiles SVG */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FBBF24"
                stroke="#FBBF24"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
            {/* Fin du conteneur des étoiles */}
          </div>
          {/* Lien vers les avis */}
          <div className="reviews-link">
            {/* Icône de validation ou badge */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8M8 12h8"></path>
            </svg>
            {/* Texte du lien */}
            <span>View All 10 Reviews</span>
            {/* Fin du lien des avis */}
          </div>
          {/* Fin du pied de page de la section */}
        </div>
        {/* Fin du panneau en verre */}
      </div>
      {/* Fin du conteneur principal */}
    </div>
    // Fin du rendu JSX // End of JSX render
  );
  // Fin du composant // End of component
}
