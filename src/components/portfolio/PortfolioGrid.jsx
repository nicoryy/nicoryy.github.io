import ProjectCard from "./ProjectCard";
import { useLang } from "../../hooks/useLang";

const TAB_KEYS = ["tab_all", "tab_web", "tab_mobile", "tab_desktop"];
const TAB_VALUES = ["all", "web", "mobile", "desktop"];

const PortfolioGrid = ({ data, activeTab, onTabChange, loading }) => {
  const { t } = useLang();

  const projects =
    activeTab === "all"
      ? [...(data.web || []), ...(data.mobile || []), ...(data.desktop || [])]
      : data[activeTab] || [];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {TAB_KEYS.map((key, i) => (
          <button
            key={TAB_VALUES[i]}
            onClick={() => onTabChange(TAB_VALUES[i])}
            className={`px-4 py-1.5 rounded-md text-sm transition-all duration-200 ${
              activeTab === TAB_VALUES[i]
                ? "bg-primary text-white shadow-glow-primary"
                : "text-text-muted border border-border hover:text-text-primary hover:border-primary/50"
            }`}
          >
            {t("portfolio", key)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl aspect-video animate-pulse"
            />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <p className="text-text-muted text-sm">{t("portfolio", "empty")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={`${project.name}-${project.url}`} {...project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
