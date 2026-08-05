"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  // ArrowUp,
  Heart,
  Shield,
  Truck,
  RefreshCw,
  Lock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import { footerLinks } from "@/constants/navigation";

const TEXT_HEAD = "#f7f3ec";
const TEXT_BODY = "#cfc9ba";
const TEXT_MUTED = "#9a9484";

/* =========================================================
   FOOTER SOCIAL LINKS
   Navigation disabled for now
========================================================= */

const socialLinks = [
  {
    icon: FaInstagram,
    label: "Instagram",
    hover: "hover:bg-[#E4405F] hover:border-[#E4405F]",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    hover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    icon: FaPinterest,
    label: "Pinterest",
    hover: "hover:bg-[#E60023] hover:border-[#E60023]",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    hover: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
];

/* =========================================================
   TRUST BADGES
========================================================= */

const trustBadges = [
  {
    icon: Shield,
    label: "Secure Payments",
    sub: "100% Safe Checkout",
  },
  {
    icon: Lock,
    label: "100% Authentic",
    sub: "Quality Assured",
  },
  {
    icon: Truck,
    label: "Free Delivery",
    sub: "On Orders ₹999+",
  },
  {
    icon: RefreshCw,
    label: "Easy Returns",
    sub: "7-Day Policy",
  },
];

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links, delay }) {
  const preventNavigation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="min-w-0"
    >
      <p
        className="relative inline-block text-base font-semibold uppercase tracking-wide"
        style={{ color: TEXT_HEAD }}
      >
        {title}

        <span className="absolute -bottom-1.5 left-0 h-0.5 w-8 rounded-full bg-[#c9a876]" />
      </p>

      <ul className="mt-6 space-y-3.5">
        {links.map((item) => (
          <li key={item}>
            <a
              href="/shop"
              onClick={preventNavigation}
              style={{ color: TEXT_BODY }}
              className="group inline-flex max-w-full cursor-pointer items-center gap-1 text-[15px] transition-all duration-300 hover:translate-x-0.5 hover:text-[#c9a876]"
            >
              <span className="h-px w-0 shrink-0 bg-[#c9a876] transition-all duration-300 group-hover:w-2.5" />

              <span className="break-words">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const preventFooterNavigation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#23543c]">
      {/* Top Gold Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#c9a876] to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c9a876]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-12">
        {/* =====================================================
            TOP HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-col
            gap-7
            border-b
            border-white/10
            pb-8
            sm:gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Logo */}

          <a
            href="#"
            onClick={preventFooterNavigation}
            aria-label="LOOMORA Home"
            className="w-fit cursor-pointer"
          >
            <span
              className="font-serif text-3xl font-medium sm:text-4xl"
              style={{ color: TEXT_HEAD }}
            >
              Your Brand
            </span>
          </a>

          {/* =================================================
              APP DOWNLOAD BADGES
          ================================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4
              sm:w-auto
              sm:flex-row
              sm:items-center
              sm:justify-end
              sm:gap-4
              lg:gap-5
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                sm:text-xs
                sm:tracking-wider
              "
              style={{ color: TEXT_MUTED }}
            >
              Get the app
            </span>

            {/* App Badges */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                min-[420px]:flex-row
                sm:w-auto
                sm:items-center
              "
            >
              {/* Google Play */}

              <a
                href="#"
                onClick={preventFooterNavigation}
                aria-label="Get it on Google Play"
                className="
                  block
                  w-fit
                  max-w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <Image
                  src="/images/google.avif"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  sizes="(max-width: 419px) 180px, (max-width: 639px) 150px, (max-width: 1023px) 150px, 170px"
                  className="
                    h-auto
                    w-[180px]
                    max-w-full
                    object-contain
                    min-[420px]:w-[150px]
                    sm:w-[160px]
                    lg:w-[175px]
                  "
                />
              </a>

              {/* App Store */}

              <a
                href="#"
                onClick={preventFooterNavigation}
                aria-label="Download on the App Store"
                className="
                  block
                  w-fit
                  max-w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <Image
                  src="/images/app-store.avif"
                  alt="Download on the App Store"
                  width={150}
                  height={45}
                  sizes="(max-width: 419px) 180px, (max-width: 639px) 150px, (max-width: 1023px) 150px, 170px"
                  className="
                    h-auto
                    w-[180px]
                    max-w-full
                    object-contain
                    min-[420px]:w-[150px]
                    sm:w-[160px]
                    lg:w-[175px]
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div
          className="
            grid
            gap-10
            py-10
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-12
            sm:py-12
            lg:grid-cols-[1.3fr_0.85fr_0.85fr_0.85fr]
            lg:gap-10
          "
        >
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 sm:col-span-2 lg:col-span-1"
          >
            <p
              className="max-w-sm text-[15px] leading-relaxed"
              style={{ color: TEXT_BODY }}
            >
              Thoughtfully crafted kurta sets and occasion wear, blending
              heritage craft with modern silhouettes. Proudly made in India.
            </p>

            {/* Social */}

            <div className="mt-6">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-wider"
                style={{ color: TEXT_MUTED }}
              >
                Follow Us
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href="#"
                      onClick={preventFooterNavigation}
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      style={{ color: TEXT_BODY }}
                      className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 transition-colors duration-300 hover:text-white ${social.hover}`}
                    >
                      <Icon size={15} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Shop */}

          <FooterColumn
            title="Shop"
            links={footerLinks.shop}
            delay={0.1}
          />

          {/* Customer Care */}

          <FooterColumn
            title="Customer Care"
            links={footerLinks.care}
            delay={0.2}
          />

          {/* Company */}

          <FooterColumn
            title="Company"
            links={footerLinks.company}
            delay={0.3}
          />
        </div>

        {/* =====================================================
            TRUST BADGES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-2
            gap-3
            border-t
            border-white/10
            py-8
            sm:gap-4
            sm:py-10
            md:grid-cols-4
          "
        >
          {trustBadges.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-3
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c9a876]/40
                  hover:bg-[#c9a876]/10
                  sm:p-4
                "
              >
                <Icon
                  size={24}
                  className="shrink-0 text-[#c9a876] transition-transform duration-300 group-hover:scale-110 sm:size-[26px]"
                />

                <span
                  className="mt-2 text-xs font-semibold sm:text-sm"
                  style={{ color: TEXT_HEAD }}
                >
                  {item.label}
                </span>

                <span
                  className="mt-0.5 text-[10px] leading-4 sm:text-xs"
                  style={{ color: TEXT_MUTED }}
                >
                  {item.sub}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex
            flex-col
            items-center
            gap-4
            border-t
            border-white/10
            pt-6
            text-sm
            sm:flex-row
            sm:flex-wrap
            sm:justify-between
          "
        >
          {/* Copyright */}

          <p
            className="text-center sm:text-left"
            style={{ color: TEXT_MUTED }}
          >
            &copy;{" "}
            <span suppressHydrationWarning>
              {currentYear}
            </span>{" "}
            LOOMORA. All rights reserved.
          </p>

          {/* Legal */}

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="#"
              onClick={preventFooterNavigation}
              style={{ color: TEXT_MUTED }}
              className="cursor-pointer transition hover:text-[#c9a876]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              onClick={preventFooterNavigation}
              style={{ color: TEXT_MUTED }}
              className="cursor-pointer transition hover:text-[#c9a876]"
            >
              Terms of Service
            </a>
          </div>

          {/* Made in India */}

          <p
            className="flex items-center gap-1"
            style={{ color: TEXT_MUTED }}
          >
            Made with
            <Heart
              size={13}
              className="text-[#c9a876]"
            />
            in India
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      {/* <motion.button
        type="button"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a876] text-[#1c2c24] shadow-[0_8px_30px_rgba(201,168,118,0.4)]"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button> */}
    </footer>
  );
}