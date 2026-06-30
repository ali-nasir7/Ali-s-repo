// Peptide Therapy service catalog + individual report content.
// Mirrors the structure/pattern of services.js (IV Therapy) so the rest of
// the site can treat Peptide Therapy as a sibling "pillar".

export const PEPTIDE_GENERAL_BENEFITS = [
  "Increased muscle growth and strength — accelerated lean mass development",
  "Faster recovery — reduced downtime from workouts, injuries, and physical stress",
  "Improved sleep quality — deeper, more restorative sleep cycles",
  "Enhanced energy and stamina — sustained vitality throughout the day",
  "Sharper cognition — improved mental clarity, focus, and memory",
  "Skin rejuvenation — increased collagen production and improved skin elasticity",
  "Fat loss support — enhanced metabolic function and fat metabolism",
  "Anti-aging effects — slowed cellular aging and improved overall vitality",
  "Immune support — strengthened immune system function",
  "Joint and tissue repair — accelerated healing of damaged tissues",
];

export const PEPTIDE_PROCESS = [
  {
    title: "Comprehensive Assessment",
    description:
      "Detailed health history, current symptoms, lab work, and body composition analysis to determine which peptides are right for you.",
  },
  {
    title: "Custom Protocol Design",
    description:
      "Your physician creates a personalized peptide protocol based on your goals — anti-aging, performance, recovery, or a combination of benefits.",
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Regular follow-up appointments and lab work to track your response, adjust dosing, and ensure safety and effectiveness over time.",
  },
];

// The single top-level "pillar" entry — rendered the same way SERVICES rows
// are rendered on the Services page, so the accordion + grid styling matches
// the IV Therapy section exactly.
export const PEPTIDE_SERVICE = {
  id: "peptides",
  number: "01",
  title: "Peptide Therapy",
  summary:
    "Physician-guided peptide protocols to restore youthful function, optimize performance, and support your body's natural healing processes.",
  children: [
    {
      id: "tesamorelin",
      title: "Tesamorelin",
      description:
        "A potent GHRH analog that stimulates natural growth hormone release — studied for visceral fat reduction and body composition.",
      good_for: ["fat loss", "body composition", "GH support"],
      hasReport: true,
    },
    {
      id: "sermorelin",
      title: "Sermorelin",
      description:
        "A gentler GHRH analog supporting age-related GH decline, body composition, sleep quality, and recovery.",
      good_for: ["anti-aging", "sleep", "recovery"],
      hasReport: true,
    },
    {
      id: "mk677",
      title: "MK677 (Ibutamoren)",
      description:
        "An oral ghrelin receptor agonist that increases natural GH and IGF-1 secretion without injections.",
      good_for: ["lean mass", "GH support", "appetite"],
      hasReport: true,
    },
    {
      id: "ipamorelin",
      title: "Ipamorelin",
      description:
        "A highly selective GH secretagogue — clean GH release with minimal effect on cortisol or prolactin.",
      good_for: ["recovery", "body composition", "sleep"],
      hasReport: true,
    },
    {
      id: "bpc-157",
      title: "BPC-157",
      description:
        "A regenerative peptide studied for accelerated wound healing, gut lining repair, and musculoskeletal recovery.",
      good_for: ["healing", "gut health", "joint recovery"],
      hasReport: true,
    },
    {
      id: "thymosin-alpha-1",
      title: "Thymosin Alpha 1",
      description:
        "An immune-modulating peptide studied for immune resilience and balanced immune response.",
      good_for: ["immunity"],
      hasReport: false,
    },
    {
      id: "thymosin-beta-4",
      title: "Thymosin Beta 4",
      description:
        "A regenerative peptide associated with tissue repair, flexibility, and recovery support.",
      good_for: ["recovery", "tissue repair"],
      hasReport: false,
    },
    {
      id: "mots-c",
      title: "MOTS-c",
      description:
        "A mitochondrial-derived peptide explored for metabolic health and exercise performance support.",
      good_for: ["metabolism", "performance"],
      hasReport: false,
    },
    {
      id: "ss-31",
      title: "SS-31",
      description:
        "A mitochondrial-targeted peptide studied for cellular energy support and oxidative stress protection.",
      good_for: ["longevity", "cellular energy"],
      hasReport: false,
    },
    {
      id: "ghk-cu",
      title: "GHK-Cu",
      description:
        "A copper-binding peptide widely studied for skin remodeling, collagen support, and tissue repair.",
      good_for: ["skin", "anti-aging"],
      hasReport: false,
    },
    {
      id: "epithalon",
      title: "Epithalon",
      description:
        "A peptide explored in longevity research for cellular aging and sleep-wake regulation support.",
      good_for: ["longevity", "sleep"],
      hasReport: false,
    },
    {
      id: "oxytocin",
      title: "Oxytocin",
      description:
        "A naturally occurring peptide hormone explored for mood, connection, and stress-response support.",
      good_for: ["stress", "mood"],
      hasReport: false,
    },
    {
      id: "kpv",
      title: "KPV",
      description:
        "An anti-inflammatory peptide fragment studied for gut and skin inflammation support.",
      good_for: ["inflammation", "gut health"],
      hasReport: false,
    },
    {
      id: "kisspeptin",
      title: "Kisspeptin",
      description:
        "A peptide hormone involved in regulating the reproductive hormone axis.",
      good_for: ["hormone support"],
      hasReport: false,
    },
    {
      id: "gonadorelin",
      title: "Gonadorelin",
      description:
        "A GnRH peptide used to support natural hormone signaling and fertility-axis function.",
      good_for: ["hormone support", "fertility"],
      hasReport: false,
    },
    {
      id: "pt-141",
      title: "PT-141",
      description:
        "A peptide studied for its effect on libido and sexual wellness via central nervous system pathways.",
      good_for: ["libido", "sexual wellness"],
      hasReport: false,
    },
    {
      id: "aod-9604",
      title: "AOD-9604",
      description:
        "A modified fragment of growth hormone explored for fat metabolism support.",
      good_for: ["fat loss", "metabolism"],
      hasReport: false,
    },
    {
      id: "nad",
      title: "NAD+ (not a peptide)",
      description:
        "A coenzyme central to cellular energy production — commonly paired with peptide protocols for longevity support.",
      good_for: ["longevity", "cellular energy"],
      hasReport: false,
    },
  ],
};

