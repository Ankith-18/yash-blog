import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/98001yash/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="card">
        <h3>Engineering Approach</h3>
        <p>
          I focus on building scalable, maintainable, and production-ready systems.
        </p>
        <p>
          My work emphasizes performance, system design, and real-world problem solving.
        </p>
      </div>

      {repos.map((repo) => (
        <div key={repo.id} className="card">
          <h3>{repo.name}</h3>

          <p>{repo.description || "No description available"}</p>

          <p style={{ fontStyle: "italic" }}>
            Why this matters:
            <br />
            Demonstrates backend architecture, scalability, and real-world system design.
          </p>

          <button onClick={() => window.open(repo.html_url)}>
            View on GitHub →
          </button>
        </div>
      ))}
    </div>
  );
}