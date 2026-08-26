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
import Motion from "./Motion";

export const metadata: Metadata = {
  title: "Talk to our in-house dietitian | akaani",
  description:
    "A 45-minute video call with akaani's in-house Registered Dietitian. Weight management, fitness nutrition, African diet review, healthy eating resets and family planning. Your Personal Nutrition Guide lands in your inbox within 24 hours.",
};

const CALENDLY = "https://calendly.com/useakaani";

const FOCUS = [
  {
    n: "01",
    icon: "weight" as FocusIconName,
    popular: true,
    title: "Weight Management Consultation",
    who: "For weight that will not move, or will not stay off, without giving up the food you love.",
    q: "I am eating less and still not losing weight.",
    tags: ["Fat loss", "PCOS", "Sustainable habits"],
  },
  {
    n: "02",
    icon: "fitness" as FocusIconName,
    title: "Fitness Nutrition Consultation",
    who: "For training, performance and recovery, built on Nigerian food rather than imported supplements.",
    q: "Am I even eating enough protein for my gym week?",
    tags: ["Protein", "Training days", "Muscle gain"],
  },
  {
    n: "03",
    icon: "review" as FocusIconName,
    title: "African Diet Nutrition Review",
    who: "A proper look at what you already eat, and what it is doing for your health.",
    q: "Is my everyday diet working for me, or against me?",
    tags: ["Hypertension", "Diabetes", "Portions"],
  },
  {
    n: "04",
    icon: "reset" as FocusIconName,
    title: "Healthy Eating Reset",
    who: "For starting again after things slipped, without a regime you will abandon in a week.",
    q: "I want to eat better. I just do not know where to start.",
    tags: ["Energy", "Digestion", "Routine"],
  },
  {
    n: "05",
    icon: "family" as FocusIconName,
    title: "Family Nutrition Planning",
    who: "For the whole household, so one pot can work for everybody at the table.",
    q: "How do I cook once and still feed everyone properly?",
    tags: ["Children", "One-pot cooking", "Budget"],
  },
];

/**
 * TODO before launch: replace `name` and `photo` with the dietitian's own
 * name and headshot. Everything else here is true of any RD.
 */
const DIETITIAN = {
  name: "akaani's in-house dietitian",
  title: "Registered Dietitian (RD)",
  photo: "/assets/consult-hero.jpg",
  credentials: [
    "Registered Dietitian (RD), licensed to provide medical nutrition therapy",
    "Specialises in Nigerian and West African eating patterns",
    "Works alongside your doctor, never instead of them",
    "Writes every nutrition guide personally, no handoffs",
  ],
};

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
  { n: "02", title: "45-minute video call", body: "One-on-one with akaani's in-house Registered Dietitian." },
  { n: "03", title: "Your Personal Nutrition Guide", body: "In your inbox within 24 hours." },
];

const FAQS = [
  {
    q: "Is a dietitian the same as a nutritionist?",
    a: "Not quite. Registered Dietitian (RD) is a protected title: it means formal training, supervised practice and a licence to provide medical nutrition therapy, which is why ours can work around hypertension, diabetes and PCOS. Anyone can call themselves a nutritionist. akaani works with an in-house RD, so the person on your call is the same person who writes your guide.",
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
    a: "Yes. Most people book for weight management, fitness nutrition, a healthy eating reset or feeding a family well. You do not need a diagnosis to want a guide that fits your body.",
  },
];

const KICKER = "mb-4 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-accent";
const SECTION_X = "px-5 sm:px-8 lg:px-[72px]";

