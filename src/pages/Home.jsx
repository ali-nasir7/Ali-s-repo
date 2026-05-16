import Hero from "../sections/Hero";
import Questionnaire from "../sections/Questionnaire";
import ServicesShowcase from "../sections/ServicesShowcase";
import Process from "../sections/Process";
import Membership from "../sections/Membership";
import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/ContactSection";
import usePageMeta from "../hooks/usePageMeta";


export default function Home() {
  usePageMeta({
    title: "LivLong MD — Concierge Longevity & Wellness | Scottsdale",
    description:
      "Concierge longevity medicine in Scottsdale,AZ. Physician-guided, data-driven protocols engineered to extend your healthspan.",
  });
  return (
    <>

      <Hero />
      <ServicesShowcase />
      <Questionnaire />
      <Process />
      <Membership />
      <Testimonials />
      <ContactSection />
    </>
  );
}
