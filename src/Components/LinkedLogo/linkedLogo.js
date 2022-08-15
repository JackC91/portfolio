export default function LinkedLogo() {
    return (
    <a href={process.env.LINKED_IN}
    target="_blank"
    rel="noreferrer">
    <img 
    className="linkedlogo" 
    src={require("../../LI-In-Bug.png")} 
    alt="GitHub Logo"
    height={33}
    />
    </a>
  )};