export const PEPTIDE_PRODUCTS = PEPTIDE_SERVICE.children.map((c) => ({
  ...c,
  parentId: PEPTIDE_SERVICE.id,
  parentTitle: PEPTIDE_SERVICE.title,
}));

export function getPeptide(id) {
  return PEPTIDE_PRODUCTS.find((p) => p.id === id);
}

// ---------------------------------------------------------------------------
// Dedicated report content — sourced from the clinical brief provided by the
// client. Studies are summarized in our own words; original links preserved
// (lightly normalized) so visitors can read the primary source themselves.
// ---------------------------------------------------------------------------
export const PEPTIDE_REPORTS = {
  tesamorelin: {
    overview:
      "Tesamorelin is a synthetic peptide analog of growth hormone–releasing hormone (GHRH). It stimulates the pituitary gland to release endogenous growth hormone (GH), which then increases IGF-1 levels. Tesamorelin is one of the most potent GH-releasing peptides used clinically.",
    fdaNote:
      "Outside HIV-associated lipodystrophy, these uses are not FDA-approved.",
    benefits: [
      "Visceral fat reduction",
      "Body composition improvement",
      "Increased GH / IGF-1 levels",
      "Potential metabolic benefits",
      "Possible sleep quality improvement",
    ],
    sideEffects: [
      "Injection site reactions",
      "Joint pain or stiffness",
      "Edema (can result in compression neuropathy)",
      "Muscle pain",
      "Nausea",
      "Possible increase in blood sugar",
      "Possible insulin resistance",
    ],
    contraindications: ["Active malignancy (cancer)", "Pregnancy", "Known hypersensitivity"],
    studies: [
      {
        title: "Tesamorelin and Visceral + Liver Fat (JAMA / NIH-indexed)",
        summary:
          "Tesamorelin significantly reduced visceral adipose tissue (VAT) and showed a modest reduction in liver fat over 6 months.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24648559/",
      },
      {
        title: "Phase III Randomized Trial — Visceral Fat Reduction",
        summary:
          "About 18% reduction in visceral fat with treatment, with improvements in body image and abdominal fat profile.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17609255/",
      },
      {
        title: "Tesamorelin and Metabolic Markers",
        summary:
          "≥8% reduction in visceral fat was associated with improved triglycerides, increased adiponectin, and preserved glucose metabolism.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22162729/",
      },
      {
        title: "Early Randomized Trial Showing Visceral Fat Loss",
        summary:
          "A 26-week course of therapy decreased visceral fat and improved lipid profiles.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15292903/",
      },
      {
        title: "Study on Liver Enzymes and Visceral Fat",
        summary:
          "Patients achieving ≥8% visceral fat reduction had improvements in ALT and AST.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25051422/",
      },
      {
        title: "Meta-Analysis of Randomized Trials",
        summary:
          "A summary of multiple trials found decreased visceral adipose tissue and hepatic fat, alongside increased lean body mass and IGF-1 levels.",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=tesamorelin+meta-analysis",
      },
    ],
  },

  sermorelin: {
    overview:
      "Sermorelin is a synthetic peptide analog of growth hormone–releasing hormone (GHRH). It stimulates the pituitary gland to release endogenous growth hormone (GH), which then increases IGF-1 levels. Sermorelin, although similar to Tesamorelin, has a shorter half-life and a milder response.",
    fdaNote:
      "Sermorelin (formerly marketed as Geref) was previously FDA-approved for diagnosing and treating growth hormone deficiency in children. The branded product was discontinued in 2008 — today sermorelin is commonly obtained through compounding pharmacies and most adult uses are off-label.",
    benefits: [
      "Age-related decline in growth hormone",
      "Improved body composition",
      "Fat reduction",
      "Sleep quality improvement",
      "Energy and recovery",
      "Support for lean muscle mass",
    ],
    sideEffects: [
      "Injection site redness or irritation",
      "Headache",
      "Flushing",
      "Dizziness",
      "Nausea",
      "Mild fluid retention",
    ],
    contraindications: ["Active malignancy (cancer)", "Pregnancy", "Known hypersensitivity"],
    note:
      "Most clinical research involving sermorelin focused on growth hormone deficiency diagnostics in children. Evidence supporting use in healthy adults for anti-aging or body composition remains limited.",
    studies: [
      {
        title: "Growth Hormone Diagnostic Study",
        summary:
          "This study evaluated sermorelin as a diagnostic tool for growth hormone deficiency by stimulating GH release.",
        url: "https://pubmed.ncbi.nlm.nih.gov/2869827/",
      },
      {
        title: "Evaluation of Sermorelin in Growth Hormone Deficiency",
        summary:
          "Researchers assessed sermorelin's ability to stimulate GH secretion in pediatric patients with suspected GH deficiency.",
        url: "https://pubmed.ncbi.nlm.nih.gov/1909937/",
      },
      {
        title: "Growth Hormone–Releasing Hormone Therapy Study",
        summary:
          "Examined the use of GHRH analogs, including sermorelin, in long-term treatment of growth hormone deficiency.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8419608/",
      },
    ],
  },

  mk677: {
    overview:
      "MK-677, also known as ibutamoren, is an oral ghrelin receptor agonist that stimulates the growth hormone (GH) axis. By activating the ghrelin receptor (GHS-R1a) in the hypothalamus and pituitary, it increases the body's natural secretion of growth hormone and IGF-1. Unlike many other GH-related compounds, MK-677 is taken orally rather than by injection, and compared to GHRH analogs more bulking is appreciated.",
    fdaNote: "MK-677 is not FDA-approved for medical use.",
    benefits: [
      "Investigated for growth hormone deficiency",
      "Investigated for frailty in elderly patients",
      "Investigated for muscle wasting",
      "Investigated for osteoporosis",
      "Increased appetite and GH pulsatility",
    ],
    mechanism: [
      "Mimics the hormone ghrelin, often called the \"hunger hormone\"",
      "Activation of the ghrelin receptor increases growth hormone secretion",
      "Increases IGF-1 levels and appetite",
      "Increases GH pulsatility",
    ],
    sideEffects: [
      "Increased appetite",
      "Edema (fluid retention)",
      "Joint discomfort",
      "Fatigue or lethargy",
      "Mild insulin resistance",
      "Elevated fasting glucose",
    ],
    contraindications: [
      "Diabetes or insulin resistance",
      "Active malignancy",
      "Severe obesity",
      "Uncontrolled metabolic syndrome",
    ],
    studies: [
      {
        title: "MK-677 in Older Adults",
        summary:
          "A randomized trial examining MK-677 in healthy older adults showed increases in GH and IGF-1 levels and modest increases in fat-free mass.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18981485/",
      },
      {
        title: "MK-677 and Growth Hormone Secretion",
        summary:
          "Researchers evaluated MK-677 as a growth hormone secretagogue, demonstrating sustained increases in GH and IGF-1.",
        url: "https://pubmed.ncbi.nlm.nih.gov/10522990/",
      },
      {
        title: "MK-677 and Bone Density / Body Composition",
        summary:
          "Study results suggested increased bone turnover markers and lean body mass, with elevated IGF-1 levels during treatment.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15240612/",
      },
      {
        title: "MK-677 Effects on Sleep",
        summary:
          "Investigators reported improvements in deep sleep stages (slow-wave sleep) associated with GH stimulation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/9405999/",
      },
    ],
  },

  ipamorelin: {
    overview:
      "Ipamorelin is a synthetic peptide growth hormone secretagogue that stimulates the ghrelin receptor (GHS-R1a) in the pituitary gland, leading to increased growth hormone (GH) release and subsequent increases in IGF-1. It is considered one of the more selective GH-releasing peptides, stimulating GH with minimal effect on other hormones such as cortisol or prolactin compared with earlier peptides like GHRP-2 or GHRP-6.",
    fdaNote:
      "Ipamorelin is not FDA-approved for medical use. It is typically available only through research or compounding contexts and is commonly used off-label in peptide therapy clinics.",
    benefits: [
      "Growth hormone support",
      "Body composition improvement",
      "Fat metabolism",
      "Recovery from exercise",
      "Sleep quality improvement",
      "Healthy aging protocols",
    ],
    mechanism: [
      "Activates the ghrelin receptor, stimulating pulsatile growth hormone release",
      "Increases growth hormone secretion and IGF-1 production",
      "Preserves natural GH pulsatility",
      "Minimal stimulation of ACTH, cortisol, or prolactin",
    ],
    sideEffects: [
      "Injection site irritation",
      "Headache",
      "Flushing",
      "Mild water retention",
      "Dizziness",
      "Nausea",
    ],
    contraindications: [
      "Diabetes or insulin resistance",
      "Active malignancy",
      "Severe obesity",
      "Uncontrolled metabolic syndrome",
    ],
    note: "Clinical evidence supporting these uses in healthy adults remains limited.",
    studies: [
      {
        title: "Growth Hormone Stimulation Study",
        summary:
          "This study evaluated ipamorelin as a selective growth hormone secretagogue, demonstrating GH release with minimal stimulation of ACTH or cortisol.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11836279/",
      },
      {
        title: "Ipamorelin Pharmacologic Profile Study",
        summary:
          "Researchers examined the pharmacologic properties of ipamorelin, confirming selective GH release through ghrelin receptor activation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/10634366/",
      },
      {
        title: "Comparative Growth Hormone Secretagogue Study",
        summary:
          "This research compared ipamorelin with other growth hormone-releasing peptides, demonstrating its high specificity for GH stimulation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11159941/",
      },
    ],
  },

  "bpc-157": {
    overview:
      "BPC-157 (Body Protection Compound-157) is a synthetic peptide consisting of 15 amino acids derived from a naturally occurring protective protein found in human gastric juice. It has been extensively studied in preclinical models for its regenerative and cytoprotective properties. Unlike many peptides that target the growth hormone axis, BPC-157 is primarily investigated for its ability to accelerate wound healing, protect and heal the gut lining, and support recovery from musculoskeletal injuries.",
    fdaNote:
      "BPC-157 is not FDA-approved for medical use. It has primarily been studied in animal models, with limited human clinical data available. Today it is typically available only through research or compounding contexts and is commonly used off-label in peptide therapy clinics.",
    benefits: [
      "Accelerated tissue and wound healing",
      "Gut lining repair and protection",
      "Tendon and ligament recovery",
      "Anti-inflammatory effects",
      "Joint and muscle repair",
      "Neuroprotective properties",
    ],
    mechanism: [
      "Increases angiogenesis (new blood vessel formation)",
      "Increases growth factor expression (VEGF, EGF)",
      "Increases collagen production",
      "Decreases inflammatory cytokine activity",
      "Modulates the nitric oxide (NO) system",
      "Protects endothelial tissue",
    ],
    sideEffects: [
      "Injection site irritation",
      "Nausea",
      "Dizziness",
      "Headache",
      "Mild gastrointestinal discomfort",
    ],
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to the compound",
      "Uncontrolled autoimmune conditions",
    ],
    note:
      "Clinical evidence supporting these uses in humans remains limited; most data comes from animal studies.",
    studies: [
      {
        title: "BPC-157 and Tendon Healing",
        summary:
          "This study demonstrated that BPC-157 accelerated tendon-to-bone healing in a rat model, suggesting potential for musculoskeletal recovery.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
      },
      {
        title: "BPC-157 Gastric Protective Effects",
        summary:
          "Researchers examined the cytoprotective effects of BPC-157 on gastric mucosa, confirming significant protective and healing activity.",
        url: "https://pubmed.ncbi.nlm.nih.gov/10421683/",
      },
      {
        title: "BPC-157 and Wound Healing",
        summary:
          "This research showed BPC-157 promoted angiogenesis and accelerated wound healing through upregulation of growth factor pathways.",
        url: "https://pubmed.ncbi.nlm.nih.gov/16216422/",
      },
      {
        title: "BPC-157 Overview of Pharmacological Activity",
        summary:
          "A comprehensive review of BPC-157's pharmacological effects across multiple organ systems, including musculoskeletal, gastrointestinal, and neurological tissues.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29998800/",
      },
    ],
  },
};

