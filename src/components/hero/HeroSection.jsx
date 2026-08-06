"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";
import Image from "next/image";

/* =========================================================
   HERO IMAGE
   Single static image
   ========================================================= */

const heroImage = {
  src: "/images/heroimage.jpg",
  alt: "Loomora fashion collection",
};

/* =========================================================
   HERO CATEGORIES
   ========================================================= */

const categories = [
  "New Arrivals",
  "Festive Edit",
  "Co-ords",
  "Best Sellers",
  "Kurta Sets",
  "Plus Size",
  "LUXE",
];

/* =========================================================
   TRUST ITEMS
   ========================================================= */

const trustItems = [
  {
    icon: "🔒",
    label: "Secure Payments",
  },
  {
    icon: "🚚",
    label: "Free Delivery",
  },
  {
    icon: "↩️",
    label: "Easy Returns",
  },
  {
    icon: "💬",
    label: "24/7 Support",
  },
  {
    icon: "⭐",
    label: "4.8★ Ratings",
  },
];

/* =========================================================
   MAGNETIC BUTTON
   Desktop / Laptop effect
   ========================================================= */

function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  });

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX =
      event.clientX - rect.left - rect.width / 2;

    const offsetY =
      event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   HERO SECTION
   ========================================================= */

export default function HeroSection() {
  return (
    <Section
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-[#f7f3ec]

        sm:min-h-[760px]

        lg:min-h-[700px]

        xl:min-h-[760px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="
            object-cover

            object-[50%_35%]

            sm:object-[50%_35%]

            lg:object-center
          "
        />

        {/* ===================================================
            IMAGE OVERLAY
            =================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#17251f]/50
            via-[#17251f]/10
            to-[#17251f]/65
          "
        />

        {/* Slight mobile darkening for text readability */}
        <div
          className="
            absolute
            inset-0
            bg-black/5

            sm:bg-transparent
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[720px]
          w-full
          items-center
          justify-center
          px-4
          py-20
          text-center

          sm:min-h-[760px]
          sm:px-6
          sm:py-24

          lg:min-h-[700px]
          lg:px-8
          lg:py-20

          xl:min-h-[760px]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mx-auto
            w-full
            max-w-[360px]

            sm:max-w-3xl

            md:max-w-4xl

            lg:max-w-5xl
          "
        >
          {/* =================================================
              BADGE
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#c9a876]/50
              bg-black/25
              px-3.5
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#ead7b0]
              backdrop-blur-md

              sm:px-4
              sm:text-[10px]

              lg:text-xs
              lg:tracking-[0.25em]
            "
          >
            <Sparkles
              size={12}
              strokeWidth={1.8}
              className="sm:h-[13px] sm:w-[13px]"
            />

            <span>New Season Edit</span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
              ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              mt-5
              font-serif
              text-[2.25rem]
              font-bold
              leading-[1.08]
              tracking-[-0.025em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]

              sm:mt-6
              sm:text-5xl
              sm:leading-[1.08]

              md:text-6xl

              lg:text-7xl
              lg:leading-[1.05]

              xl:text-8xl
            "
          >
            Where Tradition
            <br />

            <span className="italic text-[#d8bf8e]">
              Meets Modern Grace
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
              ================================================= */}
<motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.5,
    duration: 0.6,
  }}
  className="
  !mx-auto
  !text-center
  !text-white
  !max-w-[680px]
  mt-5
  text-sm
  leading-6
  drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]

  sm:mt-6
  sm:max-w-xl
  sm:text-base
  sm:leading-7

  lg:mt-7
  lg:max-w-2xl
  lg:text-lg
  lg:leading-8
"
>
  Thoughtfully crafted kurta sets and occasion wear —
  designed for women who carry heritage with quiet
  confidence.
</motion.p>

          {/* =================================================
              CTA BUTTONS
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:mt-8
              sm:flex-row
              sm:gap-4

              lg:mt-9
            "
          >
            {/* =================================================
                SHOP BUTTON
                ================================================= */}

            <MagneticButton>
              <Button
                as="a"
                href="/"
                variant="gold"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  px-7
                  py-3.5
                  text-sm
                  shadow-[0_8px_30px_rgba(201,168,118,0.35)]
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_40px_rgba(201,168,118,0.5)]

                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base

                  lg:px-10
                  lg:py-5
                  lg:text-lg
                "
              >
                <span>Shop the Edit</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    sm:h-[18px]
                    sm:w-[18px]
                  "
                />
              </Button>
            </MagneticButton>

            {/* =================================================
                EXPLORE BUTTON
                ================================================= */}

            <Button
              as="a"
              href="/"
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/50
                bg-black/35
                px-7
                py-3.5
                text-sm
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-black/50
                hover:border-white/70

                sm:w-auto
                sm:px-8
                sm:py-4
                sm:text-base

                lg:px-10
                lg:py-5
                lg:text-lg
              "
            >
              Explore Collection
            </Button>
          </motion.div>

          {/* =================================================
              CATEGORY PILLS
              ================================================= */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.9,
                },
              },
            }}
            className="
              mt-7
              flex
              w-full
              gap-2
              overflow-x-auto
              px-1
              pb-2
              scrollbar-hide

              sm:mt-8
              sm:flex-wrap
              sm:justify-center
              sm:overflow-visible
              sm:px-0
              sm:pb-0

              lg:gap-2.5
            "
          >
            {categories.map((category) => (
              <motion.span
                key={category}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="
                  shrink-0
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  text-white/90
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  hover:border-[#c9a876]/70
                  hover:bg-[#c9a876]/20
                  hover:text-white

                  sm:px-4
                  sm:py-2
                  sm:text-xs

                  lg:px-5
                  lg:py-2
                  lg:text-sm
                "
              >
                {category}
              </motion.span>
            ))}
          </motion.div>

          {/* =================================================
              TRUST SECTION
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
            className="
              mt-7
              grid
              grid-cols-2
              gap-x-3
              gap-y-3
              border-t
              border-white/20
              pt-6

              sm:mt-8
              sm:grid-cols-3
              sm:gap-x-6
              sm:gap-y-3
              sm:pt-7

              lg:flex
              lg:flex-wrap
              lg:justify-center
              lg:gap-x-8
              lg:gap-y-3
              lg:pt-8
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="
                  flex
                  min-w-0
                  items-center
                  justify-center
                  gap-1.5
                  text-white
                  drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]

                  sm:gap-2
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    shrink-0
                    text-sm

                    sm:text-base

                    lg:text-lg
                  "
                >
                  {item.icon}
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-[9px]
                    font-medium

                    sm:text-[11px]

                    lg:text-sm
                  "
                >
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-4
          left-1/2
          z-20
          -translate-x-1/2
          text-white/70

          sm:bottom-5
        "
      >
        <ArrowDown
          size={18}
          strokeWidth={1.7}
          className="sm:h-5 sm:w-5"
        />
      </motion.div>
    </Section>
  );
}