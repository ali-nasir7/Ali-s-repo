import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import { openBooking } from "../lib/utils";

const TIERS = [
  {
    name: "Basic",
    tagline: "An introduction to longevity.",
    benefits: [
      "Annual concierge consultation",
      "Foundational biomarker panel",
      "Personalized wellness summary",
      "Quarterly check-ins",
    ],
    cta: "Begin",
  },
  {
    name: "Premium",
    tagline: "The standard of optimized health.",
    featured: true,
    benefits: [
      "Quarterly physician consultations",
      "Advanced longevity diagnostics",
      "Personalized supplementation",
      "Priority booking access",
      "Two signature IV protocols / quarter",
    ],
    cta: "Apply",
  },
  {
    name: "Elite",
    tagline: "Bespoke, fully concierge medicine.",
    benefits: [
      "Unlimited physician access",
      "Comprehensive biomarker tracking",
      "Quarterly NAD+ & longevity drips",
      "In-residence appointments",
      "Direct line to medical team",
      "Annual full-system optimization",
    ],
    cta: "Inquire",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <div className="label text-eucalyptus mb-5">Membership</div>
            <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
              An invitation, not
              <br />a transaction.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-body leading-relaxed text-base md:text-lg max-w-xl">
              Membership at LivLong MD is a private commitment between you and
              our physicians — a continuous, evolving relationship built on
              data, discretion, and care.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-3xl p-10 transition-all duration-500 ease-luxe ${
                t.featured
                  ? "bg-charcoal text-ice shadow-glass md:scale-[1.03]"
                  : "glass text-charcoal hover:bg-white/45"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-10 label text-eucalyptus bg-ice px-3 py-1 rounded-full">
                  Most chosen
                </div>
              )}
              <div
                className={`label mb-5 ${
                  t.featured ? "text-eucalyptus" : "text-eucalyptus"
                }`}
              >
                {t.name}
              </div>
              <h3
                className={`text-2xl md:text-3xl tracking-tightest font-medium leading-snug ${
                  t.featured ? "text-ice" : "text-charcoal"
                }`}
              >
                {t.tagline}
              </h3>

              <div
                className={`my-8 h-px ${
                  t.featured ? "bg-ice/15" : "bg-charcoal/10"
                }`}
              />

              <ul className="space-y-4">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check
                      size={14}
                      strokeWidth={1.5}
                      className={`mt-1 shrink-0 ${
                        t.featured ? "text-eucalyptus" : "text-eucalyptus"
                      }`}
                    />
                    <span
                      className={
                        t.featured ? "text-ice/80" : "text-body"
                      }
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  variant={t.featured ? "dark" : "primary"}
                  size="md"
                  onClick={openBooking}
                  className="w-full"
                >
                  {t.cta}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
