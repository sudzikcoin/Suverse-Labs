export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "ghg-protocol-scope-3-95-percent-rule-carbon-grade-freight-data-2026",
    title:
      "GHG Protocol Signals a ‘95%’ Rule for Scope 3: What It Means for Carbon-Grade Freight Data and Digital MRV",
    date: "2026-04-22",
    summary:
      "A GHG Protocol progress update outlines potential revisions to the Corporate Value Chain (Scope 3) Standard, including a proposal that companies report at least 95% of required Scope 3 emissions and disclose emissions by data type. For transportation and logistics, the direction is clear: audit-ready, shipment-level activity data—and stronger data provenance—will become central to both ESG reporting and carbon-market credibility.",
    content: [
      "A new progress update from the Greenhouse Gas (GHG) Protocol signals that Scope 3 reporting is moving toward clearer, more enforceable expectations. ESG Today reports that one headline proposal under consideration would require companies to report at least 95% of total required Scope 3 emissions (allowing limited exclusions up to 5%), replacing today’s less explicit ‘account for everything and justify exclusions’ approach. Another proposed change would push companies to disaggregate Scope 3 emissions by data type for each category—making it much easier for investors and auditors to see what is based on primary supplier data versus broader estimation methods.",
      "For freight-heavy supply chains, this is not an abstract accounting change—it is a data infrastructure challenge. Upstream and downstream transportation often sits among the most material Scope 3 categories, but it is also one of the hardest to substantiate because activity data is fragmented across TMS platforms, carrier portals, telematics providers, and fuel records. If disclosure shifts toward ‘coverage’ (95% completeness) and ‘data-type transparency,’ shippers will need carriers to provide more consistent, lane- and shipment-level emissions inputs, and carriers will need tooling that can turn operational signals into defensible numbers.",
      "This is where the intersection of AI, blockchain-style provenance, and decarbonization becomes practical. AI agents can automate the operational work that reduces emissions (planning, exceptions, dwell reduction, asset utilization), while digital MRV patterns—hashing, signed events, or ledger-style audit trails—can preserve who reported what, when, and from which underlying activity records. As carbon markets and ESG assurance tighten, trusted data flows matter as much as reductions themselves.",
      "SuVerse Labs builds toward that convergence: sustainable transportation powered by AI agents, paired with blockchain-ready carbon tracking so freight activity records can be reused for Scope 3 reporting and verification workflows without inventing numbers. If the GHG Protocol’s direction holds, ‘carbon-grade freight data’ won’t be a niche capability—it will be a competitive requirement for logistics networks that want to win enterprise business and participate credibly in carbon programs.",
    ],
  }
,
  {
    slug: "agentos-pingpoint-telegram-vault-knowledge-graph-clickable-links",
    title: "From Tracking Links to Queryable Truth: AgentOS Expands PingPoint Sync + Knowledge Graph for Faster Exceptions",
    date: "2026-04-20",
    summary:
      "AgentOS now syncs PingPoint delivery signals into the Vault and Knowledge Graph, turning tracker events into queryable operations context. A small Telegram UX fix also makes driver app links open reliably, reducing friction during live loads.",
    content: [
      "AgentOS shipped a deeper PingPoint integration: delivery and tracking signals are now pulled back into AgentOS and synced into the Vault and Knowledge Graph as structured notes. Instead of leaving critical milestones inside a carrier portal, we materialize status, delivered timestamps, ping counts, and distance metrics alongside the load record — so operators and AI agents can reference the same source of truth when something goes off-plan.",
      "This matters because exception management is only as good as the data you can retrieve quickly. When tracking events are stored as inspectable knowledge (not just an API response at the moment you asked), AgentOS can answer questions like “which loads are at risk?”, “what changed since last check?”, or “show me late deliveries by lane” with context that survives shift changes, audits, and downstream reporting.",
      "Under the hood, this is also a step toward real-time, agentic operations. Vault + Knowledge Graph sync makes it possible to feed reliable, up-to-date delivery context into RAG workflows, orchestration routing, and analytics — enabling dispatch automation that is grounded in actual telematics and tracker data rather than estimates.",
      "We also improved the day-to-day operator experience: the Telegram bot now sends a clickable driver-app link via a secure HTTPS redirect, reducing time lost to copy-paste and ensuring drivers can open tracking or workflow pages immediately. Small UX improvements like this compound, especially when fleets run hundreds of daily touchpoints across messaging, portals, and telematics.",
    ],
  }
