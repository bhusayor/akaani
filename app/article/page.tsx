import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import "../../styles/article.css";
import ProgressBar from "@/components/ProgressBar";

export const metadata: Metadata = {
  title: "Welcome Lu: your AI kitchen companion | akaani",
  description: "Meet Lu, the AI kitchen companion crafted with care.",
};

export default function ArticlePage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <article className="art">
      <div className="art__head">
        <a className="art__back" href="/blog">← Back to the journal</a>
        <div className="art__meta">
          <span className="art__cat">Food lifestyle</span>
          <time>From the team</time>
          <span>·</span>
          <span>6 min read</span>
        </div>
        <h1 className="art__title">
          <span className="line"><span className="line__inner">Welcome Lu: your AI</span></span>
          <span className="line"><span className="line__inner">kitchen companion,</span></span>
          <span className="line"><span className="line__inner accent-text">crafted with care.</span></span>
        </h1>
        <div className="art__author">
          <span className="art__avatar">a</span>
          <div>
            <b>The akaani team</b>
            <span>Lagos · Dallas · Seattle</span>
          </div>
        </div>
      </div>

      <figure className="art__cover" id="artCover">
        <img src="/assets/lu-welcome.png" alt="Lu, the akaani AI kitchen companion, holding a knife and a fresh pepper" />
      </figure>

      <div className="art__body" id="artBody">
        <p className="lead">Have you ever stared blankly at your refrigerator, overflowing with possibilities yet devoid of inspiration? That exact moment, 7:04 pm, door open, cold light on your face, is why Lu exists.</p>

        <p>We didn't set out to build a chatbot. We set out to build the friend every Nigerian kitchen deserves: someone who knows that egusi thickens differently depending on how you toast the seeds, that party jollof is a different dish from Tuesday jollof, and that "one cup of rice" means something very specific in your mother's house.</p>

        <h2>Why we built Lu</h2>
        <p>Every nutrition app we tried treated our food as an afterthought. Jollof rice reduced to "rice, cooked, with tomato sauce." Pounded yam missing entirely. Suya listed as "beef kebab." If the database doesn't respect the food, the numbers can't be trusted, and if the numbers can't be trusted, why track at all?</p>
        <p>So we built our own database first: 200+ Nigerian dishes, measured in the portions we actually use: wraps, cups, bowls, pieces. Then we gave it a personality.</p>

        <blockquote className="pullquote">"Lu answers like a friend who happens to know the macros of every Nigerian dish: swaps, portions, cooking tips and all."</blockquote>

        <h2>What Lu actually does</h2>
        <p>Think of Lu as part chef, part coach, all Naija. On any given day, Lu can:</p>
        <ul>
          <li><b>Answer the 7pm question.</b> "What can I eat tonight under 600 calories?" gets a real answer: efo riro with one wrap of eba, 540 kcal, 32g protein, not a lecture.</li>
          <li><b>Swap smart.</b> Craving something heavier than your goal allows? Lu suggests the version that fits: cauliflower fufu instead of eba saves 120 kcal without losing the ritual.</li>
          <li><b>Plan your week.</b> Tell Lu your goal and get a weekly Nigerian meal plan with the grocery list included, Sunday market run sorted.</li>
          <li><b>Nudge before you drift.</b> Forty grams short on protein this week? Lu notices on Wednesday, not after the weigh-in.</li>
        </ul>

        <div className="lutip">
          <span className="lutip__badge">Lu</span>
          <div>
            <b>A tip from Lu</b>
            <p>Toast your egusi seeds before grinding for deeper flavour, and you'll use less oil to get the same richness. Your macros will thank you.</p>
          </div>
        </div>

        <h2>Crafted with care, literally</h2>
        <p>Lu's knowledge comes from the same place your recipes do: real kitchens. Every dish in the database was validated against how the food is actually cooked and served, and Lu's suggestions are calibrated to your goals, your spice tolerance, and your history, not a generic template written for someone else's cuisine.</p>
        <p>Even the little things matter. Lu greets you with "Ẹ káàbọ̀" because arriving at your own dinner table should feel like a welcome, not a weigh-in.</p>

        <h2>Say hello</h2>
        <p>Lu is live inside the akaani app today, free for your first 30 days. Open the chat, tell Lu what's in your fridge, and let the 7pm struggle end where it started, with good food, made yours.</p>
      </div>

      <div className="art__foot">
        <div className="art__tags"><span>Lu</span><span>AI</span><span>Nigerian food</span><span>Product</span></div>
        <div className="art__share">
          <button type="button" id="copyLink">Copy link</button>
          <a href="https://twitter.com/intent/tweet?text=Welcome%20Lu%3A%20your%20AI%20kitchen%20companion&url=https%3A%2F%2Fuseakaani.com%2Fblog" target="_blank" rel="noopener">Share on X</a>
        </div>
      </div>
      </article>

    
    <section className="related">
      <div className="section-head section-head--row">
        <div>
          <p className="section-head__kicker">Keep reading</p>
          <h2>More from the journal.</h2>
        </div>
        <a href="/blog" className="btn btn--ghost-dark">All stories →</a>
      </div>
      <div className="related__grid">
        <a className="jpost" href="/article">
          <div className="jpost__img"><img src="https://useakaani.com/images/fridge.jpg" alt="An open fridge at dinner time" loading="lazy" /></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Food lifestyle</span><span className="jpost__read">5 min</span></div>
            <h3>The 7:00 PM struggle: why deciding dinner feels like a daily battle</h3>
          </div>
        </a>
        <a className="jpost" href="/article">
          <div className="jpost__img"><img src="https://useakaani.com/images/third_post.jpg" alt="Technology and food" loading="lazy" /></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Food lifestyle</span><span className="jpost__read">4 min</span></div>
            <h3>Foodie tech: how AI is revolutionizing the way we eat</h3>
          </div>
        </a>
        <a className="jpost" href="/article">
          <div className="jpost__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg/1280px-Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg" alt="Efo riro" loading="lazy" /></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Nutrition</span><span className="jpost__read">6 min</span></div>
            <h3>Efo riro is a protein play, if you build it right</h3>
          </div>
        </a>
      </div>
    </section>
      </div>
      </main>

      <Footer giant="journal" />
    </>
  );
}
