"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CardContext";

export default function ProductCard({ product, widthClass = "w-full" }) {
  const { toggle, isWishlisted } = useWishlist();
  const { addItem } = useCart();

  const wishlisted = isWishlisted(product.id);

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;

  const handleWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggle(product.id);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    addItem(product, product.sizes?.[0] || "M", 1);
  };

  return (
    <article className={`group relative flex shrink-0 flex-col ${widthClass}`}>
      {/* =====================================================
          PRODUCT IMAGE
      ====================================================== */}

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f0ebe0]">
        {/* IMPORTANT:
            Image is NOT wrapped in Link.
            So clicking image will NOT open another page.
        */}

        {/* Main Image */}
        <Image
          src={product.image || "/images/placeholder.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
          draggable={false}
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
            draggable={false}
            className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* ===================================================
            BADGE
        ==================================================== */}

        {product.badge && (
          <span
            className="
              absolute
              left-3
              top-3
              z-10
              rounded-full
              bg-[#2f4a3e]
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-white
            "
          >
            {product.badge}
          </span>
        )}

        {/* ===================================================
            DISCOUNT
        ==================================================== */}

        {discount > 0 && (
          <span
            className="
              absolute
              bottom-3
              left-3
              z-10
              rounded-full
              bg-white/95
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-[#b5462f]
              shadow-sm
              backdrop-blur-sm
            "
          >
            {discount}% OFF
          </span>
        )}

        {/* ===================================================
            WISHLIST
        ==================================================== */}

        <button
          type="button"
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/95
            shadow-sm
            backdrop-blur-sm
            transition
            duration-300
            hover:scale-110
          "
        >
          <Heart
            size={17}
            strokeWidth={2}
            className={
              wishlisted ? "fill-[#b5462f] text-[#b5462f]" : "text-[#2a2a26]"
            }
          />
        </button>

        {/* ===================================================
            ADD TO CART
        ==================================================== */}

        <div
          className="
            absolute
            inset-x-3
            bottom-3
            z-20
            translate-y-14
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <button
            type="button"
            onClick={handleAddToCart}
            className="product-card-add"
          >
            <ShoppingBag size={15} strokeWidth={2.2} />

            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* =====================================================
          PRODUCT INFORMATION
      ====================================================== */}

      <Link href={`/product/${product.slug}`} className="mt-3 block">
        {/* Rating */}

        <div className="flex items-center gap-1">
          <Star size={12} className="fill-[#c9a876] text-[#c9a876]" />

          <span className="text-xs text-[#6b6659]">{product.rating}</span>

          {product.reviews && (
            <span className="text-xs text-[#a39c8c]">({product.reviews})</span>
          )}
        </div>

        {/* Name */}

        <h3
          className="
            mt-1
            line-clamp-2
            min-h-[2.75rem]
            text-sm
            font-medium
            leading-snug
            text-[#2a2a26]
          "
        >
          {product.name}
        </h3>

        {/* Price */}

        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#2a2a26]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.originalPrice > product.price && (
            <span className="text-xs text-[#a39c8c] line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
