import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BUNDLES, bundleBySlug } from "@/lib/bundles";
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

            {/* one card: dark header carries the plan, white body sells it */}
            <div className="plancard">
              <div className="plancard__head">
                <p className="plancard__kicker">Meal plan</p>
                <h1>{b.name}</h1>
                <p>{b.tagline} {b.blurb}</p>
              </div>

              <div className="plancard__body">
                <ul className="plancard__list">
                  <li>{b.recipes.length} full recipes with ingredients &amp; steps</li>
                  <li>Macro breakdown for each recipe</li>
                  <li>Personalised tip from Lu per recipe</li>
                  <li>Lifetime access, yours to keep</li>
                </ul>

                <p className="plancard__label">Benefits</p>
                <div className="plancard__benefits">
                  {b.benefits.map((x) => <span key={x}>{x}</span>)}
                </div>

                <button
                  className="plancard__buy add-cart"
                  type="button"
                  data-name={b.name}
                  data-price={String(b.price)}
                >
                  Get this plan for {b.currency}{b.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>

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
