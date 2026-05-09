import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "From the first call, the experience felt unlike any clinic I'd been to. Calm, considered, and entirely about me.",
    name: "M. Hartwell",
    role: "Member · Scottsdale",
  },
  {
    quote:
      "The diagnostics revealed what years of routine bloodwork never had. My energy and focus have transformed.",
    name: "Brittany J.",
    role: "Member · Paradise Valley",
  },
  {
    quote:
      "It feels less like medicine and more like a private partnership. They simply understand longevity.",
    name: "S. Ammari",
    role: "Member · Phoenix",
  },
];

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="label text-eucalyptus !text-xl mb-5 tracking-editorial">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
            
          </h2>
          <p className="mt-6 text-body max-w-xl mx-auto leading-relaxed">
            Reflecting on experiences of precision, empathy, and restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {TESTIMONIALS.map((t, i) => {
            const center = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`glass relative ${
                  center
                    ? "p-12 md:p-14 md:scale-[1.05] z-10"
                    : "p-10 md:p-11"
                }`}
              >
                {/* faint eucalyptus leaf overlay
                <svg
                  aria-hidden
                  viewBox="0 0 60 60"
                  className="absolute right-5 top-5 opacity-[0.06]"
                  width="80"
                  height="80"
                >
                  <path
                    d="M30 5 C20 25, 20 40, 30 55 C40 40, 40 25, 30 5 Z"
                    fill="#7A9D96"
                  />
                  <line
                    x1="30"
                    y1="10"
                    x2="30"
                    y2="50"
                    stroke="#7A9D96"
                    strokeWidth="0.7"
                  />
                </svg> */}

                <div className="text-eucalyptus text-5xl leading-none font-light mb-6">
                  &ldquo;
                </div>
                <p
                  className={`${
                    center ? "text-lg md:text-xl" : "text-base"
                  } text-charcoal leading-relaxed tracking-tight`}
                >
                  {t.quote}
                </p>
                <div className="hairline my-8" />
                <div>
                  <div className="text-charcoal text-sm font-medium">
                    {t.name}
                  </div>
                  <div className="label text-charcoal/50 mt-1">{t.role}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
