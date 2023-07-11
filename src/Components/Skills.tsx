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
        <SkillCard svgPath={'svg/html.svg'} />
        <SkillCard svgPath={'svg/css.svg'} />
        <SkillCard svgPath={'svg/javascript.svg'} />
        <SkillCard svgPath={'svg/react.svg'} />
        <SkillCard svgPath={'svg/tailwindcss.svg'} />
        <SkillCard svgPath={'svg/sass.svg'} />
        <SkillCard svgPath={'svg/vitejs.svg'} />
        <SkillCard svgPath={'svg/python.svg'} />
        <SkillCard svgPath={'svg/vscode.svg'} />
        <SkillCard svgPath={'svg/git.svg'} />
        <SkillCard svgPath={'svg/github.svg'} />
      </div>
    </section>
  )
}

export default Skills