import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "chocolate-fudge-cake",
    slug: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    category: "premium",
    price: 35000,
    image: "/images/products/chocolate-fudge-cake.webp",
    shortDescription: "Deep chocolate cake with a silky fudge finish.",
    description:
      "Moist chocolate layers meet a smooth, rich fudge frosting in a comforting slice made for chocolate lovers.",
    ingredients: ["Chocolate sponge", "Chocolate ganache", "Cocoa"],
    popular: true,
  },
  {
    id: "strawberry-shortcake",
    slug: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    category: "classic",
    price: 33000,
    image: "/images/products/strawberry-shortcake.webp",
    shortDescription: "Light vanilla sponge, cream, and strawberries.",
    description:
      "Soft vanilla sponge layered with lightly sweetened cream and ripe strawberries for a fresh, balanced finish.",
    ingredients: ["Vanilla sponge", "Fresh strawberries", "Whipped cream"],
    popular: true,
  },
  {
    id: "matcha-cream-cake",
    slug: "matcha-cream-cake",
    name: "Matcha Cream Cake",
    category: "premium",
    price: 35000,
    image: "/images/products/matcha-cream-cake.webp",
    shortDescription: "Gentle matcha flavor with soft cream layers.",
    description:
      "A tender sponge with fragrant Japanese matcha and smooth cream, finished with a delicate dusting of matcha powder.",
    ingredients: ["Matcha sponge", "Whipped cream", "Japanese matcha"],
    popular: true,
  },
  {
    id: "biscoff-cheesecake",
    slug: "biscoff-cheesecake",
    name: "Biscoff Cheesecake",
    category: "premium",
    price: 38000,
    image: "/images/products/biscoff-cheesecake.webp",
    shortDescription: "Creamy cheesecake with caramel biscuit crunch.",
    description:
      "A velvety cheesecake on a buttery biscuit base, topped with caramelized cookie spread and a little extra crunch.",
    ingredients: ["Cream cheese", "Biscuit crumb", "Caramel cookie spread"],
    popular: true,
  },
  {
    id: "vanilla-butter-cake",
    slug: "vanilla-butter-cake",
    name: "Vanilla Butter Cake",
    category: "classic",
    price: 29000,
    image: "/images/products/vanilla-butter-cake.webp",
    shortDescription: "A tender butter cake with a delicate vanilla aroma.",
    description:
      "A soft, buttery classic with real vanilla notes, baked for an easy afternoon treat or a simple celebration.",
    ingredients: ["Butter cake", "Vanilla", "Fresh eggs"],
  },
  {
    id: "tiramisu-cake",
    slug: "tiramisu-cake",
    name: "Tiramisu Cake",
    category: "premium",
    price: 36000,
    image: "/images/products/tiramisu-cake.webp",
    shortDescription: "Coffee-soaked sponge with mascarpone-style cream.",
    description:
      "Coffee-kissed sponge meets a creamy mascarpone-style filling, finished with a soft veil of cocoa.",
    ingredients: ["Coffee sponge", "Mascarpone-style cream", "Cocoa powder"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}