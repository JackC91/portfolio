export default function GitLogo() {
    return (
      <a href={process.env.REACT_APP_GITHUB}
      target="_blank"
      rel="noreferrer">
    <img 
    className="gitlogo" 
    src={require("../../GitHub-Mark-32px.png")} 
    alt="GitHub Logo"/>
    </a>
    )};