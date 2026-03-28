import profile from "../../assets/profile20000.png";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import { personal } from "../data/personal";
import { useLang } from "../hooks/useLang";
import { MdFileDownload } from "react-icons/md";

const HighlightText = ({ full, highlight }) => {
  if (!highlight) return <>{full}</>;
  const idx = full.indexOf(highlight);
  if (idx === -1) return <>{full}</>;
  return (
    <>
      {full.slice(0, idx)}
      <span className="text-text-primary">{highlight}</span>
      {full.slice(idx + highlight.length)}
    </>
  );
};

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionTitle>{t("about", "section")}</SectionTitle>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-110 -z-10" />
            <img
              src={profile}
              alt="Pedro Nicory"
              className="w-56 lg:w-64 rounded-2xl border border-border object-cover"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full text-xs whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 pulse-dot" />
              <span className="text-text-muted">{t("about", "available")}</span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 lg:max-w-xl">
            <p className="text-text-muted leading-relaxed text-sm">
              <HighlightText
                full={t("about", "bio1")}
                highlight={t("about", "bio1_highlight")}
              />
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              <HighlightText
                full={t("about", "bio2")}
                highlight={t("about", "bio2_highlight")}
              />
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              <HighlightText
                full={t("about", "bio3")}
                highlight={t("about", "bio3_highlight")}
              />
            </p>

            <Button href={personal.resume} external className="self-start mt-2">
              <MdFileDownload size={17} />
              {t("about", "resume")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
