import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <div className="left-about">
          <h2>About Me</h2>
        </div>

        <div className="right-about">
          <div>
            Born and raised in the Bay Area, first generation Asian American,
            SJSU graduate, and self-taught programmer. I am passionate about
            building tools to make people move faster, live easier and work more
            efficiently. A quick learner, self starter, innovative, and
            creative.
          </div>
          <div>
            I have a love for mountains, music, and movies. When I'm not on a
            computer you can find me eating carbs, at the gym, running,
            traveling, vlogging, binging the latest Netflix series, or taking
            pictures of my cat.
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
