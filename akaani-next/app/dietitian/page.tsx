import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import Faq from "@/components/Faq";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import HoverLift from "@/components/motion/HoverLift";
import FocusIcon, { type FocusIconName } from "@/components/ui/FocusIcon";
import GuidePreview from "@/components/dietitian/GuidePreview";
import SignsCheck from "@/components/dietitian/SignsCheck";
import Motion from "./Motion";

export const metadata: Metadata = {
  title: "Talk to our in-house dietitian | akaani",
  description:
    "A 45-minute video call with akaani's in-house Registered Dietitian. Weight management, fitness nutrition, African diet review, healthy eating resets and family planning. Your Personal Nigerian Meal Guide lands in your inbox within 24 hours.",
};

const CALENDLY = "https://calendly.com/useakaani";

const SIGNS = [
  "You are tired by 3pm most days, and it is not sleep.",
  "Your weight has not moved in months, whatever you change.",
  "A test came back borderline and nobody told you what to eat.",
  "You feel heavy or bloated after most meals.",
  "You have cut out foods you love and seen no difference.",
  "Everyone gives you different advice and none of it fits your kitchen.",
];

const FOCUS = [
  {
    icon: "pcos" as FocusIconName,
    popular: true,
    title: "PCOS/PMOS",
    q: "I am doing everything right and my weight still will not move.",
    outcome: "Insulin-aware portions and meal timing, built on the food you already cook.",
    tags: ["Insulin resistance", "Cycle", "Weight"],
  },
  {
    icon: "diabetes" as FocusIconName,
    title: "Diabetes",
    q: "Can I still eat swallow?",
    outcome: "Yes, in portions and pairings that keep your sugar steadier. Your readings shape the guide.",
    tags: ["Blood sugar", "Portions", "Swallow"],
  },
  {
    icon: "pressure" as FocusIconName,
    title: "Blood pressure",
    q: "I was told to cut salt, and nothing else.",
    outcome: "What to change in your soups, your seasoning and your pot, past the salt advice.",
    tags: ["Sodium", "Soups", "Readings"],
  },
  {
    icon: "pregnancy" as FocusIconName,
    title: "Pregnancy",
    q: "What should I be eating now?",
    outcome: "Iron, protein and folate from Nigerian food, trimester by trimester, alongside your antenatal care.",
    tags: ["Trimesters", "Iron", "Folate"],
  },
  {
    icon: "fatloss" as FocusIconName,
    title: "Fat loss",
    q: "I am eating less and still not losing weight.",
    outcome: "Calorie and protein targets you can actually hit on rice, swallow and soup.",
    tags: ["Plateaus", "Portions", "Protein"],
  },
  {
    icon: "muscle" as FocusIconName,
    title: "Muscle gain",
    q: "Am I eating enough protein for my gym week?",
    outcome: "Protein targets from local food, and what to eat around training days.",
    tags: ["Protein", "Training", "Recovery"],
  },
];

/** TODO before launch: swap `photo` for a real akaani dietitian, not stock. */
const DIETITIAN = {
  photo: "/assets/consult-hero.jpg",
  credentials: [
    "Licensed to provide medical nutrition therapy",
    "Trained in Nigerian and West African eating patterns",
    "Works alongside your doctor, never instead of them",
    "Writes your guide personally, no handoffs",
  ],
};

const STEPS = [
  { n: "01", title: "Pick a time", body: "Choose a slot and pay. No forms to fill in first." },
  { n: "02", title: "Talk for 45 minutes", body: "A video call with your dietitian, one to one." },
  { n: "03", title: "Get your guide", body: "Written for you, in your inbox within 24 hours." },
];

const FAQS = [
  {
    q: "How is this different from advice online?",
    a: "Advice online is written for everyone, so it fits nobody in particular. Your dietitian works from your readings, your medication, your budget and the food you actually cook. That is what you are paying for.",
  },
  {
    q: "Will I have to stop eating Nigerian food?",
    a: "No. Your guide is built on what you already cook and buy, adjusted in portion, pairing and frequency. Nothing gets swapped for salmon and quinoa.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Use the link in your confirmation email. Moving your session is free.",
  },
];

const KICKER = "mb-4 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-accent";
const SECTION_X = "px-5 sm:px-8 lg:px-[72px]";
const SECTION_Y = "py-7 md:py-10 lg:py-14";