export const PEPTIDE_DISCLAIMER =
  "The information on this page was generated with the assistance of artificial intelligence and compiled from publicly available sources. While efforts are made to ensure accuracy, information may be incomplete, outdated, or incorrect and should not be relied upon as medical advice. Many peptides used in peptide therapy have not been approved by the FDA for the indications in which they may be prescribed — please consult with your healthcare provider to fully understand potential risks, benefits, and treatment options.";

export const PEPTIDE_PHARMACY_NOTE =
  "LivLong MD uses medications sourced from compounding pharmacies. Compounded drugs have not been approved by the FDA; have not been reviewed by the FDA for safety, efficacy, or quality; and have not been demonstrated to the FDA to be safe or effective for their intended use. The processes by which compounded drugs are manufactured have not been reviewed by the FDA.";

// ---------------------------------------------------------------------------
// Simple recommendation engine for the Peptide questionnaire (mirrors the
// IV Therapy recommend.js pattern — pure if/else logic, no external calls).
// ---------------------------------------------------------------------------
export function recommendPeptide({ goal, format, intensity }) {
  switch (goal) {
    case "muscle":
      return format === "oral" ? "mk677" : "ipamorelin";
    case "fatloss":
      return "tesamorelin";
    case "recovery":
      return "bpc-157";
    case "antiaging":
      return intensity === "high" ? "tesamorelin" : "sermorelin";
    case "sleep":
      return "ipamorelin";
    default:
      return "sermorelin";
  }
}
