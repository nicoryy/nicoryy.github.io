import React from "react";
import hlogo from "../../assets/w-logo.png";

const Nav = () => {
  return (
    <header className="max-h-[120px]">
        <nav>
            <div className="py-5 flex justify-between text-white uppercase">                                                                                

                <img className="w-56 " src={hlogo} alt="horizontal_logo" />

                <ul className="flex gap-10  items-center">
                  <li><a href="#welcome">Welcome</a></li>
                  <li><a href="#About">About Me</a></li>
                  <li><a href="#Portfolio">Portfolio</a></li>
                  <li><a href="#Services">Services</a></li>
                  <li><a href="#Experience">Experience</a></li>
                </ul>

                <button className=" uppercase my-auto py-3 px-8 bg-purple-900 rounded-md">Contact</button>
                
            </div>
        </nav>
    </header>
  );
};

export default Nav;
