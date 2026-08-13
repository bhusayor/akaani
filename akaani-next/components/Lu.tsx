/** The Lu mascot, inline so it can be recoloured and animated with CSS/SMIL. */
export default function Lu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 480" aria-hidden="true">
      <g fill="#0E5B52">
        <ellipse cx="152" cy="446" rx="42" ry="18" />
        <ellipse cx="268" cy="446" rx="42" ry="18" />
      </g>
      <g fill="#0A4B44">
        <circle cx="138" cy="442" r="3.4" />
        <circle cx="152" cy="440" r="3.4" />
        <circle cx="166" cy="442" r="3.4" />
        <circle cx="254" cy="442" r="3.4" />
        <circle cx="268" cy="440" r="3.4" />
        <circle cx="282" cy="442" r="3.4" />
      </g>
      <g fill="#F5930C">
        <rect x="58" y="240" width="50" height="86" rx="25" transform="rotate(14 83 283)" />
        <circle cx="74" cy="242" r="21" />
        <ellipse cx="60" cy="222" rx="9" ry="15" transform="rotate(-18 60 222)" />
      </g>
      <g fill="#F5930C">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 340 300; -16 340 300; 7 340 300; 0 340 300; 0 340 300"
          keyTimes="0; .12; .24; .36; 1"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <rect x="312" y="240" width="50" height="86" rx="25" transform="rotate(-14 337 283)" />
        <circle cx="346" cy="242" r="21" />
        <ellipse cx="360" cy="222" rx="9" ry="15" transform="rotate(18 360 222)" />
      </g>
      <path
        d="M210 62 C 296 70 328 188 320 292 C 313 384 262 424 210 424 C 158 424 107 384 100 292 C 92 188 124 70 210 62 Z"
        fill="#F5930C"
      />
      <g>
        <rect x="134" y="206" width="15" height="44" rx="7" fill="#0E5B52" />
        <rect x="271" y="206" width="15" height="44" rx="7" fill="#0E5B52" />
        <circle cx="141" cy="248" r="7" fill="#FBF5EC" />
        <circle cx="279" cy="248" r="7" fill="#FBF5EC" />
        <path
          d="M210 232 C 276 232 302 262 304 324 C 305 384 262 418 210 418 C 158 418 115 384 116 324 C 118 262 144 232 210 232 Z"
          fill="#0E5B52"
        />
        <rect x="168" y="290" width="84" height="66" rx="16" fill="#14746A" />
        <text
          x="210"
          y="336"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontSize="44"
          fontWeight="800"
          fill="#FBF5EC"
        >
          a
        </text>
      </g>
      <g>
        <path d="M154 142 q 12 -9 25 -4" stroke="#5C3A00" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M241 138 q 13 -5 25 4" stroke="#5C3A00" strokeWidth="6" strokeLinecap="round" fill="none" />
        <g>
          <ellipse cx="174" cy="170" rx="23" ry="28" fill="#fff">
            <animate attributeName="ry" values="28;28;3;28" keyTimes="0;.9;.94;1" dur="4.4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="246" cy="170" rx="23" ry="28" fill="#fff">
            <animate attributeName="ry" values="28;28;3;28" keyTimes="0;.9;.94;1" dur="4.4s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="179" cy="174" r="11" fill="#161311">
            <animate attributeName="r" values="11;11;1;11" keyTimes="0;.9;.94;1" dur="4.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="251" cy="174" r="11" fill="#161311">
            <animate attributeName="r" values="11;11;1;11" keyTimes="0;.9;.94;1" dur="4.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="175" cy="169" r="4" fill="#fff" />
          <circle cx="247" cy="169" r="4" fill="#fff" />
        </g>
        <path d="M196 212 q 14 13 28 0" stroke="#5C3A00" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
      <g>
        <circle cx="152" cy="78" r="33" fill="#FDFBF4" />
        <circle cx="210" cy="58" r="43" fill="#FDFBF4" />
        <circle cx="268" cy="78" r="33" fill="#FDFBF4" />
        <rect x="136" y="72" width="148" height="36" fill="#FDFBF4" />
        <rect x="132" y="100" width="156" height="36" rx="16" fill="#0E5B52" />
        <text
          x="210"
          y="126"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontSize="27"
          fontWeight="800"
          fill="#FBF5EC"
        >
          Lu
        </text>
      </g>
    </svg>
  );
}
