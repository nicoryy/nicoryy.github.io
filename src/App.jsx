import Card from "./components/Card";
import GotoBtn from "./components/GotoBtn";
import Nav from "./components/Nav";


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

            <GotoBtn class="my-5" goto="Project">
              Previous Project
            </GotoBtn>
          </section>

          <section id="About" className="h-fullvh">
            abort
          </section>
        </main>
      </section>
    </>
  );
}

export default App;
