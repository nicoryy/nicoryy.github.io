import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-base font-display text-text-primary">
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;
