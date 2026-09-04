import Nav from "@/components/Nav";
import FooterLight from "@/components/FooterLight";
import Manage from "./Manage";

export const metadata = { title: "Manage your booking | akaani" };

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ t?: string }>;
}) {
  const { id } = await params;
  const { t } = await searchParams;

  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <main className="px-5 pb-20 pt-[130px] sm:px-8 lg:px-[72px]">
        <Manage id={id} token={t} />
      </main>
      <FooterLight />
    </>
  );
}
