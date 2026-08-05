export const products = [
  {
    id: 1,
    slug: "solid-embroidered-straight-kurta-set",
    name: "Solid Embroidered Straight Kurta Set",
    category: "Kurta Sets",
    price: 2399,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 128,
    image: "/images/new-lunch/kurta-set.webp",
    hoverImage: "/images/new-lunch/kurta-set.webp",
    gallery: ["/images/new-lunch/kurta-set.webp"],
    badge: "New",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Maroon", "Navy"],
    description:
      "A handcrafted straight kurta set with fine thread embroidery across the yoke, paired with a matching bottom. Cut from breathable cotton for all-day comfort.",
  },
  {
    id: 2,
    slug: "floral-print-a-line-kurta-with-palazzo",
    name: "Floral Print A-Line Kurta with Palazzo",
    category: "Kurta Sets",
    price: 1899,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 94,
    image: "/images/new-lunch/plazo.webp",
    hoverImage: "/images/new-lunch/plazo.webp",
    gallery: ["/images/new-lunch/plazo.webp"],
    badge: "Bestseller",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blush", "Sage"],
    description:
      "An easy A-line silhouette in a soft floral print, styled with relaxed-fit palazzo pants. Perfect for daytime festivities.",
  },
  {
    id: 3,
    slug: "chikankari-anarkali-kurta-set",
    name: "Chikankari Anarkali Kurta Set",
    category: "Occasion Wear",
    price: 3299,
    originalPrice: 6499,
    rating: 4.8,
    reviews: 210,
    image: "/images/new-lunch/anarkali.webp",
    hoverImage: "/images/new-lunch/anarkali.webp",
    gallery: ["/images/new-lunch/anarkali.webp"],
    badge: "New",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Powder Blue"],
    description:
      "Traditional Lucknowi chikankari hand-embroidery on a flowing anarkali silhouette — a statement piece for festive occasions.",
  },
  {
    id: 4,
    slug: "bandhini-print-co-ord-set",
    name: "Bandhini Print co-ord Set",
    category: "Fusion Wear",
    price: 2799,
    originalPrice: 4999,
    rating: 4.6,
    reviews: 76,
    image: "/images/new-lunch/bandhani.webp",
    hoverImage: "/images/new-lunch/bandhani.webp",
    gallery: ["/images/new-lunch/bandhani.webp"],
    badge: "Trending",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Coral", "Teal"],
    description:
      "A modern co-ord set featuring traditional bandhini tie-dye print — cropped top with a matching flared skirt.",
  },
  {
    id: 5,
    slug: "mirror-work-festive-kurta-set",
    name: "Mirror Work Festive Kurta Set",
    category: "Occasion Wear",
    price: 3899,
    originalPrice: 7999,
    rating: 4.9,
    reviews: 156,
    image: "/images/image1.jpg",
    hoverImage: "/images/image1.jpg",
    gallery: ["/images/image1.jpg", "/images/image1.jpg"],
    badge: "Trending",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Emerald", "Wine"],
    description:
      "Hand-embellished mirror work across a rich festive kurta set — designed to catch the light at every celebration.",
  },
  {
    id: 6,
    slug: "block-print-straight-kurta",
    name: "Block Print Straight Kurta",
    category: "Kurtas",
    price: 1599,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 61,
    image: "/images/imagesm1.jpg",
    hoverImage: "/images/imagesm1.jpg",
    gallery: ["/images/imagesm1.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Rust"],
    description:
      "Hand block-printed straight kurta in pure cotton — a wardrobe staple for effortless everyday wear.",
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getRelatedProducts = (slug, limit = 4) =>
  products.filter((product) => product.slug !== slug).slice(0, limit);

export const blogPosts = [
  {
    id: 1,
    slug: "5-ways-to-style-your-kurta",
    title: "5 Ways to Style Your Kurta for Different Occasions",
    excerpt:
      "From casual outings to festive celebrations, learn how to make your kurta work for every event.",
    date: "Dec 15, 2024",
    author: "Priya Sharma",
    image: "/images/blog/blog-1.jpg",
  },
  {
    id: 2,
    slug: "rise-of-fusion-wear",
    title: "The Rise of Fusion Wear: Blending Tradition with Modernity",
    excerpt:
      "Discover how modern fashion is embracing traditional elements to create something truly unique.",
    date: "Dec 12, 2024",
    author: "Amit Patel",
    image: "/images/blog/blog-2.jpg",
  },
  {
    id: 3,
    slug: "sustainable-fashion-future",
    title: "Sustainable Fashion: The Future of Clothing",
    excerpt:
      "Learn about sustainable practices in the fashion industry and how we're contributing to a better future.",
    date: "Dec 10, 2024",
    author: "Rahul Singh",
    image: "/images/blog/blog-3.jpg",
  },
];