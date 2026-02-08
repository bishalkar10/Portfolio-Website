import { useRef } from "react";

// Code editor content - clean and professional
const codeLines = [
  { type: "keyword", content: "const", rest: " developer = {" },
  { type: "property", indent: 1, content: "name:", value: '"Bishal Kar",' },
  { type: "property", indent: 1, content: "role:", value: '"Frontend Developer",' },
  { type: "property", indent: 1, content: "location:", value: '"India",' },
  { type: "property", indent: 1, content: "experience:", value: '"1+ years",' },
  { type: "property", indent: 1, content: "openToWork:", value: "true," },
  { type: "close", content: "};" },
];

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const renderCodeLine = (line: typeof codeLines[number], index: number) => {
    const indent = "indent" in line ? "  ".repeat(line.indent || 0) : "";
    
    if (line.type === "keyword") {
      return (
        <div key={index} className="code-line">
          <span className="code-keyword">{line.content}</span>
          <span className="code-text">{line.rest}</span>
        </div>
      );
    }
    
    if (line.type === "property") {
      return (
        <div key={index} className="code-line">
          <span className="code-text">{indent}</span>
          <span className="code-property">{line.content}</span>
          <span className="code-text"> </span>
          <span className="code-string">{line.value}</span>
        </div>
      );
    }
    
    if (line.type === "close") {
      return (
        <div key={index} className="code-line">
          <span className="code-text">{indent}{line.content}</span>
        </div>
      );
    }
    
    return null;
  };

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">
              <span style={{ animationDelay: '0.6s' }}>Hi, I'm </span>
            </span>
            <span className="hero-title-line">
              <span className="gradient-text" style={{ animationDelay: '0.7s' }}>Bishal Kar</span>
            </span>
            <span className="hero-title-line">
              <span style={{ animationDelay: '0.8s' }}>Frontend Developer</span>
            </span>
          </h1>

          <p className="hero-description">
            I craft pixel-perfect, accessible, and performant web experiences
            using React, TypeScript, and modern web technologies. Passionate
            about turning complex problems into elegant solutions.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToContact} style={{ animationDelay: '1.1s' }}>
              <span>Get in Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={scrollToProjects} style={{ animationDelay: '1.2s' }}>
              View Projects
            </button>
            <a 
              href="/Portfolio-Website/documents/Gain Prasad Kar Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary hero-resume-btn mobile-only-resume"
              style={{ animationDelay: '1.3s' }}
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Code Editor Mock */}
          <div className="code-editor">
            <div className="code-editor-header">
              <div className="code-editor-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="code-editor-title">developer.ts</span>
            </div>
            <div className="code-editor-body">
              {codeLines.map((line, index) => (
                <div key={index} style={{ animationDelay: `${1.2 + index * 0.08}s` }}>
                  {renderCodeLine(line, index)}
                </div>
              ))}
              <div className="code-line" style={{ animationDelay: `${1.2 + codeLines.length * 0.08}s` }}>
                <span className="code-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
