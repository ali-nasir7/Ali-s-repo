import Membership from "../sections/Membership";
import usePageMeta from "../hooks/usePageMeta";
import { motion } from "framer-motion";

export default function MembershipPage() {
  usePageMeta({
    title: "Membership — LivLong MD",
    description:
      "Concierge membership tiers — Basic, Premium, and Elite. A continuous, personalized relationship with your physicians.",
  });
  return (
    <>
      <section className="pt-40 md:pt-48 pb-8">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="label text-eucalyptus mb-5">Membership</div>
            <h1 className="text-5xl md:text-7xl tracking-tightest font-medium text-charcoal leading-[1.02]">
              An invitation to be cared for, fully.
            </h1>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-2xl">
              Memberships open the door to continuous, personalized longevity
              care — designed around your life, not a calendar.
            </p>
          </motion.div>
        </div>
      </section>
      <Membership />
    </>
  );
}