function FocusCard({
  n,
  icon,
  title,
  who,
  q,
  tags,
  popular,
  index,
}: {
  n: string;
  icon: FocusIconName;
  title: string;
  who: string;
  q: string;
  tags: string[];
  popular?: boolean;
  index: number;
}) {
  return (
    <HoverLift
      index={index}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_18px_40px_rgba(0,51,51,0.08)] md:p-8"
    >
      {/* accent rule that draws across the top on hover */}
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-brand group-hover:scale-x-100" />

      <div className="mb-6 flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-ink text-bg transition-colors duration-300 group-hover:bg-accent">
          <FocusIcon name={icon} />
        </span>
        {popular ? (
          <span className="rounded-full bg-accent px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-white">
            Most booked
          </span>
        ) : (
          <span className="text-[0.72rem] font-extrabold tracking-[0.2em] text-ink/20 transition-colors duration-300 group-hover:text-accent">
            {n}
          </span>
        )}
      </div>

      <h3 className="mb-3 text-[clamp(1.08rem,1.4vw,1.24rem)] leading-[1.25]">{title}</h3>
      <p className="mb-5 text-[0.95rem] leading-[1.6] text-ink-soft">{who}</p>
      <q className="mb-6 block border-l-2 border-accent/40 pl-4 text-[0.96rem] font-medium italic leading-[1.5] text-ink/75">
        {q}
      </q>

      <p className="mt-auto border-t border-line pt-4 text-[0.69rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
        {tags.map((t, i) => (
          <span key={t}>
            {i > 0 && <span className="px-2 text-accent">·</span>}
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
        <section className={`relative overflow-hidden pb-[clamp(70px,9vh,110px)] pt-[165px] ${SECTION_X}`}>
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
                <p className={KICKER}>1-on-1 with our in-house dietitian</p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="mb-6 text-[clamp(2.6rem,5.2vw,4.5rem)]">
                  Talk to our in-house dietitian who knows <span className="text-accent">Nigerian food.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mb-9 max-w-[560px] text-[clamp(1rem,1.35vw,1.16rem)] leading-[1.65] text-ink-soft">
                  Sit with akaani&apos;s Registered Dietitian for personalized guidance around your goals, your health,
                  and the Nigerian foods you already eat. You leave with your Personal Nutrition Guide in your inbox
                  within 24 hours.
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="flex flex-wrap gap-3.5">
                  <Button href={CALENDLY} external variant="dark" size="lg">
                    Book consultation
                  </Button>
                  <Button href="#ask" variant="ghostDark" size="lg">
                    See what we focus on
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div
              className="relative w-[clamp(300px,30vw,430px)] justify-self-center"
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
                className="absolute -left-[18px] -top-5 rounded-[18px] rounded-bl-[4px] bg-accent px-[22px] py-3.5 text-[1.35rem] font-extrabold leading-[1.1] text-white shadow-[0_18px_44px_rgba(218,112,0,0.35)]"
              >
                ₦50,000
                <span className="mt-[3px] block text-[0.7rem] font-semibold uppercase tracking-[0.06em] opacity-85">
                  per session
                </span>
              </div>
              <div
                data-gsap="plan"
                className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full border border-line bg-paper px-[18px] py-3 text-[0.84rem] font-bold text-ink shadow-[0_18px_44px_rgba(0,51,51,0.16)]"
              >
                <i className="h-2 w-2 rounded-full bg-accent" />
                Your guide, in your inbox in 24 hours
              </div>
            </div>
          </div>
        </section>

        {/* ---------- what we focus on ---------- */}
        <section id="ask" className={`py-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(38px,4.4vw,54px)] max-w-[800px] text-center">
            <p className={KICKER}>What we focus on</p>
            <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Pick the conversation
              <br />
              <span className="text-accent">you actually need.</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.65] text-ink-soft">
              Every session is 45 minutes with the same Registered Dietitian. What changes is where we point it.
            </p>
          </FadeIn>

          {/* 5 cards + the "not sure" card fill an even 6-cell grid, so no orphan slot. */}
          <div className="mx-auto grid max-w-[1280px] items-stretch gap-[clamp(16px,1.8vw,22px)] sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f, i) => (
              <FocusCard key={f.title} {...f} index={i} />
            ))}

            <HoverLift
              index={FOCUS.length}
              className="group flex h-full flex-col justify-between rounded-[22px] bg-ink p-7 text-bg md:p-8"
            >
              <div>
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white">
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
                <h3 className="mb-3 text-[clamp(1.08rem,1.4vw,1.24rem)] leading-[1.25] text-bg">
                  Not sure which one you need?
                </h3>
                <p className="text-[0.95rem] leading-[1.6] text-bg/60">
                  Book anyway and say what is going on. Your dietitian will point the session where it is most useful,
                  and works alongside your doctor, never instead of them.
                </p>
              </div>

              <a
                href="#book"
                className="mt-7 inline-flex items-center gap-2 self-start border-t border-bg/15 pt-5 text-[0.95rem] font-bold text-bg transition-colors duration-300 hover:text-accent"
              >
                See how the session works
                <i className="not-italic text-accent transition-transform duration-300 ease-brand group-hover:translate-y-0.5">
                  ↓
                </i>
              </a>
            </HoverLift>
          </div>
        </section>

        {/* ---------- why a dietitian ---------- */}
        <section className={`bg-mist py-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <div className="mx-auto max-w-[1180px] rounded-[34px] bg-white p-[clamp(32px,4.4vw,64px)]">
            <FadeIn className="mb-[clamp(34px,4vw,48px)] max-w-[780px]">
              <p className={KICKER}>Why a dietitian</p>
              <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
                You do not need to be sick
                <br />
                <span className="text-accent">to see a dietitian.</span>
              </h2>
              <p className="text-[1.06rem] leading-[1.65] text-ink-soft">
                Most people book because something is not adding up. The weight, the bloating, the energy, the lab
                results, the food you were told to stop eating. A registered dietitian is the person actually qualified
                to sort that out.
              </p>
            </FadeIn>

            <Stagger className="grid gap-[clamp(16px,2vw,26px)] md:grid-cols-3" gap={0.12}>
              {WHY.map((card) => (
                <StaggerItem key={card.badge}>
                  <article className="h-full rounded-[22px] border border-line bg-tint p-6 transition-[transform,border-color] duration-500 ease-brand hover:-translate-y-1.5 hover:border-accent/45 md:p-[30px]">
                    <i className="mb-5 grid h-[46px] w-[46px] place-items-center rounded-[14px] bg-ink text-[0.78rem] font-extrabold not-italic tracking-[0.06em] text-bg">
                      {card.badge}
                    </i>
                    <h3 className="mb-2.5 text-[clamp(1.1rem,1.5vw,1.28rem)]">{card.title}</h3>
                    <p className="text-[0.95rem] leading-[1.62] text-ink-soft">{card.body}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ---------- meet your dietitian ---------- */}
        <section className={`py-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <div className="mx-auto grid max-w-[1180px] items-center gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn className="relative w-full max-w-[420px] justify-self-center">
              <div className="aspect-[4/4.4] overflow-hidden rounded-[30px] border-[5px] border-paper shadow-[0_34px_70px_rgba(0,51,51,0.18)]">
                <Image
                  src={DIETITIAN.photo}
                  alt="akaani's in-house Registered Dietitian"
                  width={860}
                  height={946}
                  className="h-full w-full object-cover object-[60%_center]"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-5 py-3 text-[0.8rem] font-bold text-bg shadow-[0_18px_40px_rgba(0,51,51,0.24)]">
                <span className="text-accent">RD</span> · {DIETITIAN.title}
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <p className={KICKER}>Meet your dietitian</p>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3.2rem)]">
                  The same RD on every call,
                  <br />
                  <span className="text-accent">and in every guide.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mb-4 max-w-[560px] text-[1.03rem] leading-[1.7] text-ink-soft">
                  Every akaani consultation is run by our in-house Registered Dietitian. RD is a protected title: it
                  means formal training in nutrition and dietetics, supervised practice, and a licence to provide
                  medical nutrition therapy. It is not a weekend certificate, and it is not a wellness page.
                </p>
                <p className="mb-8 max-w-[560px] text-[1.03rem] leading-[1.7] text-ink-soft">
                  Her focus is West African food. Rice, swallow, soups, beans and the things you actually buy are the
                  starting point of your guide, not the thing you are told to give up.
                </p>
              </FadeIn>

              <Stagger className="max-w-[560px]" gap={0.08}>
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
        <section id="book" className={`py-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[40px] bg-ink text-bg lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-[clamp(34px,4.6vw,70px)]">
              <p className={KICKER}>What you get</p>
              <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
                One session.
                <br />
                <span className="text-accent">A guide made for you.</span>
              </h2>
              <p className="mb-9 max-w-[460px] text-[1.02rem] leading-[1.65] text-bg/70">
                Nothing to fill in before you book. Pick a time, show up, and talk.
              </p>

              <ol className="max-w-[520px]">
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

            <div className="flex items-center justify-center p-[clamp(24px,3vw,46px)]">
              <div className="w-full max-w-[340px] rounded-[26px] bg-paper p-[30px] text-ink shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                <span className="inline-block rounded-full bg-accent px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.1em] text-white">
                  1-on-1 session
                </span>
                <b className="mt-3.5 block text-[1.3rem]">Nutrition consultation</b>
                <div className="mb-5 mt-2.5 flex items-baseline gap-2">
                  <b className="text-[2.3rem] font-extrabold leading-none">₦50,000</b>
                  <span className="text-[0.82rem] font-semibold text-ink-soft">per session</span>
                </div>
                {[
                  ["Length", "45 minutes"],
                  ["Format", "Video call"],
                  ["Your guide", "Inbox, 24 hours"],
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

        {/* ---------- your personal nutrition guide ---------- */}
        <section className={`pb-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(32px,3.8vw,48px)] max-w-[780px] text-center">
            <p className={KICKER}>What you receive</p>
            <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Your Personal
              <br />
              <span className="text-accent">Nutrition Guide.</span>
            </h2>
            <p className="text-[1.03rem] leading-[1.65] text-ink-soft">
              Written after your call and in your inbox within 24 hours, built entirely around the food you already buy.
            </p>
          </FadeIn>

          <GuidePreview />

          <FadeIn className="mx-auto mt-[clamp(24px,3vw,34px)] max-w-[1180px] border-l-[3px] border-accent pl-[18px] text-[0.96rem] leading-[1.6] text-ink-soft">
            <b className="text-ink">A week, mapped out.</b> A practical 7-day guide built around the foods you already
            eat, with meal ideas you can mix, match and repeat. Managing hypertension, diabetes or PCOS? It is shaped by
            your readings, your medication and what your doctor has already told you.
          </FadeIn>
        </section>

        {/* ---------- faq ---------- */}
        <section id="faq" className={`pb-[clamp(60px,8vh,90px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(34px,4vw,50px)] max-w-[760px] text-center">
            <p className="mb-3.5 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink-soft">Before you book</p>
            <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)]">Everything else you are wondering</h2>
          </FadeIn>

          <Faq items={FAQS} />

          <FadeIn className="mx-auto mt-[clamp(40px,5vw,64px)] max-w-[900px] rounded-[26px] bg-mist p-[clamp(30px,3.6vw,44px)] text-center">
            <b className="mb-2 block text-[1.3rem]">Still have questions?</b>
            <p className="mb-6 text-[1rem] text-ink-soft">
              Cannot find the answer you are looking for? Please chat to our friendly team.
            </p>
            <Button href="/contact" variant="dark" size="lg">
              Get in touch
            </Button>
          </FadeIn>
        </section>
      </main>

      <FooterLight />
    </>
  );
}
