type AblazeFlameProps = {
  color: string;
  size?: "small" | "large";
};

export function AblazeFlame({ color, size = "small" }: AblazeFlameProps) {
  const large = size === "large";

  const width = large ? 360 : 150;
  const height = large ? 440 : 190;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width,
        height,
      }}
    >
      {/* Large atmospheric glow */}
      <div
        className="absolute rounded-full blur-[70px] animate-pulse"
        style={{
          width: large ? 250 : 110,
          height: large ? 300 : 130,
          background: color,
          opacity: 0.22,
        }}
      />

      {/* SVG Flame */}
      <svg
        viewBox="0 0 220 300"
        className="relative z-10 overflow-visible"
        style={{
          width: large ? 260 : 110,
          height: large ? 360 : 150,
          filter: `drop-shadow(0 0 18px ${color})`,
        }}
      >
        <defs>
          <linearGradient id={`outer-${color}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="55%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id={`inner-${color}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>

          <filter id={`blur-${color}`}>
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Outer glow flame */}
        <path
          d="
            M110 292
            C54 292 27 254 35 208
            C40 176 62 157 58 113
            C91 132 101 102 92 62
            C143 89 173 132 164 174
            C182 155 185 134 181 115
            C214 160 211 219 190 254
            C172 283 143 292 110 292Z
          "
          fill={color}
          opacity="0.18"
          filter={`url(#blur-${color})`}
        />

        {/* Main flame */}
        <path
          d="
            M110 292
            C54 292 27 254 35 208
            C40 176 62 157 58 113
            C91 132 101 102 92 62
            C143 89 173 132 164 174
            C182 155 185 134 181 115
            C214 160 211 219 190 254
            C172 283 143 292 110 292Z
          "
          fill={`url(#outer-${color})`}
          className="flame-body"
        />

        {/* Inner flame */}
        <path
          d="
            M111 274
            C78 274 60 251 64 222
            C68 195 86 181 82 151
            C106 164 119 143 116 119
            C144 145 153 170 145 194
            C157 184 161 174 160 162
            C180 198 169 239 149 258
            C139 269 126 274 111 274Z
          "
          fill={`url(#inner-${color})`}
          opacity="0.9"
        />

        {/* Bright core */}
        <ellipse
          cx="110"
          cy="235"
          rx="25"
          ry="42"
          fill="white"
          opacity="0.75"
          filter={`url(#blur-${color})`}
        />

        <ellipse cx="110" cy="235" rx="13" ry="25" fill="white" opacity="0.9" />
      </svg>

      {/* Floating embers */}
      <span
        className="ember ember-one"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />

      <span
        className="ember ember-two"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />

      <span
        className="ember ember-three"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />

      <span
        className="ember ember-four"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />
    </div>
  );
}
