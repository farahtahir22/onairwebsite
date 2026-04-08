export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "equipment-repair",
    title: "Equipment Repair",
    description: "Professional diagnosis and repair of all major telecom equipment brands with quick turnaround times.",
    icon: "🔧",
  },
  {
    id: "refurbishment",
    title: "Refurbishment",
    description: "Extend the life of your equipment with our professional refurbishment and upgrading services.",
    icon: "♻️",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Regular maintenance services to ensure optimal performance and prevent equipment failures.",
    icon: "🛠️",
  },
];

export interface EquipmentCategory {
  id: string;
  title: string;
  shortTitle: string;
  items: string[];
  description: string;
  icon: string;
}

export interface Brand {
  name: string;
  category: string;
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "power-systems",
    title: "Power Systems",
    shortTitle: "POWER",
    description: "Build your telecom infrastructure with reliable power systems and get optimal performance with our certified repair services.",
    items: [
      "Rectifiers (ZTE, ELTEK, EMERSON, VERTIV)",
      "UPS up to 30KVA",
      "AVRs & ATS",
      "Panels",
      "Power Modules (Delta, DPC, EATON)",
    ],
    icon: "power",
  },
  {
    id: "network-equipment",
    title: "Network Equipment",
    shortTitle: "NETWORK",
    description: "Ensure seamless connectivity with our expert repair and maintenance services for all network equipment.",
    items: [
      "Microwave Links (NEC, HARRIS STRATEX)",
      "Switching Modules",
      "RF Repeaters",
      "VSAT Equipment",
    ],
    icon: "network",
  },
  {
    id: "environmental-systems",
    title: "Environmental Systems",
    shortTitle: "ENVIRONMENTAL",
    description: "Maintain optimal operating conditions with our comprehensive environmental systems repair services.",
    items: [
      "BTS Fan Trays & Fan Modules",
      "Environment Modules",
      "Heat Exchangers",
      "Climate Units",
    ],
    icon: "environment",
  },
];

export const equipmentBrands: Brand[] = [
  // Power Systems
  { name: "ZTE", category: "Power Systems" },
  { name: "ELTEK", category: "Power Systems" },
  { name: "EMERSON", category: "Power Systems" },
  { name: "VERTIV", category: "Power Systems" },
  { name: "DELTA", category: "Power Systems" },
  { name: "DPC", category: "Power Systems" },
  { name: "EATON", category: "Power Systems" },
  // Network Equipment
  { name: "NEC", category: "Network Equipment" },
  { name: "HARRIS STRATEX", category: "Network Equipment" },
  { name: "SIEMENS", category: "Network Equipment" },
  { name: "NOKIA", category: "Network Equipment" },
  { name: "ALCATEL LUCENT", category: "Network Equipment" },
  // Switching & Transmission
  { name: "ERICSSON", category: "Switching" },
  { name: "HUAWEI", category: "Switching" },
  { name: "SAF PRO NET", category: "Transmission" },
  { name: "NERA", category: "Transmission" },
  { name: "INTRACOM", category: "Transmission" },
];

export interface Expertise {
  id: string;
  title: string;
  items: string[];
}

export const expertise: Expertise[] = [
  {
    id: "transmission",
    title: "Transmission Equipment",
    items: [
      "NEC PASSOLINK",
      "HARRIS STRATEX",
      "SIEMENS & NOKIA",
      "SAF PRO NET",
      "NERA",
      "INTRACOM",
      "ALCATEL LUCENT",
    ],
  },
  {
    id: "switching",
    title: "Switching Modules",
    items: [
      "ZTE",
      "ALCATEL LUCENT",
      "ERICSSON",
      "HUAWEI",
      "EMERSON",
    ],
  },
  {
    id: "specialized",
    title: "Specialized Repair",
    items: [
      "Climate Modules",
      "ZTE Power Cards",
      "BTS Site Repair",
      "Rectifier Modules",
      "ATS Panels",
    ],
  },
];

export const whyChooseUs = [
  {
    id: "comprehensive",
    title: "Comprehensive Services",
    description: "Comprehensive repair services for multiple segments of the telecom industry",
  },
  {
    id: "warranty",
    title: "Warranty Protection",
    description: "Sufficient warranty period for your peace of mind",
  },
  {
    id: "quality",
    title: "Quality Standards",
    description: "Minimum risk due to our high-quality repair standards",
  },
  {
    id: "cost-effective",
    title: "Cost Effective",
    description: "Extraordinary reduction in network operations cost and equipment replacement",
  },
];

export const benefits = [
  "Nationwide coverage across Pakistan",
  "Expert technical team",
  "Quick turnaround times",
  "Quality assured services",
];
