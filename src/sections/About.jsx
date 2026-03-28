import profile from "../../assets/profile20000.png";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import { personal } from "../data/personal";
import { MdFileDownload } from "react-icons/md";

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <SectionTitle>about me</SectionTitle>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-110 -z-10" />
          <img
            src={profile}
            alt="Pedro Nicory"
            className="w-56 lg:w-64 rounded-2xl border border-border object-cover"
          />
          {/* Available badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full text-xs whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 pulse-dot" />
            <span className="text-text-muted">Disponível para projetos</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5 lg:max-w-xl">
          <p className="text-text-muted leading-relaxed text-sm">
            Estudante de Análise e Desenvolvimento de Sistemas na{" "}
            <span className="text-text-primary">Unifanor WYDEN</span> e Desenvolvedor
            Full-Stack com experiência em desenvolvimento web e mobile.
          </p>
          <p className="text-text-muted leading-relaxed text-sm">
            Projeto e implemento soluções digitais escaláveis com foco em{" "}
            <span className="text-text-primary">performance, usabilidade e impacto</span>. Minha
            stack inclui React, React Native, TypeScript, Python e Node.js — do design de
            arquitetura ao deploy.
          </p>
          <p className="text-text-muted leading-relaxed text-sm">
            Minha principal competência é transformar lacunas operacionais em soluções
            estruturadas orientadas a tecnologia. Se há ineficiência em um processo, sistema ou
            fluxo de trabalho,{" "}
            <span className="text-text-primary">eu construo o mecanismo para resolver.</span>
          </p>

          <Button href={personal.resume} external className="self-start mt-2">
            <MdFileDownload size={17} />
            Resume
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