,
  {
    slug: "reuters-eu-ets2-road-transport-carbon-price-2028-data-stack",
    title: "Reuters: EU ETS2 Will Put a Carbon Price on Road Transport Fuels in 2028 — Why Audit-Grade Freight Data Matters Now",
    date: "2026-04-20",
    summary:
      "A Reuters analysis warns that the EU’s upcoming ETS2 will price carbon from fossil fuels used in road transport and building heating starting in 2028, affecting a large share of EU emissions and household fuel costs. For freight networks, this policy shift raises the value of verifiable, shipment-level emissions data — the kind that can power both operational optimization and credible Scope 3 reporting.",
    content: [
      "A Reuters analysis highlights that the EU’s forthcoming “ETS2” will extend carbon pricing to fossil fuels used in land transport (and building heating), with a start date in 2028 after a one-year postponement. Reuters notes ETS2 could cover up to roughly 40% of EU emissions and could raise average household living costs by about 300–500 euros per year once fully phased in, mainly via higher heating and transport fuel prices.",
      "For logistics, the most important part is the incentive structure: ETS2 makes the carbon intensity of road fuel a direct cost driver. That pushes fleets, shippers, and fuel suppliers toward cleaner fuels and efficiency — but it also increases pressure for credible measurement. If a shipper is trying to allocate transport emissions across products, lanes, and customers (Scope 3), or compare carriers on real decarbonization progress, it needs activity-based data that can be checked, not spreadsheets built from generic factors.",
      "This is where the “AI + blockchain + green trucking” intersection becomes practical rather than theoretical. AI agents can automate the heavy operational work (route planning, load matching, idling reduction, exception handling) that reduces emissions, while blockchain-style provenance can preserve who reported what, when, and from which underlying activity signals. As carbon prices enter day-to-day freight economics, audit trails move from compliance paperwork to commercial infrastructure.",
      "SuVerse Labs builds for that future: AI-driven freight execution paired with blockchain-ready carbon tracking so shipment records can be used confidently for customer reporting and verification workflows without inventing numbers. ETS2 is a reminder that decarbonization is becoming a market mechanism — and the winners will be logistics networks that can measure, optimize, and prove emissions performance at the same speed they move freight.",
    ],
  }
,
  {
    slug: "gps-polyline-dimo-blockchain-scope3-verification-class8-trucks",
    title: "No Odometer, No Problem: How GPS Polyline Distance Unlocks Blockchain-Verified Scope 3 for Class 8 Trucks",
    date: "2026-04-18",
    summary:
      "AgentOS now computes real-world miles from 10-minute GPS samples when a truck's CAN bus doesn't expose odometer data — closing a critical gap in DIMO-verified carbon reporting and making blockchain-backed Scope 3 accessible for the majority of working Class 8 fleets.",
    content: [
      "One of the hardest problems in freight decarbonization isn't philosophy — it's plumbing. DIMO's blockchain verification platform offers tamper-evident vehicle telemetry, but many Class 8 trucks, including common Freightliner models, don't expose odometer readings over their CAN bus. Without a mile count, emissions calculations fall back to estimates, and the 'verified' label loses its meaning. This week, AgentOS solved that problem by implementing GPS polyline distance using the haversine formula across 10-minute location samples — reconstructing actual route miles from the vehicle's own breadcrumb trail instead of waiting for a sensor that doesn't transmit.",
      "The practical impact is immediate. AgentOS now records the first fully DIMO-verified load carrying a `weight_dimo_verified` flag: a haul from Miami Gardens, FL to Cranbury, NJ, covering 1,074 GPS-computed miles and generating 1,603 kg CO2 with a full Scope 1 and Scope 3 breakdown. That figure isn't an average emission factor applied to a lane — it's computed from the truck's actual movement, anchored to a specific vehicle token on the DIMO network, and linkable to a public blockchain explorer for independent verification. For shippers and sustainability teams navigating the GHG Protocol's rising expectations around primary data and verification disclosure, that distinction is the whole game.",
      "Two additional features shipped alongside the GPS fallback to make verified data visible and actionable. The Analytics dashboard's 'Verified Loads' card is now clickable, surfacing a per-load modal with CO2 figures, truck and driver context, GPS miles, and a direct link to the DIMO vehicle record. The Scope 3 ESG PDF report now includes a QR code on the Certification page pointing to the DIMO blockchain explorer — so a shipper, auditor, or carbon-market buyer can confirm provenance in seconds without requesting additional documentation. Together, these features turn blockchain verification from a backend ledger entry into something a non-technical stakeholder can actually inspect and trust.",
      "The broader implication matters for the industry. GPS-based distance computation has existed in telematics for years, but pairing it with on-chain vehicle identity and an end-to-end carbon accounting workflow is still rare. As regulators and voluntary frameworks push freight emissions reporting toward primary activity data and third-party-verifiable audit trails, fleets need infrastructure that works with real hardware — including trucks that don't conform to ideal sensor configurations. AgentOS' approach demonstrates that blockchain-backed Scope 3 isn't a feature reserved for new, fully instrumented vehicles; it's achievable today, across the Class 8 fleet, by building intelligence around what the hardware actually provides.",
    ],
  }
