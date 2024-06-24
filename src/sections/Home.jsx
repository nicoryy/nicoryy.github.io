import React from "react";
import GotoBtn from "../components/GotoBtn";
import imgmobile from "../../assets/mobile.png";
import profile from "../../assets/profile20000.png";

const Home = () => {
  return (
    <section
      className="h-[calc(100vh-120px)] flex 
            flex-col pb-10
            items-start justify-center
            "
    >
      <h2 className="text-gray-600 font-bold sm:text-5xl 2xs:text-3xl">
        I'm a
      </h2>

      <h1
        id="#Welcome"
        className='font-bold sm:text-7xl 2xs:text-5xl tracking-wider after:content-["."]'
      >
        Full Stack <br />
        Website <br />
        Developer
      </h1>

      <GotoBtn class="my-10" goto="#Portfolio">
        Previous Project
      </GotoBtn>

      <img
        src={imgmobile}
        alt="img mobile"
        className="absolute size-[30rem] right-0 lg:mr-[25%] sm:-right-64 2xs:max-lg:hidden object-contain animate-waving"
      />
    </section>
  );
};

export default Home;
