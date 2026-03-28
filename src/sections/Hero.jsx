import { useReducer, useEffect } from "react";
import { personal } from "../data/personal";
import Button from "../components/ui/Button";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const typewriterReducer = (state, action) => {
  switch (action.type) {
    case "TYPE":
      return { ...state, text: state.text + action.char };
    case "START_DELETE":
      return { ...state, phase: "deleting" };
    case "DELETE":
      return { ...state, text: state.text.slice(0, -1) };
    case "NEXT_WORD":
      return { text: "", wordIndex: (state.wordIndex + 1) % action.total, phase: "typing" };
    default:
      return state;
  }
};

const useTypewriter = (words, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2200) => {
  const [state, dispatch] = useReducer(typewriterReducer, {
    text: "",
    wordIndex: 0,
    phase: "typing",
  });

  useEffect(() => {
    const current = words[state.wordIndex % words.length];

    if (state.phase === "typing") {
      if (state.text === current) {
        const t = setTimeout(() => dispatch({ type: "START_DELETE" }), pauseTime);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => dispatch({ type: "TYPE", char: current[state.text.length] }),
        typeSpeed
      );
      return () => clearTimeout(t);
    }

    if (state.phase === "deleting") {
      if (state.text === "") {
        dispatch({ type: "NEXT_WORD", total: words.length });
        return;
      }
      const t = setTimeout(() => dispatch({ type: "DELETE" }), deleteSpeed);
      return () => clearTimeout(t);
    }
  }, [state, words, typeSpeed, deleteSpeed, pauseTime]);

  return state.text;
};

const Hero = () => {
  const typed = useTypewriter(personal.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center dot-pattern overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-primary/15 -top-20 -left-32" />
      <div className="glow-blob w-72 h-72 bg-accent/10 bottom-1/4 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full pt-16">
        {/* Comment label */}
        <p className="text-text-muted text-sm mb-4 font-medium tracking-wide">
          <span className="text-primary font-bold">{"// "}</span>hello world
        </p>

        {/* Name */}
        <h1 className="text-7xl lg:text-9xl font-extrabold text-text-primary tracking-tight leading-none mb-4">
          {personal.handle}
          <span className="text-primary">.</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-8 lg:h-10 mb-10">
          <span className="text-lg lg:text-2xl text-text-muted font-medium">
            {typed}
            <span className="typewriter-cursor" />
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Button href="#portfolio">Ver Projetos</Button>
          <Button href={personal.social.github} external variant="outline">
            <FiGithub size={15} />
            GitHub
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <span className="text-text-muted text-xs tracking-widest uppercase">find me on</span>
          <div className="w-px h-4 bg-border" />
          <div className="flex gap-4">
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={personal.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className="text-text-muted hover:text-primary transition-colors duration-300"
            >
              <MdEmail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted animate-bounce">
        <FaArrowDown size={13} />
      </div>
    </section>
  );
};

export default Hero;
