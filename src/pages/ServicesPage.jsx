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
// import CombinedServicesShowcase from "../sections/CombinedServicesShowcase";
// import Questionnaire from "../sections/Questionnaire";
// import PeptideQuestionnaire from "../sections/PeptideQuestionnaire";
// import usePageMeta from "../hooks/usePageMeta";
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   usePageMeta({
//     title: "Services — LivLong MD Longevity & Wellness",
//     description:
//       "Peptide therapy and IV therapy — physician-guided, privately delivered. Concierge longevity care in Scottsdale.",
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
//             <div className="label text-eucalyptus !text-xl mb-5">Our Services</div>
//             <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl font-semibold">
//               Personalized treatments designed for your long-term wellness journey. Select a service pillar below to explore, or use the questionnaire to receive a personalised recommendation.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <CombinedServicesShowcase />
//       <Questionnaire />
//       <PeptideQuestionnaire />
//     </>
//   );
// }












import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, Droplets } from "lucide-react";
import ServicePillarCard from "../components/ServicePillarCard";
import usePageMeta from "../hooks/usePageMeta";
import ivImage from "../assets/iv-therapy-service.jpg";
import peptideImage from "../assets/service-signature.jpg";

const PILLARS = [
  {
    id: "peptide",
    to: "/services/peptide",
    label: "Peptide Therapy",
    tagline:
      "Physician-guided peptide protocols to restore youthful function, optimize performance, and support your body's natural healing.",
    image: peptideImage,
    icon: FlaskConical,
  },
  {
    id: "iv",
    to: "/services/iv-therapy",
    label: "IV Therapy",
    tagline:
      "Three pillars of cellular wellness — quietly engineered, privately delivered.",
    image: ivImage,
    icon: Droplets,
  },
];

export default function ServicesPage() {
  usePageMeta({
    title: "Services — LivLong MD Longevity & Wellness",
    description:
      "Peptide therapy and IV therapy — physician-guided, privately delivered. Concierge longevity care in Scottsdale.",
  });

  const navigate = useNavigate();

  return (
    <>
      {/* Hero / intro */}
      <section className="pt-40 md:pt-48 pb-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus !text-xl mb-5">Our Services</div>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl font-semibold">
              Personalized treatments designed for your long-term wellness
              journey. Select a service pillar below to explore treatments and
              find the right protocol for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar cards — navigate on click */}
      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pb-32">
          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => (
              <ServicePillarCard
                key={p.id}
                label={p.label}
                tagline={p.tagline}
                image={p.image}
                icon={p.icon}
                idx={idx}
                onClick={() => navigate(p.to)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
