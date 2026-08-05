"use client";

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const trending = ["Kurtas", "Dresses", "Festive Wear", "Co-ords", "Plus Size", "Kurta Sets"];

export default function SearchBar({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 top-0 z-[100] bg-white p-6 shadow-2xl sm:p-10"
          >
            {/* CHANGE #1 - Yahan pe */}
            <div className="mx-auto w-full max-w-2xl px-4">
              {/* CHANGE #2 - Yahan pe */}
              <div className="flex items-center gap-3 justify-center">
                {/* CHANGE #3 - Yahan pe */}
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39c8c]" size={20} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search for kurtas, dresses, accessories..."
                    className="w-full rounded-full border border-[#e7e1d5] py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#2f4a3e]"
                  />
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-[#f7f3ec]"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-[#a39c8c]">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {trending.map((term) => (
                  <button
                    key={term}
                    className="rounded-full bg-[#f7f3ec] px-3.5 py-1.5 text-xs text-[#2a2a26] transition hover:bg-[#2f4a3e] hover:text-white"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}