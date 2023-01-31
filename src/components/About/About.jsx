import React from "react";
import "./About.css";
import joy from "../../assets/joy.png";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <div className='section_top'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      </div>
      
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={joy} alt="About-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about_cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>2 years o</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>2 years </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Project</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            I am Pelumi Joy Fasunhanmi a software engineer with a passion for
            excellence, skilled in application development, communication, and
            technology adaptation. I have a proven track record of building
            web-based products, APIs, databases, and software applications. My
            experience in agile teams has honed my analytical thinking and
            ability to leverage technology to solve challenging tasks that span
            various spheres.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
