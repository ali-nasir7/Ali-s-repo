// import Hero from "../sections/Hero";
// import CombinedServicesShowcase from "../sections/CombinedServicesShowcase";
// import Questionnaire from "../sections/Questionnaire";
// import Process from "../sections/Process";
// import Membership from "../sections/Membership";
// import Testimonials from "../sections/Testimonials";
// import ContactSection from "../sections/ContactSection";
// import usePageMeta from "../hooks/usePageMeta";

// export default function Home() {
//   usePageMeta({
//     title: "LivLong MD — Concierge Longevity & Wellness | Scottsdale",
//     description:
//       "Concierge longevity medicine in Scottsdale, AZ. Physician-guided, data-driven protocols engineered to extend your healthspan.",
//   });
//   return (
//     <>
//       <Hero />
//       <CombinedServicesShowcase />
//       <Questionnaire />
//       <Process />
//       <Membership />
//       <Testimonials />
//       <ContactSection />
//     </>
//   );
// }
















import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, Droplets, ArrowUpRight } from "lucide-react";
import Hero from "../sections/Hero";
import ServicePillarCard from "../components/ServicePillarCard";
import Questionnaire from "../sections/Questionnaire";
import Process from "../sections/Process";
import Membership from "../sections/Membership";
import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/ContactSection";
import usePageMeta from "../hooks/usePageMeta";
import ivImage from "../assets/iv-therapy-service.jpg";
import peptideImage from "../assets/service-signature.jpg";

const HOME_PILLARS = [
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

export default function Home() {
  usePageMeta({
    title: "LivLong MD — Concierge Longevity & Wellness | Scottsdale",
    description:
      "Concierge longevity medicine in Scottsdale, AZ. Physician-guided, data-driven protocols engineered to extend your healthspan.",
  });

  const navigate = useNavigate();

  return (
    <>
      <Hero />

      {/* Services teaser — two pillar cards + "View all" */}
      <section id="services" className="relative scroll-mt-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <div className="label text-eucalyptus !text-xl mb-5">Our Services</div>
            <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05] max-w-3xl">
              Two pillars of wellness
            </h2>
            <p className="mt-6 text-body text-base md:text-lg leading-relaxed max-w-2xl">
              Explore our signature service pillars. Select one to browse
              treatments, or use the questionnaire below for a personalised
              recommendation.
            </p>
          </motion.div>

          {/* Pillar cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {HOME_PILLARS.map((p, idx) => (
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

          {/* View all services link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-charcoal/60 hover:text-charcoal transition-colors duration-300"
            >
              View all services
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

     
      <Process />
      <Membership />
      <Testimonials />
      <ContactSection />
    </>
  );
}

