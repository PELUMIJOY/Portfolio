import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "Food Service Application",
      demo: " https://foodorderring.netlify.app/",
    },
    {
      id: 2,
      title: "Star Wars Picture Gallery",
      demo: " https://pelumijoy-starwar-project.netlify.app",
    },
    {
      id: 3,
      title: "AnimaFarm",
      demo: " https://animafarm.onrender.com",
    },
    {
      id: 4,
      title:"Book Management Application",
      demo: "https://github.com",
    },
    {
      id: 5,
      title: "Css Animation Torist website",
      demo: " https://pelumijoy-starwar-project.netlify.app",
    },
    {
      id: 6,
      title: "Static Residence website",
      demo: "https://cool-life.netlify.app/",
    },
  ];
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({ id, title, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image"></div>
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
