import React from "react";
import logo from "../../assets/w-name.png";

const Footer = () => {
  return (
    <footer className="text-white -mx-20 bg-purple-950 px-20 py-5">
      <section className="flex justify-between items-center">
        <img className="w-40" src={logo} alt="logo" />
        <ul className="flex gap-5 text-sm">
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
      <section>
        <p>DIREITOS</p>
      </section>
    </footer>
  );
};

export default Footer;
