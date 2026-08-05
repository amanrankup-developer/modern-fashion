"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const searches = [
  { name: "Shop for Women", href: "/" },
  { name: "Kurtas for Women", href: "/" },
  { name: "Kurta Sets", href: "/" },
  { name: "Occasion Wear", href: "/" },
  { name: "Festive Wear", href: "/" },
  { name: "Fusion Wear", href: "/" },
  { name: "New Arrivals", href: "/" },
  { name: "Best Sellers", href: "/" },
  { name: "Wedding Wear", href: "/" },
  { name: "Chikankari Kurtas", href: "/" },
  { name: "Printed Kurtas", href: "/" },
  { name: "Embroidered Kurta Sets", href: "/" },
  { name: "Party Wear", href: "/" },
  { name: "Everyday Kurtas", href: "/" },
];

export default function RelatedSearches() {
  return (

     <div className="mx-auto max-w-7xl px-4 text-blue-500 pt-20 pb-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-xl font-medium text-[#2a2a26] sm:text-2xl">
            Related Searches
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
            {searches.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  className="text-xs text-[#8f3f35] underline-offset-2 transition-colors duration-200 hover:text-[#2f4a3e] hover:underline sm:text-sm"
                >
                  {item.name}
                </Link>

                {index !== searches.length - 1 && (
                  <span className="ml-2 text-[#b9b1a3]">|</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
  );
}