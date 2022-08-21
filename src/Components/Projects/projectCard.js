export default function ProjectCard({ text, src, alt, href }) {
  return (
    <div>
      <div className="projectImage">
      <a href={href}
    target="_blank"
    rel="noreferrer">
        <img className="project-img" src={src} alt={alt}></img>
        </a>
      </div>
      <p className="projectText">{text}</p>
    </div>
  );
}
