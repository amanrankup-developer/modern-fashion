"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import NavDropdown from "./NavDropdown";
import SearchBar from "./SearchBar";
import { navItems, dropdownData } from "@/constants/navigation";
import { useCart } from "@/context/CardContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveItem(null);
    }, 180);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    setActiveItem(null);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
     <header
  className={`sticky top-[42px] sm:top-[48px] z-50 w-full border-b border-[#e7e1d5] bg-white/95 backdrop-blur-xl transition-all duration-300 ${
    isScrolled
      ? "shadow-[0_8px_35px_rgba(47,74,62,0.10)]"
      : "shadow-[0_1px_0_rgba(47,74,62,0.02)]"
  }`}
>
        <div className="relative">
          <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:h-[76px] sm:px-6 lg:h-[80px] lg:px-8 xl:gap-8">
            {/* =================================================
                BRAND
            ================================================== */}
            <Link
              href="/"
              aria-label="LOOMORA Home"
              className="group relative flex shrink-0 items-center"
            >
              <span className="font-serif text-[27px] font-medium tracking-[0.08em] text-[#2f4a3e] transition-all duration-300 group-hover:text-[#243a30] sm:text-[29px] lg:text-[31px]">
                Your Brand
              </span>

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a876] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav
              className="hidden min-w-0 items-center justify-center xl:flex"
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-5 2xl:gap-7">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative shrink-0"
                    onMouseEnter={() => handleMouseEnter(item)}
                  >
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-1.5 py-2 text-[13px] font-medium tracking-[0.01em] text-[#2a2a26] transition-colors duration-300 hover:text-[#2f4a3e] 2xl:text-sm ${
                        item.highlight ? "text-[#2f4a3e]" : ""
                      } ${
                        item.isOffer
                          ? "text-[#b5462f] hover:text-[#94381f]"
                          : ""
                      }`}
                    >
                      <span>{item.name}</span>

                      {item.badge && (
                        <span className="rounded-full bg-[#b5462f] px-1.5 py-[2px] text-[7px] font-bold uppercase tracking-wide text-white">
                          {item.badge}
                        </span>
                      )}

                      {item.hasDropdown && (
                        <ChevronDown
                          size={12}
                          strokeWidth={1.7}
                          className={`mt-[1px] opacity-55 transition-transform duration-300 ${
                            activeItem?.name === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}

                      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c9a876] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </div>
                ))}
              </div>
            </nav>

            {/* =================================================
                ACTIONS
            ================================================== */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 lg:gap-2.5">
              {/* Search */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Search"
                className="premium-nav-action"
              >
                <Search size={21} strokeWidth={1.6} />
              </button>

              {/* Stylist */}
              <button
                type="button"
                aria-label="Stylist"
                className="premium-nav-action hidden sm:flex"
              >
                <Sparkles
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#c9a876]"
                />
              </button>

              <Link
                href="#"
                aria-label="Wishlist"
                className="premium-nav-action"
              >
                <Heart size={21} strokeWidth={1.6} />
              </Link>

              <Link
                href="#"
                aria-label="Cart"
                className="premium-nav-action"
              >
                <ShoppingBag size={21} strokeWidth={1.6} />
              </Link>

              {/* Account */}
              <button
                type="button"
                aria-label="Account"
                className="premium-nav-action hidden lg:flex"
              >
                <User size={21} strokeWidth={1.6} />
              </button>

              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="premium-nav-action xl:hidden"
              >
                <Menu size={23} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* =================================================
              DESKTOP DROPDOWN
          ================================================== */}
          <AnimatePresence>
            {activeItem?.hasDropdown && (
              <NavDropdown
                item={activeItem}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              />
            )}
          </AnimatePresence>
        </div>

        <SearchBar
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-[#1c2923]/40 backdrop-blur-sm"
            />

            <motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{
    type: "spring",
    damping: 26,
    stiffness: 240,
  }}
  className="fixed inset-y-0 right-0 z-[1100] flex w-[88%] max-w-[420px] flex-col overflow-hidden bg-[#fffdf9] shadow-[-20px_0_60px_rgba(0,0,0,0.16)]"
>
              <div className="flex h-full flex-col">
                {/* Drawer Header */}
                <div className="flex h-[76px] items-center justify-between border-b border-[#e7e1d5] px-5 sm:px-6">
                  <span className="font-serif text-[23px] tracking-[0.06em] text-[#2f4a3e]">
                    LOOMORA
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7e1d5] text-[#2a2a26] transition-all hover:border-[#c9a876] hover:bg-[#f7f3ec]"
                    aria-label="Close menu"
                  >
                    <X size={20} strokeWidth={1.6} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-[#eee9df]">
                      <button
                        type="button"
                        onClick={() =>
                          item.hasDropdown
                            ? setMobileExpanded(
                                mobileExpanded === item.name ? null : item.name,
                              )
                            : setIsMenuOpen(false)
                        }
                        className={`flex w-full items-center justify-between py-4 text-left text-[15px] font-medium tracking-wide text-[#2a2a26] transition-colors hover:text-[#2f4a3e] ${
                          item.isOffer ? "text-[#b5462f]" : ""
                        }`}
                      >
                        <span>{item.name}</span>

                        {item.hasDropdown && (
                          <ChevronDown
                            size={17}
                            strokeWidth={1.6}
                            className={`transition-transform duration-300 ${
                              mobileExpanded === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {item.hasDropdown && mobileExpanded === item.name && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-2">
                              {dropdownData[item.dropdownType]?.filters
                                .flatMap((filter) => filter.items)
                                .slice(0, 8)
                                .map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-sm text-[#6b6659] transition-colors hover:text-[#2f4a3e]"
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Mobile Bottom Actions */}
                <div className="border-t border-[#e7e1d5] bg-[#f7f3ec]/60 p-5 sm:p-6">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-medium text-[#2a2a26] transition hover:bg-white"
                  >
                    <User size={19} strokeWidth={1.6} />
                    My Account
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-medium text-[#2a2a26] transition hover:bg-white"
                  >
                    <MapPin size={19} strokeWidth={1.6} />
                    Store Locator
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
