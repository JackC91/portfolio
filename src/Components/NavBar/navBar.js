export default function NavBar() {
  return (
    <div className="navbar">
      <div onClick={() => window.location.replace("/#about")}>
        <span>about.</span>
      </div>
      <div onClick={() => window.location.replace("/#project")}>
        <span>projects.</span>
      </div>
      <div onClick={() => window.location.replace("/#contact")}>
        <span>contact.</span>
      </div>
    </div>
  );
}
