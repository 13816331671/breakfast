import { shop } from "@/lib/shop";

export default function ShanghaiMap() {
  const mapUrl = `https://www.amap.com/search?query=${encodeURIComponent(shop.address.mapQuery)}`;

  return (
    <div className="map-card">
      <div className="map-head">
        <div>
          <div className="t">门店位置</div>
          <div className="sub">石库门景区旁 · 新天地北里</div>
        </div>
        <a className="map-open" href={mapUrl} target="_blank" rel="noopener noreferrer">
          高德地图 ↗
        </a>
      </div>

      <div className="map-frame">
        <svg
          viewBox="0 0 620 440"
          role="img"
          aria-label="弄堂晨光门店位置示意图：新天地北里 181 弄 25 号楼，紧邻石库门景区与兴业路，自地铁新天地站步行约 3 分钟"
        >
          <defs>
            <linearGradient id="mPin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F2B44C" />
              <stop offset="1" stopColor="#C0402C" />
            </linearGradient>
            <linearGradient id="mBun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFDF7" />
              <stop offset="1" stopColor="#F0E2C6" />
            </linearGradient>
            <filter id="mSoft" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#3A2A1F" floodOpacity=".28" />
            </filter>
          </defs>

          <rect width="620" height="440" fill="#F8F0DF" />

          {/* 街区 */}
          <rect x="36" y="58" width="200" height="170" rx="10" fill="#E7E0F5" />
          <rect x="256" y="44" width="176" height="170" rx="10" fill="#EFE9F9" />
          <rect x="452" y="40" width="132" height="120" rx="10" fill="#E9E2F6" />
          <rect x="252" y="300" width="152" height="124" rx="10" fill="#FBE0AE" />
          <rect x="420" y="286" width="164" height="138" rx="10" fill="#D9D2EF" />
          <rect x="36" y="336" width="184" height="92" rx="10" fill="#CFE4C3" />

          {/* 道路 */}
          <path d="M-20 314 L640 212" stroke="#E7D9BE" strokeWidth="36" strokeLinecap="round" />
          <path d="M-20 314 L640 212" stroke="#FFFFFF" strokeWidth="28" strokeLinecap="round" />
          <path d="M-20 314 L640 212" stroke="#EFE4CC" strokeWidth="2" strokeDasharray="14 12" />
          <path d="M600 -20 L586 460" stroke="#E7D9BE" strokeWidth="30" strokeLinecap="round" />
          <path d="M600 -20 L586 460" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />

          <text
            x="528"
            y="236"
            transform="rotate(-9 528 236)"
            fontSize="12.5"
            fill="#8B7A67"
            letterSpacing="3"
            fontFamily="'PingFang SC','Microsoft YaHei',sans-serif"
          >
            兴业路
          </text>

          {/* 步行路线 */}
          <path
            d="M156 360 C 214 326 272 296 322 262"
            fill="none"
            stroke="#C0402C"
            strokeWidth="3"
            strokeDasharray="8 7"
            strokeLinecap="round"
            opacity=".72"
          />
          <circle cx="152" cy="368" r="8.5" fill="#2E6BB8" />
          <text
            x="152"
            y="372"
            fontSize="11"
            fontWeight="700"
            fill="#FFFFFF"
            textAnchor="middle"
            fontFamily="'PingFang SC',sans-serif"
          >
            M
          </text>
          <text x="168" y="372" fontSize="11.5" fill="#5A6E86" fontFamily="'PingFang SC',sans-serif">
            新天地站
          </text>

          {/* 周边参照物 */}
          <circle cx="140" cy="92" r="5" fill="#E8863A" />
          <text x="152" y="96" fontSize="12" fill="#7A6A5C" fontFamily="'PingFang SC',sans-serif">
            NUNU Donut
          </text>
          <text x="152" y="111" fontSize="10.5" fill="#9C8B79" fontFamily="'PingFang SC',sans-serif">
            新天地店
          </text>

          <circle cx="300" cy="142" r="5" fill="#7A5CE0" />
          <text x="312" y="146" fontSize="12" fill="#7A6A5C" fontFamily="'PingFang SC',sans-serif">
            LE LABO
          </text>

          <circle cx="126" cy="250" r="5" fill="#7A5CE0" />
          <text x="138" y="254" fontSize="12" fill="#7A6A5C" fontFamily="'PingFang SC',sans-serif">
            BEAST 野兽派
          </text>

          <circle cx="352" cy="258" r="5.5" fill="#5B7B45" />
          <text x="364" y="262" fontSize="12" fill="#4E6B3C" fontFamily="'PingFang SC',sans-serif">
            石库门景区
          </text>

          <circle cx="492" cy="306" r="5" fill="#7A5CE0" />
          <text x="504" y="310" fontSize="12" fill="#7A6A5C" fontFamily="'PingFang SC',sans-serif">
            新天地南北里
          </text>

          {/* 本店定位 */}
          <circle className="ping" cx="330" cy="256" r="16" fill="none" stroke="#C0402C" strokeWidth="3" />
          <circle className="ping p2" cx="330" cy="256" r="16" fill="none" stroke="#C0402C" strokeWidth="3" />
          <ellipse cx="330" cy="258" rx="17" ry="6" fill="#3A2A1F" opacity=".16" />
          <g className="pin">
            <path
              d="M330 256 C 306 230 292 216 292 196 A 38 38 0 1 1 368 196 C 368 216 354 230 330 256 Z"
              fill="url(#mPin)"
              filter="url(#mSoft)"
            />
            <path
              d="M330 180 c 13 0 21 9 21 20 c 0 8 -6 14 -13 16 c -3 1 -5 1 -8 1 c -3 0 -5 0 -8 -1 c -7 -2 -13 -8 -13 -16 c 0 -11 8 -20 21 -20 z"
              fill="url(#mBun)"
            />
            <path d="M330 181 v 14" stroke="#E3D2AC" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M319 190 q11 -10 22 0" stroke="#E3D2AC" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <circle cx="323" cy="207" r="1.7" fill="#D9C39A" />
            <circle cx="337" cy="209" r="1.7" fill="#D9C39A" />
          </g>

          {/* 招牌 */}
          <path d="M388 186 L372 196 L388 206 Z" fill="#FFFCF5" />
          <rect x="386" y="168" width="200" height="56" rx="14" fill="#FFFCF5" stroke="rgba(58,42,31,.11)" filter="url(#mSoft)" />
          <text x="404" y="192" fontFamily="'Noto Serif SC','Songti SC',serif" fontSize="18" fontWeight="900" fill="#3A2A1F">
            弄堂晨光
          </text>
          <text x="404" y="211" fontSize="11.5" fill="#C0402C" letterSpacing="1" fontFamily="'PingFang SC',sans-serif">
            上海早点 · 本店
          </text>

          {/* 指北针 */}
          <circle cx="64" cy="62" r="19" fill="#FFFCF5" opacity=".85" stroke="rgba(58,42,31,.12)" />
          <path d="M64 48 L70 66 L64 61 L58 66 Z" fill="#C0402C" />
          <text x="64" y="77" fontSize="9.5" fill="#8B7A67" textAnchor="middle" fontFamily="'PingFang SC',sans-serif">
            N
          </text>
        </svg>
      </div>

      <div className="map-foot">
        <span>{shop.mapCaption.left}</span>
        <span>{shop.mapCaption.right}</span>
      </div>
    </div>
  );
}
