import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  FlaskConical,
  Sparkles,
} from "lucide-react";
import Button from "../components/Button";
import usePageMeta from "../hooks/usePageMeta";
import { openBooking } from "../lib/utils";
import { PEPTIDE_BOOKING_URL } from "../lib/constants";
import {
  getPeptide,
  PEPTIDE_REPORTS,
  PEPTIDE_GENERAL_BENEFITS,
  PEPTIDE_DISCLAIMER,
  PEPTIDE_PHARMACY_NOTE,
} from "../lib/peptides";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function PeptideDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const peptide = getPeptide(id);
  const report = PEPTIDE_REPORTS[id];

  usePageMeta({
    title: peptide
      ? `${peptide.title} — Peptide Therapy — LivLong MD`
      : "Peptide Therapy — LivLong MD",
    description: peptide?.description || "Peptide therapy clinical brief.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [id]);

  if (!peptide) {
    return (
      <section className="pt-40 pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-medium text-charcoal">
            Peptide not found
          </h1>
          <p className="mt-4 text-body">
            We couldn't find that peptide. Browse the full list instead.
          </p>
          <Button
            variant="primary"
            size="md"
            className="mt-8"
            onClick={() => navigate("/peptides")}
          >
            Back to Peptides
          </Button>
        </div>
      </section>
    );
  }

  const benefits = report?.benefits || PEPTIDE_GENERAL_BENEFITS;

  return (
    <article className="relative">
      {/* subtle ambient glow — light animation for the "report" feel */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-24 right-0 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,163,90,0.18) 0%, rgba(201,163,90,0) 70%)",
        }}
      />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-10 relative">
        <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
          <motion.button
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/peptides")}
            className="inline-flex items-center gap-2 text-[13px] text-charcoal/60 hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            All peptides
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex items-center gap-2 label text-eucalyptus !text-xl mb-5">
              <Sparkles size={14} strokeWidth={1.5} />
              Peptide Therapy · Clinical Brief
            </div>
            <h1 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
              {peptide.title}
            </h1>
            <p className="mt-7 text-body text-base md:text-lg leading-relaxed max-w-2xl">
              {report?.overview || peptide.description}
            </p>
            {report?.fdaNote && (
              <p className="mt-5 text-[13px] text-charcoal/50 max-w-2xl leading-relaxed">
                {report.fdaNote}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24 md:pb-32 relative">
        <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16 space-y-6">
          {/* Benefits */}
          <motion.div {...fadeUp} className="glass p-7 md:p-10">
            <div className="flex items-center gap-2 label text-charcoal/40 mb-6">
              <CheckCircle2 size={14} strokeWidth={1.5} />
              Potential Benefits
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="text-[15px] text-ink leading-relaxed flex gap-2.5"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-eucalyptus shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {!report && (
              <p className="mt-6 text-[13px] text-charcoal/50 leading-relaxed">
                A detailed clinical brief for {peptide.title} is prepared by
                our physician team during your consultation.
              </p>
            )}
          </motion.div>

          {/* Mechanism */}
          {report?.mechanism && (
            <motion.div {...fadeUp} className="glass p-7 md:p-10">
              <div className="flex items-center gap-2 label text-charcoal/40 mb-6">
                <FlaskConical size={14} strokeWidth={1.5} />
                Mechanism of Action
              </div>
              <ul className="space-y-3">
                {report.mechanism.map((m) => (
                  <li
                    key={m}
                    className="text-[15px] text-ink leading-relaxed flex gap-2.5"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-eucalyptus shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Side effects + contraindications */}
          {(report?.sideEffects || report?.contraindications) && (
            <motion.div
              {...fadeUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {report?.sideEffects && (
                <div className="glass p-7 md:p-10">
                  <div className="flex items-center gap-2 label text-charcoal/40 mb-6">
                    <AlertTriangle size={14} strokeWidth={1.5} />
                    Most Common Side Effects
                  </div>
                  <ul className="space-y-3">
                    {report.sideEffects.map((s) => (
                      <li
                        key={s}
                        className="text-[14px] text-ink leading-relaxed flex gap-2.5"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-charcoal/30 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {report?.contraindications && (
                <div className="glass p-7 md:p-10">
                  <div className="flex items-center gap-2 label text-charcoal/40 mb-6">
                    <ShieldAlert size={14} strokeWidth={1.5} />
                    Contraindications
                  </div>
                  <ul className="space-y-3">
                    {report.contraindications.map((c) => (
                      <li
                        key={c}
                        className="text-[14px] text-ink leading-relaxed flex gap-2.5"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-charcoal/30 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}

          {/* Studies */}
          {report?.studies && (
            <motion.div {...fadeUp} className="glass p-7 md:p-10">
              <div className="label text-charcoal/40 mb-6">
                Referenced Studies
              </div>
              {report.note && (
                <p className="text-[13px] text-charcoal/50 mb-6 leading-relaxed">
                  {report.note}
                </p>
              )}
              <div className="space-y-4">
                {report.studies.map((s, idx) => (
                  <motion.a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group block rounded-2xl border border-charcoal/10 hover:border-charcoal/25 bg-white/30 hover:bg-white/50 transition-all duration-500 ease-luxe p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[14px] font-medium text-charcoal">
                          {s.title}
                        </div>
                        <p className="mt-1.5 text-[13px] text-body leading-relaxed">
                          {s.summary}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-charcoal/40 group-hover:text-eucalyptus transition-colors mt-0.5"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
              <p className="mt-6 text-[12px] text-charcoal/40 leading-relaxed">
                If you're using a browser with advanced ad-blocking security
                measures, study links may not open directly — copy the link
                into a new tab if needed.
              </p>
            </motion.div>
          )}

          {/* Disclaimers */}
          <motion.div {...fadeUp} className="space-y-3 pt-4">
            <p className="text-[12px] text-charcoal/40 leading-relaxed">
              {PEPTIDE_DISCLAIMER}
            </p>
            <p className="text-[12px] text-charcoal/40 leading-relaxed">
              {PEPTIDE_PHARMACY_NOTE}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="glass p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8"
          >
            <div>
              <div className="label text-eucalyptus mb-3">Ready to begin?</div>
              <h3 className="text-xl md:text-2xl tracking-tightest font-medium text-charcoal">
                Book a consultation for {peptide.title}
              </h3>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => openBooking(PEPTIDE_BOOKING_URL)}
              className="shrink-0"
            >
              Book appointment
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Button>
          </motion.div>

          <div className="text-center pt-4">
            <Link
              to="/peptides"
              className="inline-flex items-center gap-2 text-[13px] text-charcoal/60 hover:text-charcoal transition-colors"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Back to all peptides
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
