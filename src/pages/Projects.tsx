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

      {repos.map((repo) => (
        <div key={repo.id} className="card">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description available"}</p>

          <button onClick={() => window.open(repo.html_url)}>
            View Repository
          </button>
        </div>
      ))}
    </div>
  );
}