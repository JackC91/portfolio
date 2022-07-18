import ProjectCard from "./projectCard";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Projects() {
  return (
    <div id="project">
      <p className="project_title">projects.</p>
      <div className="projects">
        <ProjectCard text={text} />
        <ProjectCard text={text} />
        <ProjectCard text={text} />
      </div>
    </div>
  );
}
