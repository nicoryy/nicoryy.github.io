import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <section className="bg-[#0B0518] font-display sm:px-20 max-xs:px-5 selection:bg-pink-500 selection:text-red-300">
        <Nav />

        <main className="text-white">
          {/* // WELCOME SECTION */}
          <Home />

          {/* ABOUT ME SECTION  */}
          <About />

          {/* PORTFOLIO SECTION */}
          <Portfolio />

          {/* SERVICES SECTION */}
          <Services />

          {/* EXPERIENCE SECTION */}
          <Experience />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
