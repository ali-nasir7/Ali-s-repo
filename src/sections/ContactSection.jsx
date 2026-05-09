import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import { CONTACT } from "../lib/constants";
import { openBooking } from "../lib/utils";
import { BOOKING_URL } from "../lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="label text-eucalyptus !text-xl mb-5">Contact</div>
            <h2 className="text-4xl md:text-6xl tracking-tightest font-medium text-charcoal leading-[1.05]">
              Let's start a 
              <br />
              conversation.
            </h2>
            <p className="mt-6 text-body leading-relaxed max-w-md">
              Reach our concierge team directly.We are here to listen and
get you started
            </p>

            <div className="mt-12 space-y-6">
              <Detail
                icon={<Mail size={16} strokeWidth={1.5} />}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <Detail
                icon={<Phone size={16} strokeWidth={1.5} />}
                label="Phone"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
              />
              <Detail
                icon={<MapPin size={16} strokeWidth={1.5} />}
                label="Practice"
                value={CONTACT.address.join(" · ")}
              />
            </div>

            <div className="mt-12">
              <Button variant="primary" size="lg" onClick={() => openBooking(BOOKING_URL)}>
                Book Appointment
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-8 md:p-12"
            >
              <div className="label text-charcoal/60 mb-8 inline-flex items-center gap-2">
                <Clock size={12} strokeWidth={1.5} />
                Working Hours
              </div>
              <ul>
                {CONTACT.hours.map((h, i) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-4 ${
                      i !== CONTACT.hours.length - 1
                        ? "border-b border-charcoal/10"
                        : ""
                    }`}
                  >
                    <span className="text-charcoal text-sm tracking-tight">
                      {h.day}
                    </span>
                    <span className="text-body text-sm tracking-tight">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <div className="label text-charcoal/60 mb-5">Location</div>
                <MinimalMap />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, label, value, href }) {
  const content = (
    <>
      <div className="w-9 h-9 rounded-full glass flex items-center justify-center text-eucalyptus shrink-0">
        {icon}
      </div>
      <div>
        <div className="label text-charcoal/50 mb-1">{label}</div>
        <div className="text-charcoal text-base">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}

// Abstract editorial map — just elegant geometry, no real map dependency.
function MinimalMap() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-mist/40">
      <svg
        viewBox="0 0 800 450"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Streets */}
        {[40, 90, 140, 200, 260, 320, 380, 440].map((y) => (
          <line
            key={`h${y}`}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="#2F3E46"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}
        {[60, 140, 220, 320, 420, 520, 620, 720].map((x) => (
          <line
            key={`v${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="450"
            stroke="#2F3E46"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}
        <path
          d="M0 260 Q 200 180, 400 240 T 800 200"
          fill="none"
          stroke="#7A9D96"
          strokeOpacity="0.4"
          strokeWidth="1.4"
        />
        {/* Marker */}
        <g transform="translate(420 230)">
          <circle r="22" fill="#7A9D96" fillOpacity="0.12" />
          <circle r="11" fill="#7A9D96" fillOpacity="0.25" />
          <circle r="4" fill="#2F3E46" />
        </g>
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div className="label text-charcoal/60">Scottsdale · AZ</div>
        <div className="text-[11px] text-charcoal/50 tracking-tight">
          8010 E. McDowell Rd, Suite 209
        </div>
      </div>
    </div>
  );
}
