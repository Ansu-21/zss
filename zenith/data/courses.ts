// Real Zenith Safety Solutions catalog, structured for the site.
// Salary/demand figures are ILLUSTRATIVE ranges — replace `salaryLow/High`,
// `demand`, and `duration` with verified numbers from the institute.

export type Track = "international" | "diploma" | "certificate";

export type Course = {
  slug: string;
  title: string;
  short: string;        // one-line tile description
  image?: string;       // optional photo path, e.g. "/images/iosh.jpg" — omit to show placeholder
  track: Track;
  collection: string;   // Netflix-style row this belongs to
  duration: string;
  mode: string;
  level?: string;
  // career framing
  blurb: string;        // full overview paragraph
  outcomes: string[];   // job roles this unlocks
  salaryLow: number;    // LPA — illustrative
  salaryHigh: number;   // LPA — illustrative
  demand: "Very high" | "High" | "Steady";
  gulf: boolean;        // strong Gulf demand?
  eligibility: string;
  curriculum: string[]; // what you learn
  faqs: { q: string; a: string }[];
  related: string[];    // slugs
};

// ---- INTERNATIONAL ----
const international: Course[] = [
  {
    slug: "iosh-managing-safely",
    title: "IOSH Managing Safely",
    short: "The UK card Gulf employers ask for by name.",
    track: "international",
    collection: "Most asked for in the Gulf",
    duration: "3 days",
    mode: "Online or classroom",
    level: "IOSH Level 2",
    blurb:
      "IOSH Managing Safely is the certification international employers recognise instantly. Three focused days that put a globally respected credential on your name — the single fastest way to signal you're ready for site responsibility abroad.",
    outcomes: ["Safety Supervisor", "HSE Coordinator", "Site Safety Officer"],
    salaryLow: 4.5,
    salaryHigh: 9,
    demand: "Very high",
    gulf: true,
    eligibility: "Anyone. No prior safety qualification required.",
    curriculum: [
      "Assessing and controlling risk",
      "Understanding responsibilities",
      "Identifying common hazards",
      "Investigating incidents",
      "Measuring safety performance",
    ],
    faqs: [
      { q: "Is IOSH valid in the Gulf?", a: "Yes — IOSH is recognised across the UAE, Qatar, Saudi Arabia, Oman and Kuwait, and is frequently named in job postings." },
      { q: "Do I need experience first?", a: "No. IOSH Managing Safely is designed as an entry point and assumes no prior safety training." },
    ],
    related: ["osha-30-general", "othm-level-6", "diploma-industrial-safety"],
  },
  {
    slug: "iosh-level-3",
    title: "IOSH Certificate in OSH (Level 3)",
    short: "A step up from Managing Safely.",
    track: "international",
    collection: "Most asked for in the Gulf",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    level: "IOSH Level 3",
    blurb:
      "The Level 3 Certificate deepens your occupational safety knowledge beyond Managing Safely, positioning you for coordinator and officer roles that ask for more than an introductory card.",
    outcomes: ["Safety Officer", "HSE Coordinator"],
    salaryLow: 5,
    salaryHigh: 10,
    demand: "High",
    gulf: true,
    eligibility: "Suited to those who hold IOSH Managing Safely or equivalent experience.",
    curriculum: ["Principles of health & safety", "Hazard control", "Legal frameworks", "Risk assessment in depth"],
    faqs: [{ q: "How is this different from Managing Safely?", a: "Level 3 goes deeper and is aimed at people moving into dedicated safety roles rather than managers overseeing safety as part of a wider job." }],
    related: ["iosh-managing-safely", "iosh-level-6", "othm-level-6"],
  },
  {
    slug: "iosh-level-6",
    title: "IOSH Diploma in OSH (Level 6)",
    short: "Degree-level occupational safety.",
    track: "international",
    collection: "For the senior-role jump",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    level: "IOSH Level 6",
    blurb:
      "The Level 6 Diploma is the senior end of the IOSH ladder — degree-equivalent depth for those targeting HSE management and lead positions on major projects.",
    outcomes: ["HSE Manager", "Safety Lead", "Project HSE Advisor"],
    salaryLow: 8,
    salaryHigh: 16,
    demand: "High",
    gulf: true,
    eligibility: "For experienced safety professionals progressing to management.",
    curriculum: ["Advanced risk management", "Safety leadership", "Occupational health", "Management systems"],
    faqs: [{ q: "Is this equivalent to a degree?", a: "Level 6 sits at degree-level on recognised qualification frameworks, which is why it maps to management roles." }],
    related: ["othm-level-6", "iso-45001", "osha-30-construction"],
  },
  {
    slug: "osha-30-general",
    title: "OSHA 30-Hour — General Industry",
    short: "The US standard for plant & manufacturing.",
    track: "international",
    collection: "Most asked for in the Gulf",
    duration: "10 days",
    mode: "Online",
    blurb:
      "OSHA 30 (General Industry) is the US safety standard for manufacturing, plant and process environments. Internationally portable and widely requested on multinational sites.",
    outcomes: ["Safety Officer", "Plant Safety Supervisor"],
    salaryLow: 4,
    salaryHigh: 8,
    demand: "Very high",
    gulf: true,
    eligibility: "Open to all. No prerequisite.",
    curriculum: ["Hazard recognition", "Machine guarding", "Electrical safety", "PPE", "Walking/working surfaces"],
    faqs: [{ q: "General or Construction — which?", a: "Choose General Industry for factories, plants and manufacturing; Construction for sites and infrastructure." }],
    related: ["osha-30-construction", "iosh-managing-safely", "diploma-industrial-safety"],
  },
  {
    slug: "osha-30-construction",
    title: "OSHA 30-Hour — Construction",
    short: "The US standard for sites & infrastructure.",
    track: "international",
    collection: "Built for construction sites",
    duration: "10 days",
    mode: "Online",
    blurb:
      "OSHA 30 (Construction) covers the hazards of building and infrastructure work to the US standard — a strong signal for international construction and oil & gas projects.",
    outcomes: ["Site Safety Officer", "Construction HSE Supervisor"],
    salaryLow: 4,
    salaryHigh: 8.5,
    demand: "Very high",
    gulf: true,
    eligibility: "Open to all. No prerequisite.",
    curriculum: ["Fall protection", "Scaffolding", "Excavation", "Struck-by & caught-between hazards", "Electrical on site"],
    faqs: [{ q: "Is this good for Gulf construction jobs?", a: "Yes — large Gulf construction and oil & gas contractors frequently specify OSHA Construction." }],
    related: ["osha-30-general", "diploma-construction-safety", "cert-scaffolding-inspector"],
  },
  {
    slug: "othm-level-6",
    title: "OTHM Level 6 Diploma",
    short: "UK-accredited, degree-equivalent HSE.",
    track: "international",
    collection: "For the senior-role jump",
    duration: "Online — contact for schedule",
    mode: "Online",
    level: "OTHM Level 6",
    blurb:
      "OTHM is a UK regulated awarding body. The Level 6 Diploma is degree-equivalent and built for those stepping into HSE management and higher-responsibility roles.",
    outcomes: ["HSE Manager", "Safety Consultant"],
    salaryLow: 5,
    salaryHigh: 12,
    demand: "High",
    gulf: true,
    eligibility: "For those with relevant experience or prior qualifications.",
    curriculum: ["Occupational H&S management", "Risk & compliance", "Environmental management", "Leadership"],
    faqs: [{ q: "Is OTHM recognised?", a: "OTHM is a UK government-regulated (Ofqual) awarding organisation, so its diplomas carry international recognition." }],
    related: ["iosh-level-6", "othm-level-7-env", "iso-45001"],
  },
  {
    slug: "othm-level-7-env",
    title: "OTHM Level 7 — Environmental Sustainability",
    short: "Master's-level environmental management.",
    track: "international",
    collection: "For the senior-role jump",
    duration: "Online — contact for schedule",
    mode: "Online",
    level: "OTHM Level 7",
    blurb:
      "A master's-level diploma in environmental sustainability management — for professionals moving into ESG, environmental compliance and sustainability leadership.",
    outcomes: ["Environmental Manager", "Sustainability Lead"],
    salaryLow: 6,
    salaryHigh: 14,
    demand: "Steady",
    gulf: true,
    eligibility: "For experienced professionals or Level 6 holders.",
    curriculum: ["Sustainability strategy", "Environmental law", "Carbon & resource management", "ESG reporting"],
    faqs: [{ q: "Who is this for?", a: "Professionals targeting environmental and sustainability management roles, increasingly in demand across the Gulf and India." }],
    related: ["othm-level-6", "iso-14001", "iso-45001"],
  },
  {
    slug: "iso-45001",
    title: "ISO 45001:2018 Lead Auditor",
    short: "Audit occupational health & safety systems.",
    track: "international",
    collection: "Become a lead auditor",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    blurb:
      "The IRCA-aligned ISO 45001 Lead Auditor course qualifies you to audit Occupational Health & Safety Management Systems — a credential that opens consulting and corporate compliance roles.",
    outcomes: ["Lead Auditor", "Compliance Officer", "HSE Consultant"],
    salaryLow: 6,
    salaryHigh: 15,
    demand: "High",
    gulf: true,
    eligibility: "Best suited to those with safety management knowledge.",
    curriculum: ["Audit principles", "ISO 45001 clauses", "Conducting audits", "Reporting & corrective action"],
    faqs: [{ q: "What can I do with a Lead Auditor cert?", a: "Lead and conduct OHSMS audits for organisations — valuable for consulting, corporate HSE and certification-body work." }],
    related: ["iso-14001", "iso-9001", "iso-27001"],
  },
  {
    slug: "iso-14001",
    title: "ISO 14001:2015 Lead Auditor",
    short: "Audit environmental management systems.",
    track: "international",
    collection: "Become a lead auditor",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    blurb:
      "Qualify to audit Environmental Management Systems to ISO 14001 — increasingly required as organisations face environmental compliance and ESG expectations.",
    outcomes: ["Environmental Auditor", "EMS Consultant"],
    salaryLow: 6,
    salaryHigh: 14,
    demand: "Steady",
    gulf: true,
    eligibility: "Suited to those with environmental or safety experience.",
    curriculum: ["EMS principles", "ISO 14001 requirements", "Audit techniques", "Environmental compliance"],
    faqs: [{ q: "Is environmental auditing in demand?", a: "Yes, and growing — environmental compliance is becoming mandatory across more industries and regions." }],
    related: ["iso-45001", "iso-9001", "othm-level-7-env"],
  },
  {
    slug: "iso-9001",
    title: "ISO 9001:2015 Lead Auditor",
    short: "Audit quality management systems.",
    track: "international",
    collection: "Become a lead auditor",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    blurb:
      "The world's most widely held management-system standard. ISO 9001 Lead Auditor qualifies you to audit Quality Management Systems across virtually any industry.",
    outcomes: ["Quality Auditor", "QMS Consultant"],
    salaryLow: 5,
    salaryHigh: 13,
    demand: "High",
    gulf: true,
    eligibility: "Open to those with relevant work experience.",
    curriculum: ["Quality principles", "ISO 9001 clauses", "Audit planning", "Nonconformity & reporting"],
    faqs: [{ q: "Why quality auditing?", a: "ISO 9001 is the most adopted standard globally, so auditors are needed in almost every sector." }],
    related: ["iso-45001", "iso-14001", "iso-27001"],
  },
  {
    slug: "iso-27001",
    title: "ISO 27001:2022 Lead Auditor",
    short: "Audit information security systems.",
    track: "international",
    collection: "Become a lead auditor",
    duration: "Contact for schedule",
    mode: "Online or classroom",
    blurb:
      "Information security is one of the fastest-growing compliance fields. ISO 27001 Lead Auditor qualifies you to audit Information Security Management Systems.",
    outcomes: ["ISMS Auditor", "Information Security Consultant"],
    salaryLow: 7,
    salaryHigh: 18,
    demand: "Very high",
    gulf: true,
    eligibility: "Suited to those with IT, security or audit background.",
    curriculum: ["Information security principles", "ISO 27001 controls", "Risk assessment", "Audit & reporting"],
    faqs: [{ q: "Do I need an IT background?", a: "It helps. This standard suits people moving toward information-security and data-protection roles." }],
    related: ["iso-9001", "iso-45001", "iso-14001"],
  },
];

