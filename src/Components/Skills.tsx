import { FC, } from 'react'
import '../Style/skills.sass'

interface SkillCardProps {
  svgPath: string;
}
export const SkillCard: FC<SkillCardProps> = ({ svgPath }) => {
  return (
    <div className='skill-card'>
      <img src={svgPath} alt='skill' />
    </div>
  )
}

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='title'>Skills</h2>
      <div className='skill-grid'>
        <SkillCard svgPath={'/public/svg/html.svg'} />
        <SkillCard svgPath={'/public/svg/css.svg'} />
        <SkillCard svgPath={'/public/svg/javascript.svg'} />
        <SkillCard svgPath={'/public/svg/react.svg'} />
        <SkillCard svgPath={'/public/svg/tailwindcss.svg'} />
        <SkillCard svgPath={'/public/svg/sass.svg'} />
        <SkillCard svgPath={'/public/svg/vitejs.svg'} />
        <SkillCard svgPath={'/public/svg/python.svg'} />
        <SkillCard svgPath={'/public/svg/vscode.svg'} />
        <SkillCard svgPath={'/public/svg/git.svg'} />
        <SkillCard svgPath={'/public/svg/github.svg'} />
      </div>
    </section>
  )
}

export default Skills