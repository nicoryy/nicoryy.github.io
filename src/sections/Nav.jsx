import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { navLinks } from "../data/personal";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const scrolled = useScroll(80);
  const showScrollTop = useScroll(300);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-base/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold tracking-widest text-text-primary hover:text-primary transition-colors duration-300"
          >
            NICORY<span className="text-primary">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:pedronicory@gmail.com"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            Contact
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="lg:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-muted hover:text-text-primary transition-colors duration-300 block py-1 text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:pedronicory@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="text-primary hover:text-primary-hover transition-colors duration-300 block py-1 text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 bg-primary p-3 rounded-md z-50 transition-all duration-500 hover:bg-primary-hover shadow-glow-primary ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <FaArrowUp size={14} color="white" />
      </button>
    </>
  );
};

export default Nav;
