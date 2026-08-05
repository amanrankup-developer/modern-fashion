// export default function Container({ children, className = "", size = "default" }) {
//   const widths = {
//     default: "max-w-7xl",
//     narrow: "max-w-4xl",
//     wide: "max-w-[1440px]",
//   };
//   return (
//     <div className={`mx-auto w-full ${widths[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
//       {children}
//     </div>
//   );
// }

"use client";

export default function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}