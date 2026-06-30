import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { PEPTIDE_SERVICE } from "../lib/peptides";
import { PEPTIDE_BOOKING_URL as PEP_URL } from "../lib/constants";
import { openBooking } from "../lib/utils";
import peptideImage from "../assets/service-signature.jpg";

export default function PeptideShowcase() {
  return (
    <section id="peptide-services" className="relative scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
        {/* TOP SECTION → image + intro, same layout as IV Therapy */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="label text-eucalyptus !text-xl mb-5">Practice</div>

            <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
              Peptide Therapy, elevated
            </h2>

            <p className="mt-8 text-body leading-relaxed text-base md:text-lg max-w-xl">
              Physician-guided peptide protocols to restore youthful function,
              optimize performance, and support your body's natural healing
              processes. Tap any peptide below for its full clinical brief.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl lg:h-full">
              <img
                src={peptideImage}
                alt="Peptide Therapy"
                className="w-full h-[320px] md:h-[420px] lg:h-full lg:min-h-[420px] lg:max-h-[560px] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* SERVICE ROW → accordion, same component pattern as IV Therapy */}
        <div className="space-y-4">
          <PeptideRow service={PEPTIDE_SERVICE} defaultOpen />
        </div>
      </div>
    </section>
  );
}

function PeptideRow({ service, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl border transition-all duration-700 ease-luxe ${
        open
          ? "bg-white/40 border-charcoal/15 shadow-glass"
          : "bg-white/15 border-charcoal/10 hover:bg-white/30"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-6 md:px-12 py-8 md:py-10 flex items-start md:items-center gap-6 md:gap-12"
      >
        <div className="text-eucalyptus tracking-tight font-light text-2xl md:text-3xl shrink-0 w-12">
          {service.number}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-3xl tracking-tightest font-medium text-charcoal leading-snug">
            {service.title}
          </h3>

          <p className="mt-2 text-sm md:text-[15px] text-body max-w-2xl">
            {service.summary}
          </p>
        </div>

        <div className="shrink-0 w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal">
          {open ? (
            <Minus size={16} strokeWidth={1.4} />
          ) : (
            <Plus size={16} strokeWidth={1.4} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-12 pb-10 md:pb-14">
              <div className="hairline mb-10" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.children.map((child, idx) => (
                  <motion.button
                    key={child.id}
                    type="button"
                    onClick={() => navigate(`/peptides/${child.id}`)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="group relative glass p-7 text-left hover:bg-white/55 transition-all duration-500 ease-luxe"
                  >
                    <div className="label text-charcoal/40 mb-4">
                      {child.hasReport ? "Full Report" : "Peptide"}
                    </div>

                    <h4 className="text-lg md:text-xl text-charcoal tracking-tight font-medium leading-snug">
                      {child.title}
                    </h4>

                    <p className="mt-3 text-sm text-body leading-relaxed">
                      {child.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <div className="text-[11px] text-charcoal/40 tracking-tight" />
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-charcoal group-hover:text-eucalyptus transition-colors">
                        View Report
                        <ArrowUpRight size={14} strokeWidth={1.5} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-10 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openBooking(PEP_URL)}
                >
                  Book appointment
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
