import { FiGithub } from "react-icons/fi";

const CATEGORY_TOPICS = new Set(["web", "mobile", "desktop"]);

const ProjectCard = ({ name, description, url, profileImage, topics = [] }) => {
  const techTags = topics.filter((t) => !CATEGORY_TOPICS.has(t));

  return (
    <article className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-glow-card transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-elevated aspect-video">
        {profileImage ? (
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.parentElement.classList.add("fallback-visible");
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}

        {/* Fallback placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-[.fallback-visible]:opacity-100 pointer-events-none">
          <span className="text-5xl font-extrabold text-primary/20 select-none">
            {name[0]?.toUpperCase()}
          </span>
        </div>

        {/* Hover overlay with GitHub link */}
        <div className="absolute inset-0 bg-base/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-surface border border-border text-text-primary hover:border-primary hover:text-primary transition-all duration-200 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={16} />
            Ver repositório
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="font-semibold text-text-primary text-sm leading-snug">{name}</h3>

        {description && (
          <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {techTags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-2">
            {techTags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-accent border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
