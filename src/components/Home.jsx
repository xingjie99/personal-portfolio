import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typical from "react-typical";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center py-[350px]">
        <p className="text-[#5c696d]">Hi! I am</p>
        <h1 className="text-white text-4xl sm:text-7xl font-bond">Tan Xing Jie</h1>
        <h2 className="text-[#3b8399] text-4xl sm:text-7xl font-bond">
          i am{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["singer", 10000, "writer", 10000, "coder", 10000]}
          />
        </h2>
        <p className="text-[#3b8399]">i love oding blah blah</p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3b8399] hover:border-[#3b8399]">
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
