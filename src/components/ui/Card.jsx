export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-2xl border border-[#e7e1d5] bg-white p-5 transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,74,62,0.10)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
