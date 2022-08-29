import ProjectCard from "./projectCard";

const weekNineText = "A topic tracking and proficiency app that was developed by a team of four bootcampers over the course of a week with School of Code, the image above will take you to the deployed app, both front and back end repos can be accessed via my GitHub page.";

const weekTwelveText = "As part of a team of six this app was built over the course of four weeks for our final project in the School of Code Bootcamp 12. The picture above will take you to the fully deployed version of the app, the front and back end repos can be found on my personal GitHub account."

export default function Projects() {
  return (
    <div id="project">
      <p className="project_title">projects.</p>
      <div className="projects">
        <ProjectCard text={weekNineText} href={process.env.REACT_APP_WEEK_NINE} src={require("../../wk9.png")} alt="screenshot of week 9 app" />
        <ProjectCard text={weekTwelveText} href={process.env.REACT_APP_CARE_FULL} src={require("../../Care-full.png")} alt="screenshot of week 12 app"/>
      </div>
    </div>
  );
}