function FocusCard({
  icon,
  title,
  q,
  outcome,
  tags,
  popular,
  index,
}: {
  icon: FocusIconName;
  title: string;
  q: string;
  outcome: string;
  tags: string[];
  popular?: boolean;
  index: number;
}) {
  return (
    <HoverLift
      index={index}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_18px_40px_rgba(0,51,51,0.08)] sm:p-7"
    >
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-brand group-hover:scale-x-100" />

      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-ink text-bg transition-colors duration-300 group-hover:bg-accent">
            <FocusIcon name={icon} />
          </span>
          <h3 className="text-[clamp(1.12rem,1.5vw,1.3rem)] leading-[1.2]">{title}</h3>
        </div>
        {popular && (
          <span className="flex-none rounded-full bg-accent px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white">
            Most booked
          </span>
        )}
      </div>

      <q className="mb-3.5 block text-[0.99rem] font-semibold leading-[1.45] text-ink">{q}</q>
      <p className="mb-5 text-[0.94rem] leading-[1.6] text-ink-soft">{outcome}</p>

      <p className="mt-auto flex flex-wrap gap-x-1 gap-y-1 border-t border-line pt-4 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
        {tags.map((t, i) => (
          <span key={t}>
            {i > 0 && <span className="pr-1 text-accent">·</span>}
            {t}
          </span>
        ))}
      </p>
    </HoverLift>
  );
}

