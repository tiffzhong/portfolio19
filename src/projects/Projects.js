import React, { Component } from "react";
import "./Projects.scss";
import carry from "../images/carry.png";
import tr from "../images/tr.png";
import tob from "../images/TOB.png";
import bread from "../images/sf.png";
import tpt from "../images/tpt.png";
class Projects extends Component {
  constructor() {
    super();
    this.state = { toggle: false };
  }

  toggler = event => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div className="project-container">
        <div>
          <div className="left-projects">
            <h2>Projects</h2>
          </div>

          {/* CARRYON */}
          <div className="right-projects">
            <div className="single-project-container">
              <div className="project-image">
                <div className="project-overlay" />
                <img src={carry} alt="carryon" />
                <div onClick={this.toggler} className="project-details">
                  <h5>Carry On</h5>
                  <p>Full Stack</p>
                </div>
              </div>
              <div
                className={
                  this.state.toggle ? "project-text" : "hide-proj-text"
                }
              >
                <div className="proj-header">
                  <h5>Carry On</h5>
                  <p>Full Stack</p>
                </div>
                <div className="text-containers">
                  <div className="proj-description">
                    <h6>Description:</h6>
                    <p>
                      Hybrid travel blog and e-commerce website allowing users
                      to read and post personal travel experiences, create and
                      view personal profiles, and purchase Carry On-logo
                      merchandise.
                    </p>
                  </div>
                  <div className="tech-used">
                    <h6>Technologies Used:</h6>
                    <p>
                      ReactJS, Redux, Node.js, Express, Massive, PostgreSQL,
                      Auth0, Bcrypt, NewsAPI, Cloudinary, Stripe, Nodemailer,
                      and Twilio. Fully Responsive design on desktop & mobile.
                      Hosted on Digital Ocean VM
                    </p>
                  </div>
                </div>
                <div className="project-links">
                  <a href="https://www.carryontravel.us/" target="_blank">
                    Visit Site
                  </a>
                  <a
                    href="https://github.com/tiffzhong/carryon"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
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
  }
}
export default Projects;
