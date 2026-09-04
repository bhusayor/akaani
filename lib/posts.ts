/**
 * The blog posts that actually exist on useakaani.com, in one place so the
 * homepage and the blog index cannot drift apart. Both pages previously
 * hardcoded their own separate copies.
 *
 * Only these four are live. Each has its own page here at /blog/[slug].
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read: string;
  date: string;
  image: string;
  alt: string;
  /** The Nutrient Maxxing cover is a graphic with the headline set into its
   *  right half, which would print the title twice on a card that already
   *  shows it. Marks a cover that must be cropped past the type. */
  cropPastType?: boolean;
  href: string;
};

export const POSTS: Post[] = [
  {
    slug: "nutrient-maxxing-how-to-build-high-protein-high-fiber-meals",
    title: "Nutrient Maxxing: How to Build High-Protein, High-Fiber Meals",
    excerpt: "How to make the same calories work harder, starting with a weeknight dinner that takes no effort.",
    category: "Nutrition",
    read: "2 min",
    date: "Aug 7, 2026",
    image: "https://res.cloudinary.com/dax6lymsu/image/upload/v1786088603/m3nvb3ykfdxwssdwcprp.png",
    alt: "A high-protein, high-fibre plate",
    cropPastType: true,
    href: "/blog/nutrient-maxxing-how-to-build-high-protein-high-fiber-meals",
  },
  {
    slug: "the-700-pm-struggle-why-deciding-whats-for-dinner-feels-like-a-daily-battle-and-how-to-win",
    title: "The 7:00 PM Struggle: Why Deciding What's for Dinner Feels Like a Daily Battle",
    excerpt: "The decision fatigue that hits when you open the fridge at the end of a long day, and how to beat it.",
    category: "Food lifestyle",
    read: "3 min",
    date: "Aug 7, 2026",
    image: "https://useakaani.com/images/fridge.jpg",
    alt: "An open fridge at dinner time",
    href: "/blog/the-700-pm-struggle-why-deciding-whats-for-dinner-feels-like-a-daily-battle-and-how-to-win",
  },
  {
    slug: "welcome-lu-your-ai-kitchen-companion-crafted-with-care",
    title: "Welcome Lu: Your AI Kitchen Companion, Crafted with Care",
    excerpt: "Meet the companion built for the moment you are staring at a full fridge with no idea what to cook.",
    category: "Product",
    read: "2 min",
    date: "Aug 7, 2026",
    image: "https://useakaani.com/images/third_post.jpg",
    alt: "Cooking with a phone to hand",
    href: "/blog/welcome-lu-your-ai-kitchen-companion-crafted-with-care",
  },
  {
    slug: "foodie-tech-how-artificial-intelligence-is-revolutionizing-the-way-we-eat",
    title: "Foodie Tech: How Artificial Intelligence is Revolutionizing the Way We Eat",
    excerpt: "What changes in the kitchen when the guesswork of planning, shopping and cooking is handled for you.",
    category: "Tech",
    read: "2 min",
    date: "Aug 7, 2026",
    image: "https://useakaani.com/images/third_post.jpg",
    alt: "Technology and food",
    href: "/blog/foodie-tech-how-artificial-intelligence-is-revolutionizing-the-way-we-eat",
  },
];

/** Newest first is already the order above; the first is the featured one. */
export const FEATURED = POSTS[0];
export const REST = POSTS.slice(1);
