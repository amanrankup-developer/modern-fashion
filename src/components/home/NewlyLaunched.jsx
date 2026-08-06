"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const occasions = [
  {
    name: "Wedding",
    tag: "The Bridal Edit",
    image: "/images/image10.jpg",
    href: "/",
    size: "large",
  },
  {
    name: "Festive",
    tag: "Diwali & Beyond",
    image: "/images/image3.jpg",
    href: "/",
    size: "regular",
  },
  {
    name: "Casual",
    tag: "Everyday Ease",
    image: "/images/imagesm3.jpg",
    href: "/",
    size: "regular",
  },
  {
    name: "Party",
    tag: "After-Hours Glam",
    image: "/images/image7.jpg",
    href: "/",
    size: "wide",
  },
];

function OccasionTile({ occasion, index }) {
  const spanClass =
    occasion.size === "large"
      ? "lg:col-span-2 lg:row-span-2"
      : occasion.size === "wide"
        ? "lg:col-span-2 lg:row-span-1"
        : "lg:col-span-1 lg:row-span-1";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`group relative min-h-[240px] overflow-hidden rounded-2xl bg-[#d4c5b2] sm:min-h-[300px] lg:min-h-0 ${spanClass}`}>
      <Link href={occasion.href} className="absolute inset-0 block h-full w-full">
        <Image src={occasion.image} alt={occasion.name} fill priority={index === 0} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-7">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f1dfc2] drop-shadow-sm sm:text-[11px]">{occasion.tag}</span>

          <div className="mt-1.5 flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl font-medium leading-tight text-white! drop-shadow-md sm:text-3xl lg:text-4xl xl:text-5xl">{occasion.name}</h3>

            <span className="flex h-9 w-9 shrink-0 -translate-x-2 items-center justify-center rounded-full bg-white text-[#dbdbca] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-10 sm:w-10">
              <ArrowUpRight size={17} />
            </span>
          </div>

          <span className="mt-2 block h-px w-0 bg-[#c9a876] transition-all duration-500 group-hover:w-12 sm:mt-3" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function NewlyLaunched() {
  return (
    <section className="bg-[#f7f3ec] pb-16 pt-14 sm:pb-20 sm:pt-18 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-6 xl:px-12">

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: "easeOut" }} className="mx-auto mb-8 flex w-full max-w-4xl flex-col items-center text-center sm:mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a876]">
            <Sparkles size={13} />
            Newly Launched
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.08] text-[#e7e7e0] sm:text-4xl lg:text-5xl xl:text-6xl">
            Discover Our Latest Styles
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6b6659] sm:text-base sm:leading-7 lg:text-lg">
            From timeless wedding elegance to effortless everyday looks, explore our latest edits crafted for every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:auto-rows-[240px] lg:grid-cols-3 lg:gap-6 xl:auto-rows-[260px]">
          {occasions.map((occasion, index) => (
            <OccasionTile key={occasion.name} occasion={occasion} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}