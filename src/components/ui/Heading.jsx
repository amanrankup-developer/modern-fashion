const sizes = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl lg:text-4xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  xl: "text-4xl sm:text-5xl lg:text-6xl",
};

/**
 * Renders as <p> by default, not <h1-6>, to avoid inheriting a global
 * heading stylesheet reset that can silently override font-size/weight
 * utilities (a bug hit more than once building this site). Pass
 * `as="h2"` etc. explicitly where real document semantics matter
 * (e.g. one h1 per page) — the accessible level is separate from the
 * visual size prop.
 */
export default function Heading({
  children,
  as: Tag = "p",
  size = "md",
  eyebrow,
  align = "left",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={alignClass} style={{ textAlign: align }}>
      {eyebrow && (
        <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a876]">
          {eyebrow}
        </span>
      )}
      <Tag
        className={`font-serif font-medium leading-tight text-[#2a2a26] ${sizes[size]} ${className}`}
        style={{ textAlign: align }}
      >
        {children}
      </Tag>
    </div>
  );
}
