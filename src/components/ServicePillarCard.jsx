/**
 * ServicePillarCard — reusable pillar card used on Home (teaser)
 * and ServicesPage (hub navigation).
 *
 * Props:
 *   label     {string}    — card title
 *   tagline   {string}    — subtitle/description
 *   image     {string}    — imported image URL
 *   icon      {Component} — lucide icon component
 *   onClick   {function}  — called when the card is clicked
 *   idx       {number}    — used for staggered entrance animation delay
 */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicePillarCard({
  label,
  tagline,
  image,
  icon: Icon,
  onClick,
  idx = 0,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: idx * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-3xl border border-charcoal/10 bg-white/15 hover:bg-white/35 hover:border-charcoal/20 text-left transition-all duration-700 ease-luxe w-full"
    >
      {/* Image */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />

        {/* Gold icon badge
        <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-brandGold/90 backdrop-blur-sm flex items-center justify-center">
          <Icon size={18} strokeWidth={1.6} className="text-white" />
        </div> */}

        {/* Arrow indicator */}
        <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/40 backdrop-blur-sm bg-white/10 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-500">
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* Text block */}
      <div className="px-7 py-6">
        <h3 className="text-xl md:text-2xl tracking-tightest font-medium text-charcoal leading-snug">
          {label}
        </h3>
        <p className="mt-3 text-sm md:text-[15px] text-body leading-relaxed">
          {tagline}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-charcoal/60 group-hover:text-charcoal transition-colors duration-300">
          Explore treatments
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </div>
      </div>
    </motion.button>
  );
}
