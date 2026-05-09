import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { NAV_LINKS } from "../lib/constants";
import { openBooking } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxe ${
          scrolled
            ? "bg-ice/65 backdrop-blur-xl border-b border-charcoal/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
  {/* Logo */}
<Link to="/" className="flex items-center gap-2 group">
  <img
    src="/resources/logo.png"
    alt="LivLong MD"
    className="h-10 w-auto object-cover scale-110" 
    onError={(e) => {
      e.currentTarget.style.display = "none";
    }}
    />

    {/* Company Name + Tagline */}
    <div className="flex flex-col leading-tight">
      <span className="text-charcoal tracking-tightest font-semibold !text-lg text-[15px] md:text-[16px]">
        LivLong MD
      </span>

      <span className="label text-[9px] md:text-[10px]  !text-brandGold mt-0.5">
        Live Well Long
      </span>
    </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[13px] tracking-tight transition-colors duration-300 ${
                    isActive
                      ? "text-charcoal"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px !bg-brandGold transition-all duration-500 ease-luxe ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              className="hidden md:inline-flex"
              onClick={openBooking}
            >
              Book Appointment
            </Button>
            <button
              className="md:hidden p-2 -mr-2 text-charcoal"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen luxury overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-ice"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ice via-ice to-mist/40" />
            <div className="relative h-full flex flex-col">
              <div className="h-20 px-6 flex items-center justify-between border-b border-charcoal/5">
                <span className="label text-charcoal/70">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-charcoal"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.06,
                    }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block py-4 text-4xl tracking-tightest font-medium ${
                          isActive ? "text-charcoal" : "text-charcoal/60"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="p-8 border-t border-charcoal/5">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={openBooking}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}