"use client";

/**
 * ArunMascot - The friendly AI running copilot mascot.
 * A rounded orange character with a runner's headband, 
 * small sneakers, and expressive eyes.
 */

interface ArunMascotProps {
  size?: number;
  mood?: "default" | "wave" | "think" | "run" | "sleep" | "happy";
  className?: string;
}

export default function ArunMascot({
  size = 48,
  mood = "default",
  className = "",
}: ArunMascotProps) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="arunBody" x1="15" y1="20" x2="85" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#f55800" />
        </linearGradient>
        <linearGradient id="arunBand" x1="20" y1="22" x2="80" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
        <linearGradient id="arunShoe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* === BODY === */}
      <rect x="15" y="22" width="70" height="58" rx="28" fill="url(#arunBody)" />

      {/* === HEADBAND (runner identity) === */}
      <path
        d="M22,32 Q50,24 78,32"
        stroke="url(#arunBand)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Headband tail flapping */}
      <path
        d="M78,32 Q84,30 88,34 Q86,38 82,36"
        fill="white"
        opacity="0.9"
      />

      {/* === EYES === */}
      {mood === "sleep" ? (
        <>
          <path d="M34,46 Q38,43 42,46" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M58,46 Q62,43 66,46" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          {/* Left eye */}
          <ellipse cx="38" cy="46" rx="6" ry={mood === "happy" ? 6.5 : 6} fill="white" />
          <circle
            cx={mood === "think" ? 40 : 38}
            cy={mood === "think" ? 44.5 : 46}
            r="3"
            fill="#1a1a1a"
          />
          {/* Eye shine */}
          <circle cx="36" cy="44" r="1.2" fill="white" opacity="0.8" />

          {/* Right eye */}
          <ellipse cx="62" cy="46" rx="6" ry={mood === "happy" ? 6.5 : 6} fill="white" />
          <circle
            cx={mood === "think" ? 64 : 62}
            cy={mood === "think" ? 44.5 : 46}
            r="3"
            fill="#1a1a1a"
          />
          {/* Eye shine */}
          <circle cx="60" cy="44" r="1.2" fill="white" opacity="0.8" />
        </>
      )}

      {/* === MOUTH === */}
      {mood === "happy" || mood === "wave" ? (
        <path d="M40,56 Q50,66 60,56" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      ) : mood === "think" ? (
        <ellipse cx="56" cy="58" rx="3.5" ry="3" fill="white" opacity="0.7" />
      ) : mood === "run" ? (
        <path d="M42,56 Q50,64 58,56" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M42,56 Q50,62 58,56" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}

      {/* === WAVE HAND === */}
      {mood === "wave" && (
        <g>
          {/* Arm */}
          <path d="M80,42 Q88,35 90,28" stroke="url(#arunBody)" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Hand */}
          <circle cx="90" cy="26" r="5" fill="url(#arunBody)" />
        </g>
      )}

      {/* === LEGS & SNEAKERS === */}
      {mood === "run" ? (
        <>
          {/* Left leg - forward stride */}
          <rect x="32" y="76" width="9" height="18" rx="4.5" fill="url(#arunBody)" transform="rotate(-25 36.5 76)" />
          {/* Left sneaker */}
          <path d="M23,92 Q22,96 26,97 L34,97 Q37,97 37,94 L37,92 Q34,90 28,91 Z" fill="url(#arunShoe)" />
          {/* Shoe sole accent */}
          <line x1="26" y1="96" x2="34" y2="96" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

          {/* Right leg - back stride */}
          <rect x="58" y="76" width="9" height="18" rx="4.5" fill="url(#arunBody)" transform="rotate(20 62.5 76)" />
          {/* Right sneaker */}
          <path d="M66,92 Q65,96 69,97 L77,97 Q80,97 80,94 L80,92 Q77,90 71,91 Z" fill="url(#arunShoe)" />
          {/* Shoe sole accent */}
          <line x1="69" y1="96" x2="77" y2="96" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

          {/* Motion lines */}
          <line x1="8" y1="50" x2="14" y2="50" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <line x1="5" y1="58" x2="13" y2="58" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
          <line x1="8" y1="66" x2="12" y2="66" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
        </>
      ) : (
        <>
          {/* Standing legs */}
          <rect x="33" y="76" width="9" height="16" rx="4.5" fill="url(#arunBody)" />
          <rect x="58" y="76" width="9" height="16" rx="4.5" fill="url(#arunBody)" />

          {/* Standing sneakers */}
          <ellipse cx="37" cy="93" rx="8" ry="4" fill="url(#arunShoe)" />
          <ellipse cx="63" cy="93" rx="8" ry="4" fill="url(#arunShoe)" />
          {/* Shoe lace dot */}
          <circle cx="37" cy="91" r="1" fill="white" opacity="0.6" />
          <circle cx="63" cy="91" r="1" fill="white" opacity="0.6" />
        </>
      )}

      {/* === THINKING DOTS === */}
      {mood === "think" && (
        <g>
          <circle cx="82" cy="24" r="3" fill="#ff6b00" opacity="0.4" />
          <circle cx="90" cy="16" r="2" fill="#ff6b00" opacity="0.25" />
        </g>
      )}

      {/* === SWEAT DROP (run mode) === */}
      {mood === "run" && (
        <path d="M82,38 Q84,42 82,46 Q80,42 82,38 Z" fill="#87CEEB" opacity="0.7" />
      )}
    </svg>
  );
}
