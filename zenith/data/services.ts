// "Our Services" mega-menu. Links point to our internal course detail pages
// (by slug) so navigation stays inside the app.

export const serviceGroups: { heading: string; items: { label: string; slug: string }[] }[] = [
  {
    heading: "Diploma Courses",
    items: [
      { label: "Fire & Safety", slug: "diploma-fire-safety" },
      { label: "Industrial Safety", slug: "diploma-industrial-safety" },
      { label: "Construction Safety", slug: "diploma-construction-safety" },
      { label: "Oil & Gas Safety", slug: "diploma-oil-gas-safety" },
      { label: "HSE", slug: "diploma-hse" },
      { label: "Fire Alarm Technician", slug: "diploma-fire-alarm-technician" },
      { label: "Electrical Safety", slug: "diploma-electrical-safety" },
      { label: "Disaster Management & Control", slug: "diploma-disaster-management" },
      { label: "Oil Exploration & Production", slug: "diploma-oil-exploration" },
      { label: "Fire & Emergency Plan", slug: "diploma-fire-emergency-plan" },
    ],
  },
  {
    heading: "Certificate Courses",
    items: [
      { label: "First Aid", slug: "cert-first-aid" },
      { label: "Fire Technician", slug: "cert-fire-technician" },
      { label: "Industrial Safety", slug: "cert-industrial-safety" },
      { label: "Construction Safety", slug: "cert-construction-safety" },
      { label: "Confined Space", slug: "cert-confined-space" },
      { label: "Scaffolding Inspector", slug: "cert-scaffolding-inspector" },
      { label: "HIRA", slug: "cert-hira" },
      { label: "Working at Height", slug: "cert-working-at-height" },
      { label: "Chemical Handling", slug: "cert-chemical-handling" },
      { label: "Road Safety", slug: "cert-road-safety" },
    ],
  },
  {
    heading: "International & Other",
    items: [
      { label: "IOSH – Managing Safely", slug: "iosh-managing-safely" },
      { label: "ISO 45001 Lead Auditor", slug: "iso-45001" },
      { label: "ISO 14001 Lead Auditor", slug: "iso-14001" },
      { label: "ISO 9001 Lead Auditor", slug: "iso-9001" },
      { label: "OSHA 30 — General", slug: "osha-30-general" },
      { label: "OSHA 30 — Construction", slug: "osha-30-construction" },
      { label: "OTHM Level 6 Diploma", slug: "othm-level-6" },
    ],
  },
];
