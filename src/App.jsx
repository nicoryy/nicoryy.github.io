import { LangProvider } from "./context/LangContext";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";

function App() {
  return (
    <LangProvider>
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
    </LangProvider>
  );
}

export default App;
