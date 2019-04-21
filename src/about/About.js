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
            learner, self starter, innovative, and creative. I am a lover of
            mountains, music, and movies. Some of my hobbies include traveling,
            hiking, running, watching movies, taking pictures of my cat, and
            weight training at the gym.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
