import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import "../../styles/blog.css";
import FormBehavior from "@/components/FormBehavior";

export const metadata: Metadata = {
  title: "Blog | akaani",
  description: "Read exciting stories about African cuisine, food, culture and nutrition science.",
};

export default function BlogPage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <Motion />
      <FormBehavior kind="blogFilters" />
      <FormBehavior kind="newsletter" />

      <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

    
    <section className="jh">
      <div className="jh__inner">
        <div className="jh__kicker-row">
          <p className="section-head__kicker" style={{margin: "0"}}>The akaani journal</p>
          <span className="jh__count">7 stories</span>
        </div>
        <h1>
          <span className="line"><span className="line__inner">Read exciting stories</span></span>
          <span className="line"><span className="line__inner">about <span className="accent-text">African cuisine.</span></span></span>
        </h1>
        <div className="jh__filters" id="filters" aria-label="Filter articles">
          <button className="is-on" data-filter="all">All</button>
          <button data-filter="lifestyle">Food lifestyle</button>
          <button data-filter="nutrition">Nutrition</button>
          <button data-filter="recipes">Recipes</button>
          <button data-filter="deepdive">Deep dives</button>
        </div>
      </div>
    </section>

    
    <section className="jfeat">
      <a className="jfeat__card" id="featCard" href="/article">
        <div className="jfeat__img">
          <img id="featImg" src="/assets/lu-welcome.png" alt="Lu, the akaani AI kitchen companion" />
          <span className="jfeat__badge">Featured</span>
        </div>
        <div className="jfeat__body">
          <div className="jfeat__meta"><span className="jfeat__cat">Food lifestyle</span><time>From the team</time><span>6 min read</span></div>
          <h2>Welcome Lu: your AI kitchen companion, crafted with care</h2>
          <p>Have you ever stared blankly at your refrigerator, overflowing with possibilities yet devoid of inspiration? Meet the companion we built for exactly that moment.</p>
          <span className="btn btn--dark">Read the story →</span>
        </div>
      </a>
    </section>

    
    <section className="jgrid">
      <div className="jgrid__inner" id="grid">

        <a className="jpost" data-cat="lifestyle" href="/article">
          <div className="jpost__img"><img src="https://useakaani.com/images/fridge.jpg" alt="An open fridge at dinner time" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Food lifestyle</span><span className="jpost__read">5 min</span></div>
            <h3><span>The 7:00 PM struggle: why deciding what's for dinner feels like a daily battle (and how to win)</span></h3>
            <p className="jpost__excerpt">Living the busy life in a bustling US city? You know the drill: alarm clock screams…</p>
          </div>
        </a>

        <a className="jpost" data-cat="lifestyle" href="/article">
          <div className="jpost__img"><img src="https://useakaani.com/images/third_post.jpg" alt="Technology and food" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Food lifestyle</span><span className="jpost__read">4 min</span></div>
            <h3><span>Foodie tech: how artificial intelligence is revolutionizing the way we eat</span></h3>
            <p className="jpost__excerpt">From smart pantries to macro-aware meal planning — the quiet revolution happening in our kitchens.</p>
          </div>
        </a>

        <a className="jpost" data-cat="nutrition" href="/article">
          <div className="jpost__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg/1280px-Efo_Riro_with_fried_mackerel_fishes_and_roasted_cowskin.jpg" alt="Efo riro with fried mackerel" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Nutrition</span><span className="jpost__read">6 min</span></div>
            <h3><span>Efo riro is a protein play — if you build it right</span></h3>
            <p className="jpost__excerpt">The Yoruba classic can carry 35g+ of protein per bowl. The macro math, ingredient by ingredient.</p>
          </div>
        </a>

        <a className="jpost" data-cat="nutrition" href="/article">
          <div className="jpost__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Suya_with_pepper_sauce.jpg/1280px-Suya_with_pepper_sauce.jpg" alt="Suya with pepper sauce" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Nutrition</span><span className="jpost__read">4 min</span></div>
            <h3><span>Suya: the original street-food protein</span></h3>
            <p className="jpost__excerpt">Lean beef, yaji spice, open fire — why the roadside classic beats most protein bars.</p>
          </div>
        </a>

        <a className="jpost" data-cat="deepdive" href="/article">
          <div className="jpost__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egusi_soup_in_a_plate.jpg/1920px-Egusi_soup_in_a_plate.jpg" alt="Egusi soup" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Deep dive</span><span className="jpost__read">7 min</span></div>
            <h3><span>Why egusi never made it into food databases</span></h3>
            <p className="jpost__excerpt">A story about barcodes, colonial-era food tables, and the meals they left behind.</p>
          </div>
        </a>

        <a className="jpost" data-cat="recipes" href="/article">
          <div className="jpost__img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jollof_%28Jollof-_Rice%29.jpg/1920px-Jollof_%28Jollof-_Rice%29.jpg" alt="Jollof rice" loading="lazy" /><span className="jpost__arrow">→</span></div>
          <div className="jpost__body">
            <div className="jpost__meta"><span className="jpost__cat">Recipes</span><span className="jpost__read">5 min</span></div>
            <h3><span>Party jollof vs. cut-season jollof: one pot, two macros</span></h3>
            <p className="jpost__excerpt">Same smoke, same party energy — 240 fewer calories per plate. Here's the technique.</p>
          </div>
        </a>

        <p className="jgrid__empty" id="gridEmpty">No stories in this category yet — more are cooking. 🍲</p>
      </div>
    </section>
      </div>
      </main>

      <Footer giant="journal" />
    </>
  );
}
