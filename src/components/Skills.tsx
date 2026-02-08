import { useReveal } from "../hooks/useReveal";

// Individual skills with icon, name, and story for flip card
const skills = [
  {
    id: "html",
    name: "HTML",
    story:
      "Semantic HTML is key for accessibility. I write clean, structured markup that works for everyone.",
  },
  {
    id: "css",
    name: "CSS",
    story:
      "From Flexbox to Grid to animations — I love crafting pixel-perfect, responsive designs.",
  },
  {
    id: "tailwindcss",
    name: "Tailwind",
    story:
      "Utility-first CSS for rapid prototyping. Great for maintaining consistency across large projects.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    story:
      "The foundation of web dev. Deep understanding of closures, promises, and the event loop.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    story:
      "Type safety is a game-changer. I use TypeScript in all my projects to catch bugs early and improve DX.",
  },
  {
    id: "react",
    name: "React",
    story:
      "My go-to library for building UIs. I've built everything from chatbots to e-commerce platforms with React.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    story:
      "My framework of choice for production apps. SSR, API routes, and the app router make development a breeze.",
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    story:
      "Built toast notification systems and complex state management with RTK Query for data fetching.",
  },
  {
    id: "sass",
    name: "SASS",
    story:
      "Variables, mixins, and nesting make styling maintainable. Used extensively in enterprise projects.",
  },
  {
    id: "git",
    name: "Git",
    story:
      "Version control pro. Comfortable with rebasing, cherry-picking, and managing complex branching strategies.",
  },
  // {
  //   id: "vite",
  //   name: "Vite",
  //   story: "Lightning-fast dev server and builds. My choice for new React projects over CRA.",
  // },
  // {
  //   id: "playwright",
  //   name: "Playwright",
  //   story: "E2E testing done right. Written comprehensive test suites for production applications.",
  // },
];

function Skills() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="skills section" id="skills">
      <div className="container">
        <header className="section-header" data-reveal>
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </header>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-card" data-reveal="skill" style={{ transitionDelay: `${index * 0.05}s` }}>
              <div className="skill-card-inner">
                {/* Front side - Icon and Name */}
                <div className="skill-card-front">
                  <svg className="skill-icon" aria-hidden="true">
                    <use
                      href={`/Portfolio-Website/icons/sprites.svg#icon-${skill.id}`}
                    />
                  </svg>
                  <span className="skill-name">{skill.name}</span>
                </div>

                {/* Back side - Story */}
                <div className="skill-card-back">
                  <p className="skill-story">{skill.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
