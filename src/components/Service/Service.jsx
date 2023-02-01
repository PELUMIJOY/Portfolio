import React from "react";
import "./Service.css";
import { FaLaptopCode } from "react-icons/fa";
// import {FaDatabase} from 'react-icons/fa'
import { FaCode } from "react-icons/fa";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import {SiJirasoftware} from "react-icons/si";

const Service = () => {
  const data = [
    {
      id: 1,
      logo: <FaLaptopCode />,
      title: "Web Development",
      skills: " HTML, CSS, Javascript, React, Node.js, Express",
    },
    {
      id: 2,
      logo: <FaCode />,
      title: "Database Design",
      skills: "SQL, MongoDB, PostgreSQL and MySQL.",
    },
    {
      id: 3,
      logo: <MdOutlineIntegrationInstructions />,
      title: "Workflow Automation And CI",
      skills: " Git, Github Action, Docker.",
    },
    {
      id: 3,
      logo: <SiJirasoftware/>,
      title: "Project Management Tool",
      skills: "Jira",
    },
  ];

  return (
    <section id="service">
      <div className="section_top">
        <h5>What I Offer</h5>
      <h2>Services</h2>
      </div>
     
      <div className="container sevices_container">
        {data.map(({ id, logo, title, skills }) => {
          return (
             <article className="service_item">
          <div>
            <h2 className="service_icon">
              {logo}
            </h2>
          </div>
          <h3>{title}</h3>
          <p className="skills">{skills}</p>
        </article>
        
          );
        })}

      </div>
    </section>
  );
};

export default Service;
