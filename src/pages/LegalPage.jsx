import { useState } from 'react'
import { motion } from 'framer-motion'
import usePageMeta from '../hooks/usePageMeta'

const SECTIONS = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    content: [
      {
        heading: null,
        body: `At LivLongMD Longevity and Wellness PLLC ("LivLongMD," "we," "our," or "us"), we value your privacy and are committed to protecting your personal and health information. This Privacy Policy explains how we collect, use, store, and disclose information obtained through our website, communications, and wellness services.`,
      },
      {
        heading: 'Information We Collect',
        list: [
          'Name, email address, phone number, and date of birth',
          'Appointment requests and intake form information',
          'Health and wellness information you voluntarily provide',
          'Payment and billing information',
          'Website usage data through cookies and analytics tools',
        ],
      },
      {
        heading: 'How We Use Information',
        list: [
          'Schedule and manage appointments',
          'Provide wellness and medical services',
          'Communicate regarding services, reminders, and updates',
          'Improve website functionality and patient experience',
          'Comply with legal and regulatory obligations',
        ],
      },
      {
        heading: 'HIPAA & Medical Information',
        body: `Protected Health Information ("PHI") is handled in accordance with applicable HIPAA regulations and state privacy laws. We implement administrative, technical, and physical safeguards designed to protect your information.`,
      },
      {
        heading: 'Sharing of Information',
        body: `We do not sell your personal information.`,
        list: [
          'Licensed healthcare providers involved in your care',
          'HIPAA-compliant service providers and software vendors',
          'Payment processors',
          'Legal authorities when required by law',
        ],
        listPrefix: 'We may share information with:',
      },
      {
        heading: 'Cookies & Analytics',
        body: `Our website may use cookies, analytics tools, and similar technologies to improve website performance and user experience.`,
      },
      {
        heading: 'Your Rights',
        listPrefix: 'You may request to:',
        list: [
          'Access your information',
          'Correct inaccurate information',
          'Request limitations on certain disclosures',
          'Opt out of marketing communications',
        ],
      },
      {
        heading: 'Data Security',
        body: `We use commercially reasonable safeguards to protect your information; however, no electronic transmission or storage system is completely secure.`,
      },
      {
        heading: 'Contact',
        body: `LivLongMD\ncontact@livlongmd.com\n480-269-3165\nPhoenix, Arizona`,
      },
    ],
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    content: [
      {
        heading: null,
        body: `By accessing this website or receiving services from LivLongMD, you agree to the following Terms & Conditions.`,
      },
      {
        heading: 'Medical Disclaimer',
        body: `Content on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Services provided by LivLongMD are not intended to replace your primary care physician or emergency medical services.\n\nIf you are experiencing a medical emergency, call 911 immediately.`,
      },
      {
        heading: 'Services',
        listPrefix: 'LivLongMD offers wellness-focused services which may include:',
        list: [
          'IV hydration therapy',
          'Vitamin injections',
          'Wellness consultations',
          'Longevity and preventive wellness services',
          'Hormone optimization',
          'Weight management support',
          'Peptide therapy',
        ],
        body: `Eligibility for services is determined at the discretion of the treating medical provider.`,
      },
      {
        heading: 'No Guaranteed Results',
        body: `Individual outcomes vary. We do not guarantee specific medical, cosmetic, or wellness results.`,
      },
      {
        heading: 'Appointments & Cancellations',
        body: `Appointments may require deposits or payment in advance. Cancellation and rescheduling policies may apply.`,
      },
      {
        heading: 'Payment',
        body: `Patients are responsible for payment at the time of service unless otherwise agreed upon. Most wellness services are not covered by insurance.`,
      },
      {
        heading: 'Intellectual Property',
        body: `All website content, branding, graphics, text, and materials are property of LivLongMD and may not be copied or reproduced without written consent.`,
      },
      {
        heading: 'Limitation of Liability',
        body: `To the fullest extent permitted by law, LivLongMD shall not be liable for indirect, incidental, or consequential damages arising from use of this website or services.`,
      },
      {
        heading: 'Governing Law',
        body: `These Terms shall be governed by the laws of the State of Arizona.`,
      },
    ],
  },
  {
    id: 'disclaimer',
    label: 'Medical Disclaimer',
    content: [
      {
        heading: null,
        body: `LivLongMD provides wellness and preventive health services designed to support hydration, recovery, nutrient supplementation, and overall wellness. Our services are not intended to diagnose, treat, cure, or prevent disease.\n\nAll services are provided by licensed healthcare professionals operating under applicable state laws and medical oversight.\n\nWebsite content, social media content, emails, text messages, and marketing materials are informational only and should not be relied upon as individualized medical advice.\n\nAlways consult your physician before starting IV therapy, injections, supplements, peptides, or hormone-related treatments.`,
      },
    ],
  },
  {
    id: 'hipaa',
    label: 'HIPAA Notice',
    content: [
      {
        heading: null,
        body: `THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN ACCESS THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.\n\nLivLongMD is committed to protecting your Protected Health Information ("PHI") in accordance with HIPAA and applicable laws.`,
      },
      {
        heading: 'We May Use or Disclose Information For',
        list: [
          'Treatment',
          'Payment',
          'Healthcare operations',
          'Legal and public health obligations',
        ],
      },
      {
        heading: 'Your Rights',
        listPrefix: 'You have the right to:',
        list: [
          'Request copies of your records',
          'Request corrections',
          'Request restrictions on disclosures',
          'Receive confidential communications',
          'File a privacy complaint',
        ],
      },
      {
        heading: 'Contact for Privacy Concerns',
        body: `contact@livlongmd.com\n480-269-3165`,
      },
    ],
  },
  {
    id: 'sms',
    label: 'SMS Consent',
    content: [
      {
        heading: null,
        body: `By providing your phone number, you consent to receive appointment reminders, service-related communications, and occasional promotional messages from LivLongMD. Message and data rates may apply. Consent is not a condition of purchase.\n\nYou may opt out at any time by replying STOP.`,
      },
    ],
  },
]

