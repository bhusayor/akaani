/**
 * Lu, as the supplied animation.
 *
 * Replaces the inline SVG mascot. Deliberately does not set its own width: the
 * containers it sits in each size their child, and an inline width would beat
 * every one of those rules.
 */
export default function LuGif({ className }: { className?: string }) {
  return (
    <img
      src="/assets/Welcome%20Animation_1.gif"
      alt=""
      aria-hidden="true"
      width={400}
      height={400}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
    />
  );
}
