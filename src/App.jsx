import GotoBtn from "./components/GotoBtn";
import Nav from "./components/Nav";
import profile from "../assets/profile20000.png";

function App() {
  return (
    <>
      <section className="bg-[#170a1a] px-20">
        <Nav />

        <main className="text-white">
          <section
            className="h-[calc(100vh-120px)] flex 
            flex-col pb-10
            items-start justify-center
            "
          >
            <h2 className="text-gray-600 font-bold text-5xl">I'm a</h2>

            <h1
              id="#Welcome"
              className='font-bold text-7xl tracking-wider after:content-["."]'
            >
              Full Stack <br />
              Website <br />
              Developer
            </h1>

            <GotoBtn class="my-10" goto="Project">
              Previous Project
            </GotoBtn>
          </section>

          <section
            id="About"
            className="h-[100vh] flex 
          justify-center items-center gap-20 
          "
          >
            <section className="">
              <img
                src={profile}
                alt="perfil_photo"
                className="drop-shadow-3xl"
              />
            </section>

            <section className="flex flex-col max-w-[40%]  gap-5">
              <span className="font-bold text-3xl uppercase">About Me</span>

              <span className="">
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

              <section className="flex gap-10 justify-between">
                <GotoBtn goto="contato" class="px-[15%]">Hire</GotoBtn>

                <GotoBtn class="px-[15%] ">Resume</GotoBtn>
              </section>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
