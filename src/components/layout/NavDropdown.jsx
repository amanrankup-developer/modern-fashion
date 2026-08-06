"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { dropdownData } from "@/constants/navigation";

const categoryIcon = {
  Kurtas: "👗",
  "Kurta Sets": "🧵",
  Dresses: "👚",
  "Festive Wear": "✨",
  "Co-ords": "👖",
  Accessories: "👜",
  Bottoms: "👖",
};

export default function NavDropdown({
  item,
  onMouseEnter,
  onMouseLeave,
}) {
  const data = dropdownData[item.dropdownType];

  if (!data) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -8,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
  nav-dropdown
  absolute
  left-1/2
  top-full
  z-[100]
  w-[min(920px,calc(100vw-48px))]
  -translate-x-1/2
  overflow-hidden
  rounded-[24px]
  border
  border-[#e7e1d5]
  bg-white
  text-[#2a2a26]
  opacity-100
  shadow-[0_20px_60px_-12px_rgba(47,74,62,0.20)]
"
    >
      <div className="grid grid-cols-[1fr_240px]">

        {/* =========================================
            CATEGORY COLUMNS
        ========================================== */}

        <div className="grid grid-cols-4 gap-10 p-7 pr-5">
          {data.filters.map((filter, colIndex) => (
            <motion.div
              key={filter.category}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: colIndex * 0.04,
                duration: 0.2,
              }}
              className="min-w-0 text-[#2a2a26]"
            >
              {/* CATEGORY HEADING */}
              <h4
                className="
                  mb-3.5
                  flex
                  items-center
                  gap-2
                  !text-[#2a2a26]
                  text-[16px]
                  font-bold
                  uppercase
                  leading-none
                  tracking-[0.04em]
                  opacity-100
                "
              >
                <span className="text-[14px]">
                  {categoryIcon[filter.category] || "•"}
                </span>

                <span>{filter.category}</span>
              </h4>

              {/* ITEMS */}
              <ul className="space-y-2.5">
                {filter.items.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      href={`${item.href}&filter=${encodeURIComponent(
                        subItem
                      )}`}
                      className="
                        group
                        flex
                        items-center
                        gap-2.5
                        !text-[#2a2a26]
                        text-[14px]
                        font-medium
                        leading-6
                        opacity-100
                        transition-all
                        duration-200
                        hover:!text-[#2f4a3e]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#c9a876]
                          opacity-0
                          transition-opacity
                          duration-200
                          group-hover:opacity-100
                        "
                      />

                      <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
                        {subItem}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            PROMO PANEL
        ========================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            bg-[#f7f3ec]
            p-6
            text-[#2a2a26]
          "
        >
          <div>
            {/* TRENDING LABEL */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-[#2f4a3e]
                px-3.5
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.1em]
                !text-white
                opacity-100
              "
            >
              {data.promo.label}
            </span>

            {/* PROMO TITLE */}
            <p
              className="
                mt-3.5
                !text-[#2a2a26]
                font-serif
                text-[18px]
                font-medium
                leading-snug
                opacity-100
              "
            >
              {data.promo.text}
            </p>

            {/* PROMO DESCRIPTION */}
            <p
              className="
                mt-2
                !text-[#6b6659]
                text-[11px]
                italic
                leading-5
                opacity-100
              "
            >
              Limited edition — while stocks last
            </p>
          </div>

          {/* CTA */}
          <Link
            href={item.href}
            className="
              mt-5
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-[#2f4a3e]
              px-5
              py-2.5
              !text-white
              text-[11px]
              font-medium
              opacity-100
              transition-all
              duration-300
              hover:gap-3
              hover:bg-[#243a30]
              hover:px-6
            "
          >
            <span>{data.promo.cta}</span>

            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}