// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu"; // Importa el menú
import LandingPage from "./pages/LandingPage.jsx";
import Portfolio from "./pages/Portafolios.jsx";
import Contacto from "./pages/Contacto.jsx";
import Newsletter from "./pages/newsletter.jsx";
import "./styles/landing.css";

export default function App() {
  return (
    <Router>
      {/* Contenedor principal para mantener el menú siempre visible */}
      <div className="app-container">
        {/* Menú siempre visible */}
        <Menu />
        
        {/* Contenido de las páginas */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/newsLetter" element={<Newsletter/>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}