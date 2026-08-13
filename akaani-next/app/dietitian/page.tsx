import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import Faq from "@/components/Faq";
import Motion from "./Motion";
import "../../styles/dietitian.css";

export const metadata: Metadata = {
  title: "Talk to our in-house dietitian | akaani",
  description:
    "A 45-minute video call with akaani's in-house registered dietitian. Hypertension, diabetes, PCOS and more. Personal Nigerian meal guide in your mail within 24 hours.",
};

const CALENDLY = "https://calendly.com/useakaani";

const CONDITIONS = [
  { tag: "Hypertension", most: true, q: "My BP is high. Is salt the only thing I should worry about?" },
  { tag: "Diabetes", most: true, q: "I am diabetic. Do I really have to give up swallow?" },
  { tag: "PCOS", most: true, q: "I have PCOS. What should my plate actually look like?" },
  { tag: "Low iron", q: "What should I be eating to bring it back up?" },
  { tag: "Pregnancy", q: "What do I need more of right now?" },
];

const GOALS = [
  { tag: "Fat loss", q: "I am eating less and still not losing weight." },
  { tag: "Training", q: "Am I even eating enough protein for my gym week?" },
  { tag: "Bloating", q: "Why does almost every meal leave me uncomfortable?" },
  { tag: "Energy", q: "Why do I crash by three in the afternoon?" },
  { tag: "Budget", q: "How do I eat better without spending more?" },
];

const WHY = [
  {
    badge: "RD",
    title: "In-house and qualified",
    body: "Our dietitian is in-house, trained and licensed to give nutrition advice for real health conditions. Not a marketplace of strangers, and a different thing entirely from advice off the internet.",
  },
  {
    badge: "YOU",
    title: "Your body, your life",
    body: "Your results, your medication, your work schedule, your budget, the people you cook for. All of it shapes the guide, so it is one you can actually keep.",
  },
  {
    badge: "9ja",
    title: "Nigerian food stays",
    body: "No salmon and quinoa. Your dietitian builds around rice, swallow, soups and beans, then shows you how to make them work for your goal.",
  },
];

const STEPS = [
  { n: "01", title: "Pick your time", body: "Choose a slot and pay once. No forms, no prep." },
  { n: "02", title: "45-minute video call", body: "One-on-one with akaani's in-house registered dietitian." },
  { n: "03", title: "A personal Nigerian meal guide", body: "In your mail within 24 hours of the call." },
  { n: "04", title: "Macro targets set for you", body: "Numbers you can hit, on food you already eat." },
];

const GUIDE = [
  { n: "01", title: "A week, mapped out", body: "Breakfast, lunch and dinner for seven days, built from the food you already cook." },
  { n: "02", title: "Portions you can see", body: "Cups, wraps, bowls and pieces. No weighing scale, no grams you have to imagine." },
  { n: "03", title: "Swaps that keep the taste", body: "What to change and what to leave alone, for the meals you are not giving up." },
  { n: "04", title: "Your numbers, explained", body: "Calories and macros set for your body, with what they mean at the table." },
];

const FAQS = [
  {
    q: "Is a dietitian the same as a nutritionist?",
    a: "Not quite. A registered dietitian is trained, licensed and regulated to give nutrition advice for medical conditions, which is why ours can work with hypertension, diabetes and PCOS. Anyone can call themselves a nutritionist. akaani works with an in-house dietitian, so the person on your call is the same person who writes your guide.",
  },
  {
    q: "Do I need lab results before the call?",
    a: "No. Bring them if you have them and your dietitian will use them, but the session works perfectly well without any.",
  },
  {
    q: "Will I be told to stop eating Nigerian food?",
    a: "No. That is the entire point of akaani. Your guide is built on the food you already cook and buy, adjusted in portion, pairing and frequency rather than replaced.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Use the reschedule link in your confirmation email. There is no charge for moving your session.",
  },
  {
    q: "I am not sick. Is this still for me?",
    a: "Yes. Most people book for fat loss, muscle gain, energy, pregnancy, or simply to stop guessing at every meal. You do not need a diagnosis to want a guide that fits your body.",
  },
];

