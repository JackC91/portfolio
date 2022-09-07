import ProjectCard from "./projectCard";

const weekNineText = "A topic tracking and proficiency app that was developed by a team of four bootcampers over the course of a week with School of Code, the image above will take you to the deployed app, both front and back end repos can be accessed via my GitHub page.";

const weekTwelveText = "As part of a team of six this app was built over the course of four weeks for our final project in the School of Code Bootcamp 12. The picture above will take you to the fully deployed version of the app, the front and back end repos can be found on my personal GitHub account."

const cocktailsText = "This is a solo project I built to cement my knowledge and abilities in React and CSS without the safety net of pair programming. While this project meets the MVP of what I intended it to I still consider it a WIP to be added to as my knowledge of the technologies grows.";

export default function Projects() {
  return (
    <div id="project">
      <p className="project_title">projects.</p>
      <div className="projects">
        <ProjectCard text={weekNineText} href={process.env.REACT_APP_WEEK_NINE} src={require("../../wk9.png")} alt="screenshot of week 9 app" />
        <ProjectCard text={weekTwelveText} href={process.env.REACT_APP_CARE_FULL} src={require("../../Care-full.png")} alt="screenshot of week 12 app"/>
        <ProjectCard text={cocktailsText} href={process.env.REACT_APP_COCKTAILS} src={require("../../cocktails.png")} alt="screenshot of Cocktails For You app"/>
      </div>
    </div>
  );
}
