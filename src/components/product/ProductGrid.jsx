// "use client";

// import { useEffect, useRef, useState } from "react";
// import ProductCard from "./ProductCard";

// export default function ProductGrid({
//   products,
//   slider = false,
// }) {
//   const sliderRef = useRef(null);
//   const resumeTimer = useRef(null);

//   const [isHovering, setIsHovering] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   const pauseTemporarily = () => {
//     setIsPaused(true);

//     clearTimeout(resumeTimer.current);

//     resumeTimer.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 3000);
//   };

//   useEffect(() => {
//     if (!slider || !products?.length) {
//       return;
//     }

//     const container = sliderRef.current;

//     if (!container) {
//       return;
//     }

//     const interval = setInterval(() => {
//       if (isPaused || isHovering) {
//         return;
//       }

//       const firstCard = container.querySelector(
//         "[data-product-card]",
//       );

//       if (!firstCard) {
//         return;
//       }

//       const cardWidth =
//         firstCard.getBoundingClientRect().width;

//       const gap = 24;
//       const moveAmount = cardWidth + gap;

//       const maxScroll =
//         container.scrollWidth - container.clientWidth;

//       if (container.scrollLeft >= maxScroll - 10) {
//         container.scrollTo({
//           left: 0,
//           behavior: "smooth",
//         });
//       } else {
//         container.scrollBy({
//           left: moveAmount,
//           behavior: "smooth",
//         });
//       }
//     }, 3500);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(resumeTimer.current);
//     };
//   }, [slider, products, isPaused, isHovering]);

//   if (!products?.length) {
//     return (
//       <div className="flex flex-col items-center justify-center py-24 text-center">
//         <p className="font-serif text-xl text-[#2a2a26]">
//           No products found
//         </p>

//         <p className="mt-1 text-sm text-[#6b6659]">
//           Try adjusting your filters.
//         </p>
//       </div>
//     );
//   }

//   {/* ================= GRID ================= */}

//   if (!slider) {
//     return (
//       <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}
//       </div>
//     );
//   }

//   {/* ================= SLIDER ================= */}

//   return (
//     <div
//       ref={sliderRef}
//       onClick={pauseTemporarily}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
//       style={{ scrollbarWidth: "none" }}
//     >
//       {products.map((product) => (
//         <div
//           key={product.id}
//           data-product-card
//           className="w-[72vw] shrink-0 sm:w-[45vw] md:w-[30vw] lg:w-[23vw]"
//         >
//           <ProductCard
//             product={product}
//             widthClass="w-full"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }