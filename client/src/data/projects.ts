export interface Project {
  id: string;
  slug: string;
  name: string;
  shortTagline: string;
  description: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    id: "pingpoint",
    slug: "pingpoint",
    name: "PingPoint",
    shortTagline: "AI-powered Freight Tracking Core",
    description: "Simple mobile/web tracking core that provides real-time status updates and reduces empty miles through AI-driven automation.",
    tags: ["AI", "Tracking", "Logistics"],
    href: "/projects/pingpoint",
  },
  {
    id: "fleet-carbon-dashboard",
    slug: "fleet-carbon-dashboard",
    name: "SuVerse Fleet & Carbon Dashboard",
    shortTagline: "Fleet Performance & Emissions Monitoring",
    description: "Central dashboard for tracking fleet performance, fuel consumption, and carbon footprint with real-time telematics integration.",
    tags: ["Green Logistics", "Analytics", "Telematics"],
    href: "/projects/fleet-carbon-dashboard",
  },
  {
    id: "carbon-vault",
    slug: "carbon-vault",
    name: "SuVerse Carbon Vault",
    shortTagline: "REC Marketplace & Carbon Tracking",
    description: "System for organizing, tracking, and eventually tokenizing real-world carbon credits and Renewable Energy Certificates.",
    tags: ["Blockchain", "Carbon Credits", "Sustainability"],
    href: "/projects/carbon-vault",
  },
  {
    id: "agentos",
    slug: "agentos",
    name: "AgentOS",
    shortTagline: "AI Robot Applications for Business",
    description: "Platform of AI agents that automate routine workflows in logistics and finance, from invoicing to capacity management.",
    tags: ["AI", "Automation", "Enterprise"],
    href: "/projects/agentos",
  },
  {
    id: "validators",
    slug: "validators",
    name: "Validator & DePIN Infrastructure",
    shortTagline: "Decentralized Network Security",
    description: "Running validator nodes and supporting decentralized infrastructure for blockchain networks aligned with sustainable logistics.",
    tags: ["Blockchain", "Validators", "DePIN"],
    href: "/projects/validators",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
