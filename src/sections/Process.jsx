import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'

const steps = [
  {
    n: '01',
    t: 'Take the Health Survey',
    d: 'Answer 5 questions spanning sleep, wellness, stress levels, and health goals. Our algorithm scores your responses across five longevity domains.',
    glass: 'Your responses are analyzed across 5 health domains — sleep, movement, nutrition, stress resilience, and biomarker awareness — to produce a personalized score that maps to one of three program tiers.',
    meta: '5 minutes',
  },
  {
    n: '02',
    t: 'Review Your Recommendation',
    d: "You'll immediately receive a program recommendation — Foundational, Advanced, or Comprehensive — with the specific protocols designed for your profile.",
    glass: 'Your recommendation is a clinical starting point, not a diagnosis. It\'s used to personalize your first physician consultation and ensure your care plan is right-sized from day one.',
    meta: 'Instant',
  },
  {
    n: '03',
    t: 'Book & Complete Lab Work',
    d: 'Book your first consultation and visit any of 2,000+ affiliated lab locations for a comprehensive blood draw. Results are typically returned within 5–7 business days.',
    glass: 'All panels are reviewed for quality before release. Your physician flags any results that need immediate follow-up before your review appointment.',
    meta: 'Same week',
  },
  {
    n: '04',
    t: 'Physician Results Review',
    d: 'Your physician walks through every biomarker result in plain language — explaining what each number means, how it interacts with others, and what it signals for your longevity.',
    glass: 'This is not a 7-minute visit. Your physician has reviewed your full panel before the appointment and comes prepared with a preliminary protocol to discuss.',
    meta: '60-minute appointment',
  },
  {
    n: '05',
    t: 'Your Personalized Protocol',
    d: 'Your protocol is built from your data — which may include lifestyle optimization, targeted supplementation, hormone therapy, peptides, or other evidence-based interventions.',
    glass: "All interventions are evidence-graded. Protocols are reviewed at every follow-up and adjusted based on lab response and how you're feeling.",
    meta: 'Ongoing',
  },
  {
    n: '06',
    t: 'Continuous Optimization',
    d: 'We retest key biomarkers, review progress, and refine your protocol every quarter. Your biological age is a moving target — and we intend to move it in the right direction.',
    glass: 'Long-term patients see compounding improvements across sleep, body composition, energy, cognitive performance, and key longevity biomarkers.',
    meta: 'Every quarter',
  },
]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })

  const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="section relative">
      <div className="container-lux max-w-6xl mx-auto px-4 md:px-8">

       
<div className="text-left">
  <div className="label text-eucalyptus !text-xl mb-5">The Process</div>
  <h2 className="text-2xl md:text-3xl tracking-tightest font-medium text-charcoal leading-[1.05]">
    Six movements toward a longer, fuller life.
  </h2>
  <p className="mt-4 text-sm md:text-base text-body">
    A design as deliberate as the outcome it produces.
  </p>
</div>

        {/* Main layout */}
        <div className="relative mt-20 md:mt-24 flex gap-6 md:gap-8">

          {/* Timeline rail */}
          <div className="relative hidden md:flex flex-shrink-0 w-16 justify-center">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/12" />
            <motion.div
              style={{ height: lineY }}
              className="absolute left-1/2 top-0 w-px bg-eucalyptus origin-top"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-20 flex-1 px-4 md:px-0">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0.35, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-30% 0px -30% 0px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >

                {/* Dot */}
                <div className="md:col-span-1 hidden md:flex items-center justify-center pt-2">
                  <span className="h-3 w-3 rounded-full bg-eucalyptus shadow-[0_0_0_6px_rgba(122,157,150,0.15)]" />
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4">
                    <div className="text-eucalyptus font-light text-[20px]">
                      {s.n}
                    </div>
                    <div className="text-charcoal/40 text-[12px] tracking-widest uppercase font-light">
                      {s.meta}
                    </div>
                  </div>

                  <h3 className="h2 mt-2">{s.t}</h3>

                  <p className="body-lg mt-4 max-w-xl">{s.d}</p>
                </div>

                {/* Glass card */}
                <div className="md:col-span-4">
                  <div className="glass rounded-xl p-6">
                    <div className="eyebrow text-[10px]">Detail</div>
                    <p className="mt-3 text-[14px] leading-[1.7] text-text-body">
                      {s.glass}
                    </p>
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























// import { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import SectionHeading from '../components/SectionHeading.jsx'

