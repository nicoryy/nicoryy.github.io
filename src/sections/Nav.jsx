import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { useLang } from "../hooks/useLang";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const NAV_KEYS = ["home", "about", "portfolio", "stack"];
const NAV_HREFS = ["#hero", "#about", "#portfolio", "#stack"];

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const scrolled = useScroll(80);
  const showScrollTop = useScroll(300);
  const { lang, toggleLang, t } = useLang();

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
            {NAV_KEYS.map((key, i) => (
              <li key={key}>
                <a
                  href={NAV_HREFS[i]}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {t("nav", key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-md hover:text-text-primary hover:border-primary/50 transition-all duration-300 tracking-widest"
              aria-label="Toggle language"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
            <a
              href="mailto:pedronicory@gmail.com"
              className="px-5 py-2 text-sm border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              {t("nav", "contact")}
            </a>
          </div>

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
            isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_KEYS.map((key, i) => (
              <li key={key}>
                <a
                  href={NAV_HREFS[i]}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-muted hover:text-text-primary transition-colors duration-300 block py-1 text-sm"
                >
                  {t("nav", key)}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-1">
              <a
                href="mailto:pedronicory@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="text-primary hover:text-primary-hover transition-colors duration-300 text-sm"
              >
                {t("nav", "contact")}
              </a>
              <button
                onClick={toggleLang}
                className="px-3 py-1 text-xs text-text-muted border border-border rounded-md hover:text-text-primary hover:border-primary/50 transition-all duration-300 tracking-widest"
              >
                {lang === "en" ? "PT" : "EN"}
              </button>
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
