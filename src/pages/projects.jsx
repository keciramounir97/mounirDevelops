import "./styles/projects.css";

// Données des projets // Projects data
const projectsData = [
  {
    // Identifiant unique // Unique identifier
    id: 1,
    // Titre du projet // Project title
    title: "Coding Conf",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
    // Type de maquette // Mockup type
    mockupType: "form",
  },
  {
    // Identifiant unique // Unique identifier
    id: 2,
    // Titre du projet // Project title
    title: "Simple Booking",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #a855f7, #d946ef)",
    // Type de maquette // Mockup type
    mockupType: "mobile",
  },
  {
    // Identifiant unique // Unique identifier
    id: 3,
    // Titre du projet // Project title
    title: "Rock Paper Scissors",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #1e3a8a, #1e40af)",
    // Type de maquette // Mockup type
    mockupType: "game",
  },
  {
    // Identifiant unique // Unique identifier
    id: 4,
    // Titre du projet // Project title
    title: "Nextcent",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
    // Type de maquette // Mockup type
    mockupType: "dashboard",
  },
  {
    // Identifiant unique // Unique identifier
    id: 5,
    // Titre du projet // Project title
    title: "Learn to Code",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    // Type de maquette // Mockup type
    mockupType: "landing",
  },
  {
    // Identifiant unique // Unique identifier
    id: 6,
    // Titre du projet // Project title
    title: "Calculator",
    // Dégradé de fond // Background gradient
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    // Type de maquette // Mockup type
    mockupType: "calculator",
  },
  // Fin des données // End of data
];

export default function Projects() {
  return (
    // Conteneur principal des projets // Main container of projects
    <div className="projects-container">
      {/* En-tête de la section projets */}
      <div className="projects-header">
        {/* Titre de la page */}
        <h1 className="projects-title">Selected Projects</h1>
        {/* Sous-titre de la page */}
        <p className="projects-subtitle">A showcase of my recent work</p>
        {/* Fin de l'en-tête */}
      </div>

      {/* Grille d'affichage des projets */}
      <div className="projects-grid">
        {/* Boucle sur les données des projets pour les afficher dynamiquement */}
        {projectsData.map((project) => (
          // Carte individuelle pour un projet // Individual project card
          <div className="project-card" key={project.id}>
            {/* Miniature du projet avec fond dynamique // Project thumbnail with dynamic background */}
            <div
              className="project-thumbnail"
              style={{ background: project.gradient }}
            >
              {/* Conteneur de la maquette abstraite // Abstract mockup container */}
              <div className={`mockup-container ${project.mockupType}`}>
                {/* Représentations UI abstraites // Abstract UI representations */}
                {/* Condition pour afficher une maquette de formulaire */}
                {project.mockupType === "form" && (
                  <div className="abstract-ui-form">
                    <div className="aui-title"></div>
                    <div className="aui-input"></div>
                    <div className="aui-input"></div>
                    <div className="aui-button"></div>
                  </div>
                )}
                {/* Condition pour afficher une maquette mobile */}
                {project.mockupType === "mobile" && (
                  <div className="abstract-ui-mobile">
                    <div className="aui-m-header"></div>
                    <div className="aui-m-chat"></div>
                    <div className="aui-m-chat right"></div>
                    <div className="aui-m-input"></div>
                  </div>
                )}
                {/* Condition pour afficher une maquette de jeu */}
                {project.mockupType === "game" && (
                  <div className="abstract-ui-game">
                    <div className="aui-g-circle top"></div>
                    <div className="aui-g-circle left"></div>
                    <div className="aui-g-circle right"></div>
                  </div>
                )}
                {/* Condition pour afficher une maquette de tableau de bord */}
                {project.mockupType === "dashboard" && (
                  <div className="abstract-ui-dashboard">
                    <div className="aui-d-nav"></div>
                    <div className="aui-d-hero">
                      <div className="aui-d-text"></div>
                      <div className="aui-d-img"></div>
                    </div>
                  </div>
                )}
                {/* Condition pour afficher une maquette de page de destination */}
                {project.mockupType === "landing" && (
                  <div className="abstract-ui-landing">
                    <div className="aui-l-left">
                      <div className="aui-l-title"></div>
                      <div className="aui-l-p"></div>
                    </div>
                    <div className="aui-l-right"></div>
                  </div>
                )}
                {/* Condition pour afficher une maquette de calculatrice */}
                {project.mockupType === "calculator" && (
                  <div className="abstract-ui-calc">
                    <div className="aui-c-screen"></div>
                    <div className="aui-c-grid">
                      {/* Création d'une grille de 12 boutons abstraits */}
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="aui-c-btn"></div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Fin du conteneur de maquette */}
              </div>
              {/* Fin de la miniature */}
            </div>
            {/* Informations textuelles du projet */}
            <div className="project-info">
              {/* Titre de la carte de projet */}
              <h3 className="project-card-title">{project.title}</h3>
              {/* Action de la carte de projet (lien d'étude de cas) */}
              <div className="project-card-action">
                {/* Texte de l'action */}
                <span>View Case Study</span>
                {/* Icône SVG d'action (flèche) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                {/* Fin de l'action */}
              </div>
              {/* Fin des informations textuelles */}
            </div>
            {/* Fin de la carte individuelle */}
          </div>
        ))}
        {/* Fin de la grille d'affichage */}
      </div>
      {/* Fin du conteneur principal */}
    </div>
    // Fin du retour des éléments JSX // End of JSX return
  );
  // Fin du composant // End of component
}
