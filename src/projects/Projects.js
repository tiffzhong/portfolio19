import React from "react";
import "./Projects.scss";
import carry from "../images/carry.png";
import tr from "../images/tr.png";
import tob from "../images/TOB.png";
import bread from "../images/sf.png";
import tpt from "../images/tpt.png";
const Projects = () => {
  return (
    <div className="project-container">
      <div>
        <div className="left-projects">
          <h2>Projects</h2>
        </div>

        {/* CARRYON */}
        <div className="right-projects">
          <div className="project-image">
            <div className="project-overlay" />
            <img src={carry} alt="carryon" />
            <div className="project-details">
              <h5>Carry On</h5>
              <p>Full Stack</p>
            </div>
          </div>

          {/* TASKRABBIT */}

          <div className="project-image">
            <div className="project-overlay" />
            <img src={tr} alt="carryon" />
            <div className="project-details">
              <h5>Task Rabbit Clone</h5>
              <p>Full Stack</p>
            </div>
          </div>

          {/* SOUR FLOUR */}

          <div className="project-image">
            <div className="project-overlay" />
            <img src={bread} alt="carryon" />
            <div className="project-details">
              <h5>Sour Flour</h5>
              <p>Front End</p>
            </div>
          </div>

          {/* TASTE OF BURMA */}

          <div className="project-image">
            <div className="project-overlay" />
            <img src={tob} alt="carryon" />
            <div className="project-details">
              <h5>Taste of Burma</h5>
              <p>Front End</p>
            </div>
          </div>

          {/* THE PURPLE TULIP */}

          <div className="project-image">
            <div className="project-overlay" />
            <img src={tpt} alt="carryon" />
            <div className="project-details">
              <h5>The Purple Tulip</h5>
              <p>Front End</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
