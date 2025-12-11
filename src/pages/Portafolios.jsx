import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const projects = [
    {
      title: "Projecte 1",
      description: "Una breu descripció del projecte 1.",
      link: "#",
    },
    {
      title: "Projecte 2",
      description: "Una breu descripció del projecte 2.",
      link: "#",
    },
    {
      title: "Projecte 3",
      description: "Una breu descripció del projecte 3.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50"> 
      <Header />
      <main className="Main">
        <h1 className="titelH1">Els meus projectes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
