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
          <section>
            <h4>Yelp, Inc.</h4> - <p>San Francisco, CA</p>
            <p>Facilities Coordinator</p>
            <h6>February 2016 - May 2018</h6>
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
          </section>
        </div>
      </div>
    </div>
  );
};
export default Experience;