// const steps = [
//   {
//     n: '01',
//     t: 'Take the Health Survey',
//     d: 'Answer 5 questions spanning sleep, wellness, stress levels, and health goals. Our algorithm scores your responses across five longevity domains.',
//     glass: 'Your responses are analyzed across 5 health domains — sleep, movement, nutrition, stress resilience, and biomarker awareness — to produce a personalized score that maps to one of three program tiers.',
//     meta: '5 minutes',
//   },
//   {
//     n: '02',
//     t: 'Review Your Recommendation',
//     d: 'You\'ll immediately receive a program recommendation — Foundational, Advanced, or Comprehensive — with the specific protocols designed for your profile.',
//     glass: 'Your recommendation is a clinical starting point, not a diagnosis. It\'s used to personalize your first physician consultation and ensure your care plan is right-sized from day one.',
//     meta: 'Instant',
//   },
//   {
//     n: '03',
//     t: 'Book & Complete Lab Work',
//     d: 'Book your first consultation and visit any of 2,000+ affiliated lab locations for a comprehensive blood draw. Results are typically returned within 5–7 business days.',
//     glass: 'All panels are reviewed for quality before release. Your physician flags any results that need immediate follow-up before your review appointment.',
//     meta: 'Same week',
//   },
//   {
//     n: '04',
//     t: 'Physician Results Review',
//     d: 'Your physician walks through every biomarker result in plain language — explaining what each number means, how it interacts with others, and what it signals for your longevity.',
//     glass: 'This is not a 7-minute visit. Your physician has reviewed your full panel before the appointment and comes prepared with a preliminary protocol to discuss.',
//     meta: '60-minute appointment',
//   },
//   {
//     n: '05',
//     t: 'Your Personalized Protocol',
//     d: 'Your protocol is built from your data — which may include lifestyle optimization, targeted supplementation, hormone therapy, peptides, or other evidence-based interventions.',
//     glass: 'All interventions are evidence-graded. Protocols are reviewed at every follow-up and adjusted based on lab response and how you\'re feeling.',
//     meta: 'Ongoing',
//   },
//   {
//     n: '06',
//     t: 'Continuous Optimization',
//     d: 'We retest key biomarkers, review progress, and refine your protocol every quarter. Your biological age is a moving target — and we intend to move it in the right direction.',
//     glass: 'Long-term patients see compounding improvements across sleep, body composition, energy, cognitive performance, and key longevity biomarkers.',
//     meta: 'Every quarter',
//   },
// ]

// export default function Process() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
//   const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

//   return (
//     <section ref={ref} className="section relative">
//       <div className="container-lux">
//         <SectionHeading
//           eyebrow="The Process"
//           title="Six movements toward a longer, fuller life."
//           sub="A design as deliberate as the outcome it produces."
//         />

//         <div className="relative mt-24 flex gap-8">
//           {/* timeline rail */}
//           <div className="relative hidden md:block flex-shrink-0 w-20">
//             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/12" />
//             <motion.div
//               style={{ height: lineY }}
//               className="absolute left-1/2 top-0 w-px bg-eucalyptus origin-top"
//             />
//           </div>

//           <div className="flex flex-col gap-20 flex-1 md:pl-8">
//             {steps.map((s, i) => (
//               <motion.div
//                 key={s.n}
//                 initial={{ opacity: 0.35, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, margin: '-30% 0px -30% 0px' }}
//                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                 className="grid md:grid-cols-12 gap-6 items-start"
//               >
//                 <div className="md:col-span-1 hidden md:flex items-center justify-center pt-2">
//                   <span className="h-3 w-3 rounded-full bg-eucalyptus shadow-[0_0_0_6px_rgba(122,157,150,0.15)]" />
//                 </div>
//                 <div className="md:col-span-7">
//                   <div className="flex items-center gap-4">
//                     <div className="text-eucalyptus font-light text-[20px]">{s.n}</div>
//                     <div className="text-charcoal/40 text-[12px] tracking-widest uppercase font-light">{s.meta}</div>
//                   </div>
//                   <h3 className="h2 mt-2">{s.t}</h3>
//                   <p className="body-lg mt-4 max-w-xl">{s.d}</p>
//                 </div>
//                 <div className="md:col-span-4">
//                   <div className="glass rounded-xl p-6">
//                     <div className="eyebrow text-[10px]">Detail</div>
//                     <p className="mt-3 text-[14px] leading-[1.7] text-text-body">{s.glass}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
