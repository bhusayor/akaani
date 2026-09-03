import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import Cart from "@/components/Cart";
import "../../styles/recipes.css";

export const metadata: Metadata = {
  title: "Recipes | akaani",
  description: "Nigerian recipe bundles with the macros already worked out. Instant PDF download.",
};

export default function RecipesPage() {
  return (
    <>
      <Nav ctaLabel="Browse bundles" ctaHref="/recipes#bundles" />
      <Motion />

      <main>

    
    <section className="rh py-16 lg:py-24">
      <div className="rh__inner max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="section-head__kicker">Recipe bundles</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Nigerian recipes with the <span className="accent-text">maths already done.</span></h1>
          <p className="rh__sub text-gray-700 dark:text-gray-300 mt-4">Every bundle is five to seven recipes built for one goal, with the macros worked out, the steps written plainly, and a tip from Lu on every page. Buy it once, download it straight away, cook from it forever.</p>
          <div className="rh__actions mt-6">
            <a href="#bundles" className="btn btn--accent btn--lg">Browse bundles</a>
          </div>
          <div className="rh__ticks mt-4 flex gap-4 flex-wrap text-sm text-gray-600">
            <span className="rh__tick"><i>✓</i> Instant PDF download</span>
            <span className="rh__tick"><i>✓</i> Full macro breakdown</span>
            <span className="rh__tick"><i>✓</i> Ingredients you can buy here</span>
            <span className="rh__tick"><i>✓</i> One-time purchase</span>
          </div>
        </div>
        <div className="rh__visual flex-1 max-w-md mx-auto" id="rhVisual" aria-hidden="true">
          <figure className="rh__card rh__card--back rounded-lg overflow-hidden shadow-sm">
            <img src="/assets/dish-asun.jpg" alt="" />
            <figcaption>The Protein Pot <em>$4.99</em></figcaption>
          </figure>
          <figure className="rh__card rh__card--front rounded-lg overflow-hidden shadow-lg mt-4">
            <img src="/assets/rice-stew.jpg" alt="" />
            <figcaption>Mama Put Macros <em>$4.99</em></figcaption>
          </figure>
        </div>
      </div>
    </section>

    
    <section className="inside">
      <div className="inside__inner">
        <p className="inside__title">Inside every bundle</p>
        <p className="inside__item"><b>Full ingredient lists</b>In cups, wraps and bowls, the way you actually measure.</p>
        <p className="inside__item"><b>Step-by-step method</b>Written for a real kitchen, not a test kitchen.</p>
        <p className="inside__item"><b>Macros per serving</b>Calories, protein, carbs and fat, already counted.</p>
        <p className="inside__item"><b>A tip from Lu</b>One small thing on every page that makes the dish better.</p>
      </div>
    </section>

    
    <section className="shop" id="bundles">
      <div className="shop__head">
        <p className="section-head__kicker">Pick your goal</p>
        <h2>Four bundles.<br /><span className="accent-text">One honest kitchen.</span></h2>
        <p>Each one is built around a single goal, so you are not scrolling through recipes that were never meant for you.</p>
      </div>
      <div className="shop__grid">

        <article className="product" data-name="Mama Put Macros" data-price="4.99">
          <div className="product__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Suya_preparation_for_grilling_5.jpg/1920px-Suya_preparation_for_grilling_5.jpg" alt="Suya on a street grill" loading="lazy" />
            <span className="product__count">5 recipes</span>
            <span className="product__price">$4.99</span>
          </div>
          <div className="product__body">
            <p className="product__tagline">Street-food classics, macro optimized.</p>
            <h3>Mama Put Macros</h3>
            <p>The roadside flavours you grew up on, rebuilt so the macros work as hard as the taste.</p>
            <div className="product__chips"><span>Balanced macros</span><span>Breakfast</span><span>Lunch</span></div>
            <div className="product__actions">
              <button className="btn btn--ghost-dark add-cart" type="button">Add to cart</button>
              <a href="https://useakaani.com/recipes" className="btn btn--dark">Buy now</a>
            </div>
          </div>
        </article>

        <article className="product" data-name="Roots &amp; Restore" data-price="4.99">
          <div className="product__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Afang_soup_and_pounded_yam_03.jpg/1920px-Afang_soup_and_pounded_yam_03.jpg" alt="Afang soup with pounded yam" loading="lazy" />
            <span className="product__count">5 recipes</span>
            <span className="product__price">$4.99</span>
          </div>
          <div className="product__body">
            <p className="product__tagline">Ancient ingredients, modern gut health.</p>
            <h3>Roots &amp; Restore</h3>
            <p>Five fibre-rich, gut-friendly recipes curated to aid digestion. The vegetables and roots our grandmothers swore by.</p>
            <div className="product__chips"><span>Gut health</span><span>Digestion</span><span>Fibre-rich</span></div>
            <div className="product__actions">
              <button className="btn btn--ghost-dark add-cart" type="button">Add to cart</button>
              <a href="https://useakaani.com/recipes" className="btn btn--dark">Buy now</a>
            </div>
          </div>
        </article>

        <article className="product" data-name="Cut Season" data-price="5.99">
          <div className="product__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Goat_meat_pepper_soup_served_with_bread.jpg/1920px-Goat_meat_pepper_soup_served_with_bread.jpg" alt="Goat meat pepper soup" loading="lazy" />
            <span className="product__count">7 recipes</span>
            <span className="product__price">$5.99</span>
          </div>
          <div className="product__body">
            <p className="product__tagline">Eat less, lose more, stay Nigerian.</p>
            <h3>Cut Season</h3>
            <p>Seven low-calorie, high-protein recipes for fat loss without giving up the food you love.</p>
            <div className="product__chips"><span>Fat loss</span><span>Low calorie</span><span>High satiety</span></div>
            <div className="product__actions">
              <button className="btn btn--ghost-dark add-cart" type="button">Add to cart</button>
              <a href="https://useakaani.com/recipes" className="btn btn--dark">Buy now</a>
            </div>
          </div>
        </article>

        <article className="product" data-name="The Protein Pot" data-price="4.99">
          <div className="product__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egusi_soup_in_a_plate.jpg/1920px-Egusi_soup_in_a_plate.jpg" alt="Egusi soup with assorted meat" loading="lazy" />
            <span className="product__count">7 recipes</span>
            <span className="product__price">$4.99</span>
          </div>
          <div className="product__body">
            <p className="product__tagline">Maximum protein. Pure Nigerian.</p>
            <h3>The Protein Pot</h3>
            <p>Seven recipes for muscle building and active lifestyles, without a single chicken-and-rice cliché.</p>
            <div className="product__chips"><span>Muscle building</span><span>Active lifestyle</span></div>
            <div className="product__actions">
              <button className="btn btn--ghost-dark add-cart" type="button">Add to cart</button>
              <a href="https://useakaani.com/recipes" className="btn btn--dark">Buy now</a>
            </div>
          </div>
        </article>

      </div>
    </section>

    
    <section className="bridge2">
      <div className="bridge2__inner">
        <div className="bridge2__glow" aria-hidden="true"></div>
        <div className="bridge2__copy">
          <p className="section-head__kicker">Want it personal?</p>
          <h2>A bundle is a good start.<br /><span className="accent-text">A dietitian is the next step.</span></h2>
          <p>Bundles are written for common goals. A dietitian is written for you. If you are managing PCOS, diabetes, blood pressure or anything a recipe list cannot answer, book a session and get a plan built around your body.</p>
          <ul className="bridge2__list">
            <li><i>✓</i>Your results, your medication and your budget taken into account</li>
            <li><i>✓</i>Macro targets set for your body, not an average one</li>
            <li><i>✓</i>Two weeks of follow-up after the call</li>
          </ul>
        </div>
        <aside className="bridge2__card">
          <div className="bridge2__photo">
            <img src="/assets/consult-hero.jpg" alt="An akaani dietitian on a video consultation" loading="lazy" />
            <span className="bridge2__price">₦50,000</span>
          </div>
          <div className="bridge2__cardbody">
            <b>1-on-1 consultation</b>
            <div className="bridge2__row"><span>Length</span><b>45 minutes</b></div>
            <div className="bridge2__row"><span>Format</span><b>Video call</b></div>
            <div className="bridge2__row"><span>Your plan</span><b>In your mail, 24 hours</b></div>
            <a href="/dietitian" className="btn btn--accent">Talk to a dietitian</a>
          </div>
        </aside>
      </div>
    </section>
      </main>

      <Cart />

      <Footer giant="recipes" />
    </>
  );
}
