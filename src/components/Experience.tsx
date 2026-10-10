import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Building2 } from "lucide-react";
import { EXPERIENCE } from "../data";
import { Chip, GhostText, Reveal, SectionHead } from "./ui";

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative">
      <GhostText text="2008 — 2026" className="top-24 left-0 text-[15vw]" />
      <div className="relative mx-auto max-w-[100rem] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="03" label="Experience" right="eight organizations · 18+ years" />

        <div ref={railRef} className="relative mt-14 md:mt-20">
          {/* rail */}
          <div className="absolute bottom-0 left-[5px] top-2 w-px bg-line md:left-[7px]" />
          <motion.div
            style={{ scaleY: line }}
            className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-accent md:left-[7px]"
          />

          <div className="space-y-16 md:space-y-20">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.org + job.period} delay={0.05}>
                <article
                  className="group relative grid gap-5 pl-10 md:grid-cols-12 md:gap-8 md:pl-14"
                  data-cursor
                >
                  {/* node */}
                  <span
                    className={`absolute left-0 top-2 grid h-[11px] w-[11px] place-items-center rounded-full border transition-all duration-500 md:h-[15px] md:w-[15px] ${
                      i === 0
                        ? "border-accent bg-accent shadow-[0_0_18px_rgba(214,255,61,0.5)]"
                        : "border-line bg-panel group-hover:scale-125 group-hover:border-accent group-hover:bg-accent"
                    }`}
                  />

                  <div className="md:col-span-3">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                      {job.period}
                    </p>
                    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
                      {job.location} · {job.tag}
                    </p>
                  </div>

                  <div className="border-b border-line pb-12 transition-colors duration-500 group-hover:border-accent/40 md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="font-display text-3xl font-semibold tracking-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:text-4xl">
                        {job.org}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
                        <Building2 className="h-3 w-3" />
                        {job.role}
                      </span>
                    </div>
                    <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-fog">
                      {job.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.clients.map((c) => (
                        <Chip key={c}>{c}</Chip>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
