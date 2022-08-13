export default function NavBar() {
  return (
    <div className="navbar">
      <div onClick={() => window.location.replace("/#about")}>
        <span className="nav-links">about.</span>
      </div>
      <div onClick={() => window.location.replace("/#project")}>
        <span className="nav-links">projects.</span>
      </div>
      <div onClick={() => window.location.replace("/#contact")}>
        <span className="nav-links">contact.</span>
      </div>
    </div>
  );
}
