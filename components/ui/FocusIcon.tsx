type Name = "pcos" | "diabetes" | "pressure" | "pregnancy" | "fatloss" | "muscle";

const PATHS: Record<Name, React.ReactNode> = {
  // hormonal cycle
  pcos: (
    <>
      <path d="M20 12a8 8 0 1 1-3.2-6.4" />
      <path d="M20.5 4.5V9h-4.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // blood glucose drop
  diabetes: (
    <>
      <path d="M12 3s5.5 6 5.5 9.5a5.5 5.5 0 0 1-11 0C6.5 9 12 3 12 3Z" />
      <path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  // heart and pulse
  pressure: (
    <>
      <path d="M20.4 5.6a4.6 4.6 0 0 0-6.5 0L12 7.5l-1.9-1.9a4.6 4.6 0 1 0-6.5 6.5L12 20.4l8.4-8.3a4.6 4.6 0 0 0 0-6.5Z" />
      <path d="M3.5 12.5h4L9 10.5l2 4 1.5-2.5h2" />
    </>
  ),
  // expecting: head, back, bump
  pregnancy: (
    <>
      <circle cx="9.4" cy="4.6" r="2.3" />
      <path d="M9.4 8.2V21" />
      <path d="M9.4 10.4c3.6 0 5.9 1.6 5.9 4s-2.3 3.9-5.9 3.9" />
    </>
  ),
  // downward trend
  fatloss: (
    <>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M21 12v5h-5" />
    </>
  ),
  // dumbbell
  muscle: (
    <>
      <path d="M4 9v6M8 7v10M16 7v10M20 9v6" />
      <path d="M8 12h8" />
    </>
  ),
};

/** Line icon used on the consultation cards. Inherits colour from its tile. */
export default function FocusIcon({ name }: { name: Name }) {
  return (
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
      {PATHS[name]}
    </svg>
  );
}

export type { Name as FocusIconName };
