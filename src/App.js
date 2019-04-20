import React, { Component } from "react";
import "./reset.scss";
import Header from "./header/Header";
import About from "./about/About";
import Projects from "./projects/Projects";
import TechSkills from "./techskills/TechSkills";
import routes from "./routes";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Footer from "./footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        {routes}
        <TechSkills />
        <Education />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
