// pages/Newsletter.jsx
import NewsletterForm from "../components/NewsletterForm";
import NewsletterBenefits from "../components/NewsletterBenefits";
import "../styles/newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter-page">
      {/* Hero Section */}
      <section className="newsletter-hero">
        <h1 className="newsletter-title">Newsletter Mensual</h1>
        <p className="newsletter-subtitle">
          Recibe contenido exclusivo, tips de desarrollo web y las últimas tendencias directamente en tu email.
        </p>
      </section>

      {/* Contenido principal */}
      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Formulario de suscripción */}
          <div className="newsletter-section">
            <h2>Únete a la comunidad</h2>
            <NewsletterForm />
          </div>

          {/* Beneficios */}
          <div className="newsletter-section">
            <h2>¿Qué recibirás cada mes?</h2>
            <NewsletterBenefits />
          </div>

        </div>
      </div>
    </div>
  );
}