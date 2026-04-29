// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const STEPS = [
//   {
//     n: "I",
//     title: "Consult",
//     body:
//       "A private discovery conversation. We listen, learn your story, and map the questions your biology should answer.",
//   },
//   {
//     n: "II",
//     title: "Plan",
//     body:
//       "Advanced diagnostics translate into a precise, personalized longevity blueprint — written for you alone.",
//   },
//   {
//     n: "III",
//     title: "Optimize",
//     body:
//       "Protocols, infusions, and ongoing physician guidance — refined continuously as your data evolves.",
//   },
// ];

// export default function Process() {
//   const wrap = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: wrap,
//     offset: ["start 80%", "end 20%"],
//   });
//   const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   // Active step based on scroll progress
//   const [active, setActive] = useState(0);
//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       if (v < 0.33) setActive(0);
//       else if (v < 0.66) setActive(1);
//       else setActive(2);
//     });
//   }, [scrollYProgress]);

//   return (
//     <section className="relative">
//       <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
//         <div className="max-w-2xl mb-20">
//           <div className="label text-eucalyptus mb-5">The Method</div>
//           <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
//             Three movements toward
//             <br />
//             a longer, fuller life.
//           </h2>
//         </div>

//         <div ref={wrap} className="relative grid md:grid-cols-12 gap-10">
//           {/* Vertical track */}
//           <div className="hidden md:block absolute left-[calc(8.333%-1px)] top-2 bottom-2 w-px bg-charcoal/10">
//             <motion.div
//               className="absolute top-0 left-0 right-0 bg-eucalyptus origin-top"
//               style={{ height: lineH }}
//             />
//           </div>

//           <div className="md:col-span-12 space-y-16 md:space-y-32">
//             {STEPS.map((s, i) => (
//               <motion.div
//                 key={s.n}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//                 className="grid grid-cols-12 gap-6 md:gap-10 items-start"
//               >
//                 <div className="col-span-2 md:col-span-1 flex justify-start md:justify-center pt-2 relative">
//                   <span
//                     className={`relative z-10 h-3 w-3 rounded-full border transition-all duration-700 ease-luxe ${
//                       active >= i
//                         ? "bg-eucalyptus border-eucalyptus"
//                         : "bg-ice border-charcoal/30"
//                     }`}
//                   />
//                 </div>
//                 <div
//                   className={`col-span-10 md:col-span-11 grid md:grid-cols-12 gap-6 md:gap-10 transition-opacity duration-700 ease-luxe ${
//                     active === i ? "opacity-100" : "opacity-40"
//                   }`}
//                 >
//                   <div className="md:col-span-3 label text-charcoal/60">
//                     Step {s.n}
//                   </div>
//                   <div className="md:col-span-5">
//                     <h3 className="text-3xl md:text-5xl tracking-tightest font-medium text-charcoal leading-tight">
//                       {s.title}
//                     </h3>
//                   </div>
//                   <div className="md:col-span-4">
//                     <div className="glass p-6">
//                       <p className="text-sm text-body leading-relaxed">
//                         {s.body}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'

const steps = [
  {
    n: '01',
    t: 'Assess',
    d: 'A quick intake survey to understand your health goals — so your physician comes prepared from day one.',
    glass: 'Takes less than 5 minutes. Tell us about yourself and what you\'re looking to improve.',
  },
  {
    n: '02',
    t: 'Consult',
    d: 'Your physician walks through every result in plain language — then builds a protocol around your data, your goals, and your biology.',
    glass: '60-minute review appointment. A preliminary protocol ready before you walk in.',
  },
  {
    n: '03',
    t: 'Optimize',
    d: 'Quarterly retesting, protocol refinements, and ongoing physician access — because your biology changes, and your care should too.',
    glass: 'Every quarter we retest key biomarkers and adjust your protocol based on how you\'re responding.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
  const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="section relative">
      <div className="container-lux">
        <SectionHeading
          eyebrow="The Process"
          title="Three quiet movements toward a longer life."
          sub="A design as deliberate as the outcome it produces."
        />

        <div className="relative mt-24 grid md:grid-cols-[80px_1fr] gap-8">
          {/* timeline rail */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/12" />
            <motion.div
              style={{ height: lineY }}
              className="absolute left-1/2 top-0 w-px bg-eucalyptus origin-top"
            />
          </div>

          <div className="flex flex-col gap-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0.35, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-30% 0px -30% 0px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-1 hidden md:flex items-center justify-center pt-2">
                  <span className="h-3 w-3 rounded-full bg-eucalyptus shadow-[0_0_0_6px_rgba(122,157,150,0.15)]" />
                </div>
                <div className="md:col-span-7">
                  <div className="text-eucalyptus font-light text-[20px]">{s.n}</div>
                  <h3 className="h2 mt-2">{s.t}</h3>
                  <p className="body-lg mt-4 max-w-xl">{s.d}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="glass rounded-xl p-6">
                    <div className="eyebrow text-[10px]">Detail</div>
                    <p className="mt-3 text-[14px] leading-[1.7] text-text-body">{s.glass}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
