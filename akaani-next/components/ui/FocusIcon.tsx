type Name = "weight" | "fitness" | "review" | "reset" | "family";

const PATHS: Record<Name, React.ReactNode> = {
  // downward trend: weight coming off and staying off
  weight: (
    <>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M21 12v5h-5" />
    </>
  ),
  // dumbbell
  fitness: (
    <>
      <path d="M4 9v6M8 7v10M16 7v10M20 9v6" />
      <path d="M8 12h8" />
    </>
  ),
  // bowl of food, steaming
  review: (
    <>
      <path d="M3 12h18a9 9 0 0 1-18 0Z" />
      <path d="M9 6c0-1 1-1 1-2M13 6c0-1 1-1 1-2M17 6c0-1 1-1 1-2" />
    </>
  ),
  // reset / start again
  reset: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v5h-5" />
    </>
  ),
  // family: two figures
  family: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M3 20a6 6 0 0 1 12 0M15.5 20a4.5 4.5 0 0 1 5.5-4.4" />
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
