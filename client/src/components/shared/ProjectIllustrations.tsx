/* Animated SVG illustrations for each project */

export function PingPointSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Road */}
      <line x1="10" y1="85" x2="190" y2="85" stroke="#1a2535" strokeWidth="12" strokeLinecap="round" />
      <line x1="10" y1="85" x2="190" y2="85" stroke="#0f1923" strokeWidth="1" strokeDasharray="8 6" />

      {/* Truck body */}
      <g className="animate-truck-drive">
        <rect x="60" y="58" width="55" height="24" rx="3" fill="#0C1018" stroke="#00D4FF" strokeWidth="1" />
        <rect x="115" y="64" width="22" height="18" rx="2" fill="#0C1018" stroke="#00D4FF" strokeWidth="1" />
        {/* Windshield */}
        <rect x="118" y="66" width="16" height="8" rx="1" fill="#00D4FF" opacity="0.15" />
        {/* Wheels */}
        <circle cx="80" cy="83" r="5" fill="#0C1018" stroke="#8899AA" strokeWidth="1.5" />
        <circle cx="105" cy="83" r="5" fill="#0C1018" stroke="#8899AA" strokeWidth="1.5" />
        <circle cx="130" cy="83" r="5" fill="#0C1018" stroke="#8899AA" strokeWidth="1.5" />

        {/* GPS Signal - pulsing rings */}
        <circle cx="90" cy="48" r="4" fill="#00FF88" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="48" r="8" fill="none" stroke="#00FF88" strokeWidth="0.8" opacity="0">
          <animate attributeName="r" values="6;16" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="48" r="8" fill="none" stroke="#00FF88" strokeWidth="0.6" opacity="0">
          <animate attributeName="r" values="6;22" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="48" r="8" fill="none" stroke="#00D4FF" strokeWidth="0.4" opacity="0">
          <animate attributeName="r" values="6;28" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Data trail dots */}
      {[20, 35, 50].map((x, i) => (
        <circle key={i} cx={x} cy="45" r="2" fill="#00D4FF" opacity={0.2 + i * 0.15}>
          <animate attributeName="opacity" values={`${0.1 + i * 0.1};${0.4 + i * 0.1};${0.1 + i * 0.1}`} dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export function AgentOSSVG({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 100, y: 30 }, { x: 50, y: 55 }, { x: 150, y: 55 },
    { x: 30, y: 90 }, { x: 75, y: 90 }, { x: 125, y: 90 }, { x: 170, y: 90 },
  ];
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,4],[5,6]];

  return (
    <svg viewBox="0 0 200 120" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Connections with animated data flow */}
      {edges.map(([a, b], i) => (
        <g key={`e${i}`}>
          <line x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke="#00D4FF" strokeWidth="0.8" opacity="0.2" />
          <circle r="2" fill="#00D4FF" opacity="0.7">
            <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
              path={`M${nodes[a].x},${nodes[a].y} L${nodes[b].x},${nodes[b].y}`} />
            <animate attributeName="opacity" values="0;0.8;0" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r={i === 0 ? 10 : 7}
            fill="#0C1018" stroke={i === 0 ? "#00FF88" : "#00D4FF"}
            strokeWidth={i === 0 ? 1.5 : 1} />
          <circle cx={n.x} cy={n.y} r={i === 0 ? 4 : 3}
            fill={i === 0 ? "#00FF88" : "#00D4FF"} opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* AI Brain icon in center node */}
      <text x="100" y="34" textAnchor="middle" fill="#00FF88" fontSize="8" fontWeight="bold" opacity="0.8">AI</text>
    </svg>
  );
}

export function LaunchLoopSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Orbit path */}
      <ellipse cx="100" cy="60" rx="75" ry="35" fill="none" stroke="#00D4FF" strokeWidth="0.6" opacity="0.2"
        strokeDasharray="4 3" />
      <ellipse cx="100" cy="60" rx="55" ry="25" fill="none" stroke="#00FF88" strokeWidth="0.4" opacity="0.15"
        strokeDasharray="3 4" />

      {/* Center - Product icon */}
      <circle cx="100" cy="60" r="14" fill="#0C1018" stroke="#00D4FF" strokeWidth="1.5" />
      <text x="100" y="57" textAnchor="middle" fill="#00D4FF" fontSize="6" fontWeight="bold">SaaS</text>
      <text x="100" y="66" textAnchor="middle" fill="#8899AA" fontSize="5">Product</text>

      {/* Orbiting Creator icon */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="8s" repeatCount="indefinite" />
        <circle cx="175" cy="60" r="9" fill="#0C1018" stroke="#00FF88" strokeWidth="1" />
        <text x="175" y="63" textAnchor="middle" fill="#00FF88" fontSize="7">🎬</text>
      </g>

      {/* Orbiting Developer icon */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="120 100 60" to="480 100 60" dur="8s" repeatCount="indefinite" />
        <circle cx="175" cy="60" r="9" fill="#0C1018" stroke="#00D4FF" strokeWidth="1" />
        <text x="175" y="63" textAnchor="middle" fill="#00D4FF" fontSize="7">⚡</text>
      </g>

      {/* Orbiting Growth icon */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="240 100 60" to="600 100 60" dur="8s" repeatCount="indefinite" />
        <circle cx="175" cy="60" r="9" fill="#0C1018" stroke="#6366F1" strokeWidth="1" />
        <text x="175" y="63" textAnchor="middle" fill="#6366F1" fontSize="7">📈</text>
      </g>
    </svg>
  );
}

export function CarbonVaultSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Leaf transforming to coin - left side leaves */}
      <g>
        {/* Leaf 1 */}
        <path d="M30 85 Q30 55 55 45 Q35 55 30 85Z" fill="#00FF88" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M50 90 Q48 60 70 48 Q52 58 50 90Z" fill="#00FF88" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Arrow flow */}
      <g opacity="0.4">
        <line x1="75" y1="65" x2="115" y2="65" stroke="#00D4FF" strokeWidth="1" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
        </line>
        <polygon points="118,65 112,61 112,69" fill="#00D4FF" />
      </g>

      {/* Coins - right side */}
      <g>
        <ellipse cx="145" cy="72" rx="18" ry="6" fill="#0C1018" stroke="#00D4FF" strokeWidth="0.8" />
        <ellipse cx="145" cy="65" rx="18" ry="6" fill="#0C1018" stroke="#00D4FF" strokeWidth="0.8" />
        <ellipse cx="145" cy="58" rx="18" ry="6" fill="#0C1018" stroke="#00FF88" strokeWidth="1">
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <text x="145" y="61" textAnchor="middle" fill="#00FF88" fontSize="6" fontWeight="bold">CO₂</text>
      </g>

      {/* Floating particles */}
      {[
        { x: 90, y: 40, delay: "0s" },
        { x: 100, y: 50, delay: "0.7s" },
        { x: 95, y: 30, delay: "1.4s" },
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#00FF88" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="2s" begin={p.delay} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${p.y};${p.y - 15}`} dur="2s" begin={p.delay} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export function ValidatorSVG({ className = "" }: { className?: string }) {
  const blockPositions = [
    { x: 25, y: 60 }, { x: 60, y: 60 }, { x: 95, y: 60 },
    { x: 130, y: 60 }, { x: 165, y: 60 },
  ];

  return (
    <svg viewBox="0 0 200 120" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Chain links */}
      {blockPositions.slice(0, -1).map((pos, i) => (
        <line key={`link${i}`} x1={pos.x + 12} y1={60} x2={blockPositions[i + 1].x - 12} y2={60}
          stroke="#00D4FF" strokeWidth="2" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s"
            begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Blocks */}
      {blockPositions.map((pos, i) => (
        <g key={`block${i}`}>
          <rect x={pos.x - 12} y={pos.y - 14} width="24" height="28" rx="3"
            fill="#0C1018" stroke={i === 2 ? "#00FF88" : "#00D4FF"}
            strokeWidth={i === 2 ? 1.5 : 0.8}>
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s"
              begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </rect>
          {/* Hash lines inside block */}
          <line x1={pos.x - 6} y1={pos.y - 6} x2={pos.x + 6} y2={pos.y - 6}
            stroke="#8899AA" strokeWidth="0.5" opacity="0.3" />
          <line x1={pos.x - 6} y1={pos.y} x2={pos.x + 6} y2={pos.y}
            stroke="#8899AA" strokeWidth="0.5" opacity="0.3" />
          <line x1={pos.x - 6} y1={pos.y + 6} x2={pos.x + 4} y2={pos.y + 6}
            stroke="#8899AA" strokeWidth="0.5" opacity="0.3" />
        </g>
      ))}

      {/* Validator checkmark on active block */}
      <path d="M91 55 L95 59 L103 51" fill="none" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Network nodes above */}
      {[40, 95, 150].map((x, i) => (
        <g key={`node${i}`}>
          <circle cx={x} cy={30} r="4" fill="#0C1018" stroke="#00D4FF" strokeWidth="0.6" />
          <line x1={x} y1={34} x2={blockPositions[i === 0 ? 1 : i === 1 ? 2 : 3].x} y2={46}
            stroke="#00D4FF" strokeWidth="0.4" opacity="0.2" strokeDasharray="2 2" />
        </g>
      ))}
    </svg>
  );
}

// Map project IDs to illustrations
export const projectIllustrations: Record<string, React.FC<{ className?: string }>> = {
  pingpoint: PingPointSVG,
  agentos: AgentOSSVG,
  launchloop: LaunchLoopSVG,
  "carbon-vault": CarbonVaultSVG,
  validators: ValidatorSVG,
};
