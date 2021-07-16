import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <p className="nav">Logo</p>
      <nav className="nav">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p className="nav">Links</p>
    </header>
  );
}

export default Header;
