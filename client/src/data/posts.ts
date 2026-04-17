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
  },
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
  },
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
  },
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
  },

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
  },
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
  },
  {
    slug: "scope-3-compliance-what-logistics-leaders-must-do-now",
    title: "Scope 3 Compliance: What Logistics and Manufacturing Leaders Must Do Now",
    date: "2026-04-10",
    image: "/images/news-scope3.png",
    summary:
      "With the EU's CBAM entering its definitive phase in January 2026 and California's SB 253 requiring Scope 1 and 2 disclosures by August 2026, the window for preparation is closing fast — and Scope 3 emissions from freight are squarely in the crosshairs.",
    content: [
      "The regulatory landscape for corporate emissions disclosure shifted decisively at the start of 2026. The EU's Carbon Border Adjustment Mechanism entered its definitive phase on January 1, imposing carbon pricing on imports and demanding detailed supply chain emissions data from affected businesses. Simultaneously, the EU Corporate Sustainability Reporting Directive (CSRD) under its ESRS E1 standards mandates phased Scope 3 disclosures for large European companies — and the reach of these obligations extends well beyond directly regulated firms, cascading through supply chains to every supplier, logistics provider, and freight carrier in the network.",
      "In the United States, California's SB 253 — the Climate Corporate Data Accountability Act — requires companies with over $1 billion in revenue that do business in California to begin reporting Scope 1 and Scope 2 emissions by August 10, 2026, with Scope 3 disclosures required starting in 2027. The CARB (California Air Resources Board) held its first implementation workshop in March 2026, confirming that freight transportation emissions — the largest single Scope 3 category for most goods-producing companies — will be a primary focus. Non-compliance carries administrative fines up to $500,000 per reporting year.",
      "The practical challenge is data. Scope 3 covers the entire value chain: upstream suppliers, inbound and outbound transportation, product use, and end-of-life disposal. For a manufacturer with 500 suppliers, calculating Scope 3 accurately means obtaining emissions data from each. Most suppliers cannot yet provide it. Companies are forced to begin with spend-based estimates using industry average emission factors — acceptable initially, but regulators and investors expect progressive improvement toward supplier-specific primary data. That progression requires systematic engagement, data validation processes, and technology infrastructure to track quality improvements over time.",
      "Advanced carbon accounting platforms, AI-powered logistics optimization tools, and the Global Logistics Emissions Council (GLEC) Framework are now central to compliance strategy. For freight operators, the message is direct: if you cannot provide verified, per-shipment emissions data to your customers, you risk losing contracts with large shippers who need that data to meet their own regulatory obligations. Blockchain-verified telematics — capturing real emissions per route and making that data auditable and shareable — is no longer a sustainability nicety. It is rapidly becoming a commercial necessity.",
    ],
  },
  {
    slug: "eu-ets2-carbon-pricing-road-transport-2028",
    title: "EU ETS2: Carbon Pricing Comes to Road Transport — What Fleets Need to Know",
    date: "2026-04-08",
    image: "/images/news-ets2.png",
    summary:
      "The European Environment Agency published a detailed briefing on ETS2 in March 2026, confirming that carbon pricing for road transport fuels will begin in 2028. With the Social Climate Fund already active and a 42% emissions reduction target by 2030, European fleets must prepare now.",
    content: [
      "The European Union's new Emissions Trading System for road transport — ETS2 — will become operational in January 2028 following a one-year delay agreed by EU co-legislators in November 2025. The postponement gives Member States more time to prepare their Social Climate Plans, but does not change the underlying obligation: fuel suppliers will be required to surrender carbon allowances equivalent to CO2 emissions from road transport fuels they sell, effectively embedding a carbon price into every liter of diesel. Road transport accounted for 61% of total ETS2-covered emissions in 2023, making it the system's largest single sector.",
      "The European Environment Agency's March 2026 briefing makes clear that ETS2 is not a standalone measure but part of a coherent EU policy mix. CO2 emission performance standards for heavy-duty vehicles, the Alternative Fuel Infrastructure Regulation (AFIR), and the Eurovignette toll directive — which allows road charges to be differentiated by CO2 emissions — all reinforce the carbon pricing signal. The ETS2 cap is set to deliver a 42% reduction in covered emissions versus 2005 levels by 2030, declining annually through an automatically adjusting trajectory.",
      "The Social Climate Fund (SCF), already active since 2026, provides a €65 billion buffer to support vulnerable households and micro-enterprises through the transition — financed partly by ETS1 revenues ahead of ETS2's full launch. For freight operators, this signals that carbon pricing in Europe is now a structural feature of the business environment, not a temporary policy experiment. Fleet operators who have not yet begun modeling carbon cost exposure into route economics and procurement decisions are falling behind.",
      "The practical implication for logistics companies operating European fleets: emissions per kilometer traveled will carry an increasing financial cost, making AI-driven route optimization and real-time fuel efficiency monitoring tools directly linked to bottom-line performance. Blockchain-based carbon tracking will also become necessary to demonstrate compliance with the CountEmissionsEU initiative, which adds EU-wide standardization requirements for how transport emissions are calculated and reported across supply chains.",
    ],
  },
  {
    slug: "wef-first-movers-coalition-19-billion-zero-emission-trucking",
    title: "WEF First Movers Coalition Commits $19B to Zero-Emission Trucking and Freight",
    date: "2026-04-05",
    image: "/images/news-fmc.png",
    summary:
      "The World Economic Forum's First Movers Coalition now represents 101 companies with over $19 billion in demand commitments for low-carbon products by 2030 — including pledges to purchase only zero-emission trucks for 100% of medium-duty and 30% of heavy-duty new purchases.",
    content: [
      "The World Economic Forum's First Movers Coalition (FMC) published its 2026 Impact Brief in January, revealing that member companies have collectively signed more than 130 offtake agreements toward $19 billion in purchasing commitments for low-carbon products by 2030 — representing a potential 26 million tonnes of CO2 reductions. The coalition, which spans hard-to-abate sectors including aviation, shipping, trucking, steel, and cement, is increasingly seen as the most concrete proof that corporate demand can drive industrial decarbonization at scale.",
      "In road freight, the FMC trucking commitment requires member companies to purchase only zero-emission trucks (battery or fuel-cell electric) for 100% of new medium-duty purchases and 30% of new heavy-duty purchases by 2030. Critically, companies that use trucking services — rather than owning fleets directly — must require their logistics partners to meet the same targets. This cascades the zero-emission obligation through the supply chain: shippers commit, and carriers must follow. Freight company Toll Group, an FMC member, has already invested $43 million in charging infrastructure including 28 electric trucks and 30 dedicated charging hubs to demonstrate viability.",
      "The FMC's carbon dioxide removal (CDR) commitment adds another dimension: large companies (over $5 billion in revenue) must contract for at least 50,000 tonnes of carbon removal or invest $25 million in CDR by 2030. Smaller members must contract for at least 10,000 tonnes or invest $5 million. This creates direct demand for verified, blockchain-tracked carbon removal credits — exactly the type of infrastructure that decentralized verification networks are designed to support.",
      "The FMC's core insight is that decarbonization of hard-to-abate sectors depends not on individual company action but on coordinated demand signals that give clean technology suppliers the revenue certainty to invest and scale. For logistics operators, the signal is now clear: large corporate shippers are actively restructuring procurement to favor verified low-emission carriers. The ability to provide auditable emissions data per shipment — via telematics and blockchain verification — is becoming a prerequisite for winning and retaining enterprise freight contracts.",
    ],
  },
  {
    slug: "california-sb253-scope-3-disclosure-deadline-2026",
    title: "California SB 253: Scope 1 and 2 Disclosures Due August 2026 — Scope 3 Follows in 2027",
    date: "2026-04-03",
    image: "/images/news-sb253.png",
    summary:
      "California's Climate Corporate Data Accountability Act sets the first U.S. mandatory Scope 3 disclosure deadline for 2027, with Scope 1 and 2 reporting required by August 10, 2026. For logistics companies and their suppliers, freight-related emissions are the largest and most complex category to measure.",
    content: [
      "California's SB 253 — the Climate Corporate Data Accountability Act — is now the most comprehensive mandatory climate disclosure law in the United States. It requires all U.S.-based entities with over $1 billion in annual global revenue that do business in California to publicly disclose their Scope 1, 2, and 3 greenhouse gas emissions annually, verified by an independent third party. The California Air Resources Board held its March 2026 implementation workshop confirming the phased timeline: Scope 1 and 2 disclosures covering fiscal year 2025 are due by August 10, 2026. Scope 3 disclosures — covering the full value chain including all transportation and logistics emissions — follow in 2027.",
      "Freight and transportation emissions sit squarely within Category 4 (upstream transportation and distribution) and Category 9 (downstream transportation and distribution) of the GHG Protocol's Scope 3 framework. For goods-producing companies, these categories collectively represent some of the largest and most difficult-to-measure emission sources. Unlike Scope 1 and 2, which a company can measure directly from its own operations and energy bills, Scope 3 transportation data requires emissions information from every carrier, 3PL, and logistics partner in the supply chain — most of whom do not yet systematically track or report it.",
      "The CARB workshop confirmed that spend-based estimates using industry average emission factors are acceptable for initial Scope 3 reporting, but regulators expect progression toward supplier-specific primary data over time. This creates a direct commercial incentive for logistics providers: carriers and freight operators who can supply verified, per-shipment emissions data — ideally through standardized frameworks like the GLEC methodology — will gain a competitive advantage with large shippers who need that data to meet their own California disclosure obligations. Fines for non-compliance reach up to $500,000 per reporting year.",
      "The practical implication for the broader supply chain is a cascading disclosure requirement. Large shippers regulated under SB 253 are already requiring their logistics partners to provide emissions data as a condition of procurement. Mid-market carriers not directly subject to SB 253 are now receiving supplier questionnaires and data requests. Building the telematics infrastructure to capture, validate, and deliver per-shipment carbon data is no longer a future investment — it is an immediate operational priority for any freight company that wants to remain competitive in the California market and with enterprise customers globally.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
