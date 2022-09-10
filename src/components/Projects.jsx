import React from "react";
import ProjectItem from "./ProjectItem";
import CryptoImg from "../assets/crypto-app.png";
import PortfolioImg from "../assets/portfolio.png";
import WeatherImg from "../assets/weather-app.png";
import toDoListImg from "../assets/to-do-list-app.png";
import FitbotImg from "../assets/fitbot-app.jpg";
import CG2271Img from "../assets/cg2271.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 text-gray-300 border-[#3b8399]">
            Projects
          </p>
          <p className="py-6">Check out some of my past projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectItem
            backgroundImage={CryptoImg}
            name="Cryptobase"
            demoLink="https://statuesque-souffle-6d9812.netlify.app/"
            repoLink="https://github.com/xingjie99/crypto-project"
          />
          <ProjectItem
            backgroundImage={PortfolioImg}
            name="Portfolio"
            demoLink="www.google.com"
            repoLink="https://github.com/xingjie99/personal-portfolio"
          />
          <ProjectItem
            backgroundImage={WeatherImg}
            name="Weather App"
            demoLink="https://taupe-medovik-75df29.netlify.app/"
            repoLink="https://github.com/xingjie99/weather-app"
          />
          <ProjectItem
            backgroundImage={toDoListImg}
            name="To Do List"
            demoLink="https://genuine-speculoos-17d437.netlify.app/"
            repoLink="https://github.com/xingjie99/to-do-list"
          />
          <ProjectItem
            backgroundImage={CG2271Img}
            name="CG2271 Project"
            demoLink="https://www.youtube.com/watch?v=53UcGHaGFQo"
            repoLink="https://github.com/xingjie99/CG2271"
          />
          <ProjectItem
            backgroundImage={FitbotImg}
            name="Fitbot"
            demoLink="https://github.com/xingjie99/tp/blob/master/docs/UserGuide.md"
            repoLink="https://github.com/xingjie99/tp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
