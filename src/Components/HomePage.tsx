import '../Style/homepage.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
    return (
        <section id="home">
            <div className='main-div'>
                <h1>Gain Prasad Kar</h1>
                <p>Software Engineer | FrontEnd Developer | ReactJS Developer</p>
                <ul className='faIcons'>
                    <li><a target='_blank' href="https://www.linkedin.com/in/bishalkar1004"><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a></li>
                    <li><a target='_blank' href="https://www.github.com/bishalkar10"><FontAwesomeIcon className='icon' icon={faGithub} /></a></li>
                    <li><a target='_blank' href="mailto:bishalkar10"><FontAwesomeIcon className='icon' icon={faEnvelope} /></a></li>
                </ul>
                <a className='down-icon-link' href='#about'><FontAwesomeIcon className='icon' icon={faCircleChevronDown} /></a>
            </div>
        </section>
    )
}

export default HomePage