export default function Section({ children, className = "", as: Tag = "section", ...props }) {
  return (
    <Tag className={`relative w-full ${className}`} {...props}>
      {children}
    </Tag>
  );
}
