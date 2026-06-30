import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Button from "../components/Button";
import { recommendPeptide, getPeptide } from "../lib/peptides";
import { openBooking } from "../lib/utils";
import { PEPTIDE_BOOKING_URL, PEPTIDE_FORM_ENDPOINT } from "../lib/constants";

const QUESTIONS = [
  {
    key: "goal",
    label: "What's your primary goal with peptide therapy?",
    options: [
      { value: "muscle", label: "Muscle growth & strength" },
      { value: "fatloss", label: "Fat loss & body composition" },
      { value: "recovery", label: "Injury & tissue recovery" },
      { value: "antiaging", label: "Anti-aging & longevity" },
      { value: "sleep", label: "Sleep & restoration" },
    ],
  },
  {
    key: "intensity",
    label: "How would you describe your current health & fitness baseline?",
    options: [
      { value: "low", label: "Just getting started" },
      { value: "moderate", label: "Active, moderately fit" },
      { value: "high", label: "Highly trained / advanced" },
    ],
  },
  {
    key: "format",
    label: "Do you have a delivery preference?",
    options: [
      { value: "injection", label: "Injection is fine" },
      { value: "oral", label: "Prefer oral, if possible" },
      { value: "either", label: "Recommend for me" },
    ],
  },
  {
    key: "experience",
    label: "Have you used peptide therapy before?",
    options: [
      { value: "new", label: "No, this is new to me" },
      { value: "some", label: "Yes, some experience" },
      { value: "experienced", label: "Yes, very experienced" },
    ],
  },
];

const initialContact = { name: "", phone: "", email: "", message: "" };

