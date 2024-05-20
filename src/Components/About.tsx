import "../Style/about.sass";
import React from "react";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
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
                I'm an extremely ambitious and pasionate software engineer. I am
                proficient in developing responsive web application using HTML5,
                CSS3, Javascript, ReactJs, Sass, Tailwindcss. I have deployed my
                works on Github Pages and Netlify. I use vite.js, which is
                several times faster then the old and slow webpack. I am
                confident than I can take a design and convert it into a
                pixel-perfect web application. I can consume backend APIs using
                axios and integrate them in the Frontend side.
                <br /> <br />I am procient in version control using git and
                github, which make me able to work effectively in a team. I
                prefer Tailwindcss framework for styling web pages as it gives
                me the freedom with convinence to style responsive web pages. I
                have decent experience with SASS/SCSS too (this website is
                styled with SASS 😉). I familiar with Browser Developer Tools,
                which I use on a daily basis for debugging purposes. I have
                plenty of painful experienced debugging CSS. I am currently
                learning e2e testing using Playwright testing framework.
              </figcaption>
            </figure>
          </div>
          <h3>Education</h3>
          <div className="education">
            <div>
              <h4>
                Bankura University <span className="year">(2020-)</span>
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
