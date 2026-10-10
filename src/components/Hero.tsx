import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { HERO_STATS, PROFILE } from "../data";
import { AvailabilityBadge, Counter, Magnetic } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

/* --------------------------- letter-animated name -------------------------- */

function Letters({
  word,
  baseDelay,
  className,
}: {
  word: string;
  baseDelay: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex overflow-hidden pb-[0.06em] ${className ?? ""}`}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "115%", rotate: 6 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{ duration: 1.05, delay: baseDelay + i * 0.05, ease: EASE }}
          whileHover={{ y: "-9%", rotate: -3, transition: { duration: 0.25 } }}
          className="inline-block will-change-transform"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------ rotating badge ----------------------------- */

function OrbitBadge() {
  return (
    <motion.a
      href="#work"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.7, duration: 0.8, ease: EASE }}
      className="group absolute -top-8 right-2 hidden h-36 w-36 lg:block xl:right-24"
      data-cursor
      aria-label="Scroll to work"
    >
      <div className="animate-rot-slow absolute inset-0">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <path
              id="orbitPath"
              d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            />
          </defs>
          <text
            className="fill-fog font-mono text-[13.5px] uppercase transition-colors duration-500 group-hover:fill-accent"
            style={{ letterSpacing: "3.5px" }}
          >
            <textPath href="#orbitPath">
              architecture · delivery · genai · java ·
            </textPath>
          </text>
        </svg>
      </div>
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-line transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-coal">
          <ArrowDown className="h-4 w-4" />
        </span>
      </span>
    </motion.a>
  );
}

/* --------------------------------- boot log -------------------------------- */

const BOOT_LINES = [
  { prompt: true, text: "whoami --verbose" },
  { text: "backend   → java · spring boot · kafka" },
  { text: "genai     → spring ai · langchain4j · llms" },
  { text: "delivery  → architecture · modernization · teams" },
  { text: "domains   → banking · insurance · healthcare", accent: true },
];

function BootLog() {
  return (
    <div className="border border-line bg-coal/70 p-5 backdrop-blur-md">
      <div className="mb-3 flex items-center gap-2 border-b border-line pb-2.5">
        <Terminal className="h-3.5 w-3.5 text-accent" />
        <span className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
          sunhare.sys — runtime profile
        </span>
        <span className="ml-auto flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
        </span>
      </div>
      <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
        {BOOT_LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15 + i * 0.26, duration: 0.5 }}
            className={line.accent ? "text-accent" : "text-fog"}
          >
            {line.prompt ? (
              <span>
                <span className="text-accent">❯</span>{" "}
                <span className="text-ink">{line.text}</span>
              </span>
            ) : (
              <span>{line.text}</span>
            )}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 + BOOT_LINES.length * 0.26 }}
        >
          <span className="text-accent">❯</span>{" "}
          <span className="caret inline-block h-3.5 w-2 translate-y-0.5 bg-accent" />
        </motion.p>
      </div>
    </div>
  );
}

/* ---------------------------------- hero ----------------------------------- */

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col overflow-hidden">
      {/* backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img src="images/hero-network.jpg" alt="" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-coal/70 via-coal/40 to-coal" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal/80 via-transparent to-coal/60" />
      </motion.div>
      <div className="bg-grid bg-fade-mask absolute inset-0" />
      {/* ambient glow */}
      <div className="animate-drift pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-accent/[0.07] blur-[120px]" />

      {/* top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 mx-auto flex w-full max-w-[100rem] items-center justify-between px-5 pt-24 md:px-10 md:pt-28"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
          Portfolio © 2026
        </span>
        <AvailabilityBadge className="hidden sm:inline-flex" />
        <span className="hidden font-mono text-[10px] tracking-[0.3em] text-dim uppercase md:block">
          19.07°N / 72.87°E — Mumbai
        </span>
      </motion.div>

      {/* name lockup */}
      <motion.div
        style={{ y: nameY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-1 flex-col justify-center px-5 py-14 md:px-10"
      >
        <div className="relative">
          <OrbitBadge />
          <h1
            className="font-display font-bold uppercase leading-[0.84] tracking-[-0.04em]"
            data-cursor
          >
            <span className="block text-[clamp(4rem,14.5vw,13rem)] text-ink">
              <Letters word="SUNIL" baseDelay={0.15} />
            </span>
            <span className="text-stroke block text-[clamp(4rem,14.5vw,13rem)]">
              <Letters word="SUNHARE" baseDelay={0.42} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="caret text-accent"
                style={{ WebkitTextStroke: "0" }}
              >
                .
              </motion.span>
            </span>
          </h1>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="lg:col-span-7"
          >
            <p className="max-w-xl font-display text-xl leading-snug text-ink md:text-[1.7rem]">
              Technology Architect & Delivery Leader modernizing platforms for{" "}
              <em className="font-editorial font-normal italic text-accent">
                banking, insurance & healthcare
              </em>{" "}
              — with 18+ years of enterprise delivery and AI solution leadership.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.3}>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-[11px] font-semibold tracking-[0.22em] text-coal uppercase transition-shadow duration-300 hover:shadow-[0_10px_40px_-8px_rgba(214,255,61,0.45)]"
                >
                  View selected work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href={PROFILE.mailto}
                  className="group inline-flex items-center gap-3 border border-line px-7 py-4 font-mono text-[11px] tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {PROFILE.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: EASE }}
            className="hidden lg:col-span-5 lg:block"
          >
            <BootLog />
          </motion.div>
        </div>
      </motion.div>

      {/* stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 1, ease: EASE }}
        className="relative z-10 border-t border-line bg-coal/60 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 md:grid-cols-4">
          {HERO_STATS.map((s, i) => (
            <div
              key={s.label}
              data-cursor
              className={`group border-line px-5 py-6 transition-colors duration-500 hover:bg-panel/70 md:px-10 md:py-7 ${
                i > 0 ? "md:border-l" : ""
              } ${i % 2 === 1 ? "max-md:border-l" : ""} ${i > 1 ? "max-md:border-t" : ""}`}
            >
              <div className="font-display text-3xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 font-mono text-[9.5px] tracking-[0.2em] text-dim uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