// ---- DIPLOMAS (1 month) ----
const diplomaDefs: [string, string, string][] = [
  ["fire-safety", "Diploma in Fire & Safety", "Fire prevention, detection and emergency response."],
  ["fire-safety-engineering", "Diploma in Fire & Safety Engineering", "The engineering side of fire protection systems."],
  ["fire-industrial-safety-mgmt", "Diploma in Fire & Industrial Safety Management", "Manage fire and industrial safety together."],
  ["fireman-technician", "Diploma in Fireman Technician", "Hands-on firefighting and rescue skills."],
  ["fire-alarm-technician", "Diploma in Fire Alarm Technician", "Install and maintain fire detection systems."],
  ["fire-safety-engineering-techniques", "Diploma in Fire & Safety Engineering Techniques", "Applied techniques in fire safety engineering."],
  ["industrial-safety", "Diploma in Industrial Safety", "The core qualification behind most safety officer roles."],
  ["industrial-environmental-safety", "Diploma in Industrial Environmental Safety", "Safety where industry meets the environment."],
  ["hse", "Diploma in HSE", "Health, Safety & Environment — the all-rounder."],
  ["construction-safety", "Diploma in Construction Safety", "Site safety for building and infrastructure work."],
  ["electrical-safety", "Diploma in Electrical Safety", "Prevent electrical hazards on site and in plant."],
  ["disaster-management", "Diploma in Disaster Management & Control", "Prepare for and respond to emergencies at scale."],
  ["oil-exploration", "Diploma in Oil Exploration & Production", "Safety in upstream oil and gas."],
  ["oil-gas-safety", "Diploma in Oil & Gas Safety", "The specialism behind many Gulf placements."],
  ["fire-emergency-plan", "Diploma in Fire & Emergency Plan", "Design and run emergency response plans."],
  ["osh-environment", "Diploma in Occupational Safety, Health & Environment", "A complete grounding in workplace safety."],
];

