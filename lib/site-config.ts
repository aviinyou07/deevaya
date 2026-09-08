export const siteConfig = {
  name: "Deevaya",
  tagline: "Curated Home Decor & Room Formulas",
  description:
    "Discover thoughtfully curated home decor, Amazon finds, and signature Room Formulas designed to help you create a warm, peaceful, and beautifully intentional home.",
  url: "https://deevaya.com",
  email: "contact@deevaya.com",
  socials: {
    pinterest: "https://pin.it/KNDdGQw5Q",
    amazonStorefront: "https://a.co/d/06qGfln2",
    whatsapp: "https://wa.me/message/Y5CAISUT5X5EP1",
  },
  verifications: {
    pinterest: "ef3d9ba554681cca192fdb3b3e55399e",
    impact: "47d265e0-9d2e-4d0b-90f6-b99bcb408216",
  },
  mainNav: [
    { label: "Home", href: "/" },
    {
      label: "Rooms",
      href: "/shop",
      children: [
        { label: "Living Room Finds", href: "/shop/deevaya-living-room-finds" },
        { label: "Bedroom Finds", href: "/shop/deevaya-bedroom-finds" },
        { label: "Kitchen Finds", href: "/shop/deevaya-kitchen-finds" },
        { label: "Bathroom Favorites", href: "/shop/deevaya-bathroom-favorites" },
        { label: "Fall Decor Finds", href: "/fall-decor-finds" },
      ],
    },
    { label: "Shop All", href: "/shop" },
    { label: "Room Formulas", href: "/deevaya-room-formula", badge: "Exclusive" },
    { label: "Journal", href: "/blog" },
    { label: "Explore", href: "/explore-deevaya" },
    { label: "About", href: "/about-us" },
  ],
  footerNav: {
    curatedRooms: [
      { label: "Living Room Finds", href: "/shop/deevaya-living-room-finds" },
      { label: "Bedroom Finds", href: "/shop/deevaya-bedroom-finds" },
      { label: "Kitchen Finds", href: "/shop/deevaya-kitchen-finds" },
      { label: "Bathroom Favorites", href: "/shop/deevaya-bathroom-favorites" },
      { label: "Fall Decor Finds", href: "/fall-decor-finds" },
      { label: "Shop All Finds", href: "/shop" },
    ],
    editorial: [
      { label: "Latest Articles", href: "/blog" },
      { label: "Room Formulas", href: "/deevaya-room-formula" },
      { label: "Explore Deevaya", href: "/explore-deevaya" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    compliance: [
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
};
