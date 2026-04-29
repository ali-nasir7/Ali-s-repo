import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { CONTACT } from '../lib/constants'

const roles = [
  {
    title: 'Physician Assistant',
    type: 'Full-Time',
    tag: 'Clinical',
    description:
      'Work directly with patients on diagnostics, protocol design, and ongoing optimization. Background in longevity, functional, or regenerative medicine preferred.',
    responsibilities: [
      'Patient intake, assessment, and protocol development',
      'Biomarker interpretation and follow-up care',
      'Collaboration with lead physician on complex cases',
      'Quarterly optimization reviews',
    ],
  },
  {
    title: 'Nurse Practitioner',
    type: 'Full-Time',
    tag: 'Clinical',
    description:
      'A role where your clinical judgment is trusted and your patient relationships are long-term. Experience in functional, regenerative, or longevity medicine preferred.',
    responsibilities: [
      'Independent patient care within scope of practice',
      'IV therapy administration and monitoring',
      'Hormone and peptide protocol support',
      'Patient education and follow-up coordination',
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 md:pt-52 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">We Are Hiring</div>
            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              Practice medicine
              <br />
              the way it should be.
            </h1>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              If you're done with 7-minute appointments and ready to build real,
              lasting relationships with patients — we'd like to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-charcoal/10 bg-white/35 backdrop-blur-xl px-7 md:px-10 py-10 md:py-12"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="label text-eucalyptus">{role.tag}</span>
                      <span className="h-px w-4 bg-charcoal/20" />
                      <span className="label text-charcoal/50">{role.type}</span>
                    </div>
                    <h3 className="h2 text-charcoal">{role.title}</h3>
                    <p className="body mt-4 max-w-sm">{role.description}</p>

                    <a
                      href={`mailto:${CONTACT.email}?subject=Application — ${role.title}`}
                      className="mt-8 inline-flex items-center gap-2 text-[13px] tracking-wide text-charcoal border border-charcoal/20 rounded-full px-5 py-2.5 hover:border-charcoal/50 hover:bg-charcoal hover:text-ice transition-all duration-500 ease-luxury"
                    >
                      Apply via Email
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* Right */}
                  <div className="md:col-span-7">
                    <div className="glass rounded-xl p-6 md:p-8">
                      <div className="label text-charcoal/50 mb-5">
                        Responsibilities
                      </div>
                      <ul className="flex flex-col gap-4">
                        {role.responsibilities.map((item, j) => (
                          <li
                            key={j}
                            className={`flex items-start gap-3 text-[14px] leading-[1.7] text-text-body ${
                              j !== role.responsibilities.length - 1
                                ? 'border-b border-charcoal/8 pb-4'
                                : ''
                            }`}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-eucalyptus shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 text-[13px] text-charcoal/40 tracking-tight max-w-lg"
          >
            Don't see a fit? We review all strong candidates. Reach out directly
            at{' '}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-charcoal/60 underline underline-offset-2"
            >
              {CONTACT.email}
            </a>
          </motion.p>
        </div>
      </section>
    </>
  )
}
