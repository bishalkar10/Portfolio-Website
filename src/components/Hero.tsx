import { useEffect, useRef } from "react";
import gsap from "gsap";

// Skill icons that float around the hero image
const floatingSkills = [
  { id: "react", name: "React", position: "top-right" },
  { id: "typescript", name: "TypeScript", position: "right" },
  { id: "nextjs", name: "Next.js", position: "bottom-right" },
  { id: "javascript", name: "JavaScript", position: "bottom" },
  { id: "vue", name: "Vue.js", position: "bottom-left" },
  { id: "redux", name: "Redux", position: "left" },
  { id: "html", name: "HTML", position: "top-left" },
  { id: "css", name: "CSS", position: "top" },
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

      // Animate visual
      tl.fromTo(
        ".hero-image-wrapper",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // Animate floating skill icons
      tl.fromTo(
        ".floating-skill",
        { opacity: 0, scale: 0 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: { each: 0.08, from: "random" }, 
          ease: "back.out(1.7)" 
        },
        "-=0.4"
      );

      // Continuous floating animation for skill icons
      gsap.to(".floating-skill", {
        y: "random(-8, 8)",
        x: "random(-5, 5)",
        rotation: "random(-5, 5)",
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.2, from: "random" },
      });
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
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <img
              src="/Portfolio-Website/images/my_photo.jpg"
              alt="Bishal Kar - Frontend Developer"
              className="hero-image"
              width="400"
              height="400"
              loading="eager"
            />
          </div>

          {/* Floating Skill Icons */}
          {floatingSkills.map((skill) => (
            <div
              key={skill.id}
              className={`floating-skill floating-skill--${skill.position}`}
              title={skill.name}
            >
              <svg className="floating-skill-icon" aria-hidden="true">
                <use href={`/Portfolio-Website/icons/sprites.svg#icon-${skill.id}`} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
