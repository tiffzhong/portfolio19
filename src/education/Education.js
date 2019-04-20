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
          <section>
            <div className="subheading">
              <h4>DevMountain</h4> - <p>Phoenix, AZ</p>
            </div>
            <div className="subheading-2">
              <h6>Web Development</h6>
            </div>
            <p>
              12 Week Immersive Full Stack Web Development & Software
              Engineering Program
            </p>
          </section>

          <section>
            <div className="subheading">
              <h4>San Jose State University</h4> - <p>San Jose, CA</p>
              <p>August 2011 - May 2015</p>
            </div>
            <div className="subheading-2">
              <h6>
                B.S. in Health Science, Health Service Administration; Minor:
                Business
              </h6>
            </div>
            <p>GPA: 3.75</p>
          </section>

          <section>
            <div className="subheading">
              <h4>Edinburgh Napier University</h4> - <p>Edinburgh, UK</p>
              <p>August 2013 - January 2014</p>
            </div>
            <div className="subheading-2">
              <h6>Study Abroad, Bilateral Program</h6>
            </div>
            <p>Course Focus: Business Marketing</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Education;
