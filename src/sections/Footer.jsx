import { personal } from "../data/personal";
import { useLang } from "../hooks/useLang";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const NAV_KEYS = ["home", "about", "portfolio", "stack"];
const NAV_HREFS = ["#hero", "#about", "#portfolio", "#stack"];

const Footer = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-widest text-text-primary hover:text-primary transition-colors duration-300"
          >
            NICORY<span className="text-primary">.</span>
          </a>

          {/* Nav */}
          <ul className="flex flex-wrap justify-center gap-6">
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

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href={personal.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <FaInstagram size={19} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin size={19} />
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <MdEmail size={19} />
            </a>
          </div>
        </div>

        <hr className="border-border my-6" />

        <p className="text-center text-xs text-text-muted">
          2025 — Pedro Nicory — {t("footer", "rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
