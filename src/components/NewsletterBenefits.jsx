// components/NewsletterBenefits.jsx
import "../styles/newsletter.css";

export default function NewsletterBenefits() {
  const benefits = [
    {
      icon: "💡",
      title: "Tips Exclusivos",
      description: "Consejos prácticos de desarrollo web que no encontrarás en ningún otro lugar."
    },
    {
      icon: "🚀",
      title: "Tendencias Tech",
      description: "Las últimas novedades en frameworks, herramientas y mejores prácticas."
    },
    {
      icon: "🎨",
      title: "Diseño UI/UX",
      description: "Inspiración y técnicas para crear interfaces atractivas y funcionales."
    },
    {
      icon: "📱",
      title: "Proyectos Reales",
      description: "Casos de estudio y análisis de proyectos reales que he desarrollado."
    },
    {
      icon: "🎯",
      title: "Recursos Gratuitos",
      description: "Plantillas, snippets de código y recursos descargables cada mes."
    },
    {
      icon: "💼",
      title: "Oportunidades",
      description: "Ocasionalmente comparto oportunidades laborales y de colaboración."
    }
  ];

  return (
    <div className="benefits-grid">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <div className="benefit-icon">{benefit.icon}</div>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}