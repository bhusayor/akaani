import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lu from "@/components/Lu";
import Motion from "./Motion";
import FormBehavior from "@/components/FormBehavior";
import "../../styles/contact.css";

export const metadata: Metadata = {
  title: "Contact | akaani",
  description: "Talk to the akaani team. Questions, partnerships, press, or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <Motion />
      <FormBehavior kind="contact" />

      <main>


    
    <section className="ch">
      <div className="ch__inner">
        <div>
          <p className="section-head__kicker">Contact</p>
          <h1>
            <span className="line"><span className="line__inner">Talk to us.</span></span>
            <span className="line"><span className="line__inner accent-text">We answer fast.</span></span>
          </h1>
          <p className="ch__sub">Questions, ideas, partnerships, press — or just to argue about whose jollof is better. The kitchen door is open.</p>
        </div>
        <div className="ch__visual" id="chVisual" aria-hidden="true">
          <div className="ch__photo">
            <img src="/assets/contact-hero.jpg" alt="A smiling woman in Lagos holding her phone" />
          </div>
          <div className="ch__bubble">Hi akaani! 👋</div>
          <span className="ch__stamp"><i></i>Typically replies within a day</span>
        </div>
      </div>
    </section>

    
    <section className="cwrap">
      <div className="cwrap__inner">

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

    
    <section className="cfaq">
      <div className="cfaq__inner">
        <div>
          <h2>Maybe we've answered it already?</h2>
          <p>The most common questions live on our FAQ — macros, Lu, meals, all of it.</p>
        </div>
        <a href="/#faq" className="btn btn--dark btn--lg">Read the FAQ →</a>
      </div>
    </section>
      </main>

      <Footer giant="hello" />
    </>
  );
}
