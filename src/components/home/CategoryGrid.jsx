"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categoryStrip } from "@/constants/navigation";

export default function CategoryGrid() {
  return (
    <section
      aria-label="Shop by category"
      className="w-full border-b border-[#e7e1d5] bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-0 sm:px-4 lg:px-8">
        {/* Scroll viewport */}
        <div
          className="
            category-scroll
            w-full
            overflow-x-auto
            overflow-y-visible
            px-5
            py-6
            sm:px-6
            sm:py-8
            lg:overflow-x-visible
            lg:px-0
            lg:py-10
          "
        >
          {/* Category items */}
          <div
            className="
              flex
              w-max
              min-w-full
              items-start
              justify-start
              gap-7
              sm:gap-8
              lg:w-full
              lg:justify-center
              lg:gap-8
              xl:gap-10
            "
          >
            {categoryStrip.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.04, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shrink-0"
              >
                <Link
                  href={cat.href}
                  aria-label={`Shop ${cat.name}`}
                  className="
                    group
                    flex
                    min-w-[72px]
                    flex-col
                    items-center
                    gap-2.5
                    rounded-2xl
                    px-1
                    py-1
                    text-center
                    outline-none
                  "
                >
                  {/* Circle wrapper prevents hover clipping */}
                  <div className="relative flex items-center justify-center p-1">
                    <div
                      className="
                        flex
                        h-[68px]
                        w-[68px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e7e1d5]
                        bg-[#f7f3ec]
                        text-[25px]
                        shadow-[0_2px_8px_rgba(42,42,38,0.03)]
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:-translate-y-1
                        group-hover:scale-[1.04]
                        group-hover:border-[#c9a876]
                        group-hover:bg-[#fbf8f2]
                        group-hover:shadow-[0_12px_28px_rgba(201,168,118,0.22)]
                        group-focus-visible:border-[#2f4a3e]
                        group-focus-visible:ring-2
                        group-focus-visible:ring-[#2f4a3e]/20
                      "
                    >
                      <span
                        className="
                          transition-transform
                          duration-500
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:scale-110
                        "
                      >
                        {cat.icon}
                      </span>
                    </div>
                  </div>

                  {/* Category name */}
                  <span
                    className="
                      max-w-[82px]
                      text-center
                      text-[12px]
                      font-medium
                      leading-tight
                      tracking-[0.01em]
                      text-[#2a2a26]
                      transition-colors
                      duration-300
                      group-hover:text-[#2f4a3e]
                    "
                  >
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}