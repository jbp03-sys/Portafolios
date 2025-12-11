import "../styles/Header.css";

export default function Hero() {
  return (
    <section className="Header">
      <img className="header-image"
      src="/images/Header_img.jpg"
      alt="La imagen no cargo"/>

      <h1 className="titelH1">
        Hola, soy <span>Josep Bernat</span>
      </h1>

      <p className="text">
        Desarrollador web junior con experiencia participando en proyectos reales. 
        Mi objetivo es seguir ampliando mis conocimientos, mejorar mis habilidades y aportar
        valor en nuevos desarrollos digitales modernos y funcionales.
      </p>
    </section>
  );
}