export default function DietitianPage() {
  return (
    <>
      <Nav ctaLabel="Book consultation" ctaHref={CALENDLY} ctaExternal />
      <Motion />

      <main>
        <section className="dh">
          <div className="dh__ghost" aria-hidden="true">
            dietitian
          </div>
          <div className="dh__inner">
            <div>
              <p className="section-head__kicker">1-on-1 with our in-house dietitian</p>
              <h1>
                Talk to our in-house dietitian who knows <span className="accent-text">Nigerian food.</span>
              </h1>
              <p className="dh__sub">
                Sit with akaani&apos;s own registered dietitian, qualified to speak on your goal and your health.
                Hypertension, diabetes, PCOS, gut issues, training, pregnancy. You leave with a personal Nigerian meal
                guide in your mail within 24 hours.
              </p>
              <div className="dh__actions">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--dark btn--lg">
                  Book consultation
                </a>
                <Link href="#ask" className="btn btn--ghost-dark btn--lg">
                  See what you can ask
                </Link>
              </div>
            </div>
            <div className="dh__visual" aria-hidden="true">
              <div className="dh__photo">
                <Image
                  src="/assets/consult-hero.jpg"
                  alt="akaani's in-house dietitian on a video consultation"
                  width={860}
                  height={903}
                  priority
                />
              </div>
              <div className="dh__pricebadge">
                ₦50,000<span>per session</span>
              </div>
              <div className="dh__planbadge">
                <i />
                Meal guide in your mail in 24 hours
              </div>
            </div>
          </div>
        </section>

        <section className="ask" id="ask">
          <div className="ask__head">
            <p className="section-head__kicker">What you can ask</p>
            <h2>
              Bring the question
              <br />
              <span className="accent-text">you have been googling.</span>
            </h2>
            <p>
              A registered dietitian is qualified to talk about food and health, not just calories.
              <br />
              Find yourself in one of these.
            </p>
          </div>

          <div className="ask__grid">
            <article className="askpanel">
              <div className="askpanel__head">
                <b>A doctor has mentioned something</b>
                <span>What our dietitian sees most, and is trained to build a guide around alongside your doctor.</span>
              </div>
              {CONDITIONS.map((item) => (
                <div className="askitem" key={item.tag}>
                  <span className="askitem__tag">
                    {item.tag}
                    {item.most && <em className="askitem__most">Most asked</em>}
                  </span>
                  <q>{item.q}</q>
                </div>
              ))}
            </article>

            <article className="askpanel">
              <div className="askpanel__head">
                <b>Something just feels off</b>
                <span>No diagnosis needed. This is why most people book their first session.</span>
              </div>
              {GOALS.map((item) => (
                <div className="askitem" key={item.tag}>
                  <span className="askitem__tag">{item.tag}</span>
                  <q>{item.q}</q>
                </div>
              ))}
            </article>
          </div>

          <div className="ask__foot">
            <div>
              <b>Your question is not on the list?</b>
              <p>
                Bring it anyway. If it touches what you eat, it is worth 45 minutes. Your dietitian works alongside your
                doctor, never instead of them.
              </p>
            </div>
            <Link href="#book" className="ask__foot-link">
              See how the session works <i>↓</i>
            </Link>
          </div>
        </section>

        <section className="why">
          <div className="why__inner">
            <div className="why__head">
              <p className="section-head__kicker">Why a dietitian</p>
              <h2>
                You do not need to be sick
                <br />
                <span className="accent-text">to see a dietitian.</span>
              </h2>
              <p>
                Most people book because something is not adding up. The weight, the bloating, the energy, the lab
                results, the food you were told to stop eating. A registered dietitian is the person actually qualified
                to sort that out.
              </p>
            </div>
            <div className="why__grid">
              {WHY.map((card) => (
                <article className="whycard" key={card.badge}>
                  <i>{card.badge}</i>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how" id="book">
          <div className="how__inner">
            <div className="how__body">
              <p className="section-head__kicker">What you get</p>
              <h2>
                One session.
                <br />
                <span className="accent-text">A guide made for you.</span>
              </h2>
              <p>Nothing to fill in before you book. Pick a time, show up, and talk.</p>
              <ol className="how__steps">
                {STEPS.map((s) => (
                  <li key={s.n}>
                    <i>{s.n}</i>
                    <b>{s.title}</b>
                    <span>{s.body}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="how__side">
              <div className="bookcard">
                <span className="bookcard__tag">1-on-1 session</span>
                <b>Nutrition consultation</b>
                <div className="bookcard__price">
                  <b>₦50,000</b>
                  <span>per session</span>
                </div>
                <div className="bookcard__row">
                  <span>Length</span>
                  <b>45 minutes</b>
                </div>
                <div className="bookcard__row">
                  <span>Format</span>
                  <b>Video call</b>
                </div>
                <div className="bookcard__row">
                  <span>Your guide</span>
                  <b>Within 24 hours</b>
                </div>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--lg">
                  Book consultation
                </a>
                <p className="bookcard__foot">Scheduled via Calendly. Reschedule anytime.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide">
          <div className="guide__inner">
            <div className="guide__head">
              <p className="section-head__kicker">Your meal guide</p>
              <h2>
                Not advice you have to decode.
                <br />
                <span className="accent-text">A guide you can cook from.</span>
              </h2>
              <p>Everything your dietitian works out on the call arrives written down, in the measures you already use.</p>
            </div>
            <div className="guide__grid">
              {GUIDE.map((card) => (
                <article className="guidecard" key={card.n}>
                  <i>{card.n}</i>
                  <b>{card.title}</b>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
            <p className="guide__note">
              <b>Managing something specific?</b> Hypertension, diabetes and PCOS guides are built around your readings
              and your medication, alongside your doctor.
            </p>
          </div>
        </section>

        <section className="faq2" id="faq">
          <div className="faq2__head">
            <p>Before you book</p>
            <h2>Everything else you are wondering</h2>
          </div>
          <Faq items={FAQS} variant="plus" />
          <div className="faq2__cta">
            <b>Still have questions?</b>
            <p>Cannot find the answer you are looking for? Please chat to our friendly team.</p>
            <Link href="/contact" className="btn btn--dark btn--lg">
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <FooterLight />
    </>
  );
}
