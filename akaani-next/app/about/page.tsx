import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lu from "@/components/Lu";
import Motion from "./Motion";
import FormBehavior from "@/components/FormBehavior";
import "../../styles/about.css";
import "../../styles/contact.css";

export const metadata: Metadata = {
  title: "About & contact | akaani",
  description: "The story behind akaani, the team building it, and how to reach us.",
};

export default function AboutPage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <Motion />
      <FormBehavior kind="contact" />

      <main>

    
    <section className="ah py-16 lg:py-24">
      <div className="ah__inner max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="section-head__kicker">About akaani</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="line"><span className="line__inner">We're building the</span></span>
            <span className="line"><span className="line__inner">first AI meal platform</span></span>
            <span className="line"><span className="line__inner">made for <span className="accent-text">Nigerian food.</span></span></span>
          </h1>
          <p className="ah__sub text-gray-700 dark:text-gray-300 mt-4">akaani is the first AI-powered meal platform that truly understands West African cuisine and turns it into a precision health tool for millions of people.</p>
          <div className="ah__actions mt-6 flex gap-4">
            <a href="/#cta" className="btn btn--accent btn--lg">Start free — 30 days</a>
            <a href="#team" className="btn btn--ghost-dark btn--lg">Meet the team</a>
          </div>
        </div>
        <div className="ah__mascot flex-1 max-w-md mx-auto" id="ahMascot" aria-hidden="true">
          <Lu />
          <div className="ah__mascot-shadow"></div>
        </div>
      </div>
    </section>

    
    <section className="story" id="story">
      <div className="story__inner">
        <div className="story__side">
          <p className="section-head__kicker">How it began</p>
          <h2>Our story</h2>
        </div>
        <div className="story__body" id="storyBody">
          <p>akaani started with a question one of our founders couldn't shake: 'What do I actually want to eat?' Not because there was nothing to choose from. But because there was no clarity. You either knew what you wanted, or you didn't. And when you didn't, you defaulted to the same meals or gave up entirely.</p>
          <p>When we started building together, we realised this wasn't just one person's experience. We had both moved from Nigeria to the United States, and like many in the diaspora, we missed the food we grew up eating. Our first instinct was that the problem was ingredients - the crayfish, the ogiri, the right palm oil. So we started exploring African grocery supply, convinced that if people had what they needed, the rest would follow. It didn't. Even with the right ingredients, people still didn't know what to cook or how it fit their lives. We were trying to eat with more intention ourselves, paying attention to protein, eating toward our goals but African food had no structure for that. No tools, no framework, nothing built with it in mind. Just memory and guesswork.</p>
          <p>Meanwhile, every meal planning app, macro tracker, and recipe tool was designed around Western food. And African food content, as rich as it was culturally, didn't bridge the gap to your goals. You could find the recipe. You couldn't find out how it fit your week. That left people making a choice between enjoying food without understanding how it fit your goals, or focusing on your goals without knowing how to bring African meals into it. So we built akaani to bridge that gap.</p>
          <p>akaani brings structure to African meals by helping you decide what to eat based on your preferences, goals, and lifestyle, without losing the culture in the process. With Lu, our AI guide, you go from not knowing what to eat to a clear, personalised answer in seconds. And when you don't want to cook, akaani Meals brings that same experience to your door. The food you love, prepared for you, without the guesswork.</p>
          <p>We're starting with Nigerian cuisine. But the vision is bigger: to make African food easier to navigate, easier to access, and easier to fit into everyday life. Because you should never have to choose between your culture and your eating goals.</p>
        </div>
      </div>
    </section>

    
    <section className="values">
      <div className="values__ghost" aria-hidden="true">values</div>
      <div className="section-head" style={{position: "relative"}}>
        <p className="section-head__kicker">Our values</p>
        <h2>Our values shape every<br />decision we make.</h2>
        <p className="section-head__sub" style={{color: "rgba(251,245,236,0.65)"}}>These aren't words on a wall. They're the principles that guide how we build akaani — and how Lu shows up for you every day.</p>
      </div>
      <div className="values__grid">
        <article className="value">
          <span className="value__num">01</span>
          <h3>Culture first</h3>
          <p>African food is not a niche — it's the daily reality of over a billion people. Every decision we make starts by asking: does this honour the culture it serves? We never compromise cultural identity for convenience.</p>
        </article>
        <article className="value">
          <span className="value__num">02</span>
          <h3>Radical Personalisation</h3>
          <p>Generic health advice has failed Africa for decades. We believe nutrition must be as individual as a fingerprint — shaped by your food culture, your health goals, your pantry, and your lived experience. Lu learns you, not a profile.</p>
        </article>
        <article className="value">
          <span className="value__num">03</span>
          <h3>Science-Backed Always</h3>
          <p>Every nutritional value in akaani is sourced from peer-reviewed research and validated by registered dieticians who specialise in West African food systems. We never guess. We verify.</p>
        </article>
        <article className="value">
          <span className="value__num">04</span>
          <h3>Privacy &amp; Trust</h3>
          <p>Your health data is yours. We never sell user data, never show ads, and never share personal information with third parties. Akaani's only business model is building something people love enough to pay for.</p>
        </article>
      </div>
    </section>

    
    <section className="team" id="team">
      <div className="section-head section-head--row">
        <div>
          <p className="section-head__kicker">The team</p>
          <h2>The people behind<br />every meal plan.</h2>
          <p className="section-head__sub">We're a small, passionate team of food lovers and engineers, united by a single belief: African food deserves world class technology built around it.</p>
        </div>
        <a href="mailto:hello@useakaani.com" className="btn btn--ghost-dark">Work with us →</a>
      </div>
      <div className="team__grid">

        <article className="member" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><img src="/assets/team-ri.jpg" alt="Richard Igbiriki" loading="lazy" /></div>
              <div className="member__body">
                <div><b>Richard Igbiriki</b><span>Co-founder, akaani</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Richard Igbiriki</b>
              <span>Co-founder, akaani</span>
              <p>Richard is a software engineer drawn to solving practical, everyday problems. His firsthand experience navigating African food and access as a Nigerian in the United States became the starting point for akaani.</p>
            </div>
          </div>
        </article>

        <article className="member" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><img src="/assets/team-su.jpg" alt="Susan Olapade" loading="lazy" /></div>
              <div className="member__body">
                <div><b>Susan Olapade</b><span>Co-founder, akaani</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Susan Olapade</b>
              <span>Co-founder, akaani</span>
              <p>Susan is a business intelligence engineer who enjoys cooking and being creative with food. Her personal journey into fitness deepened her interest in nutrition and intentional eating, a perspective she brings to akaani.</p>
            </div>
          </div>
        </article>

        <article className="member" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><img src="/assets/team-pe.jpg" alt="Peter Omidiji" loading="lazy" /></div>
              <div className="member__body">
                <div><b>Peter Omidiji</b><span>Product Designer</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Peter Omidiji</b>
              <span>Product Designer</span>
              <p>Peter is a product designer with a strong eye for intuitive user experiences and a natural curiosity for food and culture. His love for cooking and exploring flavors, combined with his work in building thoughtful digital products, inspires the unique and user-centered approach he brings to akaani.</p>
            </div>
          </div>
        </article>

        <article className="member" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><img src="/assets/team-ro.jpg" alt="Roland Enola" loading="lazy" /></div>
              <div className="member__body">
                <div><b>Roland Enola</b><span>Frontend Engineer</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Roland Enola</b>
              <span>Frontend Engineer</span>
              <p>Roland is a frontend engineer passionate about solving real-world problems through code, he blends technical precision with creativity. As an explorer of African foods and flavors, he brings a unique perspective to structuring digital experiences-crafting solutions that are both functional and culturally inspired at akaaní.</p>
            </div>
          </div>
        </article>

        <article className="member" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><img src="/assets/team-mi.jpg" alt="Michael Philip" loading="lazy" /></div>
              <div className="member__body">
                <div><b>Michael Philip</b><span>Product Marketer</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Michael Philip</b>
              <span>Product Marketer</span>
              <p>I specialize in bringing products to awareness through clear messaging and strong visuals, blending creativity with strategy to create meaningful connections with audiences. My approach is rooted in storytelling, design, and a deep understanding of how people interact with brands.</p>
            </div>
          </div>
        </article>

        <article className="member member--lu" tabIndex={0}>
          <div className="member__card">
            <div className="member__front">
              <div className="member__img"><Lu /></div>
              <div className="member__body">
                <div><b>Lu</b><span>AI guide</span></div>
                </div>
            </div>
            <div className="member__back">
              <b>Lu</b>
              <span>AI guide</span>
              <p>With Lu, you go from not knowing what to eat to a clear, personalised answer in seconds.</p>
            </div>
          </div>
        </article>

      </div>
    </section>

    
    <section className="cwrap" id="contact">
      <div className="cwrap__inner">
        <div className="cwrap__head">
          <p className="section-head__kicker">Contact</p>
          <h2>Talk to us. <span className="accent-text">We answer fast.</span></h2>
          <p>Questions, ideas, partnerships, press, or just to argue about whose jollof is better. The kitchen door is open.</p>
        </div>

        <div className="chan">
          <a className="chan__card" href="mailto:hello@useakaani.com">
            <span className="chan__kicker">Email us</span>
            <b>hello@useakaani.com</b>
            <p>For anything and everything. We usually reply within one business day.</p>
          </a>

          <div className="chan__card chan__card--dark">
            <span className="chan__kicker">Ask Lu instead</span>
            <b>Instant answers, in the app</b>
            <p>Meal questions? Lu answers in seconds — free for your first 30 days.</p>
            <div className="chan__mascot" aria-hidden="true"><Lu /></div>
          </div>

          <div className="chan__card">
            <span className="chan__kicker">Where we cook</span>
            <b>United States</b>
            <p>akaani meals currently delivers in:</p>
            <div className="chan__cities"><span>Dallas, TX</span><span>Houston, TX</span><span>Seattle, WA</span></div>
          </div>

          <div className="chan__card">
            <span className="chan__kicker">Follow along</span>
            <b>Social</b>
            <div className="chan__socials">
              <a href="#">Instagram</a><a href="#">TikTok</a><a href="#">X (Twitter)</a><a href="#">YouTube</a>
            </div>
          </div>
        </div>

        <div className="cform" id="cform">
          <form id="contactForm" noValidate>
            <div>
              <h2>Send a message</h2>
              <p className="cform__hint">Tell us what's on your mind — we read every one.</p>
            </div>

            <div className="cform__topics" role="group" aria-label="Topic">
              <label><input type="radio" name="topic" value="General" checked /><span>General</span></label>
              <label><input type="radio" name="topic" value="Meals" /><span>Meals</span></label>
              <label><input type="radio" name="topic" value="Recipe bundles" /><span>Recipe bundles</span></label>
              <label><input type="radio" name="topic" value="Partnership" /><span>Partnership</span></label>
              <label><input type="radio" name="topic" value="Press" /><span>Press</span></label>
            </div>

            <div className="cform__row">
              <label>Full name
                <input type="text" name="name" placeholder="Adaeze Okafor" required />
              </label>
              <label>Email address
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>

            <label>Subject
              <input type="text" name="subject" placeholder="What's it about?" required />
            </label>

            <label>Message
              <textarea name="message" placeholder="Go ahead, we're listening…" required></textarea>
            </label>

            <button type="submit" className="btn btn--accent btn--lg">Send message</button>
            <p className="cform__note">This opens your email app with everything pre-filled — nothing gets lost.</p>
          </form>

          <div className="cform__success" id="cformSuccess">
            <Lu />
            <b>Message on its way! 📨</b>
            <p>Your email app should have opened with everything filled in.<br />We'll get back to you within one business day.</p>
          </div>
        </div>

      </div>
    </section>

    <section className="acta">
      <div className="acta__inner">
        <h2>Hungry for what we're cooking?</h2>
        <a href="/#cta" className="btn btn--dark btn--lg">Start free — 30 days</a>
      </div>
    </section>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
