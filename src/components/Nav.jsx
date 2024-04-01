import React from "react";
import hlogo from "../../assets/w-logo.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";


const Nav = () => {
  function handleNavMenu(){
    const menu = document.querySelector("#menu")
    const close = document.querySelector('#close')
    const nav = document.querySelector('#nav')

    nav.classList.toggle('top-[20%]')
    menu.classList.toggle('hidden')
    close.classList.toggle('hidden')

  }

  return (
    <header className="max-h-[120px] w-[calc(100vw-10rem)]">
      <nav className=" py-5 flex items-center mx-auto justify-between text-white uppercase">
        <img className="w-56" src={hlogo} alt="horizontal_logo" />

        <section
          id="nav"
          className="lg:static lg:min-h-fit absolute
          lg:bg-transparent bg-purple-600 min-h-[60vh] 
          left-0 top-[-100%] lg:w-auto w-[calc(100vw-10rem)]
          flex items-center mx-20 justify-center
          transition
          duration-300
            "
        >
          <ul className="flex lg:gap-10 gap-8 lg:flex-row flex-col lg:items-center ">
            <li>
              <a className="hover:text-purple-900 duration-300" href="#Welcome">Welcome</a>
            </li>
            <li>
              <a className=" hover:text-purple-900 duration-300 text-nowrap" href="#About">About Me</a>
            </li>
            <li>
              <a className="hover:text-purple-900 duration-300" href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a className="hover:text-purple-900 duration-300" href="#Services">Services</a>
            </li>
            <li>
              <a className="hover:text-purple-900 duration-300" href="#Experience">Experience</a>
            </li>
          </ul>
        </section>

        <section className="flex gap-5">
          <button className="hover:text-purple-900 hover:bg-purple-200 duration-300 uppercase my-auto py-3 px-8 bg-purple-900 rounded-lg">
            Contact
          </button>
          <IoIosMenu id="menu" onClick={(e)=>handleNavMenu(e)} size={40} className="cursor-pointer lg:hidden"/>
          <IoIosClose id="close" onClick={(e)=>handleNavMenu(e)} size={40} className="cursor-pointer hidden lg:hidden"/>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
