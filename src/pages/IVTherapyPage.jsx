import ServicesShowcase from "../sections/ServicesShowcase";
import Questionnaire from "../sections/Questionnaire";
import usePageMeta from "../hooks/usePageMeta";
import { motion } from "framer-motion";

export default function IVTherapyPage() {
  usePageMeta({
    title: "IV Therapy — LivLong MD Longevity & Wellness",
    description:
      "Signature IV therapy drips, vitamin add-ons, and quick-stop booster shots. Physician-guided concierge wellness in Scottsdale.",
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
              IV Therapy
            </div>

            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl font-semibold">
              Three pillars of cellular wellness . 
              <p> Begin with the questionnaire below to find your perfect
              drip, or explore our full menu.</p>
            </p>
          </motion.div>
        </div>
      </section>

      <Questionnaire />
      <ServicesShowcase />
    </>
  );
}
