import "../Style/about.sass";
import React from "react";

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  return (
    <section id="about" ref={aboutRef}>
      <div className="container">
        <h2 className="title">About</h2>

        <div className="about-me">
          <h3>Profile</h3>
          <div className="profile">
            <figure>
              <img className="my-photo" src="images/my_photo.webp" alt="Image of Gain Prasad Kar" />
              <figcaption>
                I’m a frontend developer who actually enjoys the challenge of
                building things from scratch. While I’m deep into the React
                ecosystem, I’ve always believed that you can’t be a great
                engineer without mastering the basics first—plain HTML, CSS, and
                Modern JavaScript. I’ve spent countless hours in Browser
                DevTools profiling performance and, honestly, I have plenty of
                'painful' experience debugging CSS until it’s absolutely
                pixel-perfect across all screens.
                <br /> <br />
                In my time at Klenty and Appscrip, I didn't just lean on
                frameworks; I focused on raw performance. I once managed to
                speed up a chatbot's initial load time by 6000% just by being
                smart with how the code was structured and delivered. Whether
                it’s architecting complex logic in vanilla JS or building
                responsive layouts without relying on bulky UI libraries, I love
                the feeling of shipping code that’s fast, accessible, and clean
                under the hood. I prefer keeping things modular and scalable,
                often using CSS Modules or raw CSS to maintain full control over
                the styling.
              </figcaption>
            </figure>
          </div>
          
          <h3>EXPERIENCE</h3>
          <div className="experience-items">
            <div className="experience">
              <div>
                <h4>
                  APPSCRIP <span className="year">(Dec 2023 - Present)</span>
                </h4>
                <p className="role">Frontend Developer</p>
                <ul className="details">
                  <li>
                    Utilized <strong>Stencil.js</strong> to create an{" "}
                    <strong>embedded</strong> application that can be used in
                    any major framework like{" "}
                    <strong>Angular, React, Vue,</strong> or{" "}
                    <strong>Vanilla Javascript</strong>.
                  </li>
                  <li>
                    Implemented <strong>jwt authentication</strong> in the
                    embedded stencil.js project.
                  </li>
                  <li>
                    Optimized initial load times of the chatbot application by{" "}
                    <strong>6000%</strong>.
                  </li>
                  <li>
                    Integrated 1-to-1 chat using <strong>MQTT SDK</strong> and
                    video calling using <strong>Livekit SDK</strong>.
                  </li>
                  <li>
                    Developed a robust authentication layer in Next.js using{" "}
                    <strong>Supabase</strong>, featuring{" "}
                    <strong>Google OAuth</strong> and secure email/password
                    flows.
                  </li>
                  <li>
                    Streamlined user onboarding by implementing{" "}
                    <strong>Google Login</strong> integration via
                    react-oauth/google within Next.js.
                  </li>
                  <li>
                    Collaborated with Designers and transformed Figma Design to
                    reusable pixel-perfect React components.
                  </li>
                  <li>
                    Enhanced e-commerce search UX by integrating{" "}
                    <strong>Typesense</strong> for ultra-fast, low-latency
                    product indexing and retrieval.
                  </li>
                  <li>
                    Implemented global accessibility by architecting a scalable{" "}
                    <strong>i18n (Internationalization)</strong> strategy for
                    multi-lingual content delivery.
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience">
              <div>
                <h4>
                  KLENTY <span className="year">(Sep 2022 - Nov 2023)</span>
                </h4>
                <p className="role">Frontend Developer</p>
                <ul className="details">
                  <li>
                    Worked on a sales <strong>SaaS</strong> used by{" "}
                    <strong>5000+</strong> companies.
                  </li>
                  <li>
                    <strong>Collaborated</strong> within a cross-functional team
                    of 7 to drive feature delivery and ensure product quality.
                  </li>
                  <li>
                    Diagnosed and resolved a{" "}
                    <strong>critical pagination bug</strong> affecting multiple
                    sections of the platform.
                  </li>
                  <li>
                    Utilized <strong>Redux Toolkit</strong> to create a{" "}
                    <strong>toast notification</strong> system, integrated
                    seamlessly into two products within a{" "}
                    <strong>micro-frontend architecture</strong>.
                  </li>
                  <li>
                    Worked closely with designers to update the website during
                    app logo and theme change.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3>EDUCATION</h3>
          <div className="education">
            <div>
              <h4>
                Bankura University <span className="year">(2019 - 2022)</span>
              </h4>
              <p className="course">B.A</p>
            </div>
          </div>

          <a
            href="documents/Gain Prasad Kar Resume.pdf"
            className="resume"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
