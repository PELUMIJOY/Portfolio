import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "Nexus Dashboard",
      demo: " https://nexus.mikro.africa/",
    },
    {
      id: 2,
      title: "Charitable App",
      demo: " https://levelup-alpha.vercel.app/",
    },
    {
      id: 3,
      title: "Calculator App",
      demo: " https://calculatorapp-art9.onrender.com/",
    },

    {
      id: 4,
      title: "Annimation App",
      demo: "https://threed-animation-website.onrender.com/",
    },
    {
      id: 5,
      title:"Book Management Application (Backend)",
      demo: "https://github.com/PELUMIJOY/BookLibrary",
    },
  ];
  return (
    <section id="portfolio">
      <div className="section_top">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      </div>
      

      <div className="container portfolio_container">
        {
        data.map(({ id, title, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              {/* <div className="portfolio_item"></div> */}
              <h3>{title}</h3>
              <a href={demo} className="btn" target="_blank">
                Link
              </a>
            </article>
          );
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;
