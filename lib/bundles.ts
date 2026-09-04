/**
 * The recipe bundles akaani actually sells, from /v1/recipe_groups. One source
 * for the homepage, the shop grid and each bundle's own page, so they cannot
 * drift the way the blog copies had.
 */
export type Bundle = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  plan: string;
  benefits: string[];
  mealTypes: string[];
  servings: number;
  price: number;
  currency: string;
  image: string;
  alt: string;
  recipes: string[];
  /** Shown on the card corner. Not from the API; a merchandising label. */
  tag?: string;
};

export const BUNDLES: Bundle[] = [
  {
    slug: "the-protein-pot",
    name: "The Protein Pot",
    tagline: "Maximum protein. Pure Nigerian.",
    blurb: "Seven recipes curated for muscle building and active lifestyles.",
    plan: "High-Protein",
    benefits: ["Muscle Building & Growth", "Active Lifestyle"],
    mealTypes: ["Lunch"],
    servings: 5,
    price: 4.99,
    currency: "$",
    image: "https://res.cloudinary.com/dax6lymsu/image/upload/v1774722433/dsq9dp7uinjuj5yeo9pi.jpg",
    alt: "The Protein Pot bundle",
    tag: "Best seller",
    recipes: [
      "Healthy Afang Soup",
      "Oha Style Soup with Efo",
      "Grilled Tilapia with Spicy Marinade",
      "Suya-Spiced Tacos",
      "Boiled Sweet Potatoes and Chicken Stir Fry",
      "Moringa Protein Smoothie",
      "Palm Oil-Free Egusi Soup",
    ],
  },
  {
    slug: "cut-season",
    name: "Cut Season",
    tagline: "Eat less, lose more, stay Nigerian.",
    blurb: "Seven low calorie and high-protein recipes curated for fat loss and muscle growth.",
    plan: "Fat Loss",
    benefits: ["Fat Loss", "Low Calorie", "High Satiety"],
    mealTypes: ["Lunch", "Breakfast"],
    servings: 5,
    price: 5.99,
    currency: "$",
    image: "https://res.cloudinary.com/dax6lymsu/image/upload/v1774723310/i0bwzl9kv6shhpxe2ltz.jpg",
    alt: "Cut Season bundle",
    recipes: [
      "Abacha (African Salad)",
      "Zucchini Noodles with Efo Riro",
      "Fish Pepper Soup",
      "Egg and Veggie Muffins",
      "Sweet Potato Mash with Chicken Sauce",
      "Seafood Okro Soup",
      "Goat Meat and Plantain Peppersoup",
    ],
  },
  {
    slug: "roots-restore",
    name: "Roots & Restore",
    tagline: "Ancient ingredients, modern gut health.",
    blurb: "Five fibre-rich and gut friendly recipes curated to aid digestion.",
    plan: "Gut Friendly",
    benefits: ["Gut Health", "Digestion", "Fibre-rich eating"],
    mealTypes: ["Lunch", "Breakfast"],
    servings: 5,
    price: 4.99,
    currency: "$",
    image: "https://res.cloudinary.com/dax6lymsu/image/upload/v1774724528/vfqjzg6mdgkrf8frlqbu.jpg",
    alt: "Roots and Restore bundle",
    recipes: [
      "Fermented Locust bean stew (Iru Stew)",
      "Chickpea/Bambara Nut Porridge",
      "Beans and Lentils Moimoi",
      "Ogi (Pap) with Soy Milk and Moringa",
      "Papaya-Yogurt Smoothie",
    ],
  },
  {
    slug: "mama-put-macros",
    name: "Mama Put Macros",
    tagline: "Street-food classics, macro optimised.",
    blurb: "The roadside plates you already order, with the numbers worked out.",
    plan: "Balanced Macros",
    benefits: ["Balanced Macros"],
    mealTypes: ["Lunch", "Breakfast"],
    servings: 5,
    price: 4.99,
    currency: "$",
    image: "https://res.cloudinary.com/dax6lymsu/image/upload/v1774726076/kvvx10nhcg6qfwyn0aw6.jpg",
    alt: "Mama Put Macros bundle",
    recipes: [
      "Whole Grain Pap, Akara Waffles, and Mushroom Balls",
      "Suya Sandwich",
      "Asun",
      "Peppersoup Noodles with Goat Meat and Vegetables",
    ],
  },
];

/** Every bundle carries these, so they are stated once rather than per bundle. */
export const INCLUDED = [
  "Full ingredient list for every recipe",
  "Step-by-step instructions written plainly",
  "Macros worked out per serving",
  "A tip from Lu on every page",
];

export const bundleBySlug = (slug: string) => BUNDLES.find((b) => b.slug === slug);
