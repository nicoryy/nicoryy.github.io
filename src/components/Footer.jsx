import React from "react";
import logo from "../../assets/w-name.png";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-white text-sm -mx-20 bg-purple-950 px-20 py-5">
      <section className="flex justify-between items-center">
        <img className="w-40" src={logo} alt="logo" />
        <ul className="flex gap-5 ">
            <li>
              <a href="#Welcome">Welcome</a>
            </li>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
        </ul>
      </section>
      <hr className="border-purple-900 my-5" />
      <section className="flex justify-between">
        <p className="">2024 - Pedro Nicory - All rights reserved</p>
        <ul className="flex gap-5">
            <li>
                <a target="blank" href="https://instagram.com/pedr_ncry"><FaInstagram className="size-7"/></a>
            </li>
            <li>
                <a target="blank" href="https://linkedin.com/in/nicoryy"><SiLinkedin className="size-7"/></a>
            </li>
            <li>
                <a target="blank" href="https://github.com/nicoryy"><FaGithub className="size-7"/></a>
            </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
