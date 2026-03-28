const SectionTitle = ({ children, className = "" }) => (
  <div className={`mb-14 ${className}`}>
    <p className="text-text-muted text-xs mb-2 tracking-widest uppercase">
      <span className="text-primary font-bold">{"// "}</span>section
    </p>
    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
      {children}
      <span className="text-primary">_</span>
    </h2>
  </div>
);

export default SectionTitle;
