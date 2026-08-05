"use client";

const variants = {
  primary: "bg-[#2f4a3e] text-white hover:bg-[#243a30]",
  gold: "bg-[#c9a876] text-[#1c2c24] hover:bg-[#d8bf8e]",
  outline: "border border-[#2f4a3e] text-[#2f4a3e] bg-transparent hover:bg-[#2f4a3e] hover:text-white",
  white: "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  ghost: "text-[#2a2a26] hover:bg-[#f7f3ec]",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm sm:text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
