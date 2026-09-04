import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import BookFlow from "./BookFlow";

export const metadata: Metadata = {
  title: "Book a consultation | akaani",
  description: "Pick a time with an akaani Registered Dietitian.",
};

export default function BookPage() {
  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <main className="px-5 pb-20 pt-[120px] sm:px-8 lg:px-[72px]">
        <div className="mx-auto mb-9 max-w-[760px] text-center">
          <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent">Booking</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)]">Book your consultation</h1>
        </div>
        <BookFlow />
      </main>
      <FooterLight />
    </>
  );
}
