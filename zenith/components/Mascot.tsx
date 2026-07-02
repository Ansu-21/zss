"use client";

type Mood = "happy" | "talking" | "thinking" | "celebrate";

export default function Mascot({ mood = "happy", size = 48 }: { mood?: Mood; size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative shrink-0">
      <svg viewBox="0 0 64 64" width={size} height={size} className="overflow-visible">
        {/* bobbing group */}
        <g style={{ animation: "mascotBob 2.6s ease-in-out infinite", transformOrigin: "center" }}>
          {/* hard hat */}
          <path d="M14 30 Q32 6 50 30 Z" fill="#FFB020" />
          <rect x="11" y="29" width="42" height="5" rx="2.5" fill="#F59300" />
          <rect x="30" y="12" width="4" height="10" rx="2" fill="#F59300" />
          {/* face */}
          <circle cx="32" cy="40" r="15" fill="#FFE0B8" />
          {/* eyes */}
          {mood === "thinking" ? (
            <>
              <circle cx="27" cy="39" r="2" fill="#2A2E45" />
              <circle cx="38" cy="39" r="2" fill="#2A2E45" />
            </>
          ) : (
            <g style={{ animation: "mascotBlink 4s infinite" }}>
              <circle cx="27" cy="39" r="2.4" fill="#2A2E45" />
              <circle cx="38" cy="39" r="2.4" fill="#2A2E45" />
              <circle cx="27.8" cy="38.2" r="0.7" fill="#fff" />
              <circle cx="38.8" cy="38.2" r="0.7" fill="#fff" />
            </g>
          )}
          {/* cheeks */}
          <circle cx="23" cy="44" r="2.4" fill="#FFC1A0" opacity="0.7" />
          <circle cx="41" cy="44" r="2.4" fill="#FFC1A0" opacity="0.7" />
          {/* mouth by mood */}
          {mood === "talking" && <ellipse cx="32" cy="47" rx="3.5" ry="3" fill="#C2492F" style={{ animation: "mascotTalk .35s ease-in-out infinite" }} />}
          {mood === "happy" && <path d="M27 46 Q32 51 37 46" stroke="#C2492F" strokeWidth="2.2" fill="none" strokeLinecap="round" />}
          {mood === "thinking" && <path d="M28 48 H36" stroke="#C2492F" strokeWidth="2.2" fill="none" strokeLinecap="round" />}
          {mood === "celebrate" && <path d="M26 45 Q32 53 38 45 Z" fill="#C2492F" />}
        </g>
        {mood === "celebrate" && (
          <>
            <circle cx="12" cy="20" r="1.6" fill="#7C6CF0" style={{ animation: "confetti 1s ease-out infinite" }} />
            <circle cx="52" cy="18" r="1.6" fill="#16A974" style={{ animation: "confetti 1.1s ease-out infinite" }} />
            <circle cx="48" cy="34" r="1.4" fill="#FF7A59" style={{ animation: "confetti .9s ease-out infinite" }} />
          </>
        )}
      </svg>
      <style>{`
        @keyframes mascotBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
        @keyframes mascotBlink{0%,92%,100%{transform:scaleY(1)}96%{transform:scaleY(0.1)}}
        @keyframes mascotTalk{0%,100%{ry:1.5px}50%{ry:3.4px}}
        @keyframes confetti{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-10px);opacity:0}}
      `}</style>
    </div>
  );
}
