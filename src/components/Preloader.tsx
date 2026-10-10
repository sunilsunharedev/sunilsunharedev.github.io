import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

const LINES = [
  "mounting runtime environment",
  "compiling agent pipelines",
  "hydrating interface layers",
  "linking kafka streams · aws primitives",
  "portfolio ready",
];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        const val = Math.round(v);
        setN(val);
        setLineIdx(Math.min(LINES.length - 1, Math.floor((val / 100) * LINES.length)));
      },
      onComplete: () => {
        if (done.current) return;
        done.current = true;
        setTimeout(onDone, 400);
      },
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[80] flex flex-col justify-between bg-coal px-5 pb-6 pt-8 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-dim uppercase"
      >
        <span>
          <span className="text-accent">SS</span> — portfolio runtime
        </span>
        <span>v2.6 © 2026</span>
      </motion.div>

      <div className="flex items-end justify-between gap-8">
        <div className="min-w-0">
          <p className="truncate font-mono text-[11px] tracking-[0.2em] text-accent">
            <motion.span
              key={lineIdx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              ▸ {LINES[lineIdx]}
            </motion.span>
            <span className="caret ml-2 inline-block h-3 w-1.5 translate-y-0.5 bg-accent" />
          </p>
          <div className="mt-2 overflow-hidden">
            <motion.p
              initial={{ y: "40%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[24vw] font-bold leading-[0.95] tracking-tight text-ink md:text-[11rem]"
            >
              {n}
              <span className="text-accent">%</span>
            </motion.p>
          </div>
        </div>
        <p className="hidden max-w-[230px] text-right font-mono text-[10px] leading-relaxed tracking-[0.2em] text-dim uppercase md:block">
          boot sequence in progress
          <br />
          hold tight — good things compile slowly
        </p>
      </div>

      <div className="relative h-px w-full overflow-hidden bg-line">
        <div className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100 ease-linear" style={{ width: `${n}%` }} />
      </div>
    </motion.div>
  );
}
