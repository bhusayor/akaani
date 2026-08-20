import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import Faq from "@/components/Faq";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Motion from "./Motion";

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
  {
    n: "01",
    title: "A week, mapped out",
    body: "Breakfast, lunch and dinner for seven days, built from the food you already cook.",
  },
  {
    n: "02",
    title: "Portions you can see",
    body: "Cups, wraps, bowls and pieces. No weighing scale, no grams you have to imagine.",
  },
  {
    n: "03",
    title: "Swaps that keep the taste",
    body: "What to change and what to leave alone, for the meals you are not giving up.",
  },
  {
    n: "04",
    title: "Your numbers, explained",
    body: "Calories and macros set for your body, with what they mean at the table.",
  },
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
    a: "Use the reschedule link in your confirmation mail. There is no charge for moving your session.",
  },
  {
    q: "I am not sick. Is this still for me?",
    a: "Yes. Most people book for fat loss, muscle gain, energy, pregnancy, or simply to stop guessing at every meal. You do not need a diagnosis to want a guide that fits your body.",
  },
];

const KICKER = "mb-4 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-accent";
const SECTION_X = "px-5 sm:px-8 lg:px-[72px]";

function AskItem({ tag, q, most }: { tag: string; q: string; most?: boolean }) {
  return (
    <div className="group/item relative border-t border-line px-6 py-[17px] transition-[background-color,padding-left] duration-500 ease-brand first-of-type:border-t-0 hover:bg-bg-soft/40 hover:pl-8 md:px-8 md:hover:pl-10">
      <span className="absolute inset-y-2 left-0 w-[3px] origin-center scale-y-0 rounded-r-[3px] bg-accent transition-transform duration-500 ease-brand group-hover/item:scale-y-100" />
      <span className="mb-1.5 block text-[0.69rem] font-extrabold uppercase tracking-[0.14em] text-accent">
        {tag}
        {most && (
          <em className="ml-2 rounded-full bg-ink px-2 py-[3px] align-middle text-[0.6rem] not-italic tracking-[0.1em] text-white">
            Most asked
          </em>
        )}
      </span>
      <q className="block text-[clamp(1rem,1.25vw,1.1rem)] font-semibold leading-[1.45] text-ink">{q}</q>
    </div>
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
                  Sit with akaani&apos;s own registered dietitian, qualified to speak on your goal and your health.
                  Hypertension, diabetes, PCOS, gut issues, training, pregnancy. You leave with a personal Nigerian meal
                  guide in your mail within 24 hours.
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="flex flex-wrap gap-3.5">
                  <Button href={CALENDLY} external variant="dark" size="lg">
                    Book consultation
                  </Button>
                  <Button href="#ask" variant="ghostDark" size="lg">
                    See what you can ask
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
                Meal guide in your mail in 24 hours
              </div>
            </div>
          </div>
        </section>

        {/* ---------- what you can ask ---------- */}
        <section id="ask" className={`py-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(38px,4.4vw,54px)] max-w-[780px] text-center">
            <p className={KICKER}>What you can ask</p>
            <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Bring the question
              <br />
              <span className="text-accent">you have been googling.</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.65] text-ink-soft">
              A registered dietitian is qualified to talk about food and health, not just calories.
              <br />
              Find yourself in one of these.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(20px,2.6vw,34px)] md:grid-cols-2">
            {[
              {
                title: "A doctor has mentioned something",
                sub: "What our dietitian sees most, and is trained to build a guide around alongside your doctor.",
                items: CONDITIONS,
              },
              {
                title: "Something just feels off",
                sub: "No diagnosis needed. This is why most people book their first session.",
                items: GOALS,
              },
            ].map((panel, i) => (
              <FadeIn key={panel.title} delay={i * 0.12} as="article">
                <article className="overflow-hidden rounded-[28px] border border-line bg-paper transition-[border-color,box-shadow] duration-500 hover:border-accent/45 hover:shadow-[0_26px_54px_rgba(0,51,51,0.09)]">
                  <div className="border-b border-line p-6 md:p-8">
                    <b className="mb-2 flex items-center gap-[11px] text-[clamp(1.12rem,1.5vw,1.34rem)] font-extrabold">
                      <span className="h-[9px] w-[9px] flex-none rounded-full bg-accent" />
                      {panel.title}
                    </b>
                    <span className="block pl-5 text-[0.94rem] leading-[1.55] text-ink-soft">{panel.sub}</span>
                  </div>
                  {panel.items.map((item) => (
                    <AskItem key={item.tag} {...item} />
                  ))}
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mx-auto mt-[clamp(24px,3vw,36px)] flex max-w-[1280px] flex-wrap items-center justify-between gap-6 rounded-[26px] bg-bg-soft p-[clamp(26px,3vw,38px)]">
            <div>
              <b className="mb-1.5 block text-[1.14rem]">Your question is not on the list?</b>
              <p className="max-w-[620px] text-[0.97rem] leading-[1.6] text-ink-soft">
                Bring it anyway. If it touches what you eat, it is worth 45 minutes. Your dietitian works alongside your
                doctor, never instead of them.
              </p>
            </div>
            <a
              href="#book"
              className="group inline-flex items-center gap-2 whitespace-nowrap text-[0.97rem] font-bold text-ink underline decoration-accent decoration-2 underline-offset-[5px] transition-colors duration-300 hover:text-accent"
            >
              See how the session works
              <i className="not-italic text-accent transition-transform duration-300 ease-brand group-hover:translate-y-0.5">
                ↓
              </i>
            </a>
          </FadeIn>
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
                  ["Your guide", "Within 24 hours"],
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

        {/* ---------- your meal guide ---------- */}
        <section className={`pb-[clamp(80px,12vh,130px)] ${SECTION_X}`}>
          <FadeIn className="mx-auto mb-[clamp(30px,3.6vw,44px)] max-w-[760px] text-center">
            <p className={KICKER}>Your meal guide</p>
            <h2 className="mb-4 text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Not a PDF of rules.
              <br />
              <span className="text-accent">A week you can cook.</span>
            </h2>
            <p className="text-[1.03rem] leading-[1.65] text-ink-soft">
              Written after your call, sent to your mail, and built entirely around the food you already buy.
            </p>
          </FadeIn>

          <Stagger className="mx-auto grid max-w-[1280px] gap-[clamp(16px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {GUIDE.map((card) => (
              <StaggerItem key={card.n}>
                <article className="h-full rounded-[22px] border border-line bg-tint p-6 transition-[transform,border-color] duration-500 ease-brand hover:-translate-y-1.5 hover:border-accent/45 md:p-7">
                  <i className="mb-4 block text-[0.72rem] font-extrabold not-italic tracking-[0.2em] text-accent">
                    {card.n}
                  </i>
                  <h3 className="mb-2.5 text-[1.12rem]">{card.title}</h3>
                  <p className="text-[0.94rem] leading-[1.6] text-ink-soft">{card.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mx-auto mt-[clamp(24px,3vw,34px)] max-w-[1280px] border-l-[3px] border-accent pl-[18px] text-[0.96rem] leading-[1.6] text-ink-soft">
            <b className="text-ink">Managing hypertension, diabetes or PCOS?</b> Your guide is built around your
            readings, your medication and what your doctor has already told you.
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