const diplomaCollections: Record<string, string> = {
  "industrial-safety": "Where most careers begin",
  hse: "Where most careers begin",
  "construction-safety": "Built for construction sites",
  "oil-gas-safety": "The Gulf oil & gas route",
  "oil-exploration": "The Gulf oil & gas route",
};

const diplomas: Course[] = diplomaDefs.map(([slug, title, short]) => ({
  slug: `diploma-${slug}`,
  title,
  short,
  track: "diploma" as Track,
  collection: diplomaCollections[slug] || "Diploma programs",
  duration: "1 month",
  mode: "Online or classroom",
  blurb: `${title} is a one-month program that gives you a recognised qualification and the practical grounding employers look for. Zenith pairs the certificate with technical support and placement guidance — the part that actually turns a course into a career.`,
  outcomes: ["Safety Officer", "Safety Supervisor", "HSE Assistant"],
  salaryLow: 3,
  salaryHigh: 6.5,
  demand: "High" as const,
  gulf: ["oil-gas-safety", "oil-exploration", "construction-safety"].includes(slug),
  eligibility: "Open to 10th/12th pass, ITI, diploma and degree holders.",
  curriculum: ["Core principles", "Hazard identification", "Risk assessment", "Emergency procedures", "Practical application"],
  faqs: [
    { q: "Is this online or classroom?", a: "Both options are available — choose what fits your schedule." },
    { q: "What can I do after?", a: "It qualifies you for entry safety roles; our team helps with placement and the next certification." },
  ],
  related: ["diploma-industrial-safety", "iosh-managing-safely", "osha-30-general"].filter((s) => s !== `diploma-${slug}`).slice(0, 3),
}));

