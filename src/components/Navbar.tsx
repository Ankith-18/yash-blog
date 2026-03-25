import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h3>Yash</h3>

      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>

        <button onClick={() => window.open("https://github.com/98001yash")}>
          GitHub
        </button>
      </div>
    </nav>
  );
}