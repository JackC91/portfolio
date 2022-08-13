export default function ProjectCard({ text, src, alt }) {
  return (
    <div>
      <div className="projectImage">
        <img className="project-img" src={src} alt={alt}></img>
      </div>
      <p className="projectText">{text}</p>
    </div>
  );
}
