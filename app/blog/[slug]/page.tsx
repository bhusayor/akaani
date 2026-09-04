import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Motion from "@/components/ArticleMotion";
import { POSTS } from "@/lib/posts";
import { BODIES, type Block } from "@/lib/postContent";
import "../../../styles/article.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | akaani`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

/** The body blocks, rendered into the same shapes the article stylesheet expects. */
function Body({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === "lead") return <p key={i} className="lead">{b.text}</p>;
        if (b.t === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.t === "p") return <p key={i}>{b.text}</p>;
        if (b.t === "ul")
          return (
            <ul key={i}>
              {b.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          );
        return (
          <ul key={i}>
            {b.items.map((it) => (
              <li key={it.term}>
                <b>{it.term}.</b> {it.text}
              </li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  const blocks = BODIES[slug];
  if (!post || !blocks) notFound();

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <article className="art">
            <div className="art__head">
              <a className="art__back" href="/blog">← Back to the journal</a>
              <div className="art__meta">
                <span className="art__cat">{post.category}</span>
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.read} read</span>
              </div>
              <h1 className="art__title">
                <span className="line"><span className="line__inner">{post.title}</span></span>
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
              <img src={post.image} alt={post.alt} className={post.cropPastType ? "is-cropped" : undefined} />
            </figure>

            <div className="art__body" id="artBody">
              <Body blocks={blocks} />
            </div>

            <div className="art__foot">
              <div className="art__tags">
                <span>{post.category}</span>
                <span>akaani</span>
                <span>African food</span>
              </div>
              <div className="art__share">
                <button type="button" id="copyLink">Copy link</button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://useakaani.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on X
                </a>
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
              {more.map((p) => (
                <a key={p.slug} className="jpost" href={`/blog/${p.slug}`}>
                  <div className="jpost__img">
                    <img src={p.image} alt={p.alt} loading="lazy" className={p.cropPastType ? "is-cropped" : undefined} />
                  </div>
                  <div className="jpost__body">
                    <div className="jpost__meta">
                      <span className="jpost__cat">{p.category}</span>
                      <span className="jpost__read">{p.read}</span>
                    </div>
                    <h3>{p.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer giant="journal" />
    </>
  );
}
