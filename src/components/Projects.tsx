import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    title: "Movie Discovery App",
    description:
      "A modern movie discovery application with advanced filtering, watchlist management, and personalized recommendations.",
    image: "/Portfolio-Website/images/movie_app.jpg",
    tech: ["Next.js", "TypeScript", "TMDB API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/bishalkar10",
  },
  {
    title: "Currency Globe",
    description:
      "A currency converter with support for 150+ currencies, historical rates, and interactive visualizations.",
    image: "/Portfolio-Website/images/currency_globe.jpg",
    tech: ["React", "Redux", "D3.js", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/bishalkar10",
  },
  {
    title: "Image Gallery",
    description:
      "A beautiful image gallery with infinite scroll, lightbox view, and advanced search capabilities.",
    image: "/Portfolio-Website/images/image_gallery.png",
    tech: ["React", "Masonry Layout", "Unsplash API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/bishalkar10",
  },
];

function Projects() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="projects section" id="projects">
      <div className="container">
        <header className="section-header" data-reveal>
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card" data-reveal style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image"
                  width="400"
                  height="250"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
