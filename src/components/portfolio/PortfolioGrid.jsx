import ProjectCard from "./ProjectCard";

const TABS = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Desktop", value: "desktop" },
];

const PortfolioGrid = ({ data, activeTab, onTabChange, loading }) => {
  const projects =
    activeTab === "all"
      ? [...(data.web || []), ...(data.mobile || []), ...(data.desktop || [])]
      : data[activeTab] || [];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`px-4 py-1.5 rounded-md text-sm transition-all duration-200 ${
              activeTab === tab.value
                ? "bg-primary text-white shadow-glow-primary"
                : "text-text-muted border border-border hover:text-text-primary hover:border-primary/50"
            }`}
          >
            {tab.label}
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
        <p className="text-text-muted text-sm">Nenhum projeto encontrado.</p>
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
