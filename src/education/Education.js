import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education-container">
      <div>
        <div className="left-education">
          <h2>Education</h2>
        </div>

        <div className="right-education">
          <div className="subheading">
            <div>
              <h4>DevMountain</h4> -<p>Phoenix, AZ</p>
            </div>
            <div>
              <h6>11/2018 - 02/2019</h6>
            </div>
          </div>
          <div className="subheading-2">
            <h5>Web Development</h5>
          </div>
          <div className="subheading-3">
            <p>
              12 Week Immersive Full Stack Web Development & Software
              Engineering Program
            </p>
          </div>
          <div className="subheading">
            <div>
              <h4>San Jose State University</h4> - <p>San Jose, CA</p>
            </div>
            <div>
              <h6>08/2011 - 05/2015</h6>
            </div>
          </div>
          <div className="subheading-2">
            <h5>
              B.S. in Health Science, Health Service Administration; Minor:
              Business
            </h5>
          </div>
          <div className="subheading-3">
            <p>GPA: 3.75</p>
          </div>

          <div className="subheading">
            <div>
              <h4>Edinburgh Napier University</h4> - <p>Edinburgh, UK</p>
            </div>
            <div>
              <h6>08/2013 - 01/2014</h6>
            </div>
          </div>
          <div className="subheading-2">
            <h5>Study Abroad, Bilateral Program</h5>
          </div>
          <div className="subheading-3">
            <p>Course Focus: Business Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
