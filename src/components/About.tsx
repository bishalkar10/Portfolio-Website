import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Experience data - easily modifiable array
// Use **keyword** syntax to highlight text
const experiences = [
  {
    company: "Appscrip",
    role: "Frontend Developer",
    period: "Dec 2024 - Present",
    points: [
      "Utilized **Stencil.js** to create an **embedded** application that can be used in any major framework like **Angular**, **React**, **Vue**, or **Vanilla Javascript**.",
      "Implemented **jwt authentication** in the embedded stencil.js project.",
      "Reduced perceived load time from **1800ms to 30ms** by implementing **skeleton UI** and prefetching API calls before widget initialization.",
      "Integrated 1-to-1 chat using **MQTT SDK** video calling using **Livekit SDK**.",
      "Developed a robust authentication layer in Next.js using **Supabase**, featuring **Google OAuth** and secure email/password flows.",
      "Streamlined user onboarding by implementing **Google Login** integration via react-oauth/google within Next.js.",
      "Collaborated with Designers and transformed **Figma** Design to reusable pixel-perfect React components.",
      "Enhanced e-commerce search UX by integrating **Typesense** for ultra-fast, low-latency product indexing and retrieval.",
      "Implemented global accessibility by architecting a scalable **i18n (Internationalization)** strategy for multi-lingual content delivery.",
    ],
  },
  {
    company: "Klenty",
    role: "Frontend Developer",
    period: "Sep 2024 - Nov 2024",
    points: [
      "Worked on a sales **SaaS** used by **5000+** companies.",
      "**Collaborated** within a cross-functional team of 7 to drive feature delivery and ensure product quality.",
      "Diagnosed and resolved a **critical pagination bug** affecting multiple sections of the platform.",
      "Utilized **Redux Toolkit** to create a **toast notification** system, integrated seamlessly into two products within a **micro-frontend architecture**.",
      "Worked closely with designers to update the website during app logo and theme change.",
    ],
  },
];

// Function to parse **text** and render with highlights
function renderHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="highlight">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    
    // Set initial state
    gsap.set(section.querySelectorAll(".about-content, .about-image-wrapper, .experience-card"), {
      opacity: 1,
      y: 0,
      x: 0,
    });

    const ctx = gsap.context(() => {
      // Animate about content
      ScrollTrigger.create({
        trigger: ".about-grid",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(".about-content", 
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
          );
          gsap.fromTo(".about-image-wrapper", 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
          );
        },
      });

      // Animate timeline
      ScrollTrigger.create({
        trigger: ".experience-section",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(".timeline-line", 
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, duration: 1, ease: "power3.out" }
          );
          gsap.fromTo(".timeline-item", 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about section" id="about">
      <div className="container">
        <header className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </header>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I'm a passionate Frontend Developer with a keen eye for design and
              a love for clean, efficient code. I specialize in building modern
              web applications that are not only visually stunning but also
              performant and accessible.
            </p>
            <p>
              With expertise in React, TypeScript, and the modern JavaScript
              ecosystem, I bring ideas to life through thoughtful user
              experiences. I believe in writing code that is maintainable,
              scalable, and follows best practices.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the
              developer community.
            </p>
          </div>

          <div className="about-image-wrapper">
            <img
              src="/Portfolio-Website/images/my_photo.webp"
              alt="Bishal Kar working on a project"
              className="about-image"
              width="500"
              height="600"
              loading="lazy"
            />
            <div className="about-image-decoration" aria-hidden="true" />
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="experience-section">
          <h3 className="subsection-title">
            <span className="gradient-text">Experience</span>
          </h3>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true" />
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <div>
                        <h4 className="experience-company">{exp.company}</h4>
                        <p className="experience-role">{exp.role}</p>
                      </div>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <ul className="experience-points">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="experience-point">
                          {renderHighlightedText(point)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
