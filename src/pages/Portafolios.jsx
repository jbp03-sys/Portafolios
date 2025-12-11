// pages/Portfolio.jsx
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "EcoShop - Tienda Sostenible",
      image: "/images/EcoShop.jpg", 
      description: "E-commerce de productos ecológicos con carrito de compras, sistema de pagos y panel de administración. Diseño 100% responsive.",
    },
    {
      id: 2,
      title: "TechGadget Store",
      image: "/images/Tecno.jpg", 
      description: "Tienda online especializada en tecnología con comparador de productos, reviews visuales y simulador de financiación.",
    },
    {
      id: 3,
      title: "CineMatch",
      image: "/images/CineMatch.jpg", 
      description: "Plataforma de recomendación de películas con algoritmo de IA y sistema de valoraciones colaborativas.",
    },
  ];

  // Verificación en consola
  console.log("Portfolio cargado con", projects.length, "proyectos");
  projects.forEach(proj => {
    console.log(`${proj.title}: ${proj.image}`);
  });

  return (
    <div className="portfolio-page">
      
      <main className="flex-grow">
        {/* Header de la página */}
        <div>
          <h1 className="titelH1">
            Mis Projectos.
          </h1>
          <p className="text">
            Aquí encontrarás una selección de los proyectos en los que he trabajado, 
            donde he aplicado mis habilidades en desarrollo web, diseño de interfaces y 
            creación de experiencias digitales. Cada proyecto refleja mi proceso de aprendizaje, 
            mi capacidad de adaptación y mi interés por seguir mejorando como desarrollador junior.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}