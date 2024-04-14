import GotoBtn from "./components/GotoBtn";
import Nav from "./components/Nav";
import profile from "../assets/profile20000.png";
import TabPortfolio from "./components/TabPortfolio";

import { mobile } from "./projects";

function App() {
  return (
    <>
      <section className="bg-[#170a1a] sm:px-20 max-xs:px-5">
        <Nav />

        <main className="text-white">
          {/* // WELCOME SECTION */}
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

            <GotoBtn class="my-10" goto="Project">
              Previous Project
            </GotoBtn>
          </section>

          {/* ABOUT ME SECTION  */}
          <section
            className="min-h-[100vh] flex lg:flex-row sm:flex-col
          justify-center items-center lg:gap-40 2xs:flex-col
          "
          >
            <section className="">
              <img
                src={profile}
                alt="perfil_photo"
                className="drop-shadow-3xl"
              />
            </section>

            <section className="flex flex-col lg:max-w-[40%] sm:max-w-[80%] gap-5">
              <span
                id="About"
                className="font-bold text-3xl lg:text-left 
              sm:text-center uppercase"
              >
                About Me
              </span>

              <span className="text-justify text-gray-300">
                I am a student of Mechatronics Engineering at the Federal
                Institute of Education, Science, and Technology of Ceará (IFCE),
                with a passion for technology and development. As a full-stack
                developer, I have experience and skills in React, React Native,
                JavaScript, Python, and Node.js. Throughout my academic and
                professional journey, I have constantly sought to enhance my
                skills and knowledge, both in theory and in practice. I am
                always open to new learning opportunities and collaboration,
                eager to tackle future challenges and continue growing as a
                professional.
              </span>

              <section className="flex gap-10 justify-between 2xs:gap-2">
                <GotoBtn goto="contato" class="px-[15%]">
                  Hire
                </GotoBtn>

                <GotoBtn class="px-[15%] ">Resume</GotoBtn>
              </section>
            </section>
          </section>

          {/* PORTFOLIO SECTION */}
          <section
            id="Portfolio"
            className="flex flex-col gap-10 min-h-[100vh] text-center"
          >
            <span className="text-3xl font-bold uppercase my-10">
              Portfolio
            </span>

            <TabPortfolio data={mobile}  />
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
