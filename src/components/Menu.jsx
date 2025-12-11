// components/Menu.jsx
import { Link, useLocation } from "react-router-dom";
import "../styles/menu.css"; 

export default function Menu() {
  const location = useLocation();
  
  // Función para verificar si el enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="navbar">
      {/* Menú en fila con recuadros */}
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link 
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contacto
          </Link>
        </li>
         <li>
          <Link 
            to="/newsLetter" 
            className={`nav-link ${isActive("/newsLetter") ? "active" : ""}`}
          >
           Suscripción
          </Link>
        </li>
      </ul>
    </nav>
  );
}