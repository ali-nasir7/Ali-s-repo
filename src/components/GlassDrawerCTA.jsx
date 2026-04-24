import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { openBooking } from "../lib/utils";

/**
 * Floating glass drawer CTA — a small glass button anchored bottom-right.
 * Click opens an elegant side panel with quick booking + contact options.
 * Does NOT navigate away.
 */
export default function GlassDrawerCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Quick booking"
        className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 glass px-5 py-3 text-charcoal text-[12px] font-medium tracking-tight inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-500 ease-luxe rounded-full"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-eucalyptus animate-pulse" />
        Concierge
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-50 top-0 right-0 h-full w-full sm:max-w-md bg-ice border-l border-charcoal/10 shadow-glass"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
                  <div className="label text-charcoal/70">Concierge</div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="p-2 -mr-2 text-charcoal"
                  >
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="p-8 flex-1 overflow-y-auto">
                  <h3 className="text-3xl tracking-tightest font-medium text-charcoal leading-[1.1]">
                    A private path to longevity.
                  </h3>
                  <p className="mt-4 text-body leading-relaxed">
                    Begin with a complimentary discovery conversation. Our team
                    will guide you toward the protocol best matched to your
                    biology.
                  </p>

                  <div className="mt-10 space-y-4">
                    <button
                      onClick={openBooking}
                      className="w-full flex items-center justify-between gap-4 glass p-5 hover:bg-white/40 transition-all duration-500 ease-luxe text-left"
                    >
                      <div>
                        <div className="text-charcoal font-medium">
                          Book a consultation
                        </div>
                        <div className="text-xs text-body mt-1">
                          30 min · Concierge intake
                        </div>
                      </div>
                      <Calendar
                        size={18}
                        className="text-eucalyptus shrink-0"
                        strokeWidth={1.5}
                      />
                    </button>

                    <a
                      href="mailto:LivLongMD@gmail.com"
                      className="block w-full glass p-5 hover:bg-white/40 transition-all duration-500 ease-luxe"
                    >
                      <div className="text-charcoal font-medium">
                        Email our team
                      </div>
                      <div className="text-xs text-body mt-1">
                        LivLongMD@gmail.com
                      </div>
                    </a>

                    <a
                      href="tel:4806484510"
                      className="block w-full glass p-5 hover:bg-white/40 transition-all duration-500 ease-luxe"
                    >
                      <div className="text-charcoal font-medium">
                        Speak with concierge
                      </div>
                      <div className="text-xs text-body mt-1">
                        480-648-4510 · 9–6 MST
                      </div>
                    </a>
                  </div>
                </div>
                <div className="p-6 border-t border-charcoal/10">
                  <div className="label text-charcoal/50">
                    LivLong MD · Scottsdale
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
