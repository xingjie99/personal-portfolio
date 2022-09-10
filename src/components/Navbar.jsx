import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import aws from "../assets/aws.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 text-gray-300">
      <div>
        <img className="w-10" src={aws} alt="Logo Image" />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Experience</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
        <ul>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#2563eb]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="www.linkedin.com"
            >
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="www.facebook.com"
            >
              <FaGithub size={30} />
              Github
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              <BsFillPersonLinesFill size={30} />
              Resume
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              <HiOutlineMail size={30} />
              Email Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
