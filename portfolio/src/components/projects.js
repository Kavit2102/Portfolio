import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  return (
    <div>
      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="pt-10 text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-5xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="/"
            target="_blank"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img src={project1} className="w-full shadow" alt="portfolio" />
            <p></p>
          </a>
          <a
            href="/"
            target="_blank"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img src={project2} className="w-full shadow" alt="portfolio" />
          </a>
          <a
            href="/"
            target="_blank"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img src={project3} className="w-full shadow" alt="portfolio" />
          </a>
          <a
            href="/"
            target="_blank"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src="/assets/img/portfolio-microsoft.jpeg"
              className="w-full shadow"
              alt="portfolio"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