export default function LegalPage() {
  usePageMeta({
    title: 'Legal — LivLong MD',
    description: 'Privacy Policy, Terms & Conditions, Medical Disclaimer, HIPAA Notice, and SMS Consent for LivLong MD.',
  })

  const [active, setActive] = useState('privacy')
  const activeSection = SECTIONS.find((s) => s.id === active)

  return (
    <>
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">Terms & Conditions / privacy policy</div>
            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              Terms designed for clarity
            </h1>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              Our commitment to your privacy and informed care — documented clearly.
            </p>
            <div className="mt-4 label text-charcoal/40">Effective Date: March 1, 2026</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Sidebar Nav */}
            <motion.nav
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <div className="lg:sticky lg:top-32 space-y-1">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 ease-luxe ${
                      active === s.id
                        ? 'bg-charcoal text-ice font-medium'
                        : 'text-body hover:bg-white/40 hover:text-charcoal'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.nav>

            {/* Content Area */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-9"
            >
              <div className="glass rounded-3xl px-8 md:px-12 py-12">

                {/* Section Title */}
                <div className="label text-eucalyptus mb-4">{activeSection.label}</div>
                <div className="hairline mb-10" />

                {/* Content Blocks */}
                <div className="space-y-10">
                  {activeSection.content.map((block, i) => (
                    <div key={i}>
                      {block.heading && (
                        <h3 className="text-lg font-medium text-charcoal tracking-tight mb-3">
                          {block.heading}
                        </h3>
                      )}

                      {block.body && (
                        <div className="space-y-4">
                          {block.body.split('\n\n').map((para, j) => (
                            <p key={j} className="text-body text-[15px] leading-relaxed whitespace-pre-line">
                              {para}
                            </p>
                          ))}
                        </div>
                      )}

                      {block.listPrefix && (
                        <p className="text-body text-[15px] leading-relaxed mb-3">
                          {block.listPrefix}
                        </p>
                      )}

                      {block.list && (
                        <ul className="space-y-2 mt-2">
                          {block.list.map((item, k) => (
                            <li key={k} className="flex items-start gap-3 text-[15px] text-body">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-eucalyptus shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
