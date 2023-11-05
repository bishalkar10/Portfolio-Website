import React, { useState } from "react"; // importing FunctionComponent
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
// import '../Style/projects.sass'

interface CardProps {
  index: number;
  imgPath: string;
  githubURL: string;
  demoURL: string;
  name: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  index,
  imgPath,
  githubURL,
  demoURL,
  name,
  description,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const handleClick = () => setShowInfo(!showInfo);
  const even: boolean = (index + 1) % 2 === 0; // suppose index is 0 so meaning it is the first card. so 0+1=1 and 1%2=1 so it is not even
  return (
    <div
      className="odd-card"
      style={even ? { flexDirection: "row-reverse" } : undefined}
    >
      {/* if items is even then flex-direction : row-reverse  */}
      <div className="card-div">
        <figure className="figure ">
          <div
            className="info "
            style={showInfo ? { display: "block" } : undefined}
          >
            {description}
          </div>
          <img
            loading="lazy"
            className="image"
            src={imgPath}
            alt={name}
            style={showInfo ? { display: "none" } : undefined}
          />
          <figcaption className="name">{name}</figcaption>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="info-icon"
            onClick={handleClick}
          />
        </figure>
        <div className=" button-container ">
          <a className="demo-btn" href={demoURL} target="_blank">
            Demo
          </a>
          <a className="code-btn" href={githubURL} target="_blank">
            Code
          </a>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};
