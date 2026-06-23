import "./styles/contact.css";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    // Prénom // First name
    firstName: "",
    // Nom de famille // Last name
    lastName: "",
    // Adresse email // Email address
    email: "",
    // Message // Message body
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contact-page-wrapper">
        {/* Conteneur du formulaire de contact */}
        <div className="contact-container">
          {/* En-tête du formulaire */}
          <div className="contact-header">
            {/* Titre principal */}
            <h1 className="contact-title">CONTACT ME</h1>
            {/* Séparateur décoratif */}
            <div className="contact-divider">
              {/* Ligne gauche */}
              <span></span>
              {/* Icône au centre (étoile) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {/* Ligne droite */}
              <span></span>
              {/* Fin du séparateur */}
            </div>
            {/* Fin de l'en-tête */}
          </div>

          {/* Formulaire de contact avec écouteur d'événement sur la soumission */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Groupe de champ pour le prénom */}
            <div className="form-group">
              {/* Étiquette pour le prénom */}
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>

              {/* Champ de saisie texte pour le prénom */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Groupe de champ pour le nom de famille */}
            <div className="form-group">
              {/* Étiquette pour le nom de famille */}
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              {/* Champ de saisie texte pour le nom de famille */}
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Groupe de champ pour l'adresse email */}
            <div className="form-group">
              {/* Étiquette pour l'email */}
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              {/* Champ de saisie email pour l'adresse email */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Groupe de champ pour le message */}
            <div className="form-group">
              {/* Étiquette pour le message */}
              <label htmlFor="message">
                Comments / Questions <span className="required">*</span>
              </label>
              {/* Zone de texte pour le message */}
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* Bouton de soumission du formulaire */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {/* Fin du formulaire */}
          </form>
          {/* Fin du conteneur du formulaire */}
        </div>

        {/* Section des informations de contact (barre latérale) */}
        <div className="contact-info-section">
          {/* Bloc d'information : visite */}
          <div className="info-block">
            {/* Titre du bloc */}
            <h3>Come for a visit</h3>
            {/* Texte du bloc */}
            <p>
              Drop by in my studio and let's work on some
              <br />
              great projects together:
            </p>
            {/* Fin du bloc */}
          </div>
          {/* Bloc d'information : réseaux sociaux */}
          <div className="info-block">
            {/* Titre du bloc */}
            <h3>AROUND THE WEB</h3>
            {/* Conteneur des liens sociaux */}
            <div className="social-links">
              {/* Lien social 1 */}
              <a href="#" className="social-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Lien social 2 */}
              <a href="#" className="social-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
              {/* Lien social 3 */}
              <a href="#" className="social-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Lien social 4 */}
              <a href="#" className="social-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              {/* Fin des liens sociaux */}
            </div>
            {/* Fin du bloc */}
          </div>
          {/* Bloc d'information : anecdote (le saviez-vous) */}
          <div className="info-block">
            {/* Titre du bloc */}
            <h3>Did you know?</h3>
            {/* Texte du bloc */}
            <p>
              A beautifully designed website can increase
              <br />
              customer trust and conversion rates
              <br />
              by up to 400%.
            </p>
            {/* Fin du bloc */}
          </div>
          {/* Fin de la section des informations */}
        </div>
        {/* Fin de l'enveloppe globale */}
      </div>
    </>
  );
}
