"use client";

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Download, Sparkles } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function AppBanner() {
  return (
    <section className="relative overflow-hidden bg-[#45725e] py-14 sm:py-16 lg:py-20">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c9a876]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[650px] text-left"
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <Download
                size={14}
                strokeWidth={1.8}
                className="shrink-0 text-[#c9a876]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a876] sm:text-xs">
                Get the App
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-[620px] font-serif text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-5xl xl:text-[54px]">
              Our Largest Store,
              <br />

              <span className="italic text-[#d8bf8e]">
                Right in Your Pocket
              </span>
            </h2>

           <p
  className="!mt-5 !max-w-[570px] !text-left !text-sm !font-normal !leading-7 !text-white/75 sm:!text-base lg:!text-[17px] lg:!leading-7"
>
  Download the LOOMORA app for early access to drops,
  app-exclusive offers, and a faster checkout experience.
</p>

            {/* App Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Google Play */}
              <a
                href="#"
                aria-label="Download on Google Play"
                className="group flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <FaGooglePlay
                  size={19}
                  className="text-white transition-transform duration-300 group-hover:scale-110"
                />

                <div className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-white/50">
                    Get it on
                  </span>

                  <span className="block text-sm font-semibold text-white">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                aria-label="Download on App Store"
                className="group flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <FaApple
                  size={21}
                  className="text-white transition-transform duration-300 group-hover:scale-110"
                />

                <div className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-white/50">
                    Download on
                  </span>

                  <span className="block text-sm font-semibold text-white">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT QR CODE
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative">

              {/* QR Glow */}
              <div className="pointer-events-none absolute inset-0 scale-90 rounded-[2rem] bg-[#c9a876]/20 blur-2xl" />

              {/* QR Card */}
              <div className="relative w-[180px] rounded-[1.75rem] border border-white/10 bg-white p-4 shadow-2xl sm:w-[200px]">

                {/* QR Heading */}
                <div className="mb-3 flex items-center justify-center gap-1.5">
                  <Sparkles
                    size={12}
                    strokeWidth={1.7}
                    className="text-[#c9a876]"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#2f4a3e]">
                    Scan & Shop
                  </span>
                </div>

                {/* QR Code */}
                <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-[#f7f3ec] p-3">
                  <QRCodeSVG
                    value="https://modernfashion.rankuptechnologies.com/"
                    size={140}
                    bgColor="#f7f3ec"
                    fgColor="#1c2c24"
                    level="H"
                    includeMargin={false}
                  />
                </div>

                {/* Bottom Text */}
                <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-[#6b6659]">
                  Scan to open LOOMORA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}