export default function PeptideQuestionnaire() {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length-1 = questions, QUESTIONS.length = contact form, +1 = result
  const [answers, setAnswers] = useState({});
  const [resultId, setResultId] = useState(null);
  const [contact, setContact] = useState(initialContact);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const total = QUESTIONS.length;
  const isContactStep = step === total;
  const isResult = step === total + 1;
  const current = QUESTIONS[step];

  const select = (value) => {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    if (step < total - 1) {
      setTimeout(() => setStep(step + 1), 220);
    }
  };

  const goToContact = () => setStep(total);

  const back = () => {
    if (isResult) {
      setStep(total);
    } else if (isContactStep) {
      setStep(total - 1);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setAnswers({});
    setContact(initialContact);
    setResultId(null);
    setStatus("idle");
    setStep(0);
  };

  const product = resultId ? getPeptide(resultId) : null;
  const answered = current ? answers[current.key] : null;

  const updateContact = (key) => (e) =>
    setContact((c) => ({ ...c, [key]: e.target.value }));

  const submitContact = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone || !contact.email) return;

    const id = recommendPeptide(answers);
    setResultId(id);
    const peptide = getPeptide(id);
    setStatus("sending");

    try {
      await fetch(PEPTIDE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Peptide Therapy Intake — ${contact.name}`,
          Name: contact.name,
          Phone: contact.phone,
          Email: contact.email,
          Message: contact.message || "—",
          "Primary Goal": answers.goal,
          "Fitness Baseline": answers.intensity,
          "Delivery Preference": answers.format,
          "Prior Experience": answers.experience,
          "Recommended Peptide": peptide?.title || id,
        }),
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
    setStep(total + 1);
  };

  return (
    <section id="peptide-questionnaire" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-14">
          <div className="label mb-5 text-eucalyptus !text-xl">
            Peptide Intake
          </div>
          <h2 className="text-3xl md:text-5xl tracking-tightest font-medium text-charcoal">
            A protocol shaped to you.
          </h2>
          <p className="mt-5 text-body max-w-xl mx-auto leading-relaxed">
            Answer a few brief questions and share your details. Our
            physician team will review your profile and follow up with a
            personalized peptide protocol.
          </p>
        </div>

        <div className="glass p-6 md:p-12">
          {/* Progress hairline */}
          <div className="flex items-center gap-3 mb-10">
            <div className="label text-charcoal/50 shrink-0">
              {String(Math.min(step + 1, total + 1)).padStart(2, "0")} /{" "}
              {String(total + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 h-px bg-charcoal/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-eucalyptus"
                initial={false}
                animate={{
                  width: `${(Math.min(step, total + 1) / (total + 1)) * 100}%`,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isContactStep && !isResult && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl md:text-3xl tracking-tightest font-medium text-charcoal max-w-2xl">
                  {current.label}
                </h3>
                <div className="mt-10 grid sm:grid-cols-2 gap-3">
                  {current.options.map((opt) => {
                    const active = answered === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => select(opt.value)}
                        className={`text-left px-6 py-5 rounded-2xl border transition-all duration-500 ease-luxe ${
                          active
                            ? "border-charcoal bg-white/60 text-charcoal"
                            : "border-charcoal/15 hover:border-charcoal/40 hover:bg-white/40 text-ink"
                        }`}
                      >
                        <div className="text-[15px]">{opt.label}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 text-[13px] text-charcoal/60 hover:text-charcoal disabled:opacity-30 transition-colors"
                  >
                    <ArrowLeft size={14} strokeWidth={1.5} />
                    Back
                  </button>
                  {step === total - 1 && (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={goToContact}
                      disabled={!answered}
                      className="disabled:opacity-40"
                    >
                      Continue
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            {isContactStep && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl md:text-3xl tracking-tightest font-medium text-charcoal max-w-2xl">
                  Almost there — your information
                </h3>
                <p className="mt-3 text-body text-sm md:text-[15px] max-w-xl">
                  We'll send your intake straight to our clinical team so they
                  can prepare your personalized recommendation.
                </p>

                <form
                  onSubmit={submitContact}
                  className="mt-10 grid sm:grid-cols-2 gap-4"
                >
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={contact.name}
                    onChange={updateContact("name")}
                    className="px-5 py-4 rounded-2xl border border-charcoal/15 bg-white/50 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    value={contact.phone}
                    onChange={updateContact("phone")}
                    className="px-5 py-4 rounded-2xl border border-charcoal/15 bg-white/50 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={contact.email}
                    onChange={updateContact("email")}
                    className="px-5 py-4 rounded-2xl border border-charcoal/15 bg-white/50 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors sm:col-span-2"
                  />
                  <textarea
                    rows={3}
                    placeholder="Anything you'd like us to know? (optional)"
                    value={contact.message}
                    onChange={updateContact("message")}
                    className="px-5 py-4 rounded-2xl border border-charcoal/15 bg-white/50 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors sm:col-span-2 resize-none"
                  />

                  <div className="sm:col-span-2 mt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-2 text-[13px] text-charcoal/60 hover:text-charcoal transition-colors"
                    >
                      <ArrowLeft size={14} strokeWidth={1.5} />
                      Back
                    </button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === "sending"}
                      className="disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          See My Recommendation
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {isResult && product && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {status === "sent" && (
                  <div className="flex items-center gap-2 text-[13px] text-eucalyptus mb-6">
                    <CheckCircle2 size={15} strokeWidth={1.5} />
                    Your intake was sent to our clinical team.
                  </div>
                )}
                {status === "error" && (
                  <div className="text-[13px] text-charcoal/60 mb-6">
                    We couldn't confirm delivery — please also reach us at{" "}
                    <a
                      href="mailto:contact@livlongmd.com"
                      className="underline"
                    >
                      contact@livlongmd.com
                    </a>
                    .
                  </div>
                )}

                <div className="flex items-center gap-2 label text-eucalyptus mb-5">
                  <Sparkles size={12} strokeWidth={1.5} />
                  Recommended for you
                </div>
                <h3 className="text-3xl md:text-5xl tracking-tightest font-medium text-charcoal">
                  {product.title}
                </h3>
                <p className="mt-5 text-body leading-relaxed max-w-2xl">
                  {product.description}
                </p>
                <div className="mt-8 label text-charcoal/50">
                  Within · {product.parentTitle}
                </div>

                <div className="hairline my-10" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {product.hasReport && (
                    <Button
                      as="a"
                      href={`/peptides/${product.id}`}
                      variant="ghost"
                      size="lg"
                    >
                      View Full Report
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => openBooking(PEPTIDE_BOOKING_URL)}
                  >
                    Book Now
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </Button>
                  <button
                    onClick={restart}
                    className="text-[13px] text-charcoal/60 hover:text-charcoal transition-colors sm:ml-auto"
                  >
                    Start over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
