import React from "react";
import "./TechSkills.scss";

const TechSkills = () => {
  return (
    <div className="techskills-container">
      <div>
        <div className="left-techskills">
          <h2>Technology</h2>
        </div>

        <div className="right-techskills">
          <div>
            <h4>Front-End</h4>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Sass</p>
            <p>CSS3</p>
            <p>HTML5</p>
            <p>Responsive</p>
          </div>
          <div>
            <h4>Back-End</h4>
            <p>Node.js</p>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>npm</p>
            <p>yarn</p>
            <p>git</p>
            <p>Jest/Sinon</p>
          </div>
          <div>
            <h4>Design</h4>
            <p>Adobe XD</p>
            <p>Figma</p>

            <h4>Administrative </h4>
            <p>Trello</p>
            <p>Zenhub</p>
            <p>JIRA</p>
            <p>IDE: VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechSkills;
