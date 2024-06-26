import React from "react";
import logo from "../../assets/w-name.png";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="text-white lg:text-sm text-xs lg:-mx-20 bg-purple-950 lg:px-20 py-5 px-10 -mx-5 "
    >
      <section className="flex justify-between items-center flex-col lg:flex-row text-center">
        <img className="w-40" src={logo} alt="logo" />
        <ul className="lg:flex gap-5 grid grid-cols-5 lg:flex-row">
          <li>
            <a className="hover:text-purple transition ease-in" href="#Welcome">
              Welcome
            </a>
          </li>
          <li>
            <a className="hover:text-purple transition ease-in" href="#About">
              About Me
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              href="#Portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              href="#Services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              href="#Experience"
            >
              Experience
            </a>
          </li>
        </ul>
      </section>
      <hr className="border-purple-900 my-5 " />
      <section className="flex justify-between flex-col text-center lg:flex-row ">
        <p className="">2024 - Pedro Nicory - All rights reserved</p>
        <ul className="flex gap-5 justify-center mt-5 lg:mt-0">
          <li>
            <a
              className="hover:text-purple transition ease-in"
              target="blank"
              href="https://instagram.com/pedr_ncry"
            >
              <FaInstagram className="size-7" />
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              target="blank"
              href="https://linkedin.com/in/nicoryy"
            >
              <SiLinkedin className="size-7" />
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              target="blank"
              href="https://github.com/nicoryy"
            >
              <FaGithub className="size-7" />
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple transition ease-in"
              target="blank"
              href="mailto:pedronicory@gmail.com"
            >
              <MdEmail className="size-7" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
