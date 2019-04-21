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
          <p>
            Born and raised in the Bay Area, SJSU graduate, and self-taught
            programmer. Strong interest in full-stack development focusing on
            well designed, clean, responsive, and scalable code. <br />A quick
            learner, self starter, innovative, and creative. I have a love for
            mountains, music, and movies. When I'm not coding you can find me
            lifting at the gym, running, traveling, binging Netflix, or taking
            pictures of my cat.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
