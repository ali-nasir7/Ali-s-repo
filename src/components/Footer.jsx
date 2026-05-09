import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-charcoal/10 bg-ice">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/resources/logo.png"
                alt="LivLong MD"
                className="h-10 w-auto object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="leading-tight">
                <div className="text-charcoal font-semibold tracking-tightest">
                  LivLong MD
                </div>
                <div className="label text-[10px] text-eucalyptus mt-0.5">
                  Live Well Long
                </div>
              </div>
            </Link>
            <p className="mt-6 text-sm text-body max-w-md leading-relaxed">
              Concierge longevity medicine in Scottsdale, AZ. Cutting-edge
              diagnostics and personalized protocols engineered to extend your
              healthspan.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label mb-5">Navigate</div>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-body hover:text-charcoal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="label mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-body">
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-eucalyptus" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-charcoal transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 text-eucalyptus" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                  className="hover:text-charcoal transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-eucalyptus" />
                <span>
                  {CONTACT.address.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-charcoal/50">
          <div>© {new Date().getFullYear()} LivLong MD. All rights reserved.</div>
          <div className="label">Concierge Longevity · Scottsdale, AZ</div>
        </div>
      </div>
    </footer>
  );
}
