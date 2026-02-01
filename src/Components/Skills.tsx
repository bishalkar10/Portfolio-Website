import { FC } from "react";
import "../Style/skills.sass";

interface SkillCardProps {
  svgPath: string;
  skillName: string;
}
export const SkillCard: FC<SkillCardProps> = ({ svgPath, skillName }) => {
  return (
    <figure className="skill-card">
      <img src={svgPath} alt="skill" />
      <figcaption>{skillName}</figcaption>
    </figure>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-grid">
        <SkillCard svgPath={"svg/html.svg"} skillName="HTML" />
        <SkillCard svgPath={"svg/css.svg"} skillName="CSS" />
        <SkillCard svgPath={"svg/javascript.svg"} skillName="JavaScript" />
        <SkillCard svgPath={"svg/react.svg"} skillName="React" />
        <SkillCard svgPath={"svg/redux-toolkit.svg"} skillName="Redux" />
        <SkillCard svgPath={"svg/tailwindcss.svg"} skillName="TailwindCSS" />
        <SkillCard svgPath={"svg/sass.svg"} skillName="Sass" />
        <SkillCard svgPath={"svg/vitejs.svg"} skillName="ViteJS" />
        <SkillCard svgPath={"svg/playwright-logo.svg"} skillName="Playwright" />
        {/* <SkillCard svgPath={"svg/python.svg"} skillName="Python" /> */}
        <SkillCard svgPath={"svg/vscode.svg"} skillName="VSCode" />
        <SkillCard svgPath={"svg/git.svg"} skillName="Git" />
        <SkillCard svgPath={"svg/github.svg"} skillName="GitHub" />
      </div>
    </section>
  );
};

export default Skills;
