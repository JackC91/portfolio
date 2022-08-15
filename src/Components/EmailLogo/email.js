export default function EmailLogo() {
    return (
      <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
    <img 
    className="emaillogo" 
    src={require("../../email.png")} 
    alt="Email"/>
    </a>
    )};