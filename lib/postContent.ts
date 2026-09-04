/**
 * Bodies for the published posts, supplied by akaani. Kept apart from the card
 * metadata in posts.ts so that file stays scannable.
 *
 * The voice is deliberate, including the Nigerian English and the asides. Only
 * unmistakable typos were corrected.
 */
export type Block =
  | { t: "lead"; text: string }
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "dl"; items: { term: string; text: string }[] };

export const BODIES: Record<string, Block[]> = {
  "nutrient-maxxing-how-to-build-high-protein-high-fiber-meals": [
    { t: "lead", text: "How I make my calories work harder, starting with my favorite lazy girl dinner." },
    { t: "p", text: "I am, at heart, a lazy girl dinner enthusiast." },
    { t: "p", text: "Unfortunately, I am also a lazy girl who lifts weights." },
    { t: "p", text: "And lifting weights comes with responsibilities. Suddenly, “I’m not really hungry, I’ll just have something small” has to coexist with Have I eaten enough protein today? Then there’s fiber. And calories. And somehow I’m supposed to fit actual nutrients in there too." },
    { t: "p", text: "This is how I accidentally became obsessed with what I now call nutrient maxxing." },

    { t: "h2", text: "What is nutrient maxxing?" },
    { t: "p", text: "The idea is simple: get as much nutritional value as reasonably possible from the calories you’re already eating." },
    { t: "p", text: "Not “eat as little as possible.” Not “make every meal perfectly clean.” And definitely not “turn dinner into an optimization spreadsheet.”" },
    { t: "p", text: "It’s about making your calories work harder." },
    { t: "p", text: "I think of macro engineering as the method behind it. Instead of deciding what to eat and checking the macros afterward, I sometimes work backwards: what does this meal need to accomplish?" },
    { t: "p", text: "Maybe I need more protein. Maybe I’m behind on fiber. Maybe I want something relatively low-calorie because I’ve already had a substantial lunch. Then I build the meal around that." },
    { t: "p", text: "Very engineer-brained behavior, admittedly. But it works." },

    { t: "h2", text: "My high-protein, high-fiber lazy girl dinner" },
    { t: "p", text: "Recently, dinner was:" },
    { t: "ul", items: ["1 cup frozen raspberries", "1 cup soy milk", "1 cup nonfat Greek yogurt", "1 scoop plant protein powder"] },
    { t: "p", text: "Into the blender. Dinner in approximately two minutes." },
    { t: "p", text: "The result? Roughly 350 calories, 40+ grams of protein and 14 grams of fiber, depending on the brands you use." },
    { t: "p", text: "This is why I love smoothies." },
    { t: "p", text: "Raspberries do serious fiber work. Greek yogurt carries much of the protein. Soy milk adds more protein without dramatically increasing calories. And my plant protein powder closes the remaining protein gap while adding another 4 grams of fiber." },
    { t: "p", text: "No single ingredient has to do everything. The combination is engineered to do the work." },
    { t: "p", text: "And importantly, I actually like it and it keeps me full. Because a nutritionally perfect meal that I don’t enjoy eating isn’t particularly useful." },
    { t: "p", text: "That, to me, is nutrient maxxing: not necessarily eating less, but getting better at making what you eat do more for you. My lazy girl dinner just happens to lift weights." },
  ],

  "welcome-lu-your-ai-kitchen-companion-crafted-with-care": [
    { t: "lead", text: "Have you ever stared blankly at your refrigerator, overflowing with possibilities yet devoid of inspiration?" },
    { t: "p", text: "Or maybe you’re yearning to explore new cuisines but feel overwhelmed by the sheer number of recipes online, in a world where everyone knows it all. We’ve all been there. That’s where Lu comes in, your friendly AI kitchen companion, created by akaani to help you navigate the exciting world of food with ease and confidence." },

    { t: "h2", text: "Why Lu?" },
    { t: "p", text: "At akaani, we understand the power of food to connect us to our heritage, cultures, and new experiences. But sometimes, the process of planning and preparing meals can feel like a chore. We believe technology can enhance, not replace, the joy of cooking. That’s why we created Lu, an AI assistant designed to be your personal guide on a delicious culinary adventure." },

    { t: "h2", text: "What inspired Lu" },
    { t: "dl", items: [
      { term: "Simplify meal planning", text: "We wanted to take the stress out of deciding what to cook for dinner. Lu personalizes weekly meal plans based on your preferences, dietary restrictions, and cooking skills. No more endless scrolling through recipes, Lu curates a selection you’ll love." },
      { term: "Embrace culinary exploration", text: "The world of food is vast and exciting. Lu helps you discover hidden treasures of African delicacies, regional specialties, and dishes beyond your comfort zone. Whether you’re craving a taste of home or seeking a brand new flavor adventure, Lu is your guide." },
      { term: "Build confidence in the kitchen", text: "Cooking should be fun and rewarding. Lu offers step-by-step recipe guidance, suggests substitutions, and even recommends techniques to master each dish. With Lu by your side, you’ll feel confident tackling new recipes and expanding your culinary repertoire." },
      { term: "Connect through food", text: "Food is more than sustenance; it’s a way to connect with loved ones and celebrate traditions. Lu can help you explore the cultural significance behind dishes, making your cooking experience even more meaningful." },
    ] },
    { t: "p", text: "Lu is a work in progress, constantly learning and evolving based on your interactions. The more you use Lu, the better it understands your tastes and preferences, making your culinary journey with akaani even more personalized and delightful." },
    { t: "p", text: "Ready to ditch the meal-time rut and embark on a delicious exploration with Lu? Download the akaani app today and meet your AI kitchen companion." },
    { t: "p", text: "Together, let’s unlock a world of African flavor, from Ghanaian jollof to 9ja’s amala and ewedu." },
  ],

  "the-700-pm-struggle-why-deciding-whats-for-dinner-feels-like-a-daily-battle-and-how-to-win": [
    { t: "lead", text: "Living the busy life in a bustling US city? You know the drill: alarm clock screams, work emails flood your inbox, and by the time you hit your apartment door, all you want is to collapse on the couch." },
    { t: "p", text: "But then hunger strikes, and the dreaded question arises: “What’s for dinner?”" },
    { t: "p", text: "For many of us, especially those of us with African roots (shout out to my Naija and Ghanaian fam), deciding what to cook after a long day feels like climbing Mount Kilimanjaro. Here’s why it happens, and more importantly, how to win this daily battle." },

    { t: "h2", text: "The struggle is real" },
    { t: "dl", items: [
      { term: "Decision fatigue", text: "After a day of making choices, our brains are fried. Deciding between another takeout menu or tackling a new recipe feels like an impossible task." },
      { term: "The grocery gap", text: "Remember that shopping list you swore you’d make before work? Yeah, us neither. Now you’re staring at a fridge and it’s staring back at you. LMAO" },
      { term: "Missing the familiar", text: "We crave the delicious, comforting flavors of home, but replicating mum’s magic touch from a tiny Texas apartment kitchen sounds like you’re capping." },
      { term: "The one-pot wonder delulu", text: "We dream of effortless, one-pot meals, but let’s be honest, jollof rice doesn’t magically appear (although wouldn’t that be nice?)." },
    ] },

    { t: "h2", text: "Winning the dinnertime war" },
    { t: "dl", items: [
      { term: "Plan like a pro", text: "Make the most of your weekend. Dedicate a couple of hours on your free day to meal planning. Look for recipes online (hello, akaani), even browse your favorite African food blogs. Make a grocery list and stick to it." },
      { term: "Batch cooking is your BFF", text: "Cook a variety of soups, a big batch of jollof rice, porridge yam or plantain on the weekend. Portion them out for quick weekday meals, future you will thank you." },
      { term: "Frozen is your friend", text: "Frozen veggies are lifesavers. They’re pre-chopped, readily available, and packed with nutrients. Throw them in a stir-fry or add them to your stews for extra flavor and texture." },
      { term: "Spice up your leftovers", text: "Don’t underestimate the power of leftover magic. Leftover rice can become fried rice, leftover stew can be transformed into a delicious soup. Get creative." },
      { term: "Embrace the tech revolution", text: "Apps like akaani are your secret weapon. Get personalized meal plans based on your preferences and dietary needs. Lu, your AI kitchen companion, can guide you through recipes step-by-step, making cooking a breeze (even if you no too sabi cook)." },
    ] },
    { t: "p", text: "JSYK, you don’t have to settle for boring takeout every night. With a little planning and the help of some handy tools, you can reclaim your kitchen and enjoy delicious, home-cooked meals that connect you to your heritage. Na who chop well fit reply “I hope this email finds you well”." },
    { t: "p", text: "Download the akaani mobile app. Your taste buds (and your wallet) will thank you." },
  ],

  "foodie-tech-how-artificial-intelligence-is-revolutionizing-the-way-we-eat": [
    { t: "lead", text: "Food. It’s the fuel that keeps us going, a source of joy and community, and a cornerstone of human experience." },
    { t: "p", text: "But as our lives get busier and technology continues to evolve, the way we interact with food is also changing. Enter the exciting world of foodie tech, a fusion of culinary delights and artificial intelligence that’s set to transform our plates (and palates) for the better." },

    { t: "h2", text: "Imagine a world where" },
    { t: "dl", items: [
      { term: "Meal planning is a breeze", text: "No more staring blankly at the fridge, wondering what to cook. AI-powered apps can analyze your dietary needs, preferences, and what you have on hand to create personalized meal plans that are both delicious and nutritious." },
      { term: "Grocery shopping is a snap", text: "Forget lugging around heavy shopping bags. With intelligent grocery delivery services, you can simply select your recipe and have all the ingredients delivered fresh to your door." },
      { term: "Cooking becomes a fun, foolproof adventure", text: "AI assistants like recipe chatbots can guide you through every step of the cooking process, offering helpful tips and substitutions along the way. No more culinary disasters, just perfectly prepared meals every time." },
    ] },
    { t: "p", text: "This isn’t just science fiction. Foodie tech is already here, and it’s rapidly changing the landscape of how we find, prepare, and enjoy food." },

    { t: "h2", text: "How akaani is using AI to connect Africans in the diaspora with the taste of home" },
    { t: "p", text: "At akaani, we’re passionate about using technology to celebrate African cuisine. Our app allows you to explore a vast library of authentic African recipes, complete with detailed instructions and ingredient lists. But that’s not all." },
    { t: "p", text: "We’re also developing Lu, an AI-powered sous chef that will revolutionize your kitchen. Lu can help you:" },
    { t: "dl", items: [
      { term: "Discover new African dishes", text: "Broaden your culinary horizons and embark on a delicious adventure through the diverse flavors of Africa." },
      { term: "Plan your meals", text: "Lu will consider your dietary preferences, allergies, and even what’s in your pantry to create personalized meal plans that are both tasty and convenient." },
      { term: "Master your favorite recipes", text: "Lu will be your virtual guide in the kitchen, offering step-by-step instructions and helpful tips to ensure culinary success." },
    ] },
    { t: "p", text: "Foodie tech is more than just a fancy gimmick. It’s about leveraging the power of technology to make food a more enjoyable, convenient, and enriching part of our lives. So ditch the mealtime stress and embrace the future of food. With AI by your side, you’re just a few clicks away from a world of culinary experiences." },
  ],
};
