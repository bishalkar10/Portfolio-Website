import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Style/footer.sass";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Gain Prasad Kar. All rights reserved.</p>
        <div className="icons-div">
          <a target="_blank" href="https://www.linkedin.com/in/gain-kar">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a target="_blank" href="https://www.github.com/bishalkar10">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" href="mailto:bishalkar10">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
