"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";
import Image from "next/image";

const backgroundImages = [
  { id: 1, src: "/images/hero-image.jpg", alt: "Fashion Hero 1" },
  { id: 2, src: "/images/image5.jpg", alt: "Fashion Hero 2" },
  { id: 3, src: "/images/image3.jpg", alt: "Fashion Hero 3" },
  { id: 4, src: "/images/imagesM.jpg", alt: "Fashion Hero 4" },
];

const categories = ["New Arrivals", "Festive Edit", "Co-ords", "Best Sellers", "Kurta Sets", "Plus Size", "LUXE"];

const trustItems = [
  { icon: "🔒", label: "Secure Payments" },
  { icon: "🚚", label: "Free Delivery" },
  { icon: "↩️", label: "Easy Returns" },
  { icon: "💬", label: "24/7 Support" },
  { icon: "⭐", label: "4.8★ Ratings" },
];

function MagneticButton({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="relative min-h-[calc(85vh-80px)] overflow-hidden bg-[#f7f3ec]">
      {/* Background image layer */}
      <div className="absolute inset-0 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.3, ease: "easeInOut" } }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex].src}
              alt={backgroundImages[currentImageIndex].alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={75}
            />
          </motion.div>
        </AnimatePresence>

        {/* Single gradient overlay - fixed washed-out issue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c2c24]/45 via-transparent to-[#1c2c24]/55" />
      </div>

      {/* Content - Responsive height */}
      <div className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center px-4 text-center sm:min-h-[80vh] sm:px-6 lg:min-h-[90vh] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl lg:max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#c9a876]/40 bg-black/25 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4d3ae] backdrop-blur-md sm:text-xs"
          >
            <Sparkles size={13} />
            New Season Edit
          </motion.div>

          {/* Heading - Responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-5 font-serif text-[2.6rem] leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Where Tradition<br />
            <span className="italic text-[#d8bf8e]">Meets Modern Grace</span>
          </motion.h1>

          {/* Description - Responsive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-base lg:max-w-2xl lg:text-lg"
          >
            Thoughtfully crafted kurta sets and occasion wear — designed for women who carry heritage with quiet confidence.
          </motion.p>

          {/* Buttons - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <MagneticButton>
              <Button
                as="a"
                href="/"
                variant="gold"
                className="group px-6 py-3 text-sm rounded-full shadow-[0_8px_30px_rgba(201,168,118,0.35)] hover:shadow-[0_10px_40px_rgba(201,168,118,0.5)] sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg"
              >
                Shop the Edit
                <ArrowRight size={16} className="ml-2 inline transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
            <Button
              as="a"
              href="/"
              className="px-6 py-3 text-sm rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg"
            >
              Explore Collection
            </Button>
          </motion.div>

          {/* Category Pills - Horizontal scroll on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.9 } } }}
            className="mt-8 flex overflow-x-auto gap-2 pb-2 scrollbar-hide sm:flex-wrap sm:justify-center"
          >
            {categories.map((category) => (
              <motion.span
                key={category}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] text-white/90 backdrop-blur-sm transition whitespace-nowrap hover:border-[#c9a876]/70 hover:bg-[#c9a876]/20 hover:text-white sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:py-2.5"
              >
                {category}
              </motion.span>
            ))}
          </motion.div>

          {/* Trust Section - Grid on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 grid grid-cols-2 gap-3 border-t border-white/20 pt-7 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-3 lg:pt-8"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                <span className="text-base sm:text-lg lg:text-xl">{item.icon}</span>
                <span className="text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-16">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`rounded-full transition-all duration-300 ${index === currentImageIndex ? "h-2 w-8 bg-[#c9a876]" : "h-2 w-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-white/70"
      >
        <ArrowDown size={18} />
      </motion.div>
    </Section>
  );
}