,
  {
    slug: "project44-lunapath-ai-agent-orchestration-supply-chain-carbon-data", 
    title: "project44 Acquires LunaPath.ai to Accelerate AI Agent Orchestration — and Why Carbon-Grade Freight Data Matters",
    date: "2026-04-17",
    summary:
      "project44 says it acquired LunaPath.ai in an all-cash deal to bring execution-focused logistics agents into its AI agent orchestration strategy. The news highlights a broader shift: as AI agents automate freight work, the quality and provenance of emissions data (for Scope 3 and carbon markets) becomes a competitive requirement, not an afterthought.",
    content: [
      "On April 9, 2026, project44 announced it acquired LunaPath.ai in an all-cash transaction, describing LunaPath as an AI-native logistics automation company specializing in orchestration and execution-focused agents. project44 positioned the deal as a way to combine its real-time logistics “data graph” with agentic automation so that AI can move from insights to coordinated operational execution across global supply chains.",
      "In its announcement, project44 highlighted concrete, execution-oriented tasks these agents can automate — such as carrier check calls, proof-of-delivery retrieval, claims initiation, and appointment confirmations — grounded in live shipment data and historical performance patterns. This matters because the operational layer of logistics is where exceptions, dwell time, and manual work accumulate, and where automation can reduce friction across shippers, carriers, and 3PLs.",
      "For sustainability teams, the same shift toward automation raises the bar for data integrity. If an agent is making or triggering operational decisions, companies increasingly need “carbon-grade” activity records: shipment-level data that can support defensible Scope 3 calculations, supplier questionnaires, and assurance processes. That’s where emerging digital infrastructure trends intersect — including standardized methods, better primary data exchange, and, in some cases, blockchain-style provenance to show what data came from where and when.",
      "SuVerse Labs’ mission sits directly in this convergence: sustainable transportation powered by AI agents, paired with blockchain-ready carbon tracking for audit trails and partner-to-partner data sharing. As major logistics platforms scale agentic execution, the opportunity grows for emissions data layers that are verifiable, allocatable, and interoperable — enabling real decarbonization decisions and more credible participation in carbon markets without inventing numbers.",
    ],
  }
,
  {
    slug: "ghg-protocol-scope-3-revision-raises-bar-for-supplier-and-freight-data",
    title: "GHG Protocol’s Draft Scope 3 Updates Raise the Bar for Supplier and Freight Emissions Data",
    date: "2026-04-17",
    summary:
      "A new GHG Protocol progress update outlines draft revisions to the Scope 3 Standard that would require companies to report at least 95% of required Scope 3 emissions and to disaggregate results by data type, alongside clearer disclosure of third-party verification status. For transportation and logistics, the message is clear: upstream freight emissions and supplier-specific data quality are moving from best practice to an explicit reporting expectation.",
    content: [
      "The Greenhouse Gas Protocol published a March 2026 “Scope 3 Standard Revisions: Phase 1 Progress Update,” describing draft changes under development to update the Corporate Value Chain (Scope 3) Standard. Among the headline proposals are a requirement that companies account for and report at least 95% of total required Scope 3 emissions (with limited exclusions), plus a new requirement to disaggregate Scope 3 results by data type to improve transparency on how much of an inventory is based on more specific supplier data versus broader estimation methods.",
      "For shippers, manufacturers, and retailers, these proposals directly touch freight: Scope 3 hotspots often sit in purchased goods and services and upstream transportation, and the new draft language is designed to push reporting toward more decision-useful, supplier-specific inputs. The progress update also proposes a verification disclosure label for Scope 3 inventories (e.g., fully verified vs. partially verified), signaling that assurance and auditability will increasingly influence how customers and investors trust emissions claims.",
      "In parallel, the World Economic Forum has argued that many companies are moving beyond generic emission factors toward supplier-specific data, and that technologies like traceability platforms, sensor-based measurement, and book-and-claim systems are increasingly used to support Scope 3 measurement and incentive alignment. That convergence matters in freight: without operational-grade activity data (loads, miles, fuel, mode, and lane context), companies will struggle to meet emerging expectations for both completeness and credibility in transport-related Scope 3 reporting.",
      "This is exactly where SuVerse Labs’ mission fits: sustainable transportation powered by AI agents, with blockchain-ready records for carbon tracking and audit trails. As reporting standards harden and verification expectations rise, logistics networks will need systems that can collect primary activity signals, compute emissions consistently, and share results across partners without losing provenance — enabling real decarbonization decisions and credible claims in carbon markets and ESG reporting alike.",
    ],
  }
