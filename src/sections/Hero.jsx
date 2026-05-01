// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Button from "../components/Button";
// import { openBooking } from "../lib/utils";
// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Atmospheric gradient backdrop */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 20% 20%, rgba(122,157,150,0.18) 0%, rgba(244,247,249,0) 60%), radial-gradient(50% 60% at 90% 10%, rgba(209,219,224,0.55) 0%, rgba(244,247,249,0) 65%), linear-gradient(180deg, #F4F7F9 0%, #EAF1F1 100%)",
//         }}
//       />
//       {/* Faint grain */}
//       <div className="absolute inset-0 grain pointer-events-none" />

//       <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-40 md:pt-44 lg:pt-52 pb-28 md:pb-36">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
//           <div className="lg:col-span-8">
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//               className="label inline-flex items-center gap-3 mb-8"
//             >
//               <span className="h-px w-8 bg-eucalyptus" />
//               Concierge Longevity · Scottsdale
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//               className="text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] leading-[0.98] tracking-tightest text-charcoal font-medium"
//             >
//               Optimize Your <em className="not-italic font-light text-ink">Health.</em>
//               <br />
//               Extend Your <em className="not-italic text-eucalyptus font-light">Life.</em>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
//               className="mt-10 max-w-xl text-base md:text-lg text-body leading-relaxed"
//             >
//               Physician-guided, data-driven longevity medicine — built entirely
//               around you. Cutting-edge diagnostics paired with personalized
//               protocols designed to extend your healthspan, not merely your
//               lifespan.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
//               className="mt-12 flex flex-col sm:flex-row gap-4"
//             >
//               <Button variant="primary" size="lg" onClick={openBooking}>
//                 Book Consultation
//                 <ArrowUpRight size={16} strokeWidth={1.5} />
//               </Button>
//               <Button as={Link} to="/services" variant="ghost" size="lg">
//                 Explore Services
//               </Button>
//             </motion.div>
//           </div>

//           {/* Glass stat card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
//             className="lg:col-span-4"
//           >
//             <div className="glass p-8 md:p-10">
//               <div className="label text-charcoal/60 mb-8">The Practice</div>
//               <div className="space-y-8">
//                 <Stat n="25+" label="Combined years of clinical excellence" />
//                 <div className="hairline" />
//                 <Stat n="1:1" label="Concierge physician access" />
//                 <div className="hairline" />
//                 <Stat
//                   n="100+"
//                   label="Biomarkers tracked across each protocol"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stat({ n, label }) {
//   return (
//     <div>
//       <div className="text-4xl md:text-5xl tracking-tightest text-charcoal font-medium">
//         {n}
//       </div>
//       <div className="mt-2 text-sm text-body leading-relaxed">{label}</div>
//     </div>
//   );
// }










// sections/Hero.jsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import { openBooking } from "../lib/utils";
import { Link } from "react-router-dom";
import heroImage from "../assets/iv-therapy-hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmospheric gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(122,157,150,0.18) 0%, rgba(244,247,249,0) 60%), radial-gradient(50% 60% at 90% 10%, rgba(209,219,224,0.55) 0%, rgba(244,247,249,0) 65%), linear-gradient(180deg, #F4F7F9 0%, #EAF1F1 100%)",
        }}
      />

      {/* Faint grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-3 mb-8 text-brandGold"
            >
              <span className="h-px w-8 bg-brandGold" />
              Concierge Longevity · Scottsdale
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="text-[42px] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[92px] leading-[0.98] tracking-tightest text-charcoal font-medium"
            >
              Feel Better.
              <br />
              Live <em className="not-italic text-eucalyptus font-light">Longer.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              className="mt-8 max-w-xl text-base md:text-lg text-body leading-relaxed"
            >
              Concierge, physician-led longevity care focused on optimizing energy, performance, and biological age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={openBooking}
              >
                Book Consultation
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Button>

              <Button
                as={Link}
                to="/services"
                variant="ghost"
                size="lg"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5,
            }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={heroImage}
                alt="IV Therapy Hero"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}