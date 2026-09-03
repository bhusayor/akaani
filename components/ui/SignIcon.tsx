type Name = "clock" | "flat" | "report" | "bowl" | "cut" | "advice";

const PATHS: Record<Name, React.ReactNode> = {
  // energy gone by mid afternoon
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  // the number that will not move
  flat: (
    <>
      <path d="M4 12h11" />
      <path d="M15 8.5 19.5 12 15 15.5" />
    </>
  ),
  // a result nobody explained
  report: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  // heavy after eating
  bowl: (
    <>
      <path d="M3 12h18a9 9 0 0 1-18 0Z" />
      <path d="M9 6c0-1 1-1 1-2M13 6c0-1 1-1 1-2M17 6c0-1 1-1 1-2" />
    </>
  ),
  // foods given up for nothing
  cut: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6l12.8 12.8" />
    </>
  ),
  // everyone says something different
  advice: (
    <>
      <path d="M8 14H5.5A2.5 2.5 0 0 1 3 11.5v-4A2.5 2.5 0 0 1 5.5 5h8A2.5 2.5 0 0 1 16 7.5V9" />
      <path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H14l-3 3v-3h-.5A2.5 2.5 0 0 1 8 14.5v-3A2.5 2.5 0 0 1 10.5 9h8a2.5 2.5 0 0 1 2.5 2.5Z" />
    </>
  ),
};

/** Marker on the "you might need a dietitian if" cards. */
export default function SignIcon({ name }: { name: Name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[26px] w-[26px]"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export type { Name as SignIconName };
