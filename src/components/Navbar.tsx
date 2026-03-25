import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h3>Yash Chauhan</h3>

      <div>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
          Projects
        </NavLink>

        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>
          Blog
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>

        <button onClick={() => window.open("https://github.com/98001yash")}>
          GitHub
        </button>

        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/yash-chauhan-a415b6246/")
          }
        >
          LinkedIn
        </button>
      </div>
    </nav>
  );
}