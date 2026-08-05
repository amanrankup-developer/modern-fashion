"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#f7f3ec] px-4 py-10 sm:px-16 sm:py-10 lg:px-8 lg:py-1">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#3f6d58]
            px-6
            py-12
            text-center
            shadow-[0_24px_70px_rgba(47,74,62,0.18)]
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* =====================================================
              DECORATIVE GLOW
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#c9a876]/15
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -right-20
              h-72
              w-72
              rounded-full
              bg-[#c9a876]/10
              blur-3xl
            "
          />

          {/* =====================================================
              DECORATIVE TOP LINE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-32
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#c9a876]
              to-transparent
              sm:w-48
            "
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10 mx-auto max-w-3xl">

            {/* ===================================================
                EYEBROW
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#c9a876]
                sm:text-xs
              "
            >
              <Sparkles
                size={13}
                strokeWidth={1.8}
              />

              <span>Curated For You</span>
            </motion.div>

            {/* ===================================================
                HEADING
            ==================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                mt-4
                font-serif
                text-3xl
                font-medium
                leading-[1.08]
                text-[#171916]
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Find Your{" "}
              <span className="text-[#c9a876]">
                Perfect Look
              </span>
            </motion.h2>

           {/* Description */}
<motion.p
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="cta-section-description"
>
  From everyday elegance to unforgettable celebrations, discover
  thoughtfully crafted styles made to become part of your story.
</motion.p>

            {/* ===================================================
                BUTTONS
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                sm:gap-4
              "
            >
              {/* Shop Collection */}

              <Link
                href="#"
                className="
                  group
                  inline-flex
                  min-w-[170px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#c9a876]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#24382f]
                  transition-all
                  duration-300
                  hover:bg-[#d7b987]
                  hover:shadow-[0_12px_30px_rgba(201,168,118,0.25)]
                "
              >
                <span>Shop Collection</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

              {/* Explore Occasion Wear */}

              <Link
                href="#"
                className="
                  inline-flex
                  min-w-[170px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-white/[0.04]
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#c9a876]/60
                  hover:bg-white/[0.08]
                "
              >
                Explore Occasion Wear
              </Link>
            </motion.div>

            {/* ===================================================
                BOTTOM TEXT
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/65
                sm:text-xs
              "
            >
              <span className="h-px w-8 bg-white/25" />

              <span>Made with love in India</span>

              <span className="h-px w-8 bg-white/25" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}