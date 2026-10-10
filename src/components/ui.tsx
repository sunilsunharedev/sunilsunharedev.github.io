import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  animate,
  type Variants,
} from "framer-motion";
import { cn } from "../utils/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- Mask reveal ------------------------------- */

export function MaskText({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* --------------------------- Word-by-word reveal --------------------------- */

const wordVar: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.85, ease: EASE } },
};

export function WordsReveal({
  parts,
  className,
  stagger = 0.03,
  delay = 0,
}: {
  parts: { t: string; cls?: string }[];
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const words = parts.flatMap((p) =>
    p.t
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => ({ w, cls: p.cls }))
  );
  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((wd, i) => (
        <span key={i} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            variants={wordVar}
            className={cn("inline-block will-change-transform", wd.cls)}
          >
            {wd.w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ------------------------------ Scramble text ------------------------------ */

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>-_[]{}=+*";

export function Scramble({
  text,
  className,
  speed = 0.9,
  delay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let frame = 0;
    const total = Math.max(1, Math.round(speed * 60));
    const start = performance.now() + delay * 1000;
    const tick = () => {
      if (performance.now() < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      frame++;
      const p = Math.min(1, frame / total);
      const reveal = Math.floor(p * text.length);
      let s = text.slice(0, reveal);
      for (let i = reveal; i < text.length; i++) {
        s += text[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(s);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}

/* --------------------------------- Magnetic -------------------------------- */

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const x = useSpring(cx, { stiffness: 200, damping: 15, mass: 0.25 });
  const y = useSpring(cy, { stiffness: 200, damping: 15, mass: 0.25 });

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    cx.set((e.clientX - (r.left + r.width / 2)) * strength);
    cy.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    cx.set(0);
    cy.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------- Tilt ---------------------------------- */

export function Tilt({
  children,
  className,
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 160, damping: 18, mass: 0.4 });
  const rotateY = useSpring(ry, { stiffness: 160, damping: 18, mass: 0.4 });

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * max);
    ry.set(px * max);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={cn("will-change-transform", className)}
      data-cursor
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------- Spotlight -------------------------------- */

export function SpotCard({
  children,
  className,
  size = 420,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={cn("group/spot relative", className)}>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), rgba(214,255,61,0.08), transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}

/* -------------------------------- Ghost text ------------------------------- */

export function GhostText({
  text,
  className,
  reverse = false,
}: {
  text: string;
  className?: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-10%", "6%"] : ["7%", "-11%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      <motion.span
        style={{ x }}
        className={cn(
          "text-stroke-dim absolute whitespace-nowrap font-display font-bold uppercase leading-none tracking-tight",
          className
        )}
      >
        {text}
      </motion.span>
    </div>
  );
}

/* ----------------------------- Section heading ----------------------------- */

export function SectionHead({
  index,
  label,
  right,
  className,
}: {
  index: string;
  label: string;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("border-t border-line", className)}>
      <div className="flex items-end justify-between gap-6 pt-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-[0.3em] text-accent">{index}</span>
          <span className="font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
            / <Scramble text={label} />
          </span>
        </div>
        {right && (
          <div className="hidden font-mono text-[11px] tracking-[0.2em] text-dim uppercase md:block">
            {right}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ---------------------------------- Chip ----------------------------------- */

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      data-cursor
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10.5px] tracking-wide text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------- Counter --------------------------------- */

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, mv]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ----------------------------- Available badge ----------------------------- */

export function AvailabilityBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-accent uppercase",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      Open to leadership roles
    </span>
  );
}
