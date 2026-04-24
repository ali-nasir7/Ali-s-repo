import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cinematic luxury preloader — a thin charcoal line draws across the screen
 * with a subtle ECG/heartbeat pulse at each progress milestone.
 */
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 2200; // total preloader duration

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out for an elegant settle
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        // brief hold before fade out
        setTimeout(() => setDone(true), 350);
        setTimeout(() => onDone && onDone(), 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const pct = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-ice flex flex-col items-center justify-center"
        >
          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 label text-charcoal/70"
          >
            LivLong MD
          </motion.div>

          {/* The line */}
          <div className="w-[78vw] max-w-[640px] relative h-[40px] flex items-center">
            {/* base hairline track */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-charcoal/10" />
            {/* drawn portion with ECG bumps via SVG */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 40"
            >
              <defs>
                <linearGradient id="lg" x1="0" x2="1">
                  <stop offset="0%" stopColor="#354F52" />
                  <stop offset="100%" stopColor="#7A9D96" />
                </linearGradient>
              </defs>
              <path
                d={buildEcgPath(pct)}
                fill="none"
                stroke="url(#lg)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Progress label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 label text-charcoal/50"
          >
            {String(pct).padStart(3, "0")}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Generates an SVG path that grows left-to-right with subtle ECG bumps
// at 20 / 40 / 60 / 80 progress milestones.
function buildEcgPath(pct) {
  const W = 1000;
  const cy = 20;
  const drawn = (pct / 100) * W;

  // milestones in viewBox X coordinates
  const beats = [200, 400, 600, 800];
  let d = `M 0 ${cy}`;
  let x = 0;

  for (const bx of beats) {
    if (drawn <= x) break;
    if (drawn < bx - 18) {
      // line ends before reaching this beat
      d += ` L ${drawn} ${cy}`;
      return d;
    }
    // straight line up to start of pulse
    d += ` L ${bx - 18} ${cy}`;
    // ECG-shaped pulse: small dip, sharp peak, small dip
    d += ` L ${bx - 10} ${cy + 4}`;
    d += ` L ${bx - 4} ${cy - 16}`;
    d += ` L ${bx + 4} ${cy + 8}`;
    d += ` L ${bx + 10} ${cy - 2}`;
    d += ` L ${bx + 18} ${cy}`;
    x = bx + 18;
  }

  d += ` L ${Math.max(drawn, x)} ${cy}`;
  return d;
}
