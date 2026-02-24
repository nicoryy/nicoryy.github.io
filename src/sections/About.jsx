import React from "react";
import GotoBtn from "../components/GotoBtn";
import profile from "../../assets/profile20000.png";

const About = () => {
  return (
    <section
      className="min-h-[100vh] flex lg:flex-row justify-center items-center lg:gap-40 flex-col"
      id="About"
    >
      <section className="">
        <img src={profile} alt="perfil_photo" className="drop-shadow-3xl rounded-full" />
      </section>

      <section className="flex flex-col lg:w-[40%] gap-5">
        <span className="font-bold text-3xl lg:text-left text-center uppercase">
          About Me
        </span>

        <span className="text-justify text-gray-300">
          Systems analysis and development student at the Unifanor WYDEN and Full-Stack Developer with experience in web and mobile software development.

          I design and implement scalable digital solutions focused on performance, usability, and business impact. My technical stack includes React, React Native, JavaScript, Python, and Node.js, enabling end-to-end product development — from architecture design to deployment.

          My core competency is translating operational gaps into structured, technology-driven solutions. If there is inefficiency, rework, or lack of integration within a process, system, or workflow, I build the mechanism to resolve it.

          I operate with a continuous improvement mindset, combining engineering fundamentals with practical execution to deliver measurable results.
        </span>

        <section className="flex lg:gap-10 justify-between gap-2">
          <GotoBtn
            link
            goto="https://drive.google.com/file/d/1ta1-8-tO8oahJcQoiOpZZww547-OuOZZ/view?usp=sharing"
            class="px-[15%] "
          >
            Resume
          </GotoBtn>
        </section>
      </section>
    </section>
  );
};

export default About;
