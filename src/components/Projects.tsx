import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Check, ChevronDown, GitBranch } from "lucide-react";
import { PROJECTS, type Project } from "../data";
import { Chip, GhostText, Reveal, SectionHead, Tilt } from "./ui";
import { cn } from "../utils/cn";

/* ------------------------------ parallax image ------------------------------ */

function ParallaxImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  return (
    <div ref={ref} className="h-full w-full overflow-hidden">
      <motion.div style={{ y }} className="h-full w-full scale-[1.16]">
        <img
          src={src}
          alt={alt}
          className="aspect-[16/10] h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
      </motion.div>
    </div>
  );
}

/* ------------------------------- flagship card ------------------------------ */

function Flagship({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <Reveal>
      <article className="group border-t border-line">
        <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12">
          {/* image */}
          <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
            <Tilt max={4.5} className="relative border border-line">
              <ParallaxImg src={p.image!} alt={p.title} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-coal/30" />
              <span className="text-stroke pointer-events-none absolute bottom-4 left-5 font-display text-6xl font-bold transition-transform duration-700 group-hover:-translate-y-2 md:text-8xl">
                {p.index}
              </span>
              <div className="pointer-events-none absolute right-4 top-4 flex gap-2">
                <span className="border border-line bg-coal/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-fog uppercase backdrop-blur-md">
                  {p.domain}
                </span>
                <span className="border border-accent/40 bg-coal/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-accent uppercase backdrop-blur-md">
                  {p.year}
                </span>
              </div>
            </Tilt>

            {/* pipeline (flagship 1) */}
            {p.pipeline && (
              <div className="mt-6 border border-line p-6 transition-colors duration-500 hover:border-accent/30">
                <p className="mb-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
                  <GitBranch className="h-3.5 w-3.5 text-accent" />
                  Agentic pipeline
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
                  {p.pipeline.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-accent/50 font-mono text-[9px] text-accent">
                          {i + 1}
                        </span>
                        <span className="font-display text-sm font-semibold tracking-tight text-ink">
                          {s.name}
                        </span>
                      </div>
                      <p className="mt-2 pl-[34px] font-mono text-[10px] leading-relaxed text-dim">
                        {s.step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* copy */}
          <div className={cn("flex flex-col lg:col-span-5", flip && "lg:order-1")}>
            <p className="font-mono text-[11px] tracking-[0.25em] text-accent uppercase">
              {p.client} · via {p.via}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink md:text-[2.6rem]">
              {p.title}
            </h3>
            <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
              Role — {p.role}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-fog">{p.description}</p>

            {p.outcome && (
              <ul className="mt-7 space-y-3 border-t border-line pt-6">
                {p.outcome.map((o, i) => (
                  <motion.li
                    key={o}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-[14px] font-medium text-ink"
                  >
                    <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent/15">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {o}
                  </motion.li>
                ))}
              </ul>
            )}

            <div className="mt-auto pt-8">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* -------------------------------- compact row ------------------------------- */

function Row({ p, open, onToggle }: { p: Project; open: boolean; onToggle: () => void }) {
  return (
    <Reveal>
      <div className="border-t border-line">
        <button
          onClick={onToggle}
          className="group grid w-full grid-cols-12 items-center gap-4 py-6 text-left transition-colors duration-300 hover:bg-panel/50 md:px-4 md:py-8"
        >
          <span className="col-span-2 font-mono text-xs text-accent md:col-span-1">{p.index}</span>
          <span className="col-span-9 md:col-span-5">
            <span
              className={cn(
                "font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 md:text-3xl",
                open ? "text-accent" : "text-ink group-hover:text-accent"
              )}
            >
              {p.title}
            </span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-dim uppercase md:col-span-3 md:block">
            {p.client}
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-dim uppercase md:col-span-2 md:block">
            {p.year}
          </span>
          <span className="col-span-1 flex justify-end">
            <span
              className={cn(
                "grid h-9 w-9 place-items-center border border-line transition-all duration-500 group-hover:border-accent",
                open && "rotate-180 border-accent bg-accent text-coal"
              )}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-8 pb-10 pt-1 md:grid-cols-12 md:px-4">
                <div className="md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-2">
                  <p className="text-[15px] leading-relaxed text-fog">{p.description}</p>
                  {p.outcome && (
                    <ul className="mt-5 space-y-2 text-sm text-ink">
                      {p.outcome.map((outcome) => <li key={outcome}>• {outcome}</li>)}
                    </ul>
                  )}
                </div>
                <div className="space-y-3 md:col-span-4 lg:col-span-3">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
                    Role — {p.role}
                  </p>
                  {p.facts?.map((f) => (
                    <div key={f.label} className="border-l-2 border-accent/30 pl-3">
                      <p className="font-mono text-[9px] tracking-[0.2em] text-dim uppercase">
                        {f.label}
                      </p>
                      <p className="mt-0.5 text-[13px] text-ink">{f.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap content-start gap-2 md:col-span-12 lg:col-span-3">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

/* ---------------------------------- section --------------------------------- */

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const flagship = PROJECTS.filter((p) => p.flagship);
  const rest = PROJECTS.filter((p) => !p.flagship);

  return (
    <section id="work" className="relative">
      <GhostText text="Shipped" className="top-16 left-[4%] text-[17vw]" reverse />
      <div className="relative mx-auto max-w-[100rem] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="04" label="Selected work" right="5 engagements · enterprise platforms" />

        <div className="mt-10 md:mt-14">
          {flagship.map((p, i) => (
            <Flagship key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
            ↳ Healthcare, insurance, banking & media engagements
          </p>
        </Reveal>
        <div className="mt-4 border-b border-line">
          {rest.map((p) => (
            <Row
              key={p.id}
              p={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
