import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Myself from "../assets/myself.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center py-[200px]">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="w-[170%]">
            <p className="text-[#5c696d]">Hi, I am</p>
            <h1 className="text-white text-4xl sm:text-7xl font-bond">Tan Xing Jie</h1>
            <h2 className="text-[#3b8399] text-4xl sm:text-7xl font-bond">
              I am a{" "}
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={["Student", 3000, "Sportsman", 3000, "Frontend Developer", 3000]}
              />
            </h2>
            <p className="text-[#a0bac2] py-4 max-w-[700px]">
              I'm currently pursuing my Computer Engineering degree at the National University of
              Singapore. I am an aspiring Frontend Developer and I enjoy building responsive web
              applications.{" "}
            </p>
            <div>
              <Link to="projects" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3b8399] hover:border-[#3b8399]">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <img
            className="lg:flex hidden scale-70 w-[80%] ml-[50%] mb-[50%] "
            src={Myself}
            alt="My image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
