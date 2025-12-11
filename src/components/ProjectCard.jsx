// components/ProjectCard.jsx
import React from 'react';
import "../styles/ProjectCard.css"; // Importa el CSS global

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="project-card">
      {/* Contenedor de imagen */}
      <div className="image-container">
        <img 
          src={image}
          alt={title}
          className="project-image"
          loading="lazy"
          // Fallback si la imagen no carga
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x200/4CAF50/FFFFFF?text=" + encodeURIComponent(title);
          }}
        />
      </div>
      
      <div className="content">
        <h2>{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}