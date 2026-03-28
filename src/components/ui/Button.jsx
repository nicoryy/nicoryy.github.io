const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-glow-primary hover:shadow-glow-primary",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-text-muted hover:text-text-primary",
};

const Button = ({
  children,
  href,
  external,
  variant = "primary",
  className = "",
  ...props
}) => {
  const cls = `inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all duration-300 text-sm ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
