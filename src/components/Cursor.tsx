import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1000, damping: 60, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 60, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(Boolean(t?.closest("a, button, [data-cursor]")));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* core dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <span
          className={`block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-150 ${
            pressed ? "scale-50" : "scale-100"
          }`}
        />
      </motion.div>
      {/* trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <span
          className={`block -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background-color,transform] duration-300 ${
            hovering
              ? "h-16 w-16 border-accent/90 bg-accent/[0.06]"
              : "h-9 w-9 border-ink/40"
          } ${pressed ? "scale-75" : "scale-100"}`}
        />
      </motion.div>
    </>
  );
}
