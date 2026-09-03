import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lu from "@/components/Lu";
import Motion from "./Motion";
import FaqBehavior from "@/components/FaqBehavior";

export const metadata: Metadata = {
  title: "akaani \u2014 Nigerian food, tracked properly.",
  description: "200+ Nigerian dishes, accurate macros, no guessing.",
};

export default function HomePage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <Motion />
      <FaqBehavior />

      <main>


    
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="line"><span className="line__inner">The only app that</span></span>
            <span className="line"><span className="line__inner">tracks macros for</span></span>
            <span className="line"><span className="line__inner accent-text">Nigerian food.</span></span>
          </h1>
          <p className="hero__desc">Jollof, Egusi, Suya, Pounded Yam, finally tracked. Let Lu build your weekly meal plan, remind you at every meal, and keep you on track without giving up the food you love.</p>
          <div className="hero__actions">
            <a href="#cta" className="btn btn--accent btn--lg">Start free for 30 days</a>
            <a href="#story" className="btn btn--ghost-dark btn--lg">Our story</a>
          </div>
          <p className="hero__proof">
            <span className="hero__faces" aria-hidden="true">
              <img src="/assets/avatar-1.jpg" alt="" width="32" height="32" loading="lazy" />
              <img src="/assets/avatar-2.jpg" alt="" width="32" height="32" loading="lazy" />
              <img src="/assets/avatar-3.jpg" alt="" width="32" height="32" loading="lazy" />
              <img src="/assets/avatar-4.jpg" alt="" width="32" height="32" loading="lazy" />
            </span>
            2,000+ people already eating smarter
          </p>
        </div>
        <div className="hero__visual" id="heroVisual" aria-hidden="true">
          <div className="hero__photo">
            <img src="https://res.cloudinary.com/dsf1boqv6/image/upload/w_860/v1784069516/mockup-3240x5760_3x_1_c6dqg7.png" alt="The akaani app home screen showing Lu and a tracked Nigerian meal" />
          </div>
          <div className="hero__pop hero__pop--dish">🍛 Eba &amp; Ogbono, tracked</div>
          <div className="hero__pop hero__pop--macros">🔥 420 kcal<span>P 25g · C 20g · F 21g</span></div>
          <div className="hero__pop hero__pop--lu"><i>Lu</i>"Perfect portion, chief!" 👏</div>
        </div>
      </div>
    </section>

    
    <section className="manifesto" id="story">
      <div className="manifesto__inner">
        <div className="manifesto__text">
          <p className="manifesto__kicker">The problem</p>
          <h2 className="manifesto__headline" id="manifestoHeadline">Nigerian food was never the problem. The apps were.</h2>
          <p className="manifesto__body" id="manifestoBody">Jollof rice doesn't come in a database. Egusi has no barcode. For years, eating Nigerian meant flying blind on your macros. akaani was built to fix that, 200+ Nigerian dishes, accurate macros, no guessing required.</p>
          <div className="manifesto__stats">
            <div className="stat"><strong data-count="200">0</strong><span>+ Nigerian dishes</span></div>
            <div className="stat"><strong data-count="2000">0</strong><span>+ people tracking</span></div>
            <div className="stat"><strong data-count="0">0</strong><span>barcodes needed</span></div>
          </div>
        </div>
        <div className="manifesto__media">
          <figure className="manifesto__img manifesto__img--main">
            <img src="/assets/dish-spaghetti.jpg" alt="A plate of Nigerian jollof spaghetti" loading="lazy" />
            <figcaption><b>Jollof spaghetti</b> · 1 plate · 380 kcal</figcaption>
          </figure>
          <figure className="manifesto__img manifesto__img--float1">
            <img src="/assets/dish-jollof.jpg" alt="A plate of smoky Nigerian jollof rice" loading="lazy" />
            <figcaption><b>Jollof rice</b> · 1 cup · 310 kcal</figcaption>
          </figure>
          <figure className="manifesto__img manifesto__img--float2">
            <img src="/assets/dish-asun.jpg" alt="Peppered asun, grilled goat meat with chillies" loading="lazy" />
            <figcaption><b>Asun</b> · 1 portion · 290 kcal</figcaption>
          </figure>
        </div>
      </div>
    </section>

    
    <section className="lu" id="lu">
      <div className="lu__pin" id="luPin">
        <div className="lu__head">
          <p className="lu__kicker">Meet Lu, your AI food companion</p>
          <div className="lu__progress" id="luProgress">
            <button className="is-active" type="button"><i></i><span>Lu</span></button>
            <button type="button"><i></i><span>Chat</span></button>
            <button type="button"><i></i><span>Track</span></button>
            <button type="button"><i></i><span>Plan</span></button>
            <button type="button"><i></i><span>Goals</span></button>
          </div>
        </div>

        <div className="lu__rail" aria-hidden="true">
          <span className="lu__rail-track"></span>
          <span className="lu__rail-fill" id="luRailFill"></span>
          <span className="lu__rail-dot" id="luRailDot"></span>
          <i></i><i></i><i></i><i></i><i></i>
        </div>

        <div className="lu__stage">
          <div className="lu__ghost" id="luGhost" aria-hidden="true">01</div>
          
          <div className="lu__panels">
            <article className="lu__panel is-active" data-step={0}>
              <span className="lu__index">01</span>
              <h3>Say hello to Lu.</h3>
              <p>Part chef, part coach, all Naija. Lu lives in your pocket, knows your goals, your taste, and exactly what's inside your pot.</p>
            </article>
            <article className="lu__panel" data-step={1}>
              <span className="lu__index">02</span>
              <h3>Just ask Lu.</h3>
              <p>"What can I eat tonight under 600 calories?" Lu answers like a friend who happens to know the macros of every Nigerian dish: swaps, portions, cooking tips and all.</p>
            </article>
            <article className="lu__panel" data-step={2}>
              <span className="lu__index">03</span>
              <h3>Track without guessing.</h3>
              <p>200+ Nigerian dishes already in the database. Log jollof by the cup, egusi by the bowl, and watch your protein, carbs and fat fill in accurately.</p>
            </article>
            <article className="lu__panel" data-step={3}>
              <span className="lu__index">04</span>
              <h3>Plans that fit your week.</h3>
              <p>Lu builds a weekly Nigerian meal plan around your goal, then writes the grocery list for you. Sunday market run, sorted.</p>
            </article>
            <article className="lu__panel" data-step={4}>
              <span className="lu__index">05</span>
              <h3>Goals that move.</h3>
              <p>Cutting, bulking or maintaining. Lu recalibrates your targets as your body changes, and nudges you before you drift, not after.</p>
            </article>
          </div>

          
          <div className="lu__phone">
            <div className="phone">
              <div className="phone__notch"></div>
              <div className="phone__screens" id="phoneScreens">

                
                <div className="screen screen--intro is-active">
                  <div className="intro-splash">
                    <Lu />
                    <b>Hi, I'm Lu! 👋</b>
                    <em>Your AI food companion</em>
                    <span className="intro-splash__cta">Let's cook something</span>
                  </div>
                </div>

                
                <div className="screen screen--chat">
                  <div className="screen__bar"><span className="screen__avatar">Lu</span><div><b>Lu</b><em>online</em></div></div>
                  <div className="chat">
                    <p className="chat__msg chat__msg--user">What can I eat tonight under 600 kcal? 🥘</p>
                    <p className="chat__msg chat__msg--lu">Efo riro + 1 wrap of eba = <b>540 kcal</b>, 32g protein. Want the recipe?</p>
                    <p className="chat__msg chat__msg--user">Yes! And a swap for eba?</p>
                    <p className="chat__msg chat__msg--lu">Try cauliflower fufu, saves 120 kcal 👌</p>
                  </div>
                  <div className="chat__input">Ask Lu anything…</div>
                </div>

                
                <div className="screen screen--track">
                  <div className="screen__title">Today <b>1,438 / 2,100 kcal</b></div>
                  <div className="ring">
                    <svg viewBox="0 0 100 100" aria-hidden="true">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#EFE3D2" strokeWidth="10" />
                      <circle className="ring__arc" cx="50" cy="50" r="42" fill="none" stroke="#DA7000" strokeWidth="10" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="84" transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="ring__hole"><b>68%</b><span>of goal</span></div>
                  </div>
                  <div className="macros">
                    <div className="macro"><span>Protein</span><div className="macro__bar"><i style={{width: "74%"}}></i></div><b>96g</b></div>
                    <div className="macro"><span>Carbs</span><div className="macro__bar"><i style={{width: "58%"}}></i></div><b>141g</b></div>
                    <div className="macro"><span>Fat</span><div className="macro__bar"><i style={{width: "47%"}}></i></div><b>38g</b></div>
                  </div>
                  <div className="logrow"><span>🍚</span><div><b>Jollof rice</b><em>1 cup</em></div><b>310</b></div>
                  <div className="logrow"><span>🥬</span><div><b>Egusi soup</b><em>1 bowl</em></div><b>420</b></div>
                </div>

                
                <div className="screen screen--plan">
                  <div className="screen__title">This week's plan <b>Muscle gain</b></div>
                  <div className="plan"><b>Mon</b><div><strong>Ofada rice + ayamase</strong><em>620 kcal · 41g protein</em></div></div>
                  <div className="plan"><b>Tue</b><div><strong>Grilled suya + salad</strong><em>480 kcal · 45g protein</em></div></div>
                  <div className="plan"><b>Wed</b><div><strong>Beans porridge + plantain</strong><em>560 kcal · 28g protein</em></div></div>
                  <div className="plan"><b>Thu</b><div><strong>Pepper soup + yam</strong><em>510 kcal · 38g protein</em></div></div>
                  <div className="plan__cta">🛒 Grocery list ready, 14 items</div>
                </div>

                
                <div className="screen screen--goal">
                  <div className="screen__title">Your goal <b>Lean by December</b></div>
                  <div className="goalcard">
                    <em>Progress</em>
                    <div className="goalcard__num">-4.2 kg</div>
                    <div className="goalcard__track"><i style={{width: "62%"}}></i></div>
                    <span>62% of the way there</span>
                  </div>
                  <div className="nudge">💡 <div><b>Lu's nudge</b><em>You're 40g short on protein this week, add moi moi to Thursday?</em></div></div>
                  <div className="nudge nudge--alt">🔥 <div><b>12-day streak</b><em>Longest one yet. Keep it going.</em></div></div>
                </div>

              </div>
            </div>
            <div className="lu__chips" aria-hidden="true">
              <div className="lu-chip lu-chip--tl" data-step={0}><span>👋 Ẹ káàbọ̀!</span></div>
              <div className="lu-chip lu-chip--br" data-step={0}><span>🧑‍🍳 Part chef, part coach</span></div>
              <div className="lu-chip lu-chip--tl" data-step={1}><span>💬 Lu is typing…</span></div>
              <div className="lu-chip lu-chip--br" data-step={1}><span>🥘 Knows 200+ dishes</span></div>
              <div className="lu-chip lu-chip--tr" data-step={2}><span>✅ Jollof logged · +310 kcal</span></div>
              <div className="lu-chip lu-chip--bl" data-step={2}><span>💪 Protein on track</span></div>
              <div className="lu-chip lu-chip--tl" data-step={3}><span>🛒 Grocery list · 14 items</span></div>
              <div className="lu-chip lu-chip--br" data-step={3}><span>📅 4 dinners planned</span></div>
              <div className="lu-chip lu-chip--tr" data-step={4}><span>⚖️ −4.2 kg and counting</span></div>
              <div className="lu-chip lu-chip--bl" data-step={4}><span>🔥 12-day streak</span></div>
            </div>
            <div className="lu__phone-glow" aria-hidden="true"></div>
          </div>

          
          <div className="lu__mascot" id="luMascot" aria-hidden="true">
            <Lu />
            <div className="lu__mascot-shadow"></div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="bridge">
      <figure className="bridge__float bridge__float--1" aria-hidden="true"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Suya_with_pepper_sauce.jpg/1280px-Suya_with_pepper_sauce.jpg" alt="" loading="lazy" /></figure>
      <figure className="bridge__float bridge__float--2" aria-hidden="true"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Goat_meat_pepper_soup_served_with_bread.jpg/1920px-Goat_meat_pepper_soup_served_with_bread.jpg" alt="" loading="lazy" /></figure>
      <p className="bridge__kicker">One platform, many doors</p>
      <h2 className="bridge__text" id="bridgeText">However you want to eat better, akaani meets you there.</h2>
    </section>

    
    <section className="bundles" id="bundles">
      <div className="section-head">
        <p className="section-head__kicker">Recipe bundles</p>
        <h2>Cook toward the goal.<br /><span className="accent-text">Download once, keep forever.</span></h2>
        <p className="section-head__sub">Chef-tested Nigerian recipe collections, organised by goal. No subscription, download, cook, track.</p>
      </div>
      <div className="bundles__grid">
        <article className="bundle">
          <div className="bundle__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jollof_rice_and_tomato_stew.jpg/1920px-Jollof_rice_and_tomato_stew.jpg" alt="Jollof rice with tomato stew" loading="lazy" /><span className="bundle__tag">Best seller</span></div>
          <div className="bundle__body">
            <h3>The Protein Pot</h3>
            <p>Maximum protein, pure Nigerian, 7 recipes curated for muscle building and active lifestyles.</p>
            <div className="bundle__foot"><b>$4.99</b><a href="/recipes" className="btn btn--dark btn--sm">Get the bundle</a></div>
          </div>
        </article>
        <article className="bundle">
          <div className="bundle__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Goat_meat_pepper_soup_served_with_bread.jpg/1920px-Goat_meat_pepper_soup_served_with_bread.jpg" alt="Goat meat pepper soup" loading="lazy" /><span className="bundle__tag">New</span></div>
          <div className="bundle__body">
            <h3>Cut Season</h3>
            <p>Eat less, lose more, stay Nigerian, 7 low-calorie, high-protein recipes curated for fat loss.</p>
            <div className="bundle__foot"><b>$5.99</b><a href="/recipes" className="btn btn--dark btn--sm">Get the bundle</a></div>
          </div>
        </article>
        <article className="bundle">
          <div className="bundle__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Afang_soup_and_pounded_yam_03.jpg/1920px-Afang_soup_and_pounded_yam_03.jpg" alt="Afang soup with pounded yam" loading="lazy" /><span className="bundle__tag">Gut health</span></div>
          <div className="bundle__body">
            <h3>Roots &amp; Restore</h3>
            <p>Ancient ingredients, modern gut health, 5 fibre-rich recipes curated to aid digestion.</p>
            <div className="bundle__foot"><b>$4.99</b><a href="/recipes" className="btn btn--dark btn--sm">Get the bundle</a></div>
          </div>
        </article>
      </div>
      <div className="bundles__more">
        <a href="/recipes" className="btn btn--dark btn--lg">See all bundles →</a>
        <p>Every bundle: instant PDF, full macros, a tip from Lu on every page.</p>
      </div>
    </section>

    
    <section className="waitlist" id="waitlist">
      <div className="waitlist__inner">
        <div className="waitlist__media">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pot_of_Egusi_soup.jpg/1920px-Pot_of_Egusi_soup.jpg" alt="A rich pot of egusi soup" loading="lazy" />
          <div className="waitlist__badge">Chef-prepared · Macro-counted</div>
        </div>
        <div className="waitlist__text">
          <p className="section-head__kicker">akaani meals, early access</p>
          <h2>Too busy to cook?<br />We'll do the pot for you.</h2>
          <p>Chef-prepared Nigerian meals, macro-counted and delivered. Now cooking in <b>Dallas</b>, <b>Houston</b> and <b>Seattle</b>, join the waitlist and eat first.</p>
          <form className="waitlist__form" id="waitlistForm">
            <input type="email" placeholder="your@email.com" required aria-label="Email address" />
            <button type="submit" className="btn btn--accent">Join the waitlist</button>
          </form>
          <p className="waitlist__note" id="waitlistNote">No spam. Just first dibs on the pot.</p>
        </div>
      </div>
    </section>

    
    <section className="blog" id="blog">
      <div className="section-head section-head--row">
        <div>
          <p className="section-head__kicker">From the akaani kitchen</p>
          <h2>Stories, science &amp; stew.</h2>
        </div>
        <a href="/blog" className="btn btn--ghost-dark">All articles →</a>
      </div>
      <article className="feature-post">
        <div className="feature-post__img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg/1280px-Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg" alt="Efo riro with fried mackerel" loading="lazy" />
          <span className="feature-post__badge">Featured</span>
        </div>
        <div className="feature-post__body">
          <div className="post__meta"><span className="post__cat">Nutrition</span><time>Jul 8, 2026</time><span className="post__read">6 min read</span></div>
          <h3>Efo riro is a protein play, if you build it right</h3>
          <p>The Yoruba classic can carry 35g+ of protein per bowl. We break down the macro math ingredient by ingredient, mackerel, cowskin, and all, so your next pot pulls double duty.</p>
          <a href="#" className="btn btn--dark">Read the article →</a>
        </div>
      </article>
      <div className="blog__grid">
        <article className="post">
          <div className="post__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Suya_with_pepper_sauce.jpg/1280px-Suya_with_pepper_sauce.jpg" alt="Suya with pepper sauce" loading="lazy" /><span className="post__arrow">→</span></div>
          <div className="post__body">
            <div className="post__meta"><span className="post__cat">Macros</span><time>Jun 30, 2026</time><span className="post__read">4 min</span></div>
            <h3><span className="post__titletext">Suya: the original street-food protein</span></h3>
          </div>
        </article>
        <article className="post">
          <div className="post__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egusi_soup_in_a_plate.jpg/1920px-Egusi_soup_in_a_plate.jpg" alt="Egusi soup" loading="lazy" /><span className="post__arrow">→</span></div>
          <div className="post__body">
            <div className="post__meta"><span className="post__cat">Deep dive</span><time>Jun 21, 2026</time><span className="post__read">7 min</span></div>
            <h3><span className="post__titletext">Why egusi never made it into food databases</span></h3>
          </div>
        </article>
        <article className="post">
          <div className="post__img"><img src="/assets/dish-jollof.jpg" alt="Jollof rice" loading="lazy" /><span className="post__arrow">→</span></div>
          <div className="post__body">
            <div className="post__meta"><span className="post__cat">Recipes</span><time>Jun 12, 2026</time><span className="post__read">5 min</span></div>
            <h3><span className="post__titletext">Party jollof vs. cut-season jollof: one pot, two macros</span></h3>
          </div>
        </article>
      </div>
    </section>

    
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__head">
          <p className="section-head__kicker">FAQ</p>
          <h2>Before you ask, <br />we probably answered.</h2>
          <p>Still curious? Write us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a></p>
        </div>
        <div className="faq__list">
          <details className="faq__item" open>
            <summary>How accurate are the macros, really?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Every dish in akaani is built from lab-referenced ingredient data and validated against real Nigerian recipes, portioned in cups, wraps, bowls and pieces, the way we actually serve food. No barcode required.</p></div>
          </details>
          <details className="faq__item">
            <summary>What exactly is Lu?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Lu is your AI food companion inside akaani. Ask for meal ideas, swaps, cooking tips or a full weekly plan. Lu knows your goals and the macros of 200+ Nigerian dishes.</p></div>
          </details>
          <details className="faq__item">
            <summary>Is the 30-day trial actually free?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Yes, no credit card, no tricks. Try everything for 30 days. If akaani isn't for you, you lose nothing but a few well-tracked meals.</p></div>
          </details>
          <details className="faq__item">
            <summary>Do recipe bundles need a subscription?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>No. Bundles are a one-time purchase from $4.99. Download the PDF, cook forever, track in the app if you like.</p></div>
          </details>
          <details className="faq__item">
            <summary>Which cities get chef-prepared meals?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>We're starting with Dallas, Houston and Seattle. Join the waitlist, we open cities based on where the list grows fastest.</p></div>
          </details>
          <details className="faq__item">
            <summary>I'm not Nigerian, can I still use akaani?<span className="faq__icon"></span></summary>
            <div className="faq__answer"><p>Absolutely. If you love West African food (or want to), akaani is the easiest way to eat it with your goals intact.</p></div>
          </details>
        </div>
      </div>
    </section>

    
    <section className="cta" id="cta">
      <div className="cta__media">
        <video autoPlay muted loop playsInline src="https://res.cloudinary.com/dsf1boqv6/video/upload/v1784069160/Woman_using_phone_at_table_202607142341_gwr_video_mvp_xreqfb.mp4"></video>
        <div className="cta__scrim"></div>
      </div>
      <div className="cta__content">
        <h2 className="cta__title">
          <span className="line"><span className="line__inner">Your favourite Nigerian</span></span>
          <span className="line"><span className="line__inner">meals, tracked.</span></span>
          <span className="line"><span className="line__inner accent-text">Your goals, met.</span></span>
        </h2>
        <p>Download akaani and let Lu handle the rest.</p>
        <div className="cta__actions">
          <a href="#" className="storebtn"><small>Download on the</small><b> App Store</b></a>
          <a href="#" className="storebtn"><small>Get it on</small><b>Google Play</b></a>
        </div>
      </div>
      <div className="cta__mascot" aria-hidden="true">
        <Lu />
      </div>
    </section>

    
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">akaani<span>.</span></a>
          <p>Nigerian food was never the problem.<br />The apps were.</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Product</h4>
            <a href="#lu">Meet Lu</a>
            <a href="#bundles">Recipe bundles</a>
            <a href="#waitlist">akaani meals</a>
            <a href="#cta">Download</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="#faq">FAQ</a>
            <a href="/about#contact">Contact</a>
          </div>
          <div className="footer__col">
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">X (Twitter)</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true">akaani</div>
      <div className="footer__bottom">
      <p className="footer__disclaimer">akaani provides nutritional guidance for informational purposes only<br />and is not a substitute for medical advice. <a href="/disclaimer">Read our full disclaimer.</a></p>
      <span>© 2026 akaani. All rights reserved.</span>
      <div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div>
    </div>
  </footer>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
