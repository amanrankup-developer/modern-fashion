
export const navItems = [
  { name: "New Arrivals", href: "#" },
  { name: "Best Sellers", href: "#", badge: "HOT" },
  { name: "Kurtas", href: "#", hasDropdown: true, dropdownType: "kurtas" },
  { name: "Kurta Sets", href: "#", hasDropdown: true, dropdownType: "kurtaSets" },
  { name: "Occasion Wear", href: "#", hasDropdown: true, dropdownType: "occasion" },
  { name: "Fusion Wear", href: "#" },
  { name: "LUXE", href: "#", highlight: true },
  { name: "Offer Zone", href: "#", isOffer: true },
  { name: "Blogs", href: "#" },
];

export const dropdownData = {
  kurtas: {
    promo: { label: "New Drop", text: "Handloom Cotton Kurtas", cta: "Shop the edit" },
    filters: [
      { category: "Shape", items: ["Straight", "A-Line", "Anarkali", "Kaftan", "Asymmetric"] },
      { category: "Design", items: ["Floral Print", "Ethnic Print", "Solid", "Bandhini", "Block Print"] },
      { category: "Craft", items: ["Embroidery", "Mirror Work", "Gota Patti", "Chikankari"] },
      { category: "Occasion", items: ["Casual Wear", "Work Wear", "Party Wear", "Festive"] },
    ],
  },
  kurtaSets: {
    promo: { label: "Trending", text: "3-Piece Festive Sets", cta: "Shop the edit" },
    filters: [
      { category: "Shape", items: ["Straight", "A-Line", "Anarkali", "Kaftan"] },
      { category: "Design", items: ["Floral Print", "Solid", "Tie & Dye", "Block Print"] },
      { category: "Craft", items: ["Embroidery", "Sequins", "Lace", "Chikankari"] },
      { category: "Occasion", items: ["Casual Wear", "Work Wear", "Festive"] },
    ],
  },
  occasion: {
    promo: { label: "Just In", text: "The Wedding Edit", cta: "Explore" },
    filters: [
      { category: "Wedding", items: ["Bridal Lehengas", "Sarees", "Anarkalis"] },
      { category: "Festive", items: ["Diwali Special", "Navratri", "Eid Collection"] },
      { category: "Party", items: ["Cocktail", "Evening Wear", "Trendy"] },
      { category: "Casual", items: ["Daily Wear", "Comfort", "Modern"] },
    ],
  },
};

export const categoryStrip = [
  { name: "New Arrivals", icon: "✨", href: "#" },
  { name: "BOGO", icon: "🎯", href: "#" },
  { name: "Festive Edit", icon: "🎉", href: "#" },
  { name: "Co-ords", icon: "👗", href: "#" },
  { name: "Best Sellers", icon: "⭐", href: "#" },
  { name: "Kurta Sets", icon: "🧥", href: "#" },
  { name: "Plus Size", icon: "👚", href: "#" },
  { name: "LUXE", icon: "💎", href: "#" },
  { name: "Store Locator", icon: "📍", href: "#" },
];

export const footerLinks = {
  shop: ["New Arrivals", "Kurtas", "Kurta Sets", "Occasion Wear", "Fusion Wear", "LUXE"],
  care: ["Track Your Order", "Shipping Policy", "Returns & Exchanges", "Size Guide", "FAQs", "Contact Us"],
  company: ["About Us", "Our Story", "Store Locator", "Careers", "Blog", "Reviews"],
};
