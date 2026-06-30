import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import { recommend, getProduct } from "../lib/recommend";
import { openBooking } from "../lib/utils";
import { BOOKING_URL, QUICK_SHOT_URL } from "../lib/constants";

const QUESTIONS = [
  {
    key: "goal",
    label: "What matters most right now?",
    options: [
      { value: "longevity", label: "Longevity & cellular health" },
      { value: "energy", label: "Sustained energy" },
      { value: "immunity", label: "Immune resilience" },
      { value: "skin", label: "Skin & radiance" },
      { value: "performance", label: "Cognitive & physical performance" },
      { value: "recovery", label: "Recovery & hydration" },
    ],
  },
  {
    key: "frequency",
    label: "How often do you currently invest in wellness protocols?",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "monthly", label: "Monthly" },
      { value: "weekly", label: "Weekly" },
    ],
  },
  {
    key: "sleep",
    label: "How is your sleep, honestly?",
    options: [
      { value: "great", label: "Restorative" },
      { value: "ok", label: "Inconsistent" },
      { value: "poor", label: "Poor" },
    ],
  },
  {
    key: "stress",
    label: "Your current stress load?",
    options: [
      { value: "low", label: "Low" },
      { value: "moderate", label: "Moderate" },
      { value: "high", label: "High" },
    ],
  },
  {
    key: "format",
    label: "Preferred experience?",
    options: [
      { value: "iv", label: "Full IV therapy" },
      { value: "shot", label: "Quick booster shot" },
      { value: "either", label: "Recommend for me" },
    ],
  },
];

export default function Questionnaire() {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length, last = result
  const [answers, setAnswers] = useState({});
  const [resultId, setResultId] = useState(null);

  const isResult = step >= QUESTIONS.length;
  const current = QUESTIONS[step];
  const total = QUESTIONS.length;

  const select = (value) => {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    if (step < total - 1) {
      setTimeout(() => setStep(step + 1), 220);
    } else {
      // last question — wait for "See My Recommendation"
    }
  };

  const computeResult = () => {
    setResultId(recommend(answers));
    setStep(total);
  };

  const back = () => {
    if (isResult) {
      setStep(total - 1);
      setResultId(null);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setAnswers({});
    setResultId(null);
    setStep(0);
  };

  const product = resultId ? getProduct(resultId) : null;
  const answered = current ? answers[current.key] : null;

  return (
    <section
      id="questionnaire"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-14">
          <div className="label mb-5 text-eucalyptus !text-xl">Concierge Intake</div>
          <h2 className="text-3xl md:text-5xl tracking-tightest font-medium text-charcoal">
            A protocol shaped to you.
          </h2>
          <p className="mt-5 text-body max-w-xl mx-auto leading-relaxed">
           Answer a few brief questions. Our system will recommend the right protocol based on your health profile and goals.
          </p>
        </div>

        <div className="glass p-6 md:p-12">
          {/* Progress hairline */}
          <div className="flex items-center gap-3 mb-10">
            <div className="label text-charcoal/50 shrink-0">
              {String(Math.min(step + 1, total)).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </div>
            <div className="flex-1 h-px bg-charcoal/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-eucalyptus"
                initial={false}
                animate={{
                  width: `${(Math.min(step, total) / total) * 100}%`,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isResult && (
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
                      onClick={computeResult}
                      disabled={!answered}
                      className="disabled:opacity-40"
                    >
                      See My Recommendation
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Button>
                  )}
                </div>
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
                 <Button
  variant="primary"
  size="lg"
  onClick={() =>
    openBooking(
      product.parentTitle?.toLowerCase().includes("booster") ||
      product.title?.toLowerCase().includes("booster")
        ? QUICK_SHOT_URL
        : BOOKING_URL
    )
  }
>
  Book Now
  <ArrowUpRight size={14} strokeWidth={1.5} />
</Button>
                  <button
                    onClick={back}
                    className="inline-flex items-center gap-2 text-[13px] text-charcoal/60 hover:text-charcoal transition-colors"
                  >
                    <ArrowLeft size={14} strokeWidth={1.5} />
                    Back
                  </button>
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
