// import ServicesShowcase from "../sections/ServicesShowcase";
// import Questionnaire from "../sections/Questionnaire";
// import usePageMeta from "../hooks/usePageMeta";
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   usePageMeta({
//     title: "Services — LivLong MD Longevity & Wellness",
//     description:
//       "Signature IV therapy, vitamin add-ons, and quick-stop booster shots. Concierge longevity care in Scottsdale.",
//   });
//   return (
//     <>
//       <section className="pt-40 md:pt-48 pb-12">
//         <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-3xl"
//           >
//             <div className="label text-eucalyptus mb-5">Our Services</div>
//             <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
//               IV Therapy. Reimagined as ritual.
//             </h1>
//             <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
//               Three pillars of cellular wellness — quietly engineered, privately
//               delivered. Begin with the questionnaire below or browse the full
//               menu.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//       <ServicesShowcase />
//       <Questionnaire />
//     </>
//   );
// }













// pages/ServicesPage.jsx

import ServicesShowcase from "../sections/ServicesShowcase";
import Questionnaire from "../sections/Questionnaire";
import usePageMeta from "../hooks/usePageMeta";
import { motion } from "framer-motion";

export default function ServicesPage() {
  usePageMeta({
    title: "Services — LivLong MD Longevity & Wellness",
    description:
      "Signature IV therapy, vitamin add-ons, and quick-stop booster shots. Concierge longevity care in Scottsdale.",
  });

  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">
              Our Services
            </div>

            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              IV Therapy. Reimagined as ritual.
            </h1>

            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              Personalized treatments designed for your long-term wellness journey. Begin with the questionnaire below to find your match, or explore our signature pillars below.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesShowcase />
      <Questionnaire />
    </>
  );
}