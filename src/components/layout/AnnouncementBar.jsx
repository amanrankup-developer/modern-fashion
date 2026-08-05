"use client";

import { Sparkles } from "lucide-react";

const offerText = "Get ₹500 off on minimum purchase of ₹3,999";

const marqueeItems = Array.from({ length: 10 });

export default function AnnouncementBar() {
  return (
    <section className="w-full">
      {/* =====================================================
          FIXED ANNOUNCEMENT MARQUEE
      ====================================================== */}
      <div className="fixed left-0 top-0 z-[100] w-full overflow-hidden border-b border-white/10 bg-[#2f4a3e]">
        <div className="announcement-marquee flex w-max whitespace-nowrap">
          {marqueeItems.map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-3 px-5 py-2.5 sm:px-7 sm:py-3"
            >
              <Sparkles
                size={13}
                strokeWidth={1.8}
                className="shrink-0 text-[#c9a876] sm:h-[15px] sm:w-[15px]"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#f7f3ec]/90 sm:text-[11px]">
                {offerText}
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c9a876] sm:text-[11px]">
                Apply Code: 500OFF
              </span>

              <span className="mx-2 h-1 w-1 shrink-0 rounded-full bg-[#c9a876]/70" />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          SPACE RESERVED FOR FIXED ANNOUNCEMENT BAR
      ====================================================== */}
      <div className="h-[42px] sm:h-[48px]" />

      {/* =====================================================
          PREMIUM APP PROMO
          This section scrolls normally
      ====================================================== */}
      <div className="border-b border-[#e7e1d5] bg-[#f7f3ec]">
        <div className="mx-auto flex min-h-[72px] max-w-[1440px] flex-col items-center justify-center px-4 py-3 text-center sm:min-h-[78px] sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden h-px w-8 bg-[#c9a876] sm:block lg:w-12" />

            <Sparkles
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#c9a876]"
            />

            <p className="font-serif text-[16px] tracking-[0.02em] text-[#2a2a26] sm:text-[18px] lg:text-[19px]">
              Flat 15% off on First App Purchase*
            </p>

            <Sparkles
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-[#c9a876] sm:h-[15px] sm:w-[15px]"
            />

            <span className="hidden h-px w-8 bg-[#c9a876] sm:block lg:w-12" />
          </div>

          <p className="mt-1 text-[10px] font-medium tracking-[0.08em] text-[#6b6659] sm:text-[11px] lg:text-xs">
            Exclusive on App
            <span className="mx-2 text-[#c9a876]">|</span>

            <span className="text-[#2f4a3e]">4.8 ★</span>

            <span className="mx-2 text-[#c9a876]">|</span>

            4.5L+ Downloads
          </p>
        </div>
      </div>
    </section>
  );
}