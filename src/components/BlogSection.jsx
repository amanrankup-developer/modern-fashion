"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "STYLE GUIDE",
    date: "Dec 15, 2024",
    title: "5 Ways to Style Your Kurta for Different Occasions",
    description:
      "From casual outings to festive celebrations, discover effortless ways to make your kurta work for every occasion.",
    image: "/images/imagesM.jpg",
    href: "/",
    featured: true,
  },
  {
    id: 2,
    category: "CULTURE",
    date: "Dec 12, 2024",
    title: "The Rise of Fusion Wear: Blending Tradition with Modernity",
    description:
      "Discover how modern fashion is embracing traditional elements to create something truly unique.",
    image: "/images/culture.jpg",
    href: "/",
  },
  {
    id: 3,
    category: "SUSTAINABILITY",
    date: "Dec 10, 2024",
    title: "Sustainable Fashion: The Future of Clothing",
    description:
      "Learn about sustainable practices in fashion and how thoughtful choices can shape a better future.",
    image: "/images/modern.jpg",
    href: "/",
  },
];

export default function BlogSection() {
  return (
    <section
      aria-labelledby="journal-heading"
      className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c9a876]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#3f6d58]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a876]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8d7651]">
              The Loomora Journal
            </span>

            <span className="h-px w-8 bg-[#c9a876]" />
          </div>

          <h2
            id="journal-heading"
            className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#24241f] sm:text-5xl lg:text-6xl"
          >
            Stories of{" "}
            <span className="italic text-[#3f6d58]">Style & Craft</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#716d64] sm:text-base">
            Discover thoughtful stories, styling inspiration and the rich
            craftsmanship behind contemporary Indian fashion.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* FEATURED ARTICLE */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[28px] border border-[#ded8cc] bg-white"
          >
            <Link href={articles[0].href} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe6dc]">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70" />

                {/* Category */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#30463b] backdrop-blur-md">
                    {articles[0].category}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/15 text-xs text-white backdrop-blur-md">
                  01
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-9">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9a9589]">
                  <CalendarDays size={13} strokeWidth={1.5} />
                  {articles[0].date}
                </div>

                <h3 className="max-w-3xl font-serif text-3xl font-medium leading-[1.08] tracking-[-0.025em] text-[#24241f] transition-colors duration-300 group-hover:text-[#3f6d58] sm:text-4xl">
                  {articles[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#716d64]">
                  {articles[0].description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 border-b border-[#c9a876] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#30463b]">
                  Read Story
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          </motion.article>

          {/* SIDE ARTICLES */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-[28px] border border-[#ded8cc] bg-white"
              >
                <Link href={article.href} className="grid h-full sm:grid-cols-[42%_58%] lg:grid-cols-[38%_62%]">
                  <div className="relative min-h-[220px] overflow-hidden bg-[#ebe6dc]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />

                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[10px] font-semibold text-[#30463b] backdrop-blur-md">
                      0{index + 2}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#9a9589]">
                      <span className="text-[#8d7651]">
                        {article.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#c9a876]" />

                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium leading-[1.08] tracking-[-0.02em] text-[#24241f] transition-colors duration-300 group-hover:text-[#3f6d58]">
                      {article.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-xs leading-5 text-[#716d64]">
                      {article.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#def0e7]">
                      Explore
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center lg:mt-12"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 rounded-full border border-[#30463b] bg-[#30463b] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#263a31] hover:shadow-[0_12px_30px_rgba(48,70,59,0.18)]"
          >
            Explore All Stories

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}