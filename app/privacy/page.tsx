import type { Metadata } from "next";
import type { ReactNode } from "react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import ProgressBar from "@/components/ProgressBar";
import "../../styles/privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy | akaani",
  description: "How akaani collects, uses and protects your personal information.",
};

type PolicyBlock =
  | { kind: "clause"; number: string; text: string }
  | { kind: "copy"; text: string };

type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks: PolicyBlock[];
};

function getPolicySections() {
  const policy = readFileSync(join(process.cwd(), "content/privacy-policy.txt"), "utf8");
  const sections: PolicySection[] = [];
  let current: PolicySection | undefined;

  for (const rawLine of policy.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const sectionHeading = line.match(/^(\d+)\.\s+(.+)$/);
    if (sectionHeading) {
      current = {
        id: "p" + sectionHeading[1],
        number: sectionHeading[1] + ".",
        title: sectionHeading[2],
        blocks: [],
      };
      sections.push(current);
      continue;
    }

    if (!current) continue;

    const clause = line.match(/^(\d+(?:\.\d+)+\.)\s*(.+)$/);
    current.blocks.push(
      clause
        ? { kind: "clause", number: clause[1], text: clause[2] }
        : { kind: "copy", text: line },
    );
  }

  return sections;
}

function linkifyEmail(text: string): ReactNode {
  return text.split(/(hello@useakaani\.com)/gi).map((part, index) =>
    part.toLowerCase() === "hello@useakaani.com"
      ? <a key={index} href="mailto:hello@useakaani.com">{part}</a>
      : part,
  );
}

export default function PrivacyPage() {
  const sections = getPolicySections();

  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section className="lg">
            <div className="lg__head">
              <p className="section-head__kicker">Legal</p>
              <h1>We care about your privacy.</h1>
              <div className="lg__meta">
                <span className="lg__badge">Last updated · September 2026</span>
                <span>
                  Questions?{" "}
                  <a href="mailto:hello@useakaani.com" style={{ color: "var(--accent)", fontWeight: "600" }}>
                    Contact us
                  </a>
                </span>
              </div>
            </div>
          </section>

          <section className="lgwrap">
            <div className="lgwrap__inner">
              <nav className="lgtoc" aria-label="On this page">
                {sections.map((section) => (
                  <a key={section.id} href={"#" + section.id}>
                    {section.number} {section.title}
                  </a>
                ))}
              </nav>

              <div className="lgbody" id="lgBody">
                {sections.map((section) => (
                  <section id={section.id} key={section.id}>
                    <h2><span className="num">{section.number}</span>{section.title}</h2>
                    {section.blocks.map((block, index) => {
                      if (
                        block.kind === "clause" &&
                        block.number === "3.2." &&
                        block.text === "Sensitive Personal Data"
                      ) {
                        return <h3 key={block.number}><span className="num">{block.number}</span>{block.text}</h3>;
                      }

                      if (block.kind === "clause") {
                        return (
                          <p className="clause" key={block.number}>
                            <span className="clause__num">{block.number}</span>
                            <span>{linkifyEmail(block.text)}</span>
                          </p>
                        );
                      }

                      return <p className="policy-copy" key={index}>{linkifyEmail(block.text)}</p>;
                    })}
                  </section>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
