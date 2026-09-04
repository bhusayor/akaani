import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LuGif from "@/components/LuGif";
import Motion from "./Motion";
import FormBehavior from "@/components/FormBehavior";
import FaqBehavior from "@/components/FaqBehavior";
import "../../styles/meals.css";

export const metadata: Metadata = {
  title: "akaani meals | Authentic Nigerian meals, delivered weekly",
  description: "Chef-prepared, macro-counted Nigerian meals delivered weekly in Dallas, Houston and Seattle.",
};

export default function MealsPage() {
  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <Motion />
      <FaqBehavior />
      <FormBehavior kind="waitlist" />

      <main>

    
    <section className="mh py-16 lg:py-24">
      <div className="mh__inner max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="mh__content flex-1">
          <div className="mh__cities text-sm text-gray-600">
            <span className="mh__city mr-3"><i>●</i>Dallas</span>
            <span className="mh__city mr-3"><i>●</i>Houston</span>
            <span className="mh__city"><i>●</i>Seattle</span>
          </div>
          <h1 className="mh__title text-3xl md:text-4xl font-extrabold leading-tight mt-3">
            <span className="line"><span className="line__inner">Authentic Nigerian meals,</span></span>
            <span className="line"><span className="line__inner accent-text">delivered weekly.</span></span>
          </h1>
          <p className="mh__desc text-gray-700 dark:text-gray-300 mt-4">Skip the cooking without skipping the culture. akaani Meals delivers authentic Nigerian dishes freshly prepared by professional chefs to homes in <b>Dallas</b>, <b>Houston</b>, and <b>Seattle</b> every weekend.</p>
          <div className="hero__actions mt-6 flex gap-4">
            <a href="#waitlist" className="btn btn--accent btn--lg">Join the waitlist</a>
            <a href="#how" className="btn btn--ghost-dark btn--lg">How it works</a>
          </div>
        </div>
        <div className="mh__visual flex-1 max-w-md mx-auto" id="mhVisual" aria-hidden="true">
          <div className="mh__photo rounded-lg overflow-hidden shadow">
            <img src="/assets/meals-hero.jpg" alt="A week of chef-prepared meals packed in delivery containers" />
          </div>
          <div className="mh__badge mt-4">📦 Your week, packed, <span>12 meals</span></div>
          <div className="mh__badge2 mt-2"><i></i>Chef-prepared · Delivered Sat &amp; Sun</div>
        </div>
      </div>
    </section>

    
    <section className="steps" id="how">
      <div className="section-head">
        <p className="section-head__kicker">How it works</p>
        <h2>Three steps between you<br /><span className="accent-text">and a proper pot.</span></h2>
      </div>
      <div className="steps__grid">
        <article className="step">
          <span className="step__rule"><i></i></span>
          <span className="step__kicker">Preferences</span>
          <h3>Tell us how you eat</h3>
          <p>Your dietary needs, spice tolerance and favourite dishes, set once during onboarding. Lu remembers everything.</p>
        </article>
        <article className="step">
          <span className="step__rule"><i></i></span>
          <span className="step__kicker">Curation</span>
          <h3>We pick your meals</h3>
          <p>Every week we curate your menu around your preferences and goals. Don't like a pick? <b>Swap it until Wednesday.</b></p>
        </article>
        <article className="step">
          <span className="step__rule"><i></i></span>
          <span className="step__kicker">Delivery</span>
          <h3>Fresh to your door</h3>
          <p>Delivered every <b>Saturday or Sunday</b>. Heat, serve, and log it in the app with one tap, macros included.</p>
        </article>
      </div>
    </section>

    
    <section className="taste">
      <div className="section-head section-head--row">
        <div>
          <p className="section-head__kicker">On the menu</p>
          <h2>A taste of what's coming.</h2>
        </div>
        <a href="/recipes" className="btn btn--ghost-dark">Browse recipes →</a>
      </div>
      <div className="taste__grid">
        <figure className="dish">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jollof_%28Jollof-_Rice%29.jpg/1920px-Jollof_%28Jollof-_Rice%29.jpg" alt="Smoky party jollof" loading="lazy" />
          <figcaption className="dish__label"><span><b>Smoky party jollof</b>with grilled chicken</span><em>620 kcal</em></figcaption>
        </figure>
        <figure className="dish">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egusi_soup_in_a_plate.jpg/1920px-Egusi_soup_in_a_plate.jpg" alt="Egusi soup" loading="lazy" />
          <figcaption className="dish__label"><span><b>Egusi deluxe</b>assorted meat</span><em>540 kcal</em></figcaption>
        </figure>
        <figure className="dish">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Suya_preparation_for_grilling_5.jpg/1920px-Suya_preparation_for_grilling_5.jpg" alt="Suya" loading="lazy" />
          <figcaption className="dish__label"><span><b>Suya night</b>beef, yaji, onions</span><em>480 kcal</em></figcaption>
        </figure>
        <figure className="dish">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Goat_meat_pepper_soup_served_with_bread.jpg/1920px-Goat_meat_pepper_soup_served_with_bread.jpg" alt="Pepper soup" loading="lazy" />
          <figcaption className="dish__label"><span><b>Goat pepper soup</b>light &amp; fiery</span><em>310 kcal</em></figcaption>
        </figure>
      </div>
    </section>

    
    <section className="plans" id="plans">
      <div className="section-head" style={{textAlign: "center"}}>
        <p className="section-head__kicker">Meal plans</p>
        <h2>Pick your pace.</h2>
        <p className="section-head__sub" style={{marginLeft: "auto", marginRight: "auto"}}>Founding-member pricing announced at launch, waitlist members lock in the best rate.</p>
      </div>
      <div className="plans__grid">
        <article className="plan-card">
          <div className="plan-card__meals">3</div>
          <div className="plan-card__per">meals / week</div>
          <p className="plan-card__desc">A taste of home when you need it most.</p>
          <ul>
            <li>Customisable cuisine picks</li>
            <li>Saturday / Sunday delivery</li>
            <li>Edit until Wednesday</li>
          </ul>
          <a href="#waitlist" className="btn btn--ghost">Join waitlist</a>
        </article>
        <article className="plan-card plan-card--hot">
          <span className="plan-card__tag">Most popular</span>
          <div className="plan-card__meals">5</div>
          <div className="plan-card__per">meals / week</div>
          <p className="plan-card__desc">Every weekday dinner, handled.</p>
          <ul>
            <li>Customisable cuisine picks</li>
            <li>Saturday / Sunday delivery</li>
            <li>Edit until Wednesday</li>
            <li>Priority menu voting</li>
          </ul>
          <a href="#waitlist" className="btn btn--accent">Join waitlist</a>
        </article>
        <article className="plan-card">
          <div className="plan-card__meals">7</div>
          <div className="plan-card__per">meals / week</div>
          <p className="plan-card__desc">The full week, no cooking at all.</p>
          <ul>
            <li>Customisable cuisine picks</li>
            <li>Saturday / Sunday delivery</li>
            <li>Edit until Wednesday</li>
          </ul>
          <a href="#waitlist" className="btn btn--ghost">Join waitlist</a>
        </article>
      </div>
      <p className="plans__note">All plans pause or cancel anytime. Macros for every meal appear automatically in the akaani app.</p>
    </section>

    
    <section className="cities">
      <div className="section-head">
        <p className="section-head__kicker">Where we cook</p>
        <h2>Rolling out, city by city.</h2>
        <p className="section-head__sub">More cities launching soon, waitlist members hear first.</p>
      </div>
      <div className="cities__grid">
        <article className="city">
          <span className="city__badge">Now cooking</span>
          <h3>Dallas</h3>
          <span>Texas</span>
        </article>
        <article className="city">
          <span className="city__badge">Now cooking</span>
          <h3>Houston</h3>
          <span>Texas</span>
        </article>
        <article className="city">
          <span className="city__badge">Now cooking</span>
          <h3>Seattle</h3>
          <span>Washington</span>
        </article>
      </div>
    </section>

    
    <section className="faq faq--meals" id="faq">
      <div className="faq__inner">
        <div className="faq__head">
          <p className="section-head__kicker">FAQ</p>
          <h2>Good questions,<br />honest answers.</h2>
          <p>Anything else? Write us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a></p>
        </div>
        <div className="faq__list">
          <details className="faq__item" open>
            <summary>What exactly is akaani meals?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>A weekly subscription of chef-prepared Nigerian meals, delivered fresh to your door every Saturday or Sunday. Every meal is macro-counted and logs automatically in the akaani app.</p></div>
          </details>
          <details className="faq__item">
            <summary>Who is Lu?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Lu is akaani's AI food companion, part chef, part coach. For meals, Lu learns your preferences and helps curate your weekly menu around your goals.</p></div>
          </details>
          <details className="faq__item">
            <summary>Is it strictly Nigerian food?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>We start with the classics: jollof, egusi, suya and pepper soup, and we're expanding across West African cuisine. If you love the food, you're home here.</p></div>
          </details>
          <details className="faq__item">
            <summary>How is this different from other meal services?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Nobody else does authentic Nigerian food with accurate macros. Generic services give you bland "fusion"; we give you the real pot, and the numbers to hit your goals with it.</p></div>
          </details>
          <details className="faq__item">
            <summary>Do I need the akaani app?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>No, meals work on their own. But with the app, every delivered meal logs itself with one tap, so your macros track automatically. It's free for 30 days.</p></div>
          </details>
        </div>
      </div>
    </section>

    
    <section className="wform" id="waitlist" style={{paddingTop: "clamp(90px, 14vh, 160px)"}}>
      <div className="wform__inner">
        <div className="wform__side">
          <p className="section-head__kicker">The waitlist</p>
          <h2>Be first<br />at the table.</h2>
          <p>Founding members don't just eat first, they shape the menu.</p>
          <ul className="wform__perks">
            <li><i>🏷️</i> Lock in founding-member pricing, forever</li>
            <li><i>🚪</i> First pick of delivery slots in your city</li>
            <li><i>🗳️</i> Vote on which dishes make the menu</li>
          </ul>
          <div className="wform__mascot" aria-hidden="true">
            <LuGif />
          </div>
        </div>
        <form className="wform__form" id="waitlistForm" noValidate>
          <div className="wform__row">
            <label>Full name
              <input type="text" name="name" placeholder="Adaeze Okafor" required />
            </label>
            <label>Email address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>
          <div className="wform__row">
            <label>City
              <select name="city" required>
                <option value="" selected disabled>Choose your city</option>
                <option>Dallas, TX</option>
                <option>Houston, TX</option>
                <option>Seattle, WA</option>
              </select>
            </label>
            <label>Zip code
              <input type="text" name="zip" placeholder="75201" inputMode="numeric" />
            </label>
          </div>
          <label className="wform__slider">Meals per week <output id="mealsOut">4</output>
            <input type="range" name="meals" min={1} max={7} value="4" id="mealsRange" />
          </label>
          <div className="wform__field">
            <span className="wform__label">How much do you need this in your life?</span>
            <div className="wform__pills">
              <input type="radio" name="importance" value="1" id="imp1" /><label htmlFor="imp1"><span>1</span></label>
              <input type="radio" name="importance" value="2" id="imp2" /><label htmlFor="imp2"><span>2</span></label>
              <input type="radio" name="importance" value="3" id="imp3" /><label htmlFor="imp3"><span>3</span></label>
              <input type="radio" name="importance" value="4" id="imp4" /><label htmlFor="imp4"><span>4</span></label>
              <input type="radio" name="importance" value="5" id="imp5" checked /><label htmlFor="imp5"><span>5</span></label>
            </div>
            <span className="wform__hint"><span>Curious</span><span>Cook for me already!</span></span>
          </div>
          <button type="submit" className="btn btn--accent btn--lg">Join the waitlist</button>
          <p className="wform__note">We'll only email you about akaani meals. Unsubscribe anytime.</p>
        </form>
        <div className="wform__form wform__success" id="wformSuccess">
          <div>
            <LuGif />
            <b>You're on the list! 🎉</b>
            <p>Lu is already sharpening his knives. We'll email you the moment your city opens.</p>
          </div>
        </div>
      </div>
    </section>
      </main>

      <Footer giant="meals" />
    </>
  );
}