// ---- CERTIFICATES (4 day / 1 day) ----
const certDefs: [string, string, string][] = [
  ["fire-technician", "Fire Technician", "Frontline firefighting fundamentals."],
  ["industrial-safety", "Industrial Safety", "Safety essentials for plant and factory."],
  ["construction-safety", "Construction Safety", "Site safety basics, fast."],
  ["electrical-safety", "Electrical Safety", "Work safely around electrical hazards."],
  ["confined-space", "Confined Space", "Enter and work in confined spaces safely."],
  ["manual-mechanical-handling", "Manual & Mechanical Handling", "Lift and move loads without injury."],
  ["scaffolding-inspector", "Scaffolding Inspector", "Inspect and sign off scaffolding."],
  ["scaffolding-technician", "Scaffolding Technician", "Erect and dismantle scaffolding safely."],
  ["hira", "HIRA — Hazard ID & Risk Assessment", "The skill behind every safety role."],
  ["working-at-height", "Working at Height", "Fall prevention and safe access."],
  ["chemical-handling", "Chemical Handling", "Handle hazardous substances correctly."],
  ["road-safety", "Road Safety", "Driver and transport safety."],
  ["first-aid", "First Aid", "Respond when seconds matter."],
];

const certificates: Course[] = certDefs.map(([slug, title, short]) => ({
  slug: `cert-${slug}`,
  title,
  short,
  track: "certificate" as Track,
  collection: "One-day skills that stack up",
  duration: "1–4 days",
  mode: "Online or classroom",
  blurb: `${title} is a short, focused certificate you can complete in days — a fast way to add a specific, verifiable skill to your profile. Stack several and they build into a serious safety résumé.`,
  outcomes: ["Site Safety Assistant", "Specialist Operative"],
  salaryLow: 2.5,
  salaryHigh: 5,
  demand: "Steady" as const,
  gulf: ["scaffolding-inspector", "confined-space", "working-at-height"].includes(slug),
  eligibility: "Open to everyone. No prerequisite.",
  curriculum: ["Key hazards", "Safe procedures", "Practical assessment"],
  faqs: [{ q: "How long does it take?", a: "Most certificates run between one and four days, online or in classroom." }],
  related: ["cert-hira", "cert-working-at-height", "diploma-construction-safety"].filter((s) => s !== `cert-${slug}`).slice(0, 3),
}));

