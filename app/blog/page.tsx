import type { Metadata } from "next";
import { FEATURED, REST } from "@/lib/posts";
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
      <a className="jfeat__card" id="featCard" href={FEATURED.href} target="_blank" rel="noopener noreferrer">
        <div className="jfeat__img">
          <img id="featImg" src={FEATURED.image} alt={FEATURED.alt} className={FEATURED.cropPastType ? "is-cropped" : undefined} />
          <span className="jfeat__badge">Featured</span>
        </div>
        <div className="jfeat__body">
          <div className="jfeat__meta">
            <span className="jfeat__cat">{FEATURED.category}</span>
            <time>{FEATURED.date}</time>
            <span>{FEATURED.read} read</span>
          </div>
          <h2>{FEATURED.title}</h2>
          <p>{FEATURED.excerpt}</p>
          <span className="btn btn--dark">Read the story →</span>
        </div>
      </a>
    </section>

    
    <section className="jgrid">
      <div className="jgrid__inner" id="grid">

        {REST.map((post) => (
          <a
            key={post.slug}
            className="jpost"
            data-cat={post.category.toLowerCase().replace(/\s+/g, "-")}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="jpost__img">
              <img src={post.image} alt={post.alt} loading="lazy" className={post.cropPastType ? "is-cropped" : undefined} />
              <span className="jpost__arrow">→</span>
            </div>
            <div className="jpost__body">
              <div className="jpost__meta">
                <span className="jpost__cat">{post.category}</span>
                <span className="jpost__read">{post.read}</span>
              </div>
              <h3><span>{post.title}</span></h3>
              <p className="jpost__excerpt">{post.excerpt}</p>
            </div>
          </a>
        ))}

        <p className="jgrid__empty" id="gridEmpty">No stories in this category yet, more are cooking. 🍲</p>
      </div>
    </section>
      </div>
      </main>

      <Footer giant="journal" />
    </>
  );
}
