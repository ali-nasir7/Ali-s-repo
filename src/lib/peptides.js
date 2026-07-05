// Peptide Therapy service catalog + individual report content.

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
        "An immune-modulating peptide studied for immune resilience, T-cell support, and balanced immune response. Approved in 35+ countries for hepatitis treatment.",
      good_for: ["immunity", "viral infections", "immune balance"],
      hasReport: true,
    },
    {
      id: "thymosin-beta-4",
      title: "Thymosin Beta 4",
      description:
        "A 43-amino acid peptide critical for tissue repair, cell migration, wound healing, and anti-inflammatory activity found in nearly all tissues.",
      good_for: ["recovery", "tissue repair", "wound healing"],
      hasReport: true,
    },
    {
      id: "mots-c",
      title: "MOTS-c",
      description:
        "A mitochondrial-derived peptide that regulates insulin sensitivity, glucose metabolism, and exercise capacity — essentially mimicking metabolic benefits of exercise at the cellular level.",
      good_for: ["metabolism", "performance", "insulin sensitivity"],
      hasReport: true,
    },
    {
      id: "ss-31",
      title: "SS-31 (Elamipretide)",
      description:
        "A mitochondrial-targeted peptide that stabilizes cardiolipin to optimize energy production, reduce oxidative stress, and protect cells from age-related decline.",
      good_for: ["longevity", "cellular energy", "cardiac support"],
      hasReport: true,
    },
    {
      id: "ghk-cu",
      title: "GHK-Cu",
      description:
        "A naturally occurring copper-binding tripeptide that declines with age, extensively studied for collagen synthesis, wound healing, skin remodeling, and gene expression modulation.",
      good_for: ["skin", "anti-aging", "wound healing"],
      hasReport: true,
    },
    {
      id: "epithalon",
      title: "Epithalon",
      description:
        "A tetrapeptide derived from the pineal gland, studied for over 35 years for its ability to activate telomerase and support cellular anti-aging at the DNA level.",
      good_for: ["longevity", "sleep", "telomere support"],
      hasReport: true,
    },
    {
      id: "oxytocin",
      title: "Oxytocin",
      description:
        "The naturally occurring 'bonding hormone' studied for mood enhancement, stress reduction, sexual function support, and pain modulation beyond its reproductive roles.",
      good_for: ["stress", "mood", "sexual wellness"],
      hasReport: true,
    },
    {
      id: "kpv",
      title: "KPV",
      description:
        "A tripeptide derived from alpha-MSH with potent anti-inflammatory properties, studied particularly for gut inflammation, IBD support, and skin inflammation.",
      good_for: ["inflammation", "gut health", "immune modulation"],
      hasReport: true,
    },
    {
      id: "kisspeptin",
      title: "Kisspeptin",
      description:
        "The master regulator of reproductive hormone signaling — stimulates GnRH to support natural testosterone/estrogen production, fertility, and libido.",
      good_for: ["hormone support", "fertility", "libido"],
      hasReport: true,
    },
    {
      id: "gonadorelin",
      title: "Gonadorelin",
      description:
        "A synthetic GnRH peptide commonly used alongside TRT to maintain natural testosterone production, preserve fertility, and prevent testicular atrophy.",
      good_for: ["hormone support", "fertility", "TRT support"],
      hasReport: true,
    },
    {
      id: "pt-141",
      title: "PT-141",
      description:
        "Also known as bremelanotide — works through the brain's melanocortin system to enhance sexual desire and arousal in both men and women, independently of blood flow.",
      good_for: ["libido", "sexual wellness", "arousal"],
      hasReport: true,
    },
    {
      id: "aod-9604",
      title: "AOD-9604",
      description:
        "A modified HGH fragment that stimulates fat breakdown and inhibits fat formation without affecting blood sugar, IGF-1, or promoting cellular growth.",
      good_for: ["fat loss", "metabolism", "weight management"],
      hasReport: true,
    },
    {
      id: "nad",
      title: "NAD+ (Nicotinamide Adenine Dinucleotide)",
      description:
        "A coenzyme essential for cellular energy, DNA repair, and longevity regulation — not a peptide, but commonly paired with peptide protocols for anti-aging support.",
      good_for: ["longevity", "cellular energy", "cognition"],
      hasReport: true,
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
      "Ipamorelin is a synthetic peptide growth hormone secretagogue that stimulates the ghrelin receptor (GHS-R1a) in the pituitary gland, leading to increased growth hormone (GH) release and subsequent increases in IGF-1. It is considered one of the more selective GH-releasing peptides, meaning it stimulates GH with minimal effect on other hormones such as cortisol or prolactin compared with earlier peptides like GHRP-2 or GHRP-6.",
    fdaNote:
      "Ipamorelin is not FDA-approved for medical use. It has primarily been studied in preclinical and early human trials evaluating growth hormone secretion and metabolic effects. Today it is typically available only through research or compounding contexts and is commonly used off-label in peptide therapy clinics.",
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

  "thymosin-alpha-1": {
    overview:
      "Thymosin Alpha 1 (Tα1) is a naturally occurring peptide originally isolated from the thymus gland. It consists of 28 amino acids and plays a central role in immune system regulation, particularly in the maturation and activation of T-cells. Unlike many peptides used in anti-aging or performance contexts, Thymosin Alpha 1 is primarily valued for its immunomodulatory properties. It has been approved in over 35 countries for the treatment of hepatitis B and C and is used as an adjunct in cancer immunotherapy protocols.",
    fdaNote:
      "Thymosin Alpha 1 is not FDA-approved in the United States but is available through compounding pharmacies and is commonly used off-label in integrative and peptide therapy clinics for immune support.",
    benefits: [
      "Enhanced T-cell function and maturation",
      "Improved immune response to infections",
      "Support for chronic viral infections (Hepatitis B/C)",
      "Adjunct to cancer immunotherapy",
      "Immune system balancing in autoimmune conditions",
      "Post-illness immune recovery",
    ],
    note: "Clinical evidence is strongest for chronic hepatitis treatment; other uses are supported primarily by preclinical and observational data.",
    mechanism: [
      "Increases T-cell maturation and differentiation",
      "Increases natural killer (NK) cell activity",
      "Increases dendritic cell function and antigen presentation",
      "Increases interleukin-2 and interferon production",
      "Modulates Toll-like receptors (TLR-2, TLR-9)",
      "Restores immune balance in immunocompromised states",
    ],
    sideEffects: [
      "Injection site irritation",
      "Mild fatigue",
      "Muscle discomfort",
      "Headache",
      "Skin rash (rare)",
    ],
    contraindications: [
      "Organ transplant recipients on immunosuppression",
      "Active autoimmune flare",
      "Known hypersensitivity to thymosin peptides",
      "Pregnancy or breastfeeding",
    ],
    studies: [
      {
        title: "Thymosin Alpha 1 in Chronic Hepatitis B",
        summary:
          "A controlled trial demonstrating that Thymosin Alpha 1 improved sustained virological response in chronic hepatitis B patients.",
        url: "https://pubmed.ncbi.nlm.nih.gov/9620369/",
      },
      {
        title: "Thymosin Alpha 1 Immune Modulation",
        summary:
          "This review examined the immunomodulatory mechanisms of Thymosin Alpha 1, including its effects on dendritic cells and Toll-like receptor signaling.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17408523/",
      },
      {
        title: "Thymosin Alpha 1 as Cancer Immunotherapy Adjunct",
        summary:
          "Researchers reviewed the use of Thymosin Alpha 1 as an adjunct to chemotherapy and immunotherapy, noting improved immune parameters in cancer patients.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20095048/",
      },
      {
        title: "Thymosin Alpha 1 in Sepsis",
        summary:
          "A meta-analysis showing that Thymosin Alpha 1 supplementation reduced mortality in patients with severe sepsis by restoring immune function.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26369887/",
      },
    ],
  },

  "thymosin-beta-4": {
    overview:
      "Thymosin Beta 4 (Tβ4) is a 43-amino acid peptide that is one of the most abundant naturally occurring peptides in the human body. It is found in nearly all tissues and cell types and plays a critical role in tissue repair, cell migration, and wound healing. Tβ4 works primarily by sequestering actin monomers, which regulates cell motility and enables cells to migrate to sites of injury. It also has significant anti-inflammatory and anti-fibrotic properties.",
    fdaNote:
      "Thymosin Beta 4 is not FDA-approved for medical use. It has been studied in clinical trials for corneal wound healing and cardiac repair. It is available through compounding pharmacies and used off-label in peptide therapy clinics.",
    benefits: [
      "Accelerated wound and tissue healing",
      "Reduced inflammation and fibrosis",
      "Cardiac tissue repair after injury",
      "Corneal wound healing",
      "Hair regrowth support",
      "Enhanced cell migration to injury sites",
    ],
    note: "Clinical evidence in humans is emerging, with most robust data in corneal and cardiac applications.",
    mechanism: [
      "Actin sequestration — regulates cytoskeletal dynamics for cell migration",
      "Increases angiogenesis and new blood vessel formation",
      "Decreases inflammatory cytokines (NF-κB pathway modulation)",
      "Decreases fibrosis and scar tissue formation",
      "Increases stem cell recruitment to damaged tissues",
      "Promotes keratinocyte and endothelial cell migration",
    ],
    sideEffects: [
      "Injection site irritation",
      "Mild fatigue",
      "Headache",
      "Dizziness",
      "Nausea",
    ],
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity",
      "Active infection at injection site",
    ],
    studies: [
      {
        title: "Thymosin Beta 4 and Corneal Wound Healing",
        summary:
          "Clinical trial demonstrating improved corneal wound healing with topical Thymosin Beta 4 application.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20592780/",
      },
      {
        title: "Thymosin Beta 4 Cardiac Repair",
        summary:
          "Study showing Tβ4 promoted cardiac cell migration and survival after myocardial injury in animal models.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15226261/",
      },
      {
        title: "Thymosin Beta 4 and Tissue Repair Review",
        summary:
          "Comprehensive review of Tβ4's role in wound healing, angiogenesis, and anti-inflammatory activity across tissue types.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17999600/",
      },
    ],
  },

  "mots-c": {
    overview:
      "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA-c) is a mitochondrial-derived peptide consisting of 16 amino acids. It is encoded within the mitochondrial genome and functions as a signaling molecule that regulates metabolic homeostasis. MOTS-c is unique among peptides because it originates from mitochondrial DNA rather than nuclear DNA. It has been shown to regulate insulin sensitivity, glucose metabolism, and exercise capacity in preclinical studies.",
    fdaNote:
      "MOTS-c is not FDA-approved for medical use. Research is primarily preclinical, with growing interest in its potential for metabolic disease and aging. It is available through compounding pharmacies for off-label use.",
    benefits: [
      "Improved insulin sensitivity",
      "Enhanced glucose metabolism",
      "Increased exercise capacity",
      "Fat metabolism support",
      "Anti-aging and cellular longevity",
      "Metabolic syndrome management",
    ],
    note: "Most evidence comes from animal studies; human clinical data is limited.",
    mechanism: [
      "Activation of AMPK (AMP-activated protein kinase)",
      "Increases glucose uptake in skeletal muscle",
      "Increases fatty acid oxidation",
      "Regulation of the folate-methionine cycle",
      "Decreases insulin resistance",
      "Mitochondrial biogenesis support",
    ],
    sideEffects: [
      "Injection site irritation",
      "Mild nausea",
      "Headache",
      "Fatigue",
      "Muscle soreness",
    ],
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Severe hepatic or renal impairment",
      "Known hypersensitivity",
    ],
    studies: [
      {
        title: "MOTS-c and Metabolic Homeostasis",
        summary:
          "The landmark study identifying MOTS-c as a mitochondrial-derived peptide that regulates insulin sensitivity and metabolic homeostasis.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
      },
      {
        title: "MOTS-c and Exercise",
        summary:
          "Research demonstrating that MOTS-c enhances exercise capacity and skeletal muscle adaptation through AMPK activation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33007614/",
      },
      {
        title: "MOTS-c and Aging",
        summary:
          "Study examining the role of MOTS-c in aging, showing declining levels with age and potential as a longevity-promoting peptide.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32191873/",
      },
    ],
  },

  "ss-31": {
    overview:
      "SS-31, also known as elamipretide or Bendavia, is a synthetic tetrapeptide that selectively targets the inner mitochondrial membrane. It binds to cardiolipin, a phospholipid essential for mitochondrial electron transport chain function. By stabilizing cardiolipin, SS-31 optimizes mitochondrial energy production, reduces oxidative stress, and protects cells from age-related mitochondrial dysfunction.",
    fdaNote:
      "SS-31 has been investigated in clinical trials for heart failure, mitochondrial myopathy, and age-related macular degeneration. It is not FDA-approved but is available through compounding pharmacies for off-label use.",
    benefits: [
      "Improved mitochondrial energy production",
      "Reduced oxidative stress",
      "Cardiac function support",
      "Protection against age-related cellular decline",
      "Enhanced exercise tolerance",
      "Neuroprotective effects",
    ],
    note: "Clinical trials are ongoing; early results show promise particularly in cardiac and mitochondrial disease.",
    mechanism: [
      "Binds and stabilizes cardiolipin in the inner mitochondrial membrane",
      "Increases electron transport chain efficiency",
      "Decreases reactive oxygen species (ROS) production",
      "Increases ATP synthesis",
      "Prevention of cytochrome c release (anti-apoptotic)",
      "Protection of mitochondrial cristae structure",
    ],
    sideEffects: [
      "Injection site reactions",
      "Headache",
      "Nausea",
      "Fatigue",
      "Dizziness",
    ],
    contraindications: [
      "Known hypersensitivity",
      "Severe renal impairment",
      "Pregnancy or breastfeeding",
      "Active malignancy",
    ],
    studies: [
      {
        title: "SS-31 and Mitochondrial Function",
        summary:
          "Initial characterization of SS-31 as a mitochondrial-targeted antioxidant peptide with potent cytoprotective effects.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15044468/",
      },
      {
        title: "SS-31 in Heart Failure",
        summary:
          "Clinical trial evaluating elamipretide in patients with heart failure, showing improvements in cardiac function markers.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27068274/",
      },
      {
        title: "SS-31 and Aging",
        summary:
          "Research demonstrating that SS-31 reversed age-related mitochondrial dysfunction and improved skeletal muscle energetics.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24493081/",
      },
    ],
  },

  "ghk-cu": {
    overview:
      "GHK-Cu (glycyl-L-histidyl-L-lysine copper) is a naturally occurring tripeptide-copper complex found in human plasma, saliva, and urine. It was first identified in the 1970s and has since been extensively studied for its regenerative and anti-aging properties. GHK-Cu levels decline significantly with age — from approximately 200 ng/mL at age 20 to 80 ng/mL by age 60. This decline correlates with reduced tissue repair capacity and accelerated aging.",
    fdaNote:
      "While GHK-Cu is widely used in topical skincare products, injectable forms are available through compounding pharmacies for systemic anti-aging protocols. It is not FDA-approved for injectable use.",
    benefits: [
      "Skin tightening and rejuvenation",
      "Increased collagen and elastin production",
      "Wound healing acceleration",
      "Hair growth stimulation",
      "Anti-inflammatory effects",
      "Antioxidant activity",
    ],
    note: "Topical applications have the most supporting evidence; injectable use data is more limited.",
    mechanism: [
      "Increases collagen synthesis (types I and III)",
      "Increases elastin production",
      "Increases glycosaminoglycan synthesis",
      "Increases growth factor expression (VEGF, FGF)",
      "Decreases inflammatory cytokines",
      "Copper delivery to metalloenzymes involved in tissue remodeling",
      "Gene expression modulation — upregulates repair genes, downregulates damage genes",
    ],
    sideEffects: [
      "Injection site irritation",
      "Skin redness (topical use)",
      "Mild nausea",
      "Headache",
      "Metallic taste",
    ],
    contraindications: [
      "Wilson's disease or copper metabolism disorders",
      "Known copper hypersensitivity",
      "Pregnancy or breastfeeding",
      "Active malignancy",
    ],
    studies: [
      {
        title: "GHK-Cu and Wound Healing",
        summary:
          "Comprehensive review of GHK-Cu's role in wound healing, demonstrating enhanced collagen synthesis and tissue remodeling.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18047927/",
      },
      {
        title: "GHK-Cu and Gene Expression",
        summary:
          "Study showing GHK-Cu modulates expression of numerous genes related to tissue repair, anti-inflammatory responses, and anti-aging pathways.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24508075/",
      },
      {
        title: "GHK-Cu Skin Remodeling",
        summary:
          "Clinical evidence for GHK-Cu improving skin density, thickness, and firmness through collagen stimulation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12467491/",
      },
    ],
  },

  epithalon: {
    overview:
      "Epithalon (also spelled Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) based on the natural peptide epithalamin, which is produced by the pineal gland. It was developed by Russian scientist Professor Vladimir Khavinson and has been studied for over 35 years. Epithalon is primarily known for its ability to activate telomerase, the enzyme responsible for maintaining telomere length. Telomere shortening is a key biomarker of cellular aging, and telomerase activation may slow or reverse aspects of this process.",
    fdaNote:
      "Epithalon is not FDA-approved. Most research originates from Russian studies, with limited Western clinical trial data. It is available through compounding pharmacies for off-label use.",
    benefits: [
      "Telomerase activation and telomere maintenance",
      "Anti-aging at the cellular level",
      "Improved sleep quality via melatonin regulation",
      "Enhanced antioxidant defense",
      "Neuroendocrine system regulation",
      "Potential lifespan extension",
    ],
    note: "Animal studies show promising longevity effects; human data is limited but supportive.",
    mechanism: [
      "Increases telomerase activity in somatic cells",
      "Maintenance of telomere length",
      "Increases melatonin production from the pineal gland",
      "Regulation of the neuroendocrine system",
      "Increases antioxidant enzyme activity (SOD, catalase)",
      "Decreases lipid peroxidation",
    ],
    sideEffects: [
      "Injection site irritation",
      "Mild headache",
      "Drowsiness (related to melatonin effects)",
      "Dizziness",
    ],
    contraindications: [
      "Active malignancy (telomerase activation concern)",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity",
      "Autoimmune conditions",
    ],
    studies: [
      {
        title: "Epithalon and Telomerase Activation",
        summary:
          "Study demonstrating that epithalon activated telomerase in human somatic cells and induced telomere elongation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12937225/",
      },
      {
        title: "Epithalon and Lifespan in Animal Models",
        summary:
          "Research showing increased lifespan and improved biomarkers of aging in animal models treated with epithalon.",
        url: "https://pubmed.ncbi.nlm.nih.gov/14501183/",
      },
      {
        title: "Pineal Peptides and Aging",
        summary:
          "Overview of pineal gland peptides including epithalamin and epithalon, reviewing their geroprotective and anti-aging properties.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12374906/",
      },
    ],
  },

  oxytocin: {
    overview:
      "Oxytocin is a naturally occurring neuropeptide hormone produced in the hypothalamus and released by the posterior pituitary gland. Often called the \"bonding hormone\" or \"love hormone,\" it plays fundamental roles in social bonding, sexual reproduction, childbirth, and lactation. Beyond its well-known reproductive functions, oxytocin has been increasingly studied for its effects on mood regulation, stress reduction, pain perception, and metabolic function.",
    fdaNote:
      "Synthetic oxytocin (Pitocin) is FDA-approved for labor induction. Compounded intranasal and sublingual forms are used off-label in integrative medicine for mood, wellness, and sexual health applications.",
    benefits: [
      "Mood enhancement and stress reduction",
      "Improved social bonding and connection",
      "Sexual function and arousal support",
      "Pain modulation",
      "Anxiety reduction",
      "Metabolic support",
    ],
    note: "Off-label uses are supported by growing research but require further clinical validation.",
    mechanism: [
      "Activation of oxytocin receptors in the brain (amygdala, hypothalamus)",
      "Decreases cortisol and stress hormone levels",
      "Increases dopamine and serotonin modulation",
      "Decreases amygdala reactivity (fear/anxiety reduction)",
      "Increases uterine contractions and milk ejection",
      "Modulation of pain perception pathways",
    ],
    sideEffects: [
      "Nasal irritation (intranasal form)",
      "Headache",
      "Nausea",
      "Drowsiness",
      "Mild anxiety (paradoxical, uncommon)",
    ],
    contraindications: [
      "Pregnancy (unless for labor induction under supervision)",
      "Cardiovascular disease",
      "Known hypersensitivity",
      "Hyponatremia risk",
    ],
    studies: [
      {
        title: "Oxytocin and Social Behavior",
        summary:
          "Research demonstrating oxytocin's role in increasing trust and social bonding behaviors in humans.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18498743/",
      },
      {
        title: "Oxytocin and Anxiety",
        summary:
          "Study showing intranasal oxytocin reduced amygdala activation and anxiety responses in healthy subjects.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19027101/",
      },
      {
        title: "Oxytocin and Pain Modulation",
        summary:
          "Review of oxytocin's analgesic properties and its potential as an adjunct for pain management.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20080126/",
      },
    ],
  },

  kpv: {
    overview:
      "KPV is a tripeptide (Lys-Pro-Val) derived from the C-terminal end of alpha-melanocyte-stimulating hormone (α-MSH). It retains the potent anti-inflammatory properties of α-MSH without its pigmentation effects. KPV has shown significant anti-inflammatory activity in preclinical studies, particularly in models of inflammatory bowel disease (IBD), colitis, and skin inflammation. It works by entering cells and interacting directly with inflammatory signaling pathways.",
    fdaNote:
      "KPV is not FDA-approved for medical use. Research is primarily preclinical. It is available through compounding pharmacies for off-label use, commonly in oral, topical, or injectable forms.",
    benefits: [
      "Potent anti-inflammatory effects",
      "Gut inflammation and IBD support",
      "Skin inflammation reduction",
      "Immune modulation",
      "Mucosal healing support",
      "Antimicrobial properties",
    ],
    note: "Most evidence comes from animal models of colitis and dermatitis; human studies are needed.",
    mechanism: [
      "Direct entry into cells via PepT1 transporter",
      "Decreases NF-κB activation (master inflammatory switch)",
      "Decreases pro-inflammatory cytokines (TNF-α, IL-6, IL-1β)",
      "Decreases MAPK inflammatory signaling",
      "Interaction with melanocortin receptors",
      "Antimicrobial activity against certain pathogens",
    ],
    sideEffects: [
      "Injection site irritation",
      "Mild gastrointestinal discomfort",
      "Headache",
      "Fatigue",
    ],
    contraindications: [
      "Known hypersensitivity to α-MSH derivatives",
      "Pregnancy or breastfeeding",
      "Active malignancy",
      "Immunosuppressed states",
    ],
    studies: [
      {
        title: "KPV and Colitis",
        summary:
          "Study demonstrating KPV's anti-inflammatory effects in experimental colitis through NF-κB inhibition.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18424432/",
      },
      {
        title: "KPV Anti-inflammatory Mechanisms",
        summary:
          "Research elucidating the intracellular mechanisms by which KPV suppresses inflammatory signaling cascades.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15210994/",
      },
      {
        title: "α-MSH Peptides and Inflammation Review",
        summary:
          "Comprehensive review of α-MSH-derived peptides including KPV and their therapeutic potential in inflammatory conditions.",
        url: "https://pubmed.ncbi.nlm.nih.gov/16098474/",
      },
    ],
  },

  kisspeptin: {
    overview:
      "Kisspeptin is a neuropeptide encoded by the KISS1 gene that plays a central role in regulating the hypothalamic-pituitary-gonadal (HPG) axis. It acts on kisspeptin receptors (GPR54) in the hypothalamus to stimulate the release of gonadotropin-releasing hormone (GnRH). Kisspeptin is considered the master regulator of reproductive hormone signaling. Its discovery revolutionized understanding of puberty onset, fertility, and reproductive endocrinology.",
    fdaNote:
      "Kisspeptin is being actively investigated in clinical trials for fertility treatment and reproductive disorders. It is not yet FDA-approved but is available through compounding pharmacies for off-label use.",
    benefits: [
      "Stimulation of natural testosterone and estrogen production",
      "Fertility support (male and female)",
      "LH and FSH regulation",
      "Alternative to hCG for hormonal stimulation",
      "Puberty and reproductive function assessment",
      "Libido and sexual function support",
    ],
    note: "Clinical trials show promise for IVF protocols and hypogonadism; broader applications are under investigation.",
    mechanism: [
      "Binds GPR54 receptors on GnRH neurons",
      "Increases GnRH pulsatile release from hypothalamus",
      "Increases LH and FSH secretion from pituitary",
      "Increases testosterone (males) and estradiol (females)",
      "Maintains natural hormonal pulsatility",
      "Potential role in metabolic regulation",
    ],
    sideEffects: [
      "Injection site irritation",
      "Headache",
      "Nausea",
      "Abdominal discomfort",
      "Hot flashes",
    ],
    contraindications: [
      "Hormone-sensitive cancers",
      "Pregnancy",
      "Known hypersensitivity",
      "Precocious puberty",
    ],
    studies: [
      {
        title: "Kisspeptin and Reproductive Function",
        summary:
          "Landmark study identifying kisspeptin as essential for GnRH secretion and reproductive function in humans.",
        url: "https://pubmed.ncbi.nlm.nih.gov/14561820/",
      },
      {
        title: "Kisspeptin in IVF",
        summary:
          "Clinical trial demonstrating kisspeptin as a safe trigger for oocyte maturation in IVF with reduced ovarian hyperstimulation risk.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25249014/",
      },
      {
        title: "Kisspeptin and Male Reproduction",
        summary:
          "Research showing kisspeptin potently stimulates LH and testosterone secretion in healthy men.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21677040/",
      },
    ],
  },

  gonadorelin: {
    overview:
      "Gonadorelin is a synthetic form of gonadotropin-releasing hormone (GnRH), the master hormone that controls the release of luteinizing hormone (LH) and follicle-stimulating hormone (FSH) from the pituitary gland. In clinical practice, gonadorelin is commonly used alongside testosterone replacement therapy (TRT) to maintain natural testosterone production, preserve fertility, and prevent testicular atrophy. It serves as an alternative to hCG for these purposes.",
    fdaNote:
      "Gonadorelin has FDA-approved diagnostic uses for evaluating pituitary function. Its therapeutic use for fertility preservation during TRT is off-label and available through compounding pharmacies.",
    benefits: [
      "Maintenance of natural testosterone production during TRT",
      "Fertility preservation (sperm production)",
      "Prevention of testicular atrophy",
      "LH and FSH stimulation",
      "Alternative to hCG therapy",
      "Pituitary function assessment",
    ],
    note: "Well-established mechanism; commonly used in hormone optimization protocols. Pulsatile administration is key — continuous exposure can paradoxically suppress gonadotropins.",
    mechanism: [
      "Binds GnRH receptors on pituitary gonadotroph cells",
      "Increases pulsatile LH release",
      "Increases FSH release",
      "Increases endogenous testosterone production",
      "Increases spermatogenesis",
      "Maintains HPG axis function during exogenous testosterone use",
    ],
    sideEffects: [
      "Injection site irritation",
      "Headache",
      "Nausea",
      "Abdominal discomfort",
      "Flushing",
      "Light-headedness",
    ],
    contraindications: [
      "Hormone-dependent cancers",
      "Known hypersensitivity to GnRH",
      "Pregnancy",
      "Pituitary apoplexy",
    ],
    studies: [
      {
        title: "GnRH and Pituitary Function",
        summary:
          "Classic study on GnRH stimulation testing and pulsatile gonadotropin release in the assessment of pituitary function.",
        url: "https://pubmed.ncbi.nlm.nih.gov/6339731/",
      },
      {
        title: "GnRH in Male Fertility",
        summary:
          "Review of approaches to maintain fertility in men on testosterone therapy, including GnRH analogs as alternatives to hCG.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30427049/",
      },
      {
        title: "GnRH Pulsatility and Reproduction",
        summary:
          "Research establishing the importance of pulsatile GnRH administration for maintaining normal reproductive hormone levels.",
        url: "https://pubmed.ncbi.nlm.nih.gov/2644514/",
      },
    ],
  },

  "pt-141": {
    overview:
      "PT-141, also known as bremelanotide, is a synthetic peptide analog of alpha-melanocyte-stimulating hormone (α-MSH). It acts on melanocortin receptors (primarily MC3R and MC4R) in the central nervous system to enhance sexual desire and arousal. Unlike PDE5 inhibitors (Viagra, Cialis) which work on blood flow, PT-141 works through the brain's arousal pathways, making it effective for both desire and arousal components of sexual function.",
    fdaNote:
      "An FDA-approved version of bremelanotide (Vyleesi®) is available for hypoactive sexual desire disorder (HSDD) in premenopausal women. Compounded PT-141 is used off-label for both men and women.",
    benefits: [
      "Enhanced sexual desire and libido",
      "Improved sexual arousal",
      "Treatment of hypoactive sexual desire disorder (HSDD)",
      "Alternative to PDE5 inhibitors for erectile dysfunction",
      "Works through central nervous system pathways",
      "Effective in both men and women",
    ],
    note: "FDA-approved for HSDD in premenopausal women; off-label use in men and other populations.",
    mechanism: [
      "Activation of MC3R and MC4R melanocortin receptors",
      "Increases dopaminergic signaling in hypothalamic arousal centers",
      "Central nervous system-mediated sexual arousal",
      "Independent of nitric oxide/vascular pathways",
      "Modulation of sexual desire at the neurochemical level",
    ],
    sideEffects: [
      "Nausea (most common)",
      "Flushing",
      "Headache",
      "Injection site reactions",
      "Transient blood pressure changes",
      "Skin darkening (with repeated use)",
    ],
    contraindications: [
      "Uncontrolled hypertension",
      "Cardiovascular disease",
      "Known hypersensitivity",
      "Concurrent use with naltrexone",
      "Pregnancy or breastfeeding",
    ],
    studies: [
      {
        title: "Bremelanotide for HSDD in Women",
        summary:
          "Phase 3 clinical trials (RECONNECT) demonstrating bremelanotide's efficacy in treating hypoactive sexual desire disorder in premenopausal women.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31180849/",
      },
      {
        title: "PT-141 and Male Erectile Dysfunction",
        summary:
          "Study showing PT-141 induced erections in men with erectile dysfunction through central melanocortin receptor activation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15163300/",
      },
      {
        title: "Melanocortin Receptors and Sexual Function",
        summary:
          "Review of melanocortin receptor signaling and its role in regulating sexual behavior and arousal.",
        url: "https://pubmed.ncbi.nlm.nih.gov/16098026/",
      },
    ],
  },

  "aod-9604": {
    overview:
      "AOD-9604 (Advanced Obesity Drug) is a modified fragment of human growth hormone (HGH), specifically amino acids 176-191. It was originally developed as an anti-obesity drug by Monash University in Australia. AOD-9604 retains the fat-reducing activity of HGH without its growth-promoting or diabetogenic effects. It stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat formation) without affecting blood sugar levels or causing cellular proliferation.",
    fdaNote:
      "AOD-9604 received GRAS (Generally Recognized As Safe) status from the FDA as a food supplement ingredient. However, it is not FDA-approved as a drug. It is available through compounding pharmacies for off-label use in weight management protocols.",
    benefits: [
      "Fat loss without affecting muscle mass",
      "Stimulation of lipolysis (fat breakdown)",
      "Inhibition of lipogenesis (fat formation)",
      "No effect on blood sugar or insulin",
      "No growth-promoting effects",
      "Cartilage repair support",
    ],
    note: "Clinical trials showed modest fat loss effects; it is often used as part of comprehensive weight management protocols.",
    mechanism: [
      "Increases lipolysis through beta-3 adrenergic receptor pathway",
      "Decreases lipogenesis (new fat cell formation)",
      "No interaction with GH receptor (no IGF-1 increase)",
      "No effect on glucose metabolism",
      "Stimulation of cartilage and bone repair",
      "Calorie-independent fat metabolism",
    ],
    sideEffects: [
      "Injection site irritation",
      "Headache",
      "Mild nausea",
      "Fatigue",
      "Dizziness",
    ],
    contraindications: [
      "Active malignancy",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity",
      "Severe hepatic or renal impairment",
    ],
    studies: [
      {
        title: "AOD-9604 and Fat Metabolism",
        summary:
          "Study demonstrating that AOD-9604 stimulated lipolysis and inhibited lipogenesis in obese mouse models without affecting IGF-1 levels.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11713213/",
      },
      {
        title: "AOD-9604 Clinical Trial",
        summary:
          "Phase 2 clinical trial evaluating oral AOD-9604 in obese subjects, showing fat loss without adverse effects on glucose metabolism.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15505168/",
      },
      {
        title: "HGH Fragment and Cartilage",
        summary:
          "Research showing AOD-9604 promoted cartilage repair and regeneration, suggesting applications beyond weight management.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22072490/",
      },
    ],
  },

  nad: {
    overview:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell. It is essential for cellular energy production, DNA repair, gene expression regulation, and cellular signaling. While not technically a peptide, NAD+ is commonly included in peptide therapy protocols due to its complementary anti-aging and regenerative effects. NAD+ levels decline significantly with age — by approximately 50% between ages 40 and 60. This decline is associated with reduced mitochondrial function, increased cellular damage, and accelerated aging. NAD+ can be administered via IV infusion, subcutaneous injection, or oral supplementation with precursors like NMN (nicotinamide mononucleotide) or NR (nicotinamide riboside). IV administration provides the highest bioavailability.",
    fdaNote:
      "NAD+ is not FDA-approved as a drug for anti-aging purposes. IV NAD+ and oral precursors are widely used in integrative medicine and wellness protocols.",
    benefits: [
      "Enhanced cellular energy production (ATP)",
      "Improved cognitive function and mental clarity",
      "Anti-aging and longevity support",
      "DNA repair enhancement",
      "Improved metabolic function",
      "Neuroprotection",
      "Addiction recovery support",
      "Athletic performance and recovery",
    ],
    note: "Research is rapidly expanding; longevity and neuroprotective effects are among the most studied areas.",
    mechanism: [
      "Cofactor for sirtuins (SIRT1-7) — key longevity regulators",
      "Increases mitochondrial electron transport chain efficiency",
      "Increases ATP production",
      "Substrate for PARP enzymes (DNA repair)",
      "Regulation of circadian rhythm genes",
      "Decreases cellular senescence",
      "CD38 enzyme regulation",
    ],
    sideEffects: [
      "Nausea (especially with rapid IV infusion)",
      "Chest tightness or pressure",
      "Flushing",
      "Headache",
      "Muscle cramping",
      "Fatigue (paradoxically, during infusion)",
    ],
    contraindications: [
      "Active malignancy (NAD+ may support rapidly dividing cells)",
      "Pregnancy or breastfeeding",
      "Severe cardiac conditions",
      "Known hypersensitivity",
    ],
    studies: [
      {
        title: "NAD+ and Aging",
        summary:
          "Comprehensive review of NAD+ decline with aging and the therapeutic potential of NAD+ repletion for age-related diseases.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30668137/",
      },
      {
        title: "NAD+ and Sirtuins",
        summary:
          "Research on the NAD+-sirtuin axis and its central role in metabolic health, stress resistance, and longevity.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24786309/",
      },
      {
        title: "NAD+ Precursor Supplementation",
        summary:
          "Clinical study demonstrating that NAD+ precursor supplementation (NR) safely elevated NAD+ levels in healthy middle-aged and older adults.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29184669/",
      },
      {
        title: "NAD+ and Neurodegeneration",
        summary:
          "Study examining NAD+ repletion as a neuroprotective strategy against age-related cognitive decline and neurodegenerative diseases.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28029082/",
      },
    ],
  },
};

export const PEPTIDE_DISCLAIMER =
  "The information on this page was generated with the assistance of artificial intelligence and compiled from publicly available sources. While efforts are made to ensure accuracy, information may be incomplete, outdated, or incorrect and should not be relied upon as medical advice. Many peptides used in peptide therapy have not been approved by the FDA for the indications in which they may be prescribed — please consult with your healthcare provider to fully understand potential risks, benefits, and treatment options.";

export const PEPTIDE_PHARMACY_NOTE =
  "LivLong MD uses medications sourced from compounding pharmacies. Compounded drugs have not been approved by the FDA; have not been reviewed by the FDA for safety, efficacy, or quality; and have not been demonstrated to the FDA to be safe or effective for their intended use. The processes by which compounded drugs are manufactured have not been reviewed by the FDA.";

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
