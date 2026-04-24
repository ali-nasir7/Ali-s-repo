import { motion } from "framer-motion";

/**
 * Editorial section heading.
 * props: eyebrow, title, description, align ("left"|"center"), tone ("light"|"dark")
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="label mb-6"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tightest leading-[1.05] ${
          tone === "light" ? "text-ice" : "text-charcoal"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mt-6 text-base md:text-lg leading-relaxed ${
            tone === "light" ? "text-ice/70" : "text-body"
          } max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
