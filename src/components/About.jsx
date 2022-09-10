import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8">
            <p className="text-6xl font-bold inline border-b-4 border-[#3b8399]">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold border-r-8 border-[#3b8399]">
            <p>
              Welcome to my personal website. You can have a look at the work that I've done below!
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that can impact and improve the
              lives of those around me. I am currently seeking for internship opportunities as a
              Frontend Developer to gain better exposure and more experience in this field. Do reach
              out to me if you wish to have a chat with me 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
