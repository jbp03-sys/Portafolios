// components/NewsletterForm.jsx
import { useState } from 'react';
import "../styles/newsletter.css";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.acceptTerms) {
      alert('Por favor completa todos los campos y acepta los términos.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulación de envío a API
    setTimeout(() => {
      console.log('Datos enviados:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', acceptTerms: false });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="newsletter-input"
            placeholder="Tu nombre"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="newsletter-input"
            placeholder="tu@email.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="privacy-checkbox">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="acceptTerms">
          Acepto recibir el newsletter mensual y he leído la{' '}
          <a href="/privacy" target="_blank">política de privacidad</a>
        </label>
      </div>
      
      <button
        type="submit"
        className="subscribe-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Procesando...
          </>
        ) : (
          'Suscribirme al Newsletter'
        )}
      </button>
      
      {isSuccess && (
        <div className="success-message">
          <h3>✅ ¡Suscripción exitosa!</h3>
          <p>Te has suscrito correctamente al newsletter. Recibirás el primer email en los próximos días.</p>
        </div>
      )}
    </form>
  );
}