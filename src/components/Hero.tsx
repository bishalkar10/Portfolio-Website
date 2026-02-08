import { useEffect, useRef } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate badge
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      // Animate title lines
      tl.fromTo(
        ".hero-title-line span",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      // Animate description
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Animate buttons
      tl.fromTo(
        ".hero-actions .btn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      // Animate code editor
      tl.fromTo(
        ".code-editor",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // Animate code lines with typing effect
      tl.fromTo(
        ".code-line",
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.3, 
          stagger: 0.08, 
          ease: "power2.out" 
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

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
              <span>Hi, I'm </span>
            </span>
            <span className="hero-title-line">
              <span className="gradient-text">Bishal Kar</span>
            </span>
            <span className="hero-title-line">
              <span>Frontend Developer</span>
            </span>
          </h1>

          <p className="hero-description">
            I craft pixel-perfect, accessible, and performant web experiences
            using React, TypeScript, and modern web technologies. Passionate
            about turning complex problems into elegant solutions.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <span>Get in Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={scrollToProjects}>
              View Projects
            </button>
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
              {codeLines.map((line, index) => renderCodeLine(line, index))}
              <div className="code-line">
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
