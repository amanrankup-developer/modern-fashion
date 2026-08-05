const tones = {
  sage: "bg-[#2f4a3e] text-white",
  gold: "bg-[#c9a876] text-[#1c2c24]",
  cream: "bg-[#f7f3ec] text-[#2a2a26] border border-[#e7e1d5]",
  danger: "bg-[#b5462f] text-white",
  outline: "border border-[#2f4a3e] text-[#2f4a3e] bg-transparent",
};

export default function Badge({ children, tone = "sage", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
