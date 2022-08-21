import ProjectCard from "./projectCard";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const weekNineText = "A topic tracking and proficiency app that was developed by a team of four bootcampers over the course of a week with School of Code, the image above will take you to the deployed app, both front and back end repos can be accessed via my GitHub page.";

export default function Projects() {
  return (
    <div id="project">
      <p className="project_title">projects.</p>
      <div className="projects">
        <ProjectCard text={weekNineText} src={require("../../wk9.png")} alt="screenshot of week 9 app" />
        <ProjectCard text={text} src={require("../../care-full.png")} alt="screenshot of week 12 app"/>
        <ProjectCard text={text} />
      </div>
    </div>
  );
}