export const courses: Course[] = [...international, ...diplomas, ...certificates];


// --- Live image URLs from zss.co.in (applied to specific courses) ---
const liveImages: Record<string, string> = {
  "diploma-fire-safety": "https://www.zss.co.in/assets/images/course/course-01.jpg",
  "diploma-industrial-safety": "https://www.zss.co.in/assets/images/course/course-02.jpg",
  "diploma-hse": "https://www.zss.co.in/assets/images/course/course-03.jpg",
};
for (const c of courses) {
  if (liveImages[c.slug]) c.image = liveImages[c.slug];
}


export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

// Netflix-style rows, ordered
export const collections: { title: string; note?: string; slugs: string[] }[] = (() => {
  const order = [
    "Most asked for in the Gulf",
    "The Gulf oil & gas route",
    "Built for construction sites",
    "For the senior-role jump",
    "Become a lead auditor",
    "Where most careers begin",
    "Diploma programs",
    "One-day skills that stack up",
  ];
  return order.map((title) => ({
    title,
    slugs: courses.filter((c) => c.collection === title).map((c) => c.slug),
  })).filter((r) => r.slugs.length);
})();

export const trackMeta: Record<Track, { label: string; tagline: string }> = {
  international: { label: "International", tagline: "Globally recognised. Built for the Gulf and beyond." },
  diploma: { label: "Diploma", tagline: "One month to a recognised qualification." },
  certificate: { label: "Certificate", tagline: "Short, specific skills that stack into a career." },
};
