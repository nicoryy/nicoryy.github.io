import React from "react";
import GotoBtn from "../components/GotoBtn";
import profile from "../../assets/profile20000.png";

const About = () => {
  return (
    <section
      className="min-h-[100vh] flex lg:flex-row sm:flex-col
          justify-center items-center lg:gap-40 2xs:flex-col"
      id="About"
    >
      <section className="">
        <img src={profile} alt="perfil_photo" className="drop-shadow-3xl" />
      </section>

      <section className="flex flex-col lg:max-w-[40%] sm:max-w-[80%] gap-5">
        <span
          className="font-bold text-3xl lg:text-left 
              sm:text-center uppercase"
        >
          About Me
        </span>

        <span className="text-justify text-gray-300">
          I am a student of Mechatronics Engineering at the Federal Institute of
          Education, Science, and Technology of Ceará (IFCE), with a passion for
          technology and development. As a full-stack developer, I have
          experience and skills in React, React Native, JavaScript, Python, and
          Node.js. Throughout my academic and professional journey, I have
          constantly sought to enhance my skills and knowledge, both in theory
          and in practice. I am always open to new learning opportunities and
          collaboration, eager to tackle future challenges and continue growing
          as a professional.
        </span>

        <section className="flex gap-10 justify-between 2xs:gap-2">
          <GotoBtn goto="https://drive.google.com/file/d/1ta1-8-tO8oahJcQoiOpZZww547-OuOZZ/view?usp=sharing" class="px-[15%] ">
            Resume
          </GotoBtn>
        </section>
      </section>
    </section>
  );
};

export default About;
