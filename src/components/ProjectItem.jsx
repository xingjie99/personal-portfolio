import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-2xl font-bold text-white tracking-wider ">{props.name}</span>
        <div className="pt-8 text-center">
          <a href={props.demoLink}>
            <button className="flex items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg w-[150px]">
              <p> Demo Link</p>
              <FaExternalLinkAlt className="ml-2" />
            </button>
          </a>
          <a href={props.repoLink}>
            <button className="flex items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg w-[150px]">
              <p> Repository </p>
              <FaGithub className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
