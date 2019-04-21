import React from "react";
import "./TechSkills.scss";

const TechSkills = () => {
  return (
    <div className="techskills-container">
      <div>
        <div className="left-techskills">
          <h2>TechSkills</h2>
        </div>

        <div className="right-techskills">
          <article>
            <h4>Front-End</h4>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Sass</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Responsive Design</li>
            </ul>
          </article>
          <article>
            <h4>Back-End</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>npm</li>
              <li>yarn</li>
              <li>git</li>
              <li>Jest/Sinon</li>
            </ul>
          </article>
          <article>
            <h4>Design</h4>
            <ul>
              <li>Adobe XD</li>
              <li>Figma</li>
            </ul>
            <br />
            <h4>Administrative </h4>
            <ul>
              <li>Trello</li>
              <li>Zenhub</li>
              <li>JIRA</li>
              <li>IDE: VS Code</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
export default TechSkills;
