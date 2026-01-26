import React from "react";

const Project = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          My <span className="highlight">Projects</span>
        </h2>
        <div className="projects-grid">
          {/* Project Cards 1 / Co-operative Site */}
          <div className="project-card fade-in delay-3">
            <div className="project-image">
              <img
                src="images/Someshwar.webp"
                alt="Corporative Website"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>Co-operative Website</h3>
              <p>Corporate website with services, about and contact sections</p>
              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
              <a
                href="https://www.someshwarudrakshya.coop.np"
                className="project-link"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Cards 2 / Rajen Protfilio Site */}
          <div className="project-card fade-in delay-2">
            <div className="project-image">
              <img
                src="images/Rajen.webp"
                alt="Portfolio Website"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                Modern portfolio for creative professionals with gallery and
                contact form
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <a
                href="https://rajen.info.np/"
                className="project-link"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Cards 3 / Bzya Protfilio Site */}
          <div className="project-card fade-in delay-4">
            <div className="project-image">
              <img src="images/bzya.webp" alt="Bzya" loading="lazy" />
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                Clean, modern and user-friendly portfolio site—perfect for
                showcasing creative work.
              </p>
              <div className="project-tech">
                <span>Html</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
              <a
                href="https://bijaya.info.np"
                className="project-link"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Cards 5 */}
          <div className="project-card fade-in delay-4">
            <div className="project-image">
              <img
                src="images/Bisesh.webp"
                alt="Corporative Website"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>CV Website</h3>
              <p>
                Professional CV website for showcasing skills, experience and
                achievements in a clean, modern layout.
              </p>
              <div className="project-tech">
                <span>Html</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
              <a
                href="https://raipravat.github.io/Bisesh-Rai"
                className="project-link"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Cards 6 */}
          <div className="project-card fade-in delay-4">
            <div className="project-image">
              <img
                src="images/Bima.webp"
                alt="Insurance Agency Portal"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>Insurance Website</h3>
              <p>
                A modern website designed for insurance companies to showcase
                services, engage clients, and streamline policy management
                online.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <a
                href="http://live7.prabhat.info.np/"
                className="project-link"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Cards 1 */}
          <div className="project-card fade-in delay-1">
            <div className="project-image">
              <img
                src="images/Santa.webp"
                alt="Agency Website"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>Agency Website</h3>
              <p>Full-featured For Agency</p>
              <div className="project-tech">
                <span>Google Sites (Lifetime Live Site)</span>
              </div>
              <a
                href="https://raipravat.github.io/Santa-Agency"
                className="project-link"
                rel="noopener"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
