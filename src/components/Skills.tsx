import { Sparkles } from "lucide-react";
import { SKILL_GROUPS } from "../data";
import { Chip, GhostText, Reveal, SectionHead, SpotCard } from "./ui";

export default function Skills() {
  const featured = SKILL_GROUPS.find((g) => g.featured)!;
  const rest = SKILL_GROUPS.filter((g) => !g.featured);

  return (
    <section id="expertise" className="relative">
      <GhostText text="Expertise" className="top-6 left-[8%] text-[16vw]" reverse />
      <div className="relative mx-auto max-w-[100rem] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="02" label="Expertise" right="A → F · the whole stack, mapped" />

        {/* featured GenAI panel */}
        <Reveal className="mt-14 md:mt-20">
          <SpotCard
            size={520}
            className="relative overflow-hidden border border-accent/40 bg-gradient-to-br from-panel via-panel to-accent/[0.06] transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative p-7 md:p-12">
              <div className="bg-grid absolute inset-0 opacity-40" />
              <Sparkles className="animate-float absolute right-8 top-8 h-6 w-6 text-accent/60" />
              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                  {featured.index} — current frontier
                </p>
                <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                      GenAI &{" "}
                      <em className="font-editorial font-normal italic text-accent">
                        Agentic Systems
                      </em>
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fog">
                      From Copilot-assisted SDLC to full agent runtimes — planners, validators,
                      audit trails. This is where I design, lead and ship.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 lg:col-span-7 lg:justify-end">
                    {featured.items.map((item) => (
                      <Chip key={item} className="border-accent/30 bg-coal/60 text-[11.5px]">
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotCard>
        </Reveal>

        {/* grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className="h-full">
              <SpotCard
                className="group h-full overflow-hidden border border-line bg-panel/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50"
                size={340}
              >
                <div className="relative h-full p-7">
                  <span className="text-stroke-dim pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[7.5rem] font-bold leading-none transition-all duration-500 group-hover:-translate-y-2 group-hover:text-accent/10">
                    {g.index}
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                    {g.index} — {g.blurb}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    {g.title}
                  </h3>
                  <div className="mt-6 flex max-w-[85%] flex-wrap gap-2">
                    {g.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
