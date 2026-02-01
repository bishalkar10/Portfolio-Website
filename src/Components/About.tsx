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
              <img className="my-photo" src="images/my_photo.jpg" alt="" />
              <figcaption>
                I'm an extremely ambitious and passionate software engineer. I
                am proficient in developing responsive web applications using
                HTML5, CSS3, Javascript, ReactJs, Sass, and Tailwind CSS. I have
                deployed my work on GitHub Pages and Netlify. I use vite.js,
                which is several times faster than the old and slow webpack. I
                am confident that I can take a design and convert it into a
                pixel-perfect web application. I can consume backend APIs using
                axios and integrate them in the Frontend side.
                <br /> <br />I am proficient in version control using Git and
                Git Hub, which makes me able to work effectively in a team. I
                prefer Tailwind CSS framework for styling web pages as it gives
                me the freedom with convenience to style responsive web pages. I
                have decent experience with SASS/SCSS too (this website is
                styled with SASS 😉). I familiar with Browser Developer Tools,
                which I use daily for debugging purposes. I have plenty of
                painful experience debugging CSS. I am currently learning e2e
                testing using the Playwright testing framework.
              </figcaption>
            </figure>
          </div>
          <h3>Education</h3>
          <div className="education">
            <div>
              <h4>
                Bankura University <span className="year">(2024)</span>
              </h4>
              <p className="course">B.A - English Honors</p>
            </div>
            <div>
              <h4>
                Kamalpur Netaji High School <span className="year">(2020)</span>
              </h4>
              <p className="course">Arts</p>
            </div>
          </div>
          <h3>Experience</h3>
          <div className="experience">
            <div>
              <h4>
                Klenty <span className="year">(Sep 2023 - Present)</span>
              </h4>
              <p className="role">SDE Intern</p>
            </div>
            <p className="details">
              As an SDE intern, I’ve actively contributed to enhancing user
              experience by building new features and resolving bugs. This role
              has given me valuable, hands-on experience in a professional work
              environment. My tech stack includes JavaScript, TypeScript, React,
              Redux, and CSS Modules. I’ve also utilized tools like Jira to
              manage tasks and workflows efficiently.
            </p>
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
