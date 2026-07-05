// import { useEffect, useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Preloader from "./components/Preloader";
// import GlassDrawerCTA from "./components/GlassDrawerCTA";
// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import MembershipPage from "./pages/MembershipPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";
// import CareersPage  from "./pages/CareersPage";
// import LegalPage from './pages/LegalPage'

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();



//   // Lock scroll while preloader is visible
//   useEffect(() => {
//     document.body.style.overflow = loading ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [loading]);

//   return (
//     <>
//       {loading && <Preloader onDone={() => setLoading(false)} />}

//       <div
//         className={`transition-opacity duration-700 ease-luxe ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <Navbar />
//         <main>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={location.pathname}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <Routes location={location}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/services" element={<ServicesPage />} />
//                 <Route path="/membership" element={<MembershipPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/contact" element={<ContactPage />} />
//                 <Route path="/careers" element={<CareersPage />} />
//                   <Route path="/legal" element={<LegalPage />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </motion.div>
//           </AnimatePresence>
//         </main>
//         <Footer />
//         <GlassDrawerCTA />
//       </div>
//     </>
//   );
// }























import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import GlassDrawerCTA from "./components/GlassDrawerCTA";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import IVTherapyPage from "./pages/IVTherapyPage";
import PeptidesPage from "./pages/PeptidesPage";   // /services/peptide
import PeptideDetailPage from "./pages/PeptideDetailPage";
import MembershipPage from "./pages/MembershipPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CareersPage from "./pages/CareersPage";
import LegalPage from "./pages/LegalPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-700 ease-luxe ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/"                   element={<Home />} />
                <Route path="/services"           element={<ServicesPage />} />
                <Route path="/services/peptide"   element={<PeptidesPage />} />
                <Route path="/services/iv-therapy" element={<IVTherapyPage />} />
                <Route path="/peptides/:id"       element={<PeptideDetailPage />} />
                <Route path="/membership"         element={<MembershipPage />} />
                <Route path="/about"              element={<AboutPage />} />
                <Route path="/contact"            element={<ContactPage />} />
                <Route path="/careers"            element={<CareersPage />} />
                <Route path="/legal"              element={<LegalPage />} />
                <Route path="*"                   element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <GlassDrawerCTA />
      </div>
    </>
  );
}
