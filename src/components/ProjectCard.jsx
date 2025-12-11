import "../styles/ProjectCard.css";

export default function ProjectCard({ title, description, link }) {
  return (
    <div>
      <h2 className="titelh2">{title}</h2>
      <p className="text">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        Veure projecte
      </a>
    </div>
  );
}
