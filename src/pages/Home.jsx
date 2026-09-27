import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>

      <p className="intro">
        Hello! Welcome to my personal portfolio website.
      </p>

      <p>
        I am a Software Engineering student interested in
        software development, web development, and artificial intelligence.
      </p>

      <h2>My Mission</h2>

      <p>
        My mission is to develop my programming skills and
        create useful and practical software solutions.
      </p>

      <div className="home-buttons">
        <Link to="/about" className="button">
          About Me
        </Link>

        <Link to="/projects" className="button">
          My Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;