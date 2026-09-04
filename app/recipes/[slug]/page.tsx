import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BUNDLES, INCLUDED, bundleBySlug } from "@/lib/bundles";
import "../../../styles/recipes.css";

export function generateStaticParams() {
  return BUNDLES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = bundleBySlug(slug);
  if (!b) return {};
  return {
    title: `${b.name} | akaani recipe bundles`,
    description: `${b.tagline} ${b.blurb}`,
    openGraph: { title: b.name, description: b.blurb, images: [b.image] },
  };
}

export default async function BundlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = bundleBySlug(slug);
  if (!b) notFound();

  const more = BUNDLES.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />

      <main className="bundlepage">
        <div className="bundlepage__inner">
          <a className="bundlepage__back" href="/recipes">← All bundles</a>

          <div className="bundlepage__top">
            <figure className="bundlepage__img">
              <img src={b.image} alt={b.alt} />
            </figure>

            <div className="bundlepage__buy">
              <p className="bundlepage__tagline">{b.tagline}</p>
              <h1>{b.name}</h1>
              <p className="bundlepage__blurb">{b.blurb}</p>

              <div className="bundlepage__chips">
                {[b.plan, ...b.mealTypes].map((c) => <span key={c}>{c}</span>)}
              </div>

              <dl className="bundlepage__facts">
                <div><dt>Recipes</dt><dd>{b.recipes.length}</dd></div>
                <div><dt>Servings each</dt><dd>{b.servings}</dd></div>
                <div><dt>Format</dt><dd>Instant download</dd></div>
              </dl>

              <div className="bundlepage__price">
                <b>{b.currency}{b.price.toFixed(2)}</b>
                <span>one-off, yours to keep</span>
              </div>

              <div className="bundlepage__actions">
                <button className="btn btn--ghost-dark add-cart" type="button" data-name={b.name} data-price={String(b.price)}>
                  Add to cart
                </button>
                <a className="btn btn--dark" href="/recipes#bundles">Buy now</a>
              </div>
            </div>
          </div>

          <section className="bundlepage__cols">
            <div>
              <h2>What is inside</h2>
              <ul className="bundlepage__included">
                {INCLUDED.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div>
              <h2>Good for</h2>
              <ul className="bundlepage__included">
                {b.benefits.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div>
              <h2>How you get it</h2>
              <ul className="bundlepage__included">
                <li>{b.recipes.length} recipes, {b.servings} servings each</li>
                <li>Download straight after paying</li>
                <li>Yours to keep, no subscription</li>
              </ul>
            </div>
          </section>

          <section className="bundlepage__more">
            <div className="section-head section-head--row">
              <div>
                <p className="section-head__kicker">Keep browsing</p>
                <h2>The other bundles.</h2>
              </div>
              <a href="/recipes#bundles" className="btn btn--ghost-dark">All bundles →</a>
            </div>
            <div className="bundlepage__moregrid">
              {more.map((m) => (
                <a key={m.slug} className="product" href={`/recipes/${m.slug}`}>
                  <div className="product__img">
                    <img src={m.image} alt={m.alt} loading="lazy" />
                    <span className="product__count">{m.recipes.length} recipes</span>
                    <span className="product__price">{m.currency}{m.price.toFixed(2)}</span>
                  </div>
                  <div className="product__body">
                    <p className="product__tagline">{m.tagline}</p>
                    <h3>{m.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
