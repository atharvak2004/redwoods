import { useState } from "react";

const timelineData = [
  {
    year: "2006",
    color: "#ec4899",
    position: "top",
    title: "LOREM IPSUM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2010",
    color: "#06b6d4",
    position: "bottom",
    title: "LOREM IPSUM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2012",
    color: "#7c3aed",
    position: "top",
    title: "LOREM IPSUM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2015",
    color: "#f59e0b",
    position: "bottom",
    title: "LOREM IPSUM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2017",
    color: "#22c55e",
    position: "top",
    title: "LOREM IPSUM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
];

const W = 780;
const circleXs = [80, 220, 360, 500, 640];
const topY = 100;
const bottomY = 190;
const circleYs = [topY, bottomY, topY, bottomY, topY];
const R = 42;

function buildWavePath() {
  const pts = circleXs.map((x, i) => ({ x, y: circleYs[i] }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const mx = (p0.x + p1.x) / 2;
    d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

export default function HorizontalTimeline() {
  const [active, setActive] = useState(null);
  const wavePath = buildWavePath();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-xl font-bold tracking-widest text-gray-600 mb-4 uppercase">
          Company Milestones
        </h2>

        <svg viewBox={`0 0 ${W} 420`} width="100%" xmlns="http://www.w3.org/2000/svg">

          {/* Building silhouettes */}
          {[150,185,270,310,400,440,530,570,660].map((x, i) => {
            const hs = [50,75,60,85,65,80,55,70,45];
            return (
              <rect key={i} x={x} y={310 - hs[i]} width={24} height={hs[i]}
                fill="#94a3b8" opacity="0.18" rx="2" />
            );
          })}

          {/* Wavy connector line */}
          <path d={wavePath} fill="none" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />

          {timelineData.map((item, i) => {
            const cx = circleXs[i];
            const cy = circleYs[i];
            const isTop = item.position === "top";
            const isActive = active === i;

            // Small vertical pin from label to circle edge
            const pinTopY = isTop ? cy - R - 2 : cy + R + 2;
            const pinBotY = isTop ? cy - R - 20 : cy + R + 20;

            // Label block Y anchor
            const labelAnchor = isTop ? cy - R - 24 : cy + R + 24;

            return (
              <g key={i} onClick={() => setActive(active === i ? null : i)}
                style={{ cursor: "pointer" }}>

                {/* Vertical pin */}
                <line x1={cx} y1={pinTopY} x2={cx} y2={pinBotY}
                  stroke={item.color} strokeWidth="1.5" opacity="0.55" />
                <circle cx={cx} cy={pinBotY} r="3" fill={item.color} opacity="0.65" />

                {/* Outer glow ring */}
                <circle cx={cx} cy={cy} r={R + 7} fill="white"
                  stroke={item.color} strokeWidth="2" opacity="0.25" />

                {/* Main circle */}
                <circle cx={cx} cy={cy} r={R} fill="white"
                  stroke={item.color} strokeWidth="3"
                  style={{
                    transition: "r 0.15s",
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                />

                {/* Year */}
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                  fill={item.color} fontSize="16" fontWeight="700" fontFamily="sans-serif">
                  {item.year}
                </text>

                {/* Label: title + description (top items go above, bottom below) */}
                <text x={cx} y={isTop ? labelAnchor - 14 : labelAnchor + 14}
                  textAnchor="middle" fill={item.color}
                  fontSize="9.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.8">
                  {item.title}
                </text>
                <text x={cx} y={isTop ? labelAnchor - 1 : labelAnchor + 27}
                  textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="sans-serif">
                  Lorem ipsum dolor sit amet,
                </text>
                <text x={cx} y={isTop ? labelAnchor + 10 : labelAnchor + 38}
                  textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="sans-serif">
                  consectetur adipiscing elit.
                </text>

                {/* Click popup */}
                {isActive && (
                  <g>
                    <rect
                      x={cx - 68} y={isTop ? cy + R + 14 : cy - R - 74}
                      width={136} height={58} rx="8"
                      fill="white" stroke={item.color} strokeWidth="1"
                    />
                    <text x={cx} y={isTop ? cy + R + 32 : cy - R - 55}
                      textAnchor="middle" fill={item.color}
                      fontSize="10" fontWeight="700" fontFamily="sans-serif">
                      {item.year} · {item.title}
                    </text>
                    <text x={cx} y={isTop ? cy + R + 46 : cy - R - 40}
                      textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">
                      Lorem ipsum dolor sit amet,
                    </text>
                    <text x={cx} y={isTop ? cy + R + 58 : cy - R - 28}
                      textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">
                      consectetur adipiscing elit.
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}