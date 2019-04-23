import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-container">
      <div>
        <div className="left-experience">
          <h2>Experience</h2>
        </div>

        <div className="right-experience">
          <div className="subheading">
            <div>
              <h4>Yelp, Inc.</h4> - <p>San Francisco, CA</p>
            </div>
            <div>
              <h6>02/2016 - 05/2018</h6>
            </div>
          </div>

          <div className="subheading-2">
            <p>Facilities Coordinator</p>
          </div>
          <div className="body-text">
            <ul>
              <li>
                • Handled the Ergonomics program by creating a new policy,
                performed 35+ employee evaluations per quarter, created an
                ergonomic video, and provided proper workstation equipment
                (desk, chair, keyboard, mouse, etc.)
              </li>
              <li>
                • Oversaw the Facilities ticketing system (JIRA) and closed out
                15+ trouble tickets weekly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
