import { motion } from "framer-motion";

const PEOPLE = [
  {
    name: "Asal Dean, PharmD",
    role: "Founder · Wellness & Burnout Coach",
    experience: "10 Years",
    spec: "Wellness and Burnout Coach · Certified Sound Practitioner",
    image: "/resources/asalphoto.png",
    animatePhoto: false,
    bio: `Asal Dean is the founder of LivLong MD, a concierge-based longevity and wellness platform built on the intersection of clinical expertise and high-touch, personalized care. A board-certified oncology pharmacist with over a decade of experience, Asal transitioned into the wellness space after a personal journey through burnout. This shift led her to master mindfulness and sound healing, becoming a certified practitioner dedicated to nervous system regulation and emotional well-being.

Asal's unique approach integrates her pharmaceutical background with restorative practices like vibration and intentional space-holding. By offering a concierge model, she provides a bespoke experience that combines clinical insight with a deep understanding of how chronic stress impacts the body. A TEDx speaker and consultant for corporations, she designs immersive wellness experiences centered on human connection and intentional longevity.`,
  },
  {
    name: "Umar Iqbal, MD",
    role: "Medical Director",
    experience: "15 Years",
    spec: "Longevity Expert · Functional & Regenerative Medicine",
    image: null, // premium placeholder
    animatePhoto: true,
    bio: `Dr. Umar Iqbal is the Medical Director of LivLong MD, where he bridges high-level clinical expertise with a science-meets-soul philosophy. A Board-Certified Physician specializing in hormone optimization, longevity, and environmental medicine, Dr. Iqbal moves beyond symptom management to address the root causes of metabolic imbalance.

Central to his practice is a rigorous, data-driven approach that utilizes advanced diagnostics and biomarkers to craft precise, personalized roadmaps for health. By integrating quantitative insights with a passion for non-toxic living and restorative healing, he empowers patients to protect neuroendocrine function and achieve lasting physical and mental excellence.`,
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-2xl mb-20">
          <div className="label text-eucalyptus mb-5">The Practitioners</div>
          <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
            Trusted authority
            <br />
            Profound care.
          </h2>
        </div>

        <div className="space-y-32 md:space-y-44">
          {PEOPLE.map((p, i) => (
            <Profile key={p.name} person={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Profile({ person, flip }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-12 gap-10 md:gap-16 items-start ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Photo */}
      <div className="lg:col-span-5">
        <PhotoFrame person={person} />
      </div>

      {/* Bio */}
      <div className="lg:col-span-7">
        <div className="label text-eucalyptus mb-4">{person.role}</div>
        <h3 className="text-3xl md:text-5xl tracking-tightest font-medium text-charcoal leading-[1.1]">
          {person.name}
        </h3>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="label text-charcoal/50 mb-2">Experience</div>
            <div className="text-charcoal text-lg">{person.experience}</div>
          </div>
          <div>
            <div className="label text-charcoal/50 mb-2">Specialization</div>
            <div className="text-charcoal text-base leading-snug">
              {person.spec}
            </div>
          </div>
        </div>

        <div className="hairline my-10" />

        {person.bio.split("\n\n").map((para, idx) => (
          <p
            key={idx}
            className="mt-5 text-body leading-relaxed text-[15px] md:text-base max-w-2xl"
          >
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

function PhotoFrame({ person }) {
  // If image present, render it. If missing, render a luxury placeholder.
  // Asal's image must NOT animate.
  const wrapClass =
    "relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-strong";

  if (person.image) {
    return (
      <div className={wrapClass}>
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Premium placeholder block for Dr. Iqbal until image is added
  return (
    <div className={wrapClass}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 20%, rgba(122,157,150,0.35), transparent 60%), linear-gradient(180deg, #D1DBE0 0%, #B9C7CD 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal/70">
        <div className="label"></div>
        <div className="mt-3 text-2xl tracking-tightest font-medium text-charcoal">
          {person.name.split(",")[0]}
        </div>
      </div>
      <div className="absolute inset-0 grain" />
    </div>
  );
}