export default function DietitianPage() {
  return (
    <>
      <Nav ctaLabel="Book consultation" ctaHref={CALENDLY} ctaExternal />
      <Motion />

      <main>
        {/* ---------- hero ---------- */}
        <section className={`relative overflow-hidden pb-7 pt-[104px] md:pb-10 md:pt-[132px] lg:pb-14 lg:pt-[165px] ${SECTION_X}`}>
          <span
            aria-hidden="true"
            data-gsap="ghost"
            className="pointer-events-none absolute -bottom-[14%] -right-[1%] select-none text-[clamp(8rem,20vw,19rem)] font-black leading-none tracking-[-0.05em] text-ink/[0.05]"
          >
            dietitian
          </span>

          <div className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(30px,4vw,70px)] lg:grid-cols-[1.35fr_1fr]">
            <div>
              <FadeIn>
                <h1 className="mb-6 text-[clamp(2.35rem,5vw,4.4rem)]">
                  Talk to our in-house dietitian who knows{" "}
                  <span className="text-accent">Nigerian food.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mb-8 text-[clamp(1rem,1.35vw,1.16rem)] leading-[1.65] text-ink-soft sm:mb-9 lg:max-w-[560px]">
                  For a diagnosis, a goal, or just a feeling that something is off. You leave with a personal
                  Nigerian meal guide in your mail within 24 hours.
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
                  <Button href={CALENDLY} external variant="dark" size="lg" className="w-full sm:w-auto">
                    Book consultation
                  </Button>
                  <Button href="#signs" variant="ghostDark" size="lg" className="w-full sm:w-auto">
                    Do I need this?
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div
              className="relative mx-auto w-full max-w-[330px] sm:max-w-[500px] lg:w-[clamp(300px,30vw,430px)] lg:max-w-none"
              aria-hidden="true"
              data-gsap="hero-visual"
            >
              <div className="aspect-[4/4.2] rotate-[1.5deg] overflow-hidden rounded-[28px] border-[5px] border-paper shadow-[0_40px_80px_rgba(0,51,51,0.2)]">
                <Image
                  src="/assets/consult-hero.jpg"
                  alt="akaani's in-house dietitian on a video consultation"
                  width={860}
                  height={903}
                  priority
                  className="h-full w-full object-cover object-[62%_center]"
                />
              </div>
              <div
                data-gsap="price"
                className="absolute -left-2 -top-4 rounded-[18px] rounded-bl-[4px] bg-accent px-4 py-3 text-[1.15rem] font-extrabold leading-[1.1] text-white shadow-[0_18px_44px_rgba(218,112,0,0.35)] sm:-left-[18px] sm:-top-5 sm:px-[22px] sm:py-3.5 sm:text-[1.35rem]"
              >
                ₦50,000
                <span className="mt-[3px] block text-[0.7rem] font-semibold uppercase tracking-[0.06em] opacity-85">
                  per session
                </span>
              </div>
              <div
                data-gsap="plan"
                className="absolute -bottom-4 right-0 flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2.5 text-[0.76rem] font-bold text-ink shadow-[0_18px_44px_rgba(0,51,51,0.16)] sm:-right-3 sm:px-[18px] sm:py-3 sm:text-[0.84rem]"
              >
                <i className="h-2 w-2 rounded-full bg-accent" />
                45 minutes, on video
              </div>
            </div>
          </div>
        </section>

        {/* ---------- not sure this is for you ---------- */}
        <section id="signs" className={`bg-mist ${SECTION_Y} ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(24px,3vw,36px)] max-w-[760px] text-center">
            <p className={KICKER}>Not sure this is for you?</p>
            <h2 className="mb-4 text-balance text-[clamp(1.95rem,4vw,3.2rem)]">
              You might need a dietitian <span className="text-accent">if&hellip;</span>
            </h2>
            <p className="text-[1.03rem] leading-[1.6] text-ink-soft">
              Most people book without a diagnosis. See how many of these you recognise.
            </p>
          </FadeIn>

          <FadeIn>
            <SignsCheck signs={SIGNS} cta={CALENDLY} />
          </FadeIn>
        </section>

        {/* ---------- what we help with ---------- */}
        <section id="ask" className={`${SECTION_Y} ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(34px,4vw,52px)] max-w-[760px] text-center">
            <p className={KICKER}>What we help with</p>
            <h2 className="mb-4 text-[clamp(2.1rem,4.6vw,3.8rem)]">
              Already know <span className="text-accent">what you need?</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.65] text-ink-soft">
              Six reasons people book. Pick the one that sounds like you.
            </p>
          </FadeIn>

          {/* six cards fill an even 3 x 2, so the reassurance sits below as a bar */}
          <div className="mx-auto grid max-w-[1280px] items-stretch gap-[clamp(14px,1.8vw,22px)] sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f, i) => (
              <FocusCard key={f.title} {...f} index={i} />
            ))}
          </div>

          <FadeIn className="mx-auto mt-[clamp(14px,1.8vw,22px)] flex max-w-[1280px] flex-col gap-5 rounded-[22px] bg-ink p-6 text-bg sm:flex-row sm:items-center sm:justify-between sm:p-7 md:px-9">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                  <circle cx="12" cy="12" r="9.5" />
                </svg>
              </span>
              <p className="text-[0.97rem] leading-[1.55]">
                <b className="block text-[1.05rem]">None of these quite fit?</b>
                <span className="text-bg/60">
                  Book anyway and say what is going on. Your session goes where it helps most.
                </span>
              </p>
            </div>

            <Button href={CALENDLY} external size="md" className="w-full flex-none sm:w-auto">
              Book consultation
            </Button>
          </FadeIn>
        </section>

        {/* ---------- the meal guide ---------- */}
        <section className={`${SECTION_Y} ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(32px,3.8vw,48px)] max-w-[780px] text-center">
            <p className={KICKER}>The guide</p>
            <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              What do I <span className="text-accent">walk away with?</span>
            </h2>
            <p className="text-[1.03rem] leading-[1.65] text-ink-soft">
              A 7-day meal guide, written for you after the call. Here is what is inside it.
            </p>
          </FadeIn>

          <GuidePreview />

        </section>

        {/* ---------- who you are talking to ---------- */}
        <section className={`${SECTION_Y} ${SECTION_X}`}>
          <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[420px]">
              <div className="aspect-[4/4.4] overflow-hidden rounded-[30px] border-[5px] border-paper shadow-[0_34px_70px_rgba(0,51,51,0.18)]">
                <Image
                  src={DIETITIAN.photo}
                  alt="An akaani dietitian on a video consultation"
                  width={860}
                  height={946}
                  className="h-full w-full object-cover object-[60%_center]"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <p className={KICKER}>Your dietitian</p>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3.2rem)]">
                  Who am I <span className="text-accent">talking to?</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mb-4 text-[1.2rem] font-bold leading-[1.4] lg:max-w-[560px]">
                  A Registered Dietitian. Not a nutritionist, not a coach.
                </p>
                <p className="mb-7 text-[1.03rem] leading-[1.7] text-ink-soft lg:max-w-[560px]">
                  RD is a protected title: formal training, supervised practice, and a licence to treat conditions
                  like hypertension, diabetes and PCOS. Anyone can call themselves a nutritionist. Whichever of ours
                  you sit with, they build around rice, swallow, soups and beans.
                </p>
              </FadeIn>

              <p className="mb-1 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-ink/40">
                Every akaani dietitian
              </p>
              <Stagger className="lg:max-w-[560px]" gap={0.08}>
                {DIETITIAN.credentials.map((c) => (
                  <StaggerItem key={c}>
                    <div className="flex items-start gap-3.5 border-t border-line py-[13px] text-[0.98rem] leading-[1.55] last:border-b">
                      <i className="mt-[2px] flex-none not-italic font-extrabold text-accent">✓</i>
                      <span>{c}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* ---------- what you get + booking ---------- */}
        <section id="book" className={`${SECTION_Y} ${SECTION_X}`}>
          <FadeIn className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[40px] bg-ink text-bg lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-[clamp(34px,4.6vw,70px)] pb-0 lg:pb-[clamp(34px,4.6vw,70px)]">
              <p className={KICKER}>Booking</p>
              <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
                How do I <span className="text-accent">book?</span>
              </h2>
              <p className="mb-8 text-[1.02rem] leading-[1.65] text-bg/70 lg:mb-9 lg:max-w-[460px]">
                Three steps, and nothing to prepare.
              </p>

              <ol className="lg:max-w-[520px]">
                {STEPS.map((s) => (
                  <li
                    key={s.n}
                    className="grid grid-cols-[54px_1fr] gap-x-[18px] gap-y-1.5 border-t border-bg/[0.16] py-[22px] last:border-b"
                  >
                    <i className="row-span-2 pt-[3px] text-[0.82rem] font-extrabold not-italic tracking-[0.08em] text-accent">
                      {s.n}
                    </i>
                    <b className="text-[1.06rem]">{s.title}</b>
                    <span className="col-start-2 text-[0.94rem] leading-[1.55] text-bg/60">{s.body}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center justify-center px-[clamp(20px,3vw,46px)] pb-[clamp(30px,3vw,46px)] pt-8 lg:pt-[clamp(24px,3vw,46px)]">
              <div className="w-full max-w-[420px] rounded-[26px] bg-paper lg:max-w-[340px] p-[30px] text-ink shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                <span className="inline-block rounded-full bg-accent px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.1em] text-white">
                  1-on-1 session
                </span>
                <b className="mt-3.5 block text-[1.3rem]">Nutrition consultation</b>
                <div className="mb-5 mt-2.5 flex items-baseline gap-2">
                  <b className="text-[2.3rem] font-extrabold leading-none">₦50,000</b>
                  <span className="text-[0.82rem] font-semibold text-ink-soft">per session</span>
                </div>
                {[
                  ["Your guide", "Inbox, 24 hours"],
                  ["The call", "45 minutes, on video"],
                  ["Follow-up", "Free reschedule"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-t border-line py-[11px] text-[0.92rem]">
                    <span className="text-ink-soft">{k}</span>
                    <b>{v}</b>
                  </div>
                ))}
                <Button href={CALENDLY} external size="lg" className="mt-5 w-full">
                  Book consultation
                </Button>
                <p className="mt-3.5 text-center text-[0.78rem] text-ink-soft">
                  Scheduled via Calendly. Reschedule anytime.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ---------- faq ---------- */}
        <section id="faq" className={`pt-7 pb-16 md:pt-10 md:pb-24 lg:pt-14 lg:pb-28 ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(34px,4vw,50px)] max-w-[760px] text-center">
            <p className="mb-3.5 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink-soft">Before you book</p>
            <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)]">Everything else you are wondering</h2>
          </FadeIn>

          <Faq items={FAQS} />

          <FadeIn className="mx-auto mt-[clamp(40px,5vw,64px)] max-w-[900px] rounded-[26px] bg-mist p-[clamp(30px,3.6vw,44px)] text-center">
            <b className="mb-2 block text-[1.3rem]">Ready when you are.</b>
            <p className="mb-6 text-[1rem] text-ink-soft">
              45 minutes on a video call, and your Nigerian meal guide in your mail within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CALENDLY} external size="lg" className="w-full sm:w-auto">
                Book consultation
              </Button>
              <Button href="/contact" variant="ghostDark" size="lg" className="w-full sm:w-auto">
                Ask a question first
              </Button>
            </div>
          </FadeIn>
        </section>
      </main>

      <FooterLight />
    </>
  );
}