,
  {
    slug: "agentos-vault-rag-knowledge-routing-fleet-intelligence",
    title: "From Load Data to Fleet Intelligence: AgentOS Expands Vault + RAG for Corridor-Level Insights",
    date: "2026-04-15",
    summary:
      "AgentOS now turns operational load history into queryable knowledge: corridor aggregations, per-driver context, and a new KNOWLEDGE routing path for the orchestrator. This makes it easier for fleets to answer questions quickly and consistently — without losing the audit trail needed for ESG and customer reporting.",
    content: [
      "This week, AgentOS’ Vault sync gained a major expansion: richer document coverage, extended load fields, and analytics outputs like top origin→destination corridors — all materialized into Markdown notes that stay close to the underlying operational record. The result is a durable, company-contextual knowledge layer that can be inspected, shared, and audited instead of living only in a database or a chat transcript.",
      "On top of that foundation, we shipped Phase 2 of RAG with file-based knowledge retrieval over the vault notes and a dedicated KNOWLEDGE mode inside the v2 orchestrator. Practically, that means AgentOS can route questions like “which lanes do we run most often?” or “who hauled to Alabama recently?” into a consistent workflow that pulls the relevant notes, preserves context (including multilingual keywords), and returns an answer tied back to fleet activity.",
      "For trucking and logistics operators, this is about speed and trust. When corridor performance, recent loads, and driver-specific route context can be queried in seconds, dispatch and operations teams get faster exception handling, better coaching signals, and fewer manual report cycles. Just as importantly, the same data structures that power operational Q&A can support defensible Scope 3 and customer sustainability requests — because the evidence trail is embedded in the vault.",
      "SuVerse Labs is building AgentOS toward a world where AI agents automate freight execution, while emissions and activity data remain verifiable and shareable across the supply chain. Vault-backed knowledge and orchestration routing are foundational steps: they make fleet intelligence real-time enough for day-to-day decisions, and structured enough to plug into carbon accounting, blockchain verification, and audit-ready reporting workflows.",
    ],
  }
,
  {
    slug: "project44-lunapath-ai-agent-orchestration-supply-chain-carbon-data",
    title: "project44 Acquires LunaPath.ai to Accelerate AI Agent Orchestration — and Why Carbon-Grade Freight Data Matters",
    date: "2026-04-15",
    summary:
      "project44 has acquired LunaPath.ai, an AI-native logistics automation company focused on orchestration and execution agents that act on live freight data. As AI agents take on more operational decisions, the next differentiator will be trusted, auditable emissions and activity data that can flow through ESG and carbon accounting workflows.",
    content: [
      "project44 has acquired LunaPath.ai, which it describes as an AI-native logistics automation company specializing in orchestration and execution-focused agents. In a logistics environment where data is fragmented across ERP, TMS, visibility, yard, and ecommerce systems, project44 says its supply chain data graph provides the context those agents need to move from ‘interesting demos’ to real operational outcomes.",
      "The announced vision is practical execution automation: LunaPath’s agents can handle tasks such as carrier check calls, proof-of-delivery retrieval, claims initiation, and appointment confirmations, without waiting for human intervention. That matters for service and cost, but it also matters for sustainability: once decisions and workflows are automated, fleets and shippers need emissions data that is as real-time and trustworthy as the operational data the agents are acting on.",
      "This is where carbon markets and ESG reporting intersect with AI logistics. Scope 3 reporting pressure is pushing shippers to request per-shipment emissions numbers that can be allocated to products, lanes, and customers—backed by defensible methods and evidence. Carbon pricing programs (and voluntary claims scrutiny) increasingly reward high-integrity data, which creates demand for systems that can capture activity signals, compute emissions consistently, and preserve an audit trail.",
      "SuVerse Labs is building toward that future: sustainable transportation powered by AI agents, with blockchain-based carbon tracking that can make operational and emissions data shareable and verifiable across supply chains. As platforms like project44 expand agentic execution, the market opportunity grows for neutral, auditable carbon data layers that can support both decarbonization decisions and credible carbon-credit or reporting workflows—without inventing numbers or relying on unverifiable estimates.",
    ],
  }
