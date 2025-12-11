import { useState } from 'react';
//import "./styles/contactsComponent.css";

export default function ContactoComponent() {
  const [copied, setCopied] = useState(false);
  const email = "jbp03@iesemilidarder.com"; // Cambia esto por tu email real
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="contact-container">
      <div>
        <h1 className="titelH1">Contáctame</h1>
        <p className="text">
          Si deseas ponerte en contacto conmigo puedes escribir un correo a:
        </p>
      </div>
      
      <div className="email-display">
        <div className="email-content">
          <div className="email-icon">✉️</div>
          <h3 className="titelH3">Mi dirección de correo:</h3>
          
          <div className="email-address-container">
            <a 
              href={`mailto:${email}`}
              className="email-address"
            >
              {email}
            </a>
            
            <div className="copy-button-container">
              <button 
                onClick={copyToClipboard}
                className={`copy-button ${copied ? 'copied' : ''}`}
              >
                {copied ? '✓ Copiado' : '📋 Copiar email'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Redes Sociales */}
      <div className="social-links">
        
        <a 
          href="https://github.com/tuperfil" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <span className="social-icon">💻</span>
          <span className="social-name">GitHub</span>
        </a>
        
      </div>
      
      {/* Formulario de contacto */}
      <form className="contact-form">
        <h3 className="form-title">¿Prefieres escribirme directamente?</h3>
        
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Tu nombre" 
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Tu email" 
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <textarea 
            placeholder="Tu mensaje..." 
            className="form-textarea"
            required
          />
        </div>
        
        <button type="submit" className="form-button">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}