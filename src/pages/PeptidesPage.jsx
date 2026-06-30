import PeptideShowcase from "../sections/PeptideShowcase";
import PeptideQuestionnaire from "../sections/PeptideQuestionnaire";
import usePageMeta from "../hooks/usePageMeta";
import { motion } from "framer-motion";

export default function PeptidesPage() {
  usePageMeta({
    title: "Peptide Therapy — LivLong MD Longevity & Wellness",
    description:
      "Physician-guided peptide therapy protocols for muscle growth, recovery, anti-aging, and longevity. Concierge care in Scottsdale.",
  });

  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus !text-xl mb-5">
              Peptide Therapy
            </div>

            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl font-semibold">
              Physician-guided peptide protocols designed for muscle growth,
              recovery, anti-aging, and long-term wellness. Begin with the
              questionnaire below to find your match, or explore each peptide
              in detail.
            </p>
          </motion.div>
        </div>
      </section>

      <PeptideQuestionnaire />
      <PeptideShowcase />
    </>
  );
}
