import About from "../sections/About";
import usePageMeta from "../hooks/usePageMeta";
import { motion } from "framer-motion";

export default function AboutPage() {
  usePageMeta({
    title: "About — LivLong MD",
    description:
      "Meet Asal Dean, PharmD and Dr. Umar Iqbal — the practitioners behind LivLong MD's concierge longevity practice.",
  });
  return (
    <>
      <section className="pt-40 md:pt-48 pb-8">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">About</div>
            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              Where clinical depth meets quiet luxury.
            </h1>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              LivLong MD was founded on a single belief: that exceptional
              medicine should feel as deeply considered as it is rigorously
              practiced.
            </p>
          </motion.div>
        </div>
      </section>
      <About />
    </>
  );
}
