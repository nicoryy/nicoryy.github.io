import { techStack } from "../data/tech";
import SectionTitle from "../components/ui/SectionTitle";
import { useLang } from "../hooks/useLang";

const TechStack = () => {
  const { t } = useLang();

  return (
    <section id="stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionTitle>{t("stack", "section")}</SectionTitle>

        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {techStack.map(({ name, icon, hasBg }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary hover:shadow-glow-card transition-all duration-300 group cursor-default"
            >
              <img
                src={icon}
                alt={name}
                className={`size-9 object-contain ${
                  hasBg ? "bg-white/80 rounded-xl p-1.5" : ""
                }`}
              />
              <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors duration-300 text-center leading-tight">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
