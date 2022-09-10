import React from "react";
import Arrow from "../assets/arrow.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-gray-300 p-4">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className=" flex flex-col pt-10">
            <p className="text-6xl font-bold inline border-b-4  border-[#3b8399]">Contact</p>
            <p className="py-10 text-lg">Here are the different ways you can reach out to me!</p>
          </div>
          <div className="arrow-animation">
            <img
              className="w-[70%] h-[70%] mr-[10%] hidden lg:flex xl:w-[100%] arrow-animation "
              src={Arrow}
              alt="arrow image"
            />
          </div>

          <div className="lg:hidden w-[90%] mt-0 ">
            <ul className="grid md:grid-cols-2 gap-2 sm:grid-col-1">
              <li className="w-[150px] h-[60px] flex bg-[#2563eb]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/tan-xing-jie-344268220/"
                >
                  <FaLinkedin size={30} />
                  Linkedin
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex bg-[#333333]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/xingjie99"
                >
                  <FaGithub size={30} />
                  Github
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex bg-[#565f69]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                  download
                >
                  <BsFillPersonLinesFill size={30} />
                  Resume
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex bg-[#6fc2b0]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="mailto:tan.xing.jie@u.nus.edu"
                >
                  <HiOutlineMail size={30} />
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
