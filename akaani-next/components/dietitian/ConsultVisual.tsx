const RESULTS: [string, string, boolean][] = [
  ["Fasting glucose", "6.8", true],
  ["Blood pressure", "138/88", true],
  ["Weight", "No change, 8 months", false],
];

const PLATE = [
  "Ofada rice, one measured portion",
  "Beans at lunch, four days a week",
  "Swallow moved earlier in the day",
];

/**
 * Depicts the claim the section makes: a dietitian turns your readings into
 * changes to the food you already cook. Marked Example, since the numbers are
 * illustrative and nobody's results have been seen yet.
 */
export default function ConsultVisual() {
  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-34px_rgba(0,51,51,0.45)]">
        <div className="flex items-center justify-between gap-3 bg-ink px-5 py-3.5 text-bg">
          <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em]">From your results</span>
          <span className="rounded-full border border-bg/25 px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-bg/70">
            Example
          </span>
        </div>
        <dl className="px-5 py-2">
          {RESULTS.map(([k, v, flagged]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0">
              <dt className="text-[0.9rem] text-ink-soft">{k}</dt>
              <dd className={`flex items-center gap-1.5 text-[0.95rem] font-bold ${flagged ? "text-accent" : ""}`}>
                {v}
                {flagged && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex justify-center py-2.5" aria-hidden="true">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </div>

      <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-34px_rgba(0,51,51,0.45)]">
        <div className="bg-ink px-5 py-3.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-bg">
          To your plate
        </div>
        <ul className="px-5 py-2">
          {PLATE.map((t) => (
            <li key={t} className="flex items-start gap-3 border-b border-line py-3 text-[0.93rem] leading-[1.45] last:border-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-[3px] h-3.5 w-3.5 flex-none text-accent" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
