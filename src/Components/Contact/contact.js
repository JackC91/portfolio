import GitLogo from "../GitLogo/gitLogo";
import LinkedLogo from "../LinkedLogo/linkedLogo";
import EmailLogo from "../EmailLogo/email";

export default function Contact() {
    return (
        <div id="contact" className="contact_me">
            <p className="contact_title">contact.</p>
            <p className="contact_body">Thanks for making it this far! If you're still wanting to know more about me check out my GitHub page, LinkedIn, or contact me via email using the links below.</p>
            <div className="contact_logo"><GitLogo/><LinkedLogo/><EmailLogo/></div>
        </div>
    )
}