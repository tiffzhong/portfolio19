import React, { Component } from "react";
import "./Projects.scss";
import carry from "../images/carry.png";
import tr from "../images/tr.png";
import tob from "../images/TOB.png";
import bread from "../images/sf.png";
import tpt from "../images/tpt.png";
import COImages from "./project/carryon/carryon";
import TRImages from "./project/taskr/taskr";
import SFImages from "./project/sourf/sourf";
import TOBImages from "./project/tob/tob";
import TPTImages from "./project/tpt/tpt";
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      COtoggle: false,
      TRtoggle: false,
      SFtoggle: false,
      TOBtoggle: false,
      TPTtoggle: false
    };
  }

  COtoggler = () => {
    this.setState({ COtoggle: !this.state.COtoggle });
  };
  TRtoggler = () => {
    this.setState({ TRtoggle: !this.state.TRtoggle });
  };

  SFtoggler = () => {
    this.setState({ SFtoggle: !this.state.SFtoggle });
  };
  TOBtoggler = () => {
    this.setState({ TOBtoggle: !this.state.TOBtoggle });
  };
  TPTtoggler = () => {
    this.setState({ TPTtoggle: !this.state.TPTtoggle });
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
                <div onClick={this.COtoggler} className="project-details">
                  <h5>Carry On</h5>
                  <p>Full Stack</p>
                </div>
              </div>
              <div
                className={
                  this.state.COtoggle ? "project-text" : "hide-proj-text"
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
                      CSS, Auth0, Bcrypt, NewsAPI, Cloudinary, Stripe,
                      Nodemailer, and Twilio. Fully Responsive design on desktop
                      & mobile. Hosted on Digital Ocean VM
                    </p>
                  </div>
                </div>
                <COImages />
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

            <div className="single-project-container">
              <div className="project-image">
                <div className="project-overlay" />
                <img src={tr} alt="tr" />
                <div onClick={this.TRtoggler} className="project-details">
                  <h5>Task Rabbit Clone</h5>
                  <p>Full Stack</p>
                </div>
              </div>
              <div
                className={
                  this.state.TRtoggle ? "project-text" : "hide-proj-text"
                }
              >
                <div className="proj-header">
                  <h5>Task Rabbit Clone</h5>
                  <p>Full Stack</p>
                </div>
                <div className="text-containers">
                  <div className="proj-description">
                    <h6>Description:</h6>
                    <p>
                      Group project clone of a marketplace that matches
                      freelance labor with local demand. Users are able to sign
                      up to become a Tasker or sign up as a client and describe
                      their needs.
                    </p>
                  </div>
                  <div className="tech-used">
                    <h6>Technologies Used:</h6>
                    <p>
                      ReactJS, Redux, Node.js, Express, PostgreSQL, Auth0,
                      GoogleMaps API, Axios, Stripe, and Nodemailer. Best viewed
                      on Desktop.
                    </p>
                  </div>
                </div>
                <TRImages />
                <div className="project-links">
                  <a href="https://rabbit-clone.fun/" target="_blank">
                    Visit Site
                  </a>

                  <a
                    href="https://github.com/tiffzhong/task-rabbit"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>

            {/* SOUR FLOUR */}
            <div className="single-project-container">
              <div className="project-image">
                <div className="project-overlay" />
                <img src={bread} alt="bread" />
                <div onClick={this.SFtoggler} className="project-details">
                  <h5>Sour Flour</h5>
                  <p>Front End</p>
                </div>
              </div>
              <div
                className={
                  this.state.SFtoggle ? "project-text" : "hide-proj-text"
                }
              >
                <div className="proj-header">
                  <h5>Sour Flour</h5>
                  <p>Front End Static Website</p>
                </div>
                <div className="text-containers">
                  <div className="proj-description">
                    <h6>Description:</h6>
                    <p>Sourdough company that hosts bread making workshops.</p>
                  </div>
                  <div className="tech-used">
                    <h6>Technologies Used:</h6>
                    <p>
                      React, SCSS, Animations. Responsive design on desktop &
                      mobile.
                    </p>
                  </div>
                </div>
                <SFImages />
                <div className="project-links">
                  <a href="https://sourflour.netlify.com/" target="_blank">
                    Visit Site
                  </a>

                  <a
                    href="https://github.com/tiffzhong/sourflour"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>

            {/* TASTE OF BURMA */}

            <div className="single-project-container">
              <div className="project-image">
                <div className="project-overlay" />
                <img src={tob} alt="tob" />
                <div onClick={this.TOBtoggler} className="project-details">
                  <h5>Taste of Burma</h5>
                  <p>Front End</p>
                </div>
              </div>
              <div
                className={
                  this.state.TOBtoggle ? "project-text" : "hide-proj-text"
                }
              >
                <div className="proj-header">
                  <h5>Taste of Burma</h5>
                  <p>Front End Static Website</p>
                </div>
                <div className="text-containers">
                  <div className="proj-description">
                    <h6>Description:</h6>
                    <p>
                      Rebuilt codebase following previous website's
                      layout/design with modern upgrades. Met client's style
                      needs.
                    </p>
                  </div>
                  <div className="tech-used">
                    <h6>Technologies Used:</h6>
                    <p>ReactJS, Sass. Responsive design on desktop & mobile.</p>
                  </div>
                </div>
                <TOBImages />
                <div className="project-links">
                  <a href="https://tasteofburma.netlify.com/" target="_blank">
                    Visit Site
                  </a>

                  <a
                    href="https://github.com/tiffzhong/tasteofburma"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>

            {/* THE PURPLE TULIP */}

            <div className="single-project-container">
              <div className="project-image">
                <div className="project-overlay" />
                <img src={tpt} alt="tpt" />
                <div onClick={this.TPTtoggler} className="project-details">
                  <h5>The Purple Tulip</h5>
                  <p>Front End</p>
                </div>
              </div>
              <div
                className={
                  this.state.TPTtoggle ? "project-text" : "hide-proj-text"
                }
              >
                <div className="proj-header">
                  <h5>The Purple Tulip</h5>
                  <p>Front End Static Website</p>
                </div>
                <div className="text-containers">
                  <div className="proj-description">
                    <h6>Description:</h6>
                    <p>
                      Florist portfolio site showcasing client's past work,
                      events, and pieces.
                    </p>
                  </div>
                  <div className="tech-used">
                    <h6>Technologies Used:</h6>
                    <p>
                      React, SCSS, Nodemailer, Instagram API. Responsive design
                      on desktop & mobile.
                    </p>
                  </div>
                </div>
                <TPTImages />
                <div className="project-links">
                  <a href="https://tasteofburma.netlify.com/" target="_blank">
                    Visit Site
                  </a>

                  <a
                    href="https://github.com/tiffzhong/tasteofburma"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
