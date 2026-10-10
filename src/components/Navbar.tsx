import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { NAV_LINKS, PROFILE } from "../data";
import { Magnetic } from "./ui";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* section spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive("#" + en.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled ? "border-b border-line bg-coal/80 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="group flex items-center gap-3" data-cursor>
            <span className="grid h-9 w-9 place-items-center border border-line font-mono text-[11px] font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-coal">
              SS
            </span>
            <span className="hidden font-mono text-[11px] tracking-[0.3em] text-fog uppercase sm:block">
              Sunhare<span className="text-accent">.</span>
              <span className="text-dim">lead</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "group relative py-1 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-300",
                    isActive ? "text-accent" : "text-fog hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "mr-1.5 text-[9px] transition-opacity duration-300",
                      isActive ? "text-accent opacity-100" : "text-accent/70 group-hover:opacity-100"
                    )}
                  >
                    {l.index}
                  </span>
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub — @sunilsunharedev"
              className="grid h-9 w-9 place-items-center border border-line text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-coal"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <Magnetic strength={0.3} className="hidden sm:inline-block">
              <a
                href={PROFILE.mailto}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-fog uppercase transition-all duration-300 hover:border-accent hover:bg-accent hover:text-coal"
              >
                Hire me
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center border border-line text-ink transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <motion.div className="h-px origin-left bg-accent" style={{ scaleX: progress }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-coal/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="px-8 pt-28">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-line py-5"
                >
                  <span className="font-mono text-xs text-accent">{l.index}</span>
                  <span className="font-display text-4xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10 font-mono text-[11px] leading-relaxed tracking-[0.2em] text-dim uppercase"
            >
              {PROFILE.email}
              <br />
              {PROFILE.phone} — {PROFILE.location}
              <br />
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-fog transition-colors hover:text-accent">
                github.com/<span className="text-accent">sunilsunharedev</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
