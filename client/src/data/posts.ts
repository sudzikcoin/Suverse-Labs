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
  {
    slug: "ai-trade-intelligence-reshaping-supply-chain-2026",
    title: "AI-Driven Trade Intelligence Is Reshaping Global Supply Chain Decision-Making in 2026",
    date: "2026-04-01",
    image: "/images/news-ai-trade.png",
    summary:
      "Global Trade Magazine's February 2026 analysis documents how AI-powered predictive analytics, real-time visibility platforms, and emissions tracking are converging to create a new standard for supply chain management — cutting costs by 20–30% while simultaneously advancing decarbonization.",
    content: [
      "Visibility has always been the central challenge in global logistics. Supply chains span multiple countries, currencies, regulatory environments, and transportation networks, making accurate real-time tracking historically difficult and expensive. According to Global Trade Magazine's February 2026 analysis, AI-driven systems are now changing this fundamentally: by analyzing data from IoT sensors, GPS tracking, and digital documentation, AI can identify port bottlenecks, predict weather-related delays, and automatically suggest alternate routes — delivering end-to-end shipment visibility that was previously impossible for all but the largest operators.",
      "The sustainability dimension is increasingly inseparable from the efficiency story. AI route optimization systems now simultaneously minimize fuel consumption and maximize on-time performance — the same algorithm that cuts 18% off fuel costs also reduces Scope 3 emissions for every shipper using that carrier. Platforms like Shippeo report 92% demand forecasting accuracy, with predictive ETA improvements of 25% for carrier performance. For a 50-truck fleet, this translates to approximately $250,000 in annual fuel savings alongside measurable CO2 reductions — a combination that directly supports both corporate ESG targets and regulatory compliance under frameworks like CSRD and California's SB 253.",
      "Blockchain integration is accelerating this further. Supply chain transparency platforms now use blockchain to create immutable audit trails across multimodal networks. One widely cited implementation — CarbonChain's integration with logistics data systems — has been reported to reduce Scope 3 emissions reporting errors by 94% by replacing manual data collection with automated, sensor-verified carbon accounting. For enterprise shippers facing mandatory Scope 3 disclosure deadlines, this accuracy improvement is not cosmetic: regulators and investors expect data that can withstand third-party assurance, and spend-based estimates that diverge significantly from activity-based calculations create legal and reputational exposure.",
      "The convergence of these trends points to a structural shift in how logistics technology is valued. Carriers who can offer shippers a verified carbon data feed alongside competitive rates are no longer differentiating on a sustainability feature — they are providing a compliance service. As Scope 3 disclosure obligations expand through SB 253, CSRD, and the CBAM, the ability to deliver auditable, per-shipment emissions data is becoming as fundamental to freight procurement as price and transit time.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
