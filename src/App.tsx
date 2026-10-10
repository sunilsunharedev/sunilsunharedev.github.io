import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";

export default function App() {
  const [booted, setBooted] = useState(false);

  /* buttery smooth scrolling */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      anchors: true,
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-coal font-body text-ink antialiased selection:bg-accent selection:text-coal">
      <Cursor />

      <AnimatePresence>
        {!booted && <Preloader key="preloader" onDone={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}

      {/* film grain — above everything except cursor */}
      <div className="grain pointer-events-none fixed inset-0 z-[90] opacity-[0.05]" />
    </div>
  );
}
