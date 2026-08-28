/** Both prices ship in the markup; CSS on <html data-region> shows one. */
export default function Price() {
  return (
    <>
      <span className="price-ng">&#8358;50,000</span>
      <span className="price-us">$50</span>
    </>
  );
}
