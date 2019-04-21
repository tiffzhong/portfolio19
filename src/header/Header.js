import React from "react";
import profile from "../images/profile.jpg";
import "./Header.scss";
const Header = props => {
  return (
    <div className="header-container">
      <div className="content-container">
        <div>
          <div className="profile">
            <img src={profile} alt="profile-photo" />
          </div>
          <div className="name-container">
            <h1>Tiffany Zhong</h1>
            <p>Full Stack Software Engineer</p>
            <div className="city-location">
              <i class="fas fa-map-marker-alt" />
              <p>South San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="links-container">
          <div>
            <a
              className="github"
              href="https://github.com/tiffzhong"
              alt="github"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              className="linked"
              href="https://www.linkedin.com/in/tiffanyzhong/"
              alt="linked"
              target="_blank"
            >
              <i class="fab fa-linkedin-in" />
            </a>
            <a className="email" href="mailto:tiffzhong@gmail.com" alt="email">
              <i class="far fa-envelope" />
            </a>
          </div>
          <div>
            <a
              className="twitter"
              href="https://twitter.com/pizzatiff"
              alt="twitter"
              target="_blank"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              className="medium"
              href="https://medium.com/@pizzatiff"
              alt="medium"
              target="_blank"
            >
              <i class="fab fa-medium-m" />
            </a>
            <a
              className="youtube"
              href="https://www.youtube.com/user/naffity/"
              alt="youtube"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