,

  {
    slug: "verra-scope-3-standard-q3-2026-digital-infrastructure",
    title: "Verra Pushes Scope 3 Standard to Q3 2026, Highlighting Need for Digital, Audit-Ready Emissions Data",
    date: "2026-04-13",
    summary:
      "Verra says its upcoming Scope 3 Standard (S3S) will launch in Q3 2026 and is taking extra time to align with major climate accounting initiatives and build the program’s rules, tools, and infrastructure. For transportation and logistics, it’s another signal that verified, shareable Scope 3 data is becoming a procurement and compliance requirement — not a nice-to-have.",
    content: [
      "Verra says it is preparing to launch version 1.0 phase 1 of its Scope 3 Standard (S3S) Program in Q3 2026, with the initial release focused on letting companies list project pipelines using S3S-adapted methodologies. Verra frames the later-than-expected timing as deliberate: the organization says the additional development window is meant to refine program rules and tools, incorporate learnings from pilots, and build infrastructure and trainings to support broader market uptake.",
      "In its update, Verra also emphasizes interoperability. It says the timing enables alignment with Verified Carbon Standard (VCS) Program version 5 (released in December 2025) and compatibility with several external initiatives, including updates from the Greenhouse Gas Protocol and the Science Based Targets initiative. For companies trying to measure and reduce value-chain emissions, especially those whose largest footprint sits in transportation, the message is that Scope 3 accounting is moving toward more standardized, system-integrated approaches.",
      "For logistics providers, that trend has practical implications. Shippers facing mandatory reporting regimes increasingly want defensible activity-based numbers (per lane, per mode, per shipment), not only broad estimates. The data burden falls on carriers and 3PLs to provide consistent emissions calculations and evidence that can survive third-party assurance—creating demand for platforms that can ingest operational data, apply consistent methodologies, and share results across supply-chain partners.",
      "This is the kind of ecosystem SuVerse Labs is building for: sustainable transportation powered by AI automation and blockchain-based carbon tracking, where emissions data can be captured closer to real operations and preserved as an auditable record. As standards like S3S move toward launch, the competitive advantage will increasingly go to fleets and logistics networks that can deliver trusted Scope 3 data at the same speed they deliver freight.",
    ],
  }
,
  {
    slug: "ai-iot-blockchain-the-digital-trio-powering-green-logistics",
    title: "AI, IoT, and Blockchain: The Digital Trio Powering Green Logistics",
    date: "2026-04-12",
    image: "/images/news-ai-logistics.png",
    summary:
      "A new industry analysis reveals how the convergence of artificial intelligence, IoT sensors, and blockchain is transforming freight into a low-carbon, data-verifiable operation — reducing fuel costs while automating regulatory-grade carbon reporting.",
    content: [
      "The freight transportation industry faces a dual challenge: meet surging demand while slashing its carbon footprint. A detailed analysis published on LinkedIn by logistics researcher Jing Zhang outlines how three technologies — AI, IoT, and blockchain — must work in concert, not in isolation, to make green logistics actually viable at scale. For small and mid-sized carriers, the barrier has never been a lack of will but a lack of integrated, trustworthy infrastructure.",
      "AI serves as the optimization engine: machine learning models handle dynamic route planning, predictive maintenance, and load matching, delivering measurable fuel reductions and fewer empty miles. But AI is only as good as its data. This is where IoT fills the gap — sensors embedded in vehicles capture granular telemetry on speed, RPM, road conditions, and cargo weight, correlating driving behavior directly with emissions at the trip level. The result is carbon data that goes beyond estimates to verifiable, per-shipment proof.",
      "Blockchain then locks in that proof. Current carbon accounting suffers from inconsistent methodologies and data that cannot be shared or allocated across supply chains. By logging IoT-verified emissions data on an immutable ledger and linking it to a shipment's digital identity, logistics operators can produce audit-ready Scope 3 reports, access carbon markets, and demonstrate compliance to enterprise customers who increasingly require emissions transparency from their suppliers as a condition of doing business.",
      "The real breakthrough is automation. When AI triggers smart contracts on the blockchain — automatically issuing verified carbon credits upon route completion — compliance transforms from a costly manual burden into a competitive advantage. For the carriers SuVerse Labs works with, this integration is exactly what PingPoint and Carbon Vault are designed to enable: telematics that feeds real data into a verified, blockchain-backed carbon record.",
    ],
  }];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
