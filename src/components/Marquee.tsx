import { MARQUEE_ITEMS } from "../data";

const PROOF_ITEMS = [
  "Audit-ready AI",
  "Enterprise modernization",
  "30% shorter review cycles",
  "35% MTTR reduction",
  "Human-in-the-loop",
  "Architecture governance",
  "18+ years in technology",
  "BFSI domain mastery",
];

export default function Marquee() {
  const row = (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-6 md:mx-10 md:gap-10">
          <span
            className={`font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl ${
              i % 3 === 0 ? "text-stroke-dim" : i % 3 === 1 ? "text-ink" : "text-accent"
            }`}
          >
            {item}
          </span>
          <span className="h-2 w-2 rotate-45 bg-accent/70" />
        </span>
      ))}
    </>
  );

  const proofRow = (
    <>
      {PROOF_ITEMS.map((item, i) => (
        <span key={i} className="mx-5 inline-flex items-center gap-5 md:mx-8 md:gap-8">
          <span className="text-stroke-dim font-display text-xl font-semibold uppercase tracking-tight md:text-3xl">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-accent/70" />
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-paused relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-coal to-transparent" />
      <div className="py-8 md:py-10">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          <div className="flex items-center">{row}</div>
          <div className="flex items-center" aria-hidden>
            {row}
          </div>
        </div>
      </div>
      <div className="border-t border-line py-4 md:py-5">
        <div className="animate-marquee-rev flex w-max whitespace-nowrap">
          <div className="flex items-center">{proofRow}</div>
          <div className="flex items-center" aria-hidden>
            {proofRow}
          </div>
        </div>
      </div>
    </div>
  );
}
