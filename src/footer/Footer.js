import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="right-side-footer">
          <a
            className="email"
            href="mailto:tiffzhong@gmail.com"
            alt="email"
            target="_blank"
          >
            Email
          </a>
          |
          <a
            className="linked"
            href="https://www.linkedin.com/in/tiffanyzhong/"
            alt="linked"
            target="_blank"
          >
            LinkedIn
          </a>
          |
          <a
            className="github"
            href="https://github.com/tiffzhong"
            alt="github"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="left-side-footer">
          Have a good one! | Tiffany Zhong 2019
        </div>
      </div>
    </footer>
  );
};
export default Footer;
