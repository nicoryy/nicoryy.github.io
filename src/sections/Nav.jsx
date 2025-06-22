import React, { useEffect, useState } from "react";
import hlogo from "../../assets/logos/w-logo.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import GotoBtn from "../components/GotoBtn";
import { FaArrowUp } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <header className="h-[120px] relative">
      <FaArrowUp
        onClick={() => scrollToTop()}
        className={`lg:bottom-20 lg:right-20 bottom-10 right-10 bg-purple p-2 rounded-md fixed z-50 transition duration-500 ease-in-out bg-opacity-50 ${
          isVisible ? "translate-x-0" : "translate-x-40"
        }`}
        size={40}
        color="white"
      />
      <nav className=" py-5 flex items-center justify-between text-white uppercase">
        <img className="w-56" src={hlogo} alt="horizontal_logo" />

        <section
          id="nav"
          className={`lg:static bg-purple lg:bg-transparent z-50 m-auto top-0 left-0 right-0 bottom-0 grid place-items-center fixed transition duration-1000 ease-in-out
            ${
              isMenuOpen
                ? "translate-y-0"
                : "lg:inline-block translate-y-[calc(100%+5rem)] lg:translate-y-0"
            }`}
        >
          <ul className="lg:flex lg:flex-row grid lg:items-center text-center lg:gap-10 gap-14 ">
            <li>
              <a
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Welcome"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
                className=" hover:text-subpurple ease-in transition duration-300 text-nowrap"
                href="#About"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
                className="hover:text-subpurple ease-in transition duration-300"
                href="#Experience"
              >
                Experience
              </a>
            </li>
          </ul>
          <IoIosClose
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            size={50}
            className="cursor-pointer lg:hidden z-50 fixed bottom-10 bg-subpurple rounded-full left-1/2 transform -translate-x-1/2"
          />
        </section>

        <section className="flex gap-5">
          <GotoBtn class="hidden lg:inline" goto="#contact">
            Contact
          </GotoBtn>
          <IoIosMenu
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            size={40}
            className="cursor-pointer lg:hidden"
          />
        </section>
      </nav>
    </header>
  );
};

export default Nav;
