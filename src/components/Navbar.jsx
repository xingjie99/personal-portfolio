import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import aws from "../assets/aws.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 text-gray-300 bg-black z-10 cursive-font">
      <div></div>

      {/* Menu */}
      <ul className="hidden md:flex text-xl">
        <li className="px-5">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-5">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-5">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="px-5">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-5">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
        <ul>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#2563eb]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tan-xing-jie-344268220/"
            >
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/xingjie99"
            >
              <FaGithub size={30} />
              Github
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={aws}
              download
            >
              <BsFillPersonLinesFill size={30} />
              Resume
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex mr-[-90px] hover:ml-[-90px] duration-300 bg-[#6fc2b0]">
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
  );
};

export default Navbar;
