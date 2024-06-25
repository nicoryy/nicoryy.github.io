import React from "react";
import GotoBtn from "../components/GotoBtn";
import imgmobile from "../../assets/computer-illustration.png";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const typewriter = Typewriter({
    words: [
      "Full Stack Website Developer .",
      "Mobile Developer .",
      "Person named Pedro Nicory 😉",
    ],
    cursorBlinking: true,
    cursor: true,
    typeSpeed: 100,
    loop: true,
  });

  return (
    <section className="h-[calc(100vh-120px)] grid grid-cols-2 place-items-center">
      <div className="w-[32rem]">
        <h2 className="text-gray-600 font-bold sm:text-5xl 2xs:text-3xl">
          I'm a
        </h2>

        <h1
          id="#Welcome"
          className="font-bold sm:text-7xl 2xs:text-5xl tracking-wider"
        >
          {typewriter}
        </h1>

        <div className="flex items-center justify-between w-full">
          <GotoBtn class="my-10" goto="#Portfolio">
            Previous Project
          </GotoBtn>

          <span className="flex gap-5">
            <a
              target="blank"
              className="hover:text-[#5426B7] transition"
              href="https://github.com/nicoryy"
            >
              <FiGithub size={40} />
            </a>

            <a
              target="blank"
              className="hover:text-[#5426B7] transition"
              href="https://linkedin.com/in/nicoryy"
            >
              <FiLinkedin size={40} />
            </a>
          </span>
        </div>
      </div>

      <img
        src={imgmobile}
        alt="img mobile"
        className="size-[30rem] right-0 lg:mr-[25%] sm:-right-64 2xs:max-lg:hidden object-contain "
      />
    </section>
  );
};

export default Home;
