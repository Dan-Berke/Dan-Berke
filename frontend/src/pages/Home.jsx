import './Home.css';
import { Link } from 'react-router-dom';
import riseImage from '../assets/rise.jpg';  // Importing the image

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Daniel Berke</h1>
          <p className="header-subtitle">Senior | Aspiring Racing Engineer | Swim Captain</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section about">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            Hi, I'm Daniel Berke, a senior at Vernon Hills High School with a passion for racing engineering.
            I'm driven by a love for cars, innovation, and technology, as well as a dedication to swimming and
            exploring fields like 3D printing to enhance vehicle designs.
          </p>

          {/* Displaying the rise.jpg Image */}
          <div className="about-image-container">
            <img src={riseImage} alt="Rise" className="about-image" />
          </div>
        </section>

        <section className="section projects">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            <li className="project-item">
              <Link to="/research" className="project-link">
                <h3 className="project-title">Magic Mirror Project</h3>
                <p className="project-description">
                  Description of this project, emphasizing key features and technologies used in the process.
                </p>
              </Link>
            </li>
          </ul>
        </section>

        <section className="section contact">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Feel free to reach out to me via email at{" "}
            <a href="mailto:daniel.berke@example.com" className="contact-link">daniel.berke@example.com</a> or
            connect with me on{" "}
            <a href="https://www.linkedin.com/in/daniel-berke" className="contact-link">LinkedIn</a>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Daniel Berke. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
