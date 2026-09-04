import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import Confirm from "./Confirm";

export const metadata = { title: "Your booking | akaani" };

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; t?: string }>;
}) {
  const { id, t } = await searchParams;

  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <main className="px-5 pb-20 pt-[130px] sm:px-8 lg:px-[72px]">
        {id ? (
          <Confirm id={id} token={t} />
        ) : (
          <div className="mx-auto max-w-[620px] text-center">
            <h1 className="mb-3 text-[clamp(1.8rem,3.4vw,2.6rem)]">No booking to show</h1>
            <p className="text-ink-soft">This link is missing its booking reference.</p>
          </div>
        )}
      </main>
      <FooterLight />
    </>
  );
}
