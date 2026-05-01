// import ContactSection from "../sections/ContactSection";
// import usePageMeta from "../hooks/usePageMeta";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   usePageMeta({
//     title: "Contact — LivLong MD",
//     description:
//       "Reach the LivLong MD concierge team. Phone, email, and Scottsdale practice details.",
//   });
//   return (
//     <>
//       <section className="pt-40 md:pt-48 pb-8">
//         <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-3xl"
//           >
//             <div className="label text-eucalyptus mb-5">Contact</div>
//             <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
//               We respond personally.
//             </h1>
//             <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
//               Whether you're beginning your journey or optimizing further —
//               there is a quiet, capable team waiting.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//       <ContactSection />
//     </>
//   );
// }



























import ContactSection from '../sections/ContactSection'
import usePageMeta from '../hooks/usePageMeta'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  usePageMeta({
    title: 'Contact — LivLong MD',
    description:
      'Reach the LivLong MD concierge team. Phone, email, and Scottsdale practice details.',
  })

  return (
    <>
      {/* Page Hero
      <section className="pt-40 md:pt-48 pb-8">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">Contact</div>
            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              We respond personally.
            </h1>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              Whether you're beginning your journey or optimizing further —
              there is a quiet, capable team waiting.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Details */}
      <ContactSection />

      {/* Hiring Band */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-charcoal/10 bg-white/35 backdrop-blur-xl px-7 md:px-12 py-10 md:py-12 grid md:grid-cols-12 gap-8 items-center"
          >
            {/* Left */}
            <div className="md:col-span-8">
              <div className="label text-eucalyptus mb-3">We Are Hiring</div>
              <h2 className="text-2xl md:text-3xl font-medium text-charcoal tracking-tight leading-snug">
                Looking for clinicians who believe patients deserve more.
              </h2>
              <p className="body mt-3 max-w-xl">
                We're seeking Physician Assistants and Nurse Practitioners with
                a background in longevity or regenerative medicine.
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-[13px] tracking-wide text-charcoal border border-charcoal/20 rounded-full px-6 py-3 hover:border-charcoal/50 hover:bg-charcoal hover:text-ice transition-all duration-500 ease-luxury"
              >
                View Open Roles
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
