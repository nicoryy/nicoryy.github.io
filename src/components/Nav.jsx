import React from "react";
import hlogo from "../../assets/w-logo.png";

const Nav = () => {
  return (
    <header>
        <nav>
            <div className="px-20 py-5 flex justify-between bg-blue-400">                                                                                

            <div className="flex items-center bg-red-300">
                <img className="w-56" src={hlogo} alt="horizontal_logo" />
            </div>

            <div className="grid place-items-center bg-red-300">
                <ul className="flex gap-10 items-center">
                <li>Welcome</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Experience</li>
                </ul>
            </div>

            <div className="grid bg-red-300">
                <button>Contact</button>
            </div>

            </div>
        </nav>
    </header>
  );
};

export default Nav;
