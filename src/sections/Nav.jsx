import React from "react";
import hlogo from "../../assets/w-logo.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import GotoBtn from "../components/GotoBtn";

const Nav = () => {
  // GOTA FIX THIS ON LAPTOP WIDTH
  function handleNavMenu() {
    const menu = document.querySelector("#menu");
    const close = document.querySelector("#close");
    const nav = document.querySelector("#nav");

    nav.classList.toggle("2xs:translate-y-[200%]");
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
  }

  return (
    <header
      className="max-h-[120px] 
      w-[calc(100vw-10rem)]
      max-xs:w-full
      "
    >
      <nav className=" py-5 flex items-center mx-auto justify-between text-white uppercase">
        <img className="w-56" src={hlogo} alt="horizontal_logo" />

        <section
          id="nav"
          className="lg:static lg:min-h-fit absolute
          lg:bg-transparent bg-purple-600 min-h-[60vh] 
          left-0 top-[-100%] lg:w-auto w-[calc(100vw-10rem)]
          flex items-center justify-center
          transition-transform rounded-xl duration-500 
          lg:mx-0 mx-20 ease-out
          2xs:mx-5 2xs:w-[calc(100vw-2.5rem)] 2xs:top-[-105%]
          lg:translate-y-[0%]
          "
        >
          <ul
            className="flex lg:gap-10 gap-14 lg:flex-row 
          flex-col lg:items-center text-center"
          >
            <li>
              <a
                onClick={() => handleNavMenu()}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Welcome"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavMenu()}
                className=" hover:text-subpurple ease-in transition duration-300 text-nowrap"
                href="#About"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavMenu()}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavMenu()}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavMenu()}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Experience"
              >
                Experience
              </a>
            </li>
          </ul>
        </section>

        <section className="flex gap-5">
          {/* <button className="hover:text-purple-900 hover:bg-purple-200 duration-300 uppercase my-auto py-3 px-8 bg-purple-900 rounded-lg">
            Contact
          </button> */}
          <GotoBtn class="max-[425px]:hidden" goto="#contact">
            Contact
          </GotoBtn>
          <IoIosMenu
            id="menu"
            onClick={(e) => handleNavMenu(e)}
            size={40}
            className="cursor-pointer lg:hidden"
          />
          <IoIosClose
            id="close"
            onClick={(e) => handleNavMenu(e)}
            size={40}
            className="cursor-pointer hidden lg:hidden"
          />
        </section>
      </nav>
    </header>
  );
};

export default Nav;
