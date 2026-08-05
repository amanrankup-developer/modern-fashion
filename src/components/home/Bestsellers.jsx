"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import { products } from "@/data/product";

export default function Bestsellers() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const updateArrowState = () => {
    const el = trackRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateArrowState();

    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrowState);
    window.addEventListener("resize", updateArrowState);

    return () => {
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.querySelector(":scope > div")?.offsetWidth || 300;

    el.scrollBy({
      left: direction * (cardWidth + 20),
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;

    isDragging.current = true;
    startX.current = e.pageX;
    startScroll.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;

    trackRef.current.scrollLeft =
      startScroll.current - (e.pageX - startX.current);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-18 lg:pb-10 lg:pt-10">
      <Container>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: "easeOut" }} className="mx-auto mb-8 flex w-full max-w-4xl flex-col items-center text-center sm:mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a876]">
            <Sparkles size={13} />
            Just Dropped
          </span>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.08] text-[#2a2a26] sm:text-4xl lg:text-5xl xl:text-6xl">
            New <span className="text-[#c9a876]">Arrivals</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6b6659] sm:text-base sm:leading-7 lg:text-lg">
            Discover our latest styles, thoughtfully crafted to bring effortless elegance to every occasion.
          </p>
        </motion.div>

        <div className="mb-4 flex justify-end sm:mb-5">
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => scrollByCard(-1)} disabled={!canScrollLeft} aria-label="Scroll left" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e1d5] text-[#2a2a26] transition disabled:cursor-not-allowed disabled:opacity-30 hover:enabled:border-[#c9a876] hover:enabled:bg-[#f7f3ec]">
              <ChevronLeft size={18} />
            </button>

            <button onClick={() => scrollByCard(1)} disabled={!canScrollRight} aria-label="Scroll right" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e1d5] text-[#2a2a26] transition disabled:cursor-not-allowed disabled:opacity-30 hover:enabled:border-[#c9a876] hover:enabled:bg-[#f7f3ec]">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={trackRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={stopDragging} onMouseLeave={stopDragging} className="scrollbar-hide flex cursor-grab gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 select-none active:cursor-grabbing">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} widthClass="w-[68%] snap-start sm:w-[42%] md:w-[32%] lg:w-[23%]" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/" className="rounded-full border border-[#2f4a3e] px-6 py-2.5 text-sm font-medium text-[#d9eae2] transition hover:bg-[#7da895] hover:text-white">
            View All New Arrivals
          </Link>
        </div>
      </Container>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}