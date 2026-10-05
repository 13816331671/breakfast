export function HeroArt() {
  return (
    <svg
      viewBox="0 0 420 400"
      width="86%"
      role="img"
      aria-label="豆浆、油条、大饼与粢饭团插画"
    >
      <defs>
        <linearGradient id="bowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E7DAC0" />
        </linearGradient>
        <linearGradient id="soy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FDF3DC" />
          <stop offset="1" stopColor="#EFDDB8" />
        </linearGradient>
      </defs>

      {/* 大饼 */}
      <ellipse cx="112" cy="286" rx="96" ry="30" fill="#EAD9B8" />
      <path d="M20 280 q92 -58 184 0 q-14 30 -92 30 q-78 0 -92 -30z" fill="#E3AE5A" />
      <path d="M44 272 q68 -40 136 0" stroke="#C98A2C" strokeWidth="4" fill="none" opacity=".55" />
      <circle cx="80" cy="274" r="4" fill="#FFF6E2" opacity=".9" />
      <circle cx="130" cy="266" r="4" fill="#FFF6E2" opacity=".9" />
      <circle cx="160" cy="280" r="3.5" fill="#FFF6E2" opacity=".9" />

      {/* 豆浆碗 */}
      <path d="M170 168 q14 96 90 96 q76 0 90 -96z" fill="url(#bowl)" stroke="#D9C7A3" strokeWidth="3" />
      <ellipse cx="260" cy="168" rx="90" ry="26" fill="url(#soy)" stroke="#D9C7A3" strokeWidth="3" />
      <ellipse cx="260" cy="168" rx="70" ry="18" fill="#FFF9EA" opacity=".75" />

      {/* 油条 */}
      <g transform="rotate(-18 250 110)">
        <rect x="150" y="96" width="200" height="34" rx="17" fill="#D18F28" />
        <rect x="150" y="96" width="200" height="34" rx="17" fill="none" stroke="#B8781A" strokeWidth="2.5" />
        <path d="M150 113 h200" stroke="#B8781A" strokeWidth="3" opacity=".6" />
        <ellipse cx="176" cy="113" rx="12" ry="14" fill="#F5D08C" opacity=".7" />
        <ellipse cx="330" cy="113" rx="12" ry="14" fill="#F5D08C" opacity=".7" />
      </g>

      {/* 粢饭团 */}
      <ellipse cx="352" cy="300" rx="52" ry="42" fill="#F7F2E6" stroke="#DFD3B6" strokeWidth="3" />
      <ellipse cx="352" cy="286" rx="34" ry="20" fill="#EDE2C9" />
      <circle cx="340" cy="290" r="3" fill="#B99A63" />
      <circle cx="364" cy="292" r="3" fill="#B99A63" />
      <path d="M330 316 q22 12 44 0" stroke="#CBB994" strokeWidth="3" fill="none" />

      {/* 咸豆浆配料 */}
      <path d="M206 176 q10 -14 22 -6 t22 4 t20 -6" stroke="#8FA46B" strokeWidth="4" fill="none" opacity=".9" />
      <circle cx="238" cy="186" r="4" fill="#C0402C" />
      <circle cx="288" cy="182" r="4" fill="#C0402C" />
    </svg>
  );
}

function DabingIcon() {
  return (
    <svg className="icon" viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="66" rx="42" ry="13" fill="#EFDFC0" />
      <path d="M9 62 q41 -30 82 0 q-8 16 -41 16 q-33 0 -41 -16z" fill="#E4AE59" />
      <path d="M22 58 q28 -18 56 0" stroke="#C88C2E" strokeWidth="3" fill="none" />
      <circle cx="38" cy="60" r="2.6" fill="#FFF7E6" />
      <circle cx="60" cy="58" r="2.6" fill="#FFF7E6" />
    </svg>
  );
}

function YoutiaoIcon() {
  return (
    <svg className="icon" viewBox="0 0 100 100" aria-hidden="true">
      <g transform="rotate(-14 50 50)">
        <rect x="10" y="38" width="80" height="22" rx="11" fill="#D18F28" />
        <path d="M10 49 h80" stroke="#B8781A" strokeWidth="3" />
        <ellipse cx="24" cy="49" rx="7" ry="9" fill="#F5D08C" opacity=".7" />
        <ellipse cx="76" cy="49" rx="7" ry="9" fill="#F5D08C" opacity=".7" />
      </g>
    </svg>
  );
}

function DoujiangIcon() {
  return (
    <svg className="icon" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M22 36 q6 42 28 42 q22 0 28 -42z" fill="#FFFBF1" stroke="#DDCDA9" strokeWidth="2.5" />
      <ellipse cx="50" cy="36" rx="28" ry="8" fill="#F6E8C9" stroke="#DDCDA9" strokeWidth="2.5" />
      <ellipse cx="50" cy="36" rx="20" ry="5.5" fill="#FFFAEE" />
      <path d="M34 40 q7 -8 14 -3 t14 1" stroke="#8FA46B" strokeWidth="3" fill="none" />
    </svg>
  );
}

function CifanIcon() {
  return (
    <svg className="icon" viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="56" rx="34" ry="28" fill="#F8F3E7" stroke="#DFD3B6" strokeWidth="2.5" />
      <ellipse cx="50" cy="48" rx="22" ry="13" fill="#EDE2C9" />
      <circle cx="42" cy="50" r="2.4" fill="#B99A63" />
      <circle cx="58" cy="51" r="2.4" fill="#B99A63" />
      <path d="M36 66 q14 8 28 0" stroke="#CBB994" strokeWidth="3" fill="none" />
    </svg>
  );
}

const iconMap = {
  dabing: DabingIcon,
  youtiao: YoutiaoIcon,
  doujiang: DoujiangIcon,
  cifan: CifanIcon,
};

export function ClassicIcon({ name }) {
  const Icon = iconMap[name];
  return Icon ? <Icon /> : null;
}
