export default function ProjectCard({ text }) {
  return (
    <div>
      <div className="projectImage"></div>
      <p className="projectText">{text}</p>
    </div>
  );
}
