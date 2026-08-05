// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const filterGroups = [
//   {
//     title: "Category",
//     options: [
//       "Kurtas",
//       "Kurta Sets",
//       "Occasion Wear",
//       "Fusion Wear",
//       "LUXE",
//     ],
//   },
//   {
//     title: "Size",
//     options: ["XS", "S", "M", "L", "XL", "XXL"],
//   },
//   {
//     title: "Price",
//     options: [
//       "Under ₹1,500",
//       "₹1,500 – ₹3,000",
//       "₹3,000 – ₹5,000",
//       "Above ₹5,000",
//     ],
//   },
//   {
//     title: "Color",
//     options: ["Maroon", "Sage", "Ivory", "Coral", "Indigo", "Emerald"],
//   },
// ];

// function FilterGroup({ group, selected, onToggle }) {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-b border-[#e7e1d5] py-5">
//       {/* Heading */}
//       <button
//         type="button"
//         onClick={() => setIsOpen((value) => !value)}
//         className="flex w-full items-center justify-between text-sm font-semibold text-[#2a2a26]"
//       >
//         <span>{group.title}</span>

//         <ChevronDown
//           size={16}
//           className={`transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Options */}
//       {isOpen && (
//         <div className="mt-4 flex flex-col gap-3">
//           {group.options.map((option) => {
//             const checked = selected.includes(option);

//             return (
//               <label
//                 key={option}
//                 className="flex w-full cursor-pointer items-center justify-start gap-3 text-sm text-[#6b6659]"
//               >
//                 <input
//                   type="checkbox"
//                   checked={checked}
//                   onChange={() => onToggle(group.title, option)}
//                   className="m-0 h-4 w-4 shrink-0 cursor-pointer accent-[#2f4a3e]"
//                 />

//                 <span className="leading-5">{option}</span>
//               </label>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function FilterSidebar({
//   selectedFilters,
//   onToggle,
//   onClear,
// }) {
//   return (
//     <aside className="w-full lg:w-60 lg:shrink-0">
//       {/* Sidebar Header */}
//       <div className="flex items-center justify-between border-b border-[#e7e1d5] pb-4">
//         <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2a2a26]">
//           Filters
//         </p>

//         <button
//           type="button"
//           onClick={onClear}
//           className="text-xs font-medium text-[#b5462f] transition hover:underline"
//         >
//           Clear All
//         </button>
//       </div>

//       {/* Filter Groups */}
//       <div>
//         {filterGroups.map((group) => (
//           <FilterGroup
//             key={group.title}
//             group={group}
//             selected={selectedFilters[group.title] || []}
//             onToggle={onToggle}
//           />
//         ))}
//       </div>
//     </aside>
//   );
// }