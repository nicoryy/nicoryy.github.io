import { useEffect, useRef, useState } from "react";

const ACCENT = "var(--color-primary, #7B3FF5)";
const WHITE = "var(--color-text-primary, #F0EEF8)";
const VIGNETTE = "var(--color-base, #08070E)";

const SCENE_DURATION = 3;
const SCENES = ["globe", "geo", "mobile"];
const TOTAL_DURATION = SCENE_DURATION * SCENES.length;
const DESKTOP_QUERY = "(min-width: 1024px)";

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const remap = (v, a, b) => easeInOut(clamp01((v - a) / (b - a || 1)));
const envelope = (p, inA, inB, outA, outB) => {
  if (p <= inA || p >= outB) return 0;
  if (p < inB) return remap(p, inA, inB);
  if (p > outA) return 1 - remap(p, outA, outB);
  return 1;
};

function useSceneLoop(active) {
  const [state, setState] = useState({ index: 0, progress: 0 });
  const rafRef = useRef();

  useEffect(() => {
    if (!active) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setState({ index: 0, progress: 0.5 });
      return undefined;
    }

    let start;
    const tick = (ts) => {
      if (start === undefined) start = ts;
      const elapsed = ((ts - start) / 1000) % TOTAL_DURATION;
      const index = Math.min(SCENES.length - 1, Math.floor(elapsed / SCENE_DURATION));
      const progress = (elapsed - index * SCENE_DURATION) / SCENE_DURATION;
      setState({ index, progress });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return state;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

function Backdrop({ id }) {
  return (
    <>
    </>
  );
}

function Tooltip({ x, y, w, label }) {
  return (
    <g transform={`translate(${x - w / 2},${y})`} pointerEvents="none">
      <rect width={w} height={26} rx={5} fill={VIGNETTE} stroke={ACCENT} strokeWidth={1} />
      <text
        x={w / 2}
        y={18}
        textAnchor="middle"
        fontFamily="ui-monospace,Menlo,monospace"
        fontSize={11}
        fill={WHITE}
        letterSpacing={0.5}
      >
        {label}
      </text>
    </g>
  );
}

// ================= SCENE 1: GLOBO NEURAL =================
const TECHS = ["Python", "Next.js", "Electron.js", "QGIS", "PyQt", "React Native"];

function fibonacciSphere(n, R) {
  const pts = [];
  const gAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = gAngle * i;
    pts.push({ x: Math.cos(theta) * rY * R, y: y * R, z: Math.sin(theta) * rY * R });
  }
  return pts;
}
const SPHERE_N = 22;
const SPHERE_PTS = fibonacciSphere(SPHERE_N, 200);
const TECH_IDX = [1, 4, 8, 12, 16, 19];
const TECH_OFFSETS = [
  { dx: 50, dy: -6 },
  { dx: 25, dy: -46 },
  { dx: -25, dy: -46 },
  { dx: -50, dy: -6 },
  { dx: -25, dy: 44 },
  { dx: 25, dy: 44 },
];
const SPHERE_EDGES = [];
for (let i = 0; i < SPHERE_N; i++) {
  SPHERE_EDGES.push([i, (i + 1) % SPHERE_N]);
  if (i % 3 === 0) SPHERE_EDGES.push([i, (i + 5) % SPHERE_N]);
}
const RING = (() => {
  const n = 48;
  const R = 200;
  const rings = [];
  for (let k = 0; k < 2; k++) {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2;
      if (k === 0) pts.push({ x: Math.cos(a) * R, y: 0, z: Math.sin(a) * R });
      else pts.push({ x: 0, y: Math.sin(a) * R, z: Math.cos(a) * R });
    }
    rings.push(pts);
  }
  return rings;
})();

function project3d(p, rotY, tiltX, cx, cy, focal) {
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const x = p.x * cosY + p.z * sinY;
  const z = -p.x * sinY + p.z * cosY;
  const y = p.y;
  const cosX = Math.cos(tiltX);
  const sinX = Math.sin(tiltX);
  const y2 = y * cosX - z * sinX;
  const z2 = y * sinX + z * cosX;
  const persp = focal / (focal + z2);
  return { sx: cx + x * persp, sy: cy + y2 * persp, z: z2, persp };
}

function NeuralGlobeScene({ progress }) {
  const [hover, setHover] = useState(null);
  const cx = 640;
  const cy = 400;
  const focal = 620;
  const env = envelope(progress, 0, 0.16, 0.84, 1);
  const rotY = progress * 1.25 + 0.4;
  const tiltX = 0.34;

  const projPts = SPHERE_PTS.map((p) => project3d(p, rotY, tiltX, cx, cy, focal));
  const ringPaths = RING.map((ring) => ring.map((p) => project3d(p, rotY, tiltX, cx, cy, focal)));
  const order = projPts.map((_, i) => i).sort((a, b) => projPts[a].z - projPts[b].z);

  return (
    <>
      <Backdrop id="hg1" />
      {ringPaths.map((ring, ri) => (
        <path
          key={`ring${ri}`}
          d={"M " + ring.map((p) => `${p.sx.toFixed(1)},${p.sy.toFixed(1)}`).join(" L ")}
          fill="none"
          stroke={ACCENT}
          strokeWidth={1}
          strokeOpacity={env * 0.22}
        />
      ))}
      {order.map((i) =>
        SPHERE_EDGES.filter(([a]) => a === i).map(([a, b], k) => {
          const pa = projPts[a];
          const pb = projPts[b];
          const depth = clamp01((pa.z + 200) / 400);
          return (
            <line
              key={`e${i}-${k}`}
              x1={pa.sx}
              y1={pa.sy}
              x2={pb.sx}
              y2={pb.sy}
              stroke={ACCENT}
              strokeWidth={0.9}
              strokeOpacity={env * (0.12 + depth * 0.35)}
            />
          );
        })
      )}
      {order.map((i) => {
        const p = projPts[i];
        const depth = clamp01((p.z + 200) / 400);
        const isTech = TECH_IDX.includes(i);
        const techName = isTech ? TECHS[TECH_IDX.indexOf(i)] : null;
        const r = (isTech ? 6 : 3) * (0.6 + depth * 0.7);
        return (
          <g
            key={`n${i}`}
            opacity={env * (0.35 + depth * 0.65)}
            style={isTech ? { cursor: "pointer" } : undefined}
            onMouseEnter={isTech ? () => setHover(i) : undefined}
            onMouseLeave={isTech ? () => setHover(null) : undefined}
          >
            <circle
              cx={p.sx}
              cy={p.sy}
              r={hover === i ? r + 3 : r}
              fill={isTech ? (hover === i ? WHITE : ACCENT) : ACCENT}
              style={{ transition: "r 0.2s ease, fill 0.2s ease" }}
            />
            {isTech && (
              <Tooltip
                x={p.sx + TECH_OFFSETS[TECH_IDX.indexOf(i)].dx}
                y={p.sy + TECH_OFFSETS[TECH_IDX.indexOf(i)].dy - 13}
                w={techName.length * 8 + 20}
                label={techName}
              />
            )}
          </g>
        );
      })}
    </>
  );
}

// ================= SCENE 2: MAPA / GRAFO GEO (Ceará) =================
const CEARA_PATH =
  "M 60,60 L 90,25 L 140,15 L 200,10 L 260,20 L 300,12 L 330,20 L 365,35 L 400,55 L 425,90 L 445,75 L 465,95 L 480,120 L 470,145 L 450,160 L 480,150 L 505,140 L 520,155 L 515,175 L 495,185 L 520,200 L 545,230 L 560,270 L 545,310 L 525,345 L 505,385 L 485,420 L 460,455 L 430,490 L 400,525 L 365,560 L 330,600 L 300,620 L 265,600 L 230,575 L 195,545 L 165,510 L 135,470 L 110,430 L 90,385 L 75,340 L 65,290 L 70,245 L 60,200 L 55,160 L 65,120 L 75,85 L 65,60 Z";
const MAP_ORIGIN = { x: 333, y: 95 };
const FORTALEZA_LOCAL = { x: 500, y: 165 };

const GRAPH_NODES = [
  { x: 150, y: 150, r: 4, hub: true, label: "Sobral" },
  { x: 230, y: 520, r: 4, hub: true, label: "Juazeiro do Norte" },
  { x: 500, y: 165, r: 4.5, hub: true, label: "Fortaleza" },
  { x: 200, y: 220, r: 2 },
  { x: 260, y: 190, r: 1.6 },
  { x: 320, y: 160, r: 2 },
  { x: 380, y: 190, r: 1.6 },
  { x: 420, y: 240, r: 2 },
  { x: 360, y: 260, r: 1.6 },
  { x: 300, y: 290, r: 2 },
  { x: 250, y: 330, r: 1.6 },
  { x: 200, y: 370, r: 2 },
  { x: 160, y: 410, r: 1.6 },
  { x: 280, y: 400, r: 2 },
  { x: 330, y: 440, r: 1.6 },
  { x: 380, y: 380, r: 2 },
  { x: 420, y: 330, r: 1.6 },
  { x: 440, y: 280, r: 1.6 },
  { x: 200, y: 470, r: 1.6 },
  { x: 280, y: 500, r: 1.6 },
];
const GRAPH_EDGES = [
  [0, 3], [3, 4], [4, 5], [5, 2], [4, 6], [6, 7], [7, 15], [7, 16], [16, 2],
  [3, 8], [8, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 17],
  [10, 18], [18, 19], [19, 1], [12, 18], [13, 15], [17, 14],
];
const ZOOM_NODES = [
  { x: 445, y: 105, label: "Setor 04", dx: 0, dy: -34 },
  { x: 545, y: 150, label: "Nó Regional", dx: 30, dy: 0 },
  { x: 470, y: 225, label: "Cluster B", dx: -10, dy: 34 },
];

function GeoGraphScene({ progress }) {
  const env = envelope(progress, 0, 0.08, 0.94, 1);
  const draw = 1 - remap(progress, 0.02, 0.3);
  const zoomT = remap(progress, 0.35, 0.82);

  const S = 2.6;
  const p = { x: MAP_ORIGIN.x + FORTALEZA_LOCAL.x, y: MAP_ORIGIN.y + FORTALEZA_LOCAL.y };
  const c = { x: 640, y: 380 };
  const s = 1 + zoomT * (S - 1);
  const tx = zoomT * (c.x - S * p.x);
  const ty = zoomT * (c.y - S * p.y);
  const dash = 2600;

  return (
    <>
      <Backdrop id="hg2" />
      <g transform={`translate(${tx},${ty}) scale(${s})`}>
        <g transform={`translate(${MAP_ORIGIN.x},${MAP_ORIGIN.y})`}>
          <path
            d={CEARA_PATH}
            fill="rgba(123,63,245,0.05)"
            stroke={ACCENT}
            strokeWidth={1.3}
            strokeOpacity={env}
            strokeDasharray={dash}
            strokeDashoffset={draw * dash}
            strokeLinejoin="round"
          />
          {GRAPH_EDGES.map(([a, b], i) => (
            <line
              key={`e${i}`}
              x1={GRAPH_NODES[a].x}
              y1={GRAPH_NODES[a].y}
              x2={GRAPH_NODES[b].x}
              y2={GRAPH_NODES[b].y}
              stroke={ACCENT}
              strokeWidth={0.7}
              strokeOpacity={env * 0.4}
            />
          ))}
          {GRAPH_NODES.map((n, i) => (
            <g key={`n${i}`} opacity={env}>
              <circle cx={n.x} cy={n.y} r={n.r} fill={n.hub ? WHITE : ACCENT} />
              {n.hub && (
                <text
                  x={n.x + 8}
                  y={n.y - 8}
                  fontFamily="ui-monospace,Menlo,monospace"
                  fontSize={10}
                  fill={WHITE}
                  letterSpacing={0.5}
                >
                  {n.label.toUpperCase()}
                </text>
              )}
            </g>
          ))}
          {ZOOM_NODES.map((n, i) => (
            <g key={`z${i}`} opacity={zoomT}>
              <circle cx={n.x} cy={n.y} r={2.4} fill={ACCENT} />
              <Tooltip x={n.x + n.dx} y={n.y + n.dy} w={n.label.length * 7 + 18} label={n.label} />
            </g>
          ))}
        </g>
      </g>
    </>
  );
}

// ================= SCENE 3: APP MOBILE =================
function Hand({ phase, gripX, gripY }) {
  const baseX = gripX;
  const baseY = gripY;
  const tipX = baseX - 46 * phase;
  const tipY = baseY - 150 * phase;
  const kx = baseX - 10 * phase;
  const ky = baseY - 70 * phase;
  const thumbPath = `M ${baseX + 6},${baseY + 30} Q ${baseX + 14},${baseY - 10} ${kx},${ky} Q ${tipX - 8},${tipY + 26} ${tipX},${tipY}`;

  return (
    <g>
      <path
        d={`M ${baseX + 40},${baseY + 130} Q ${baseX + 70},${baseY + 60} ${baseX + 46},${baseY - 10} Q ${baseX + 34},${baseY - 50} ${baseX + 4},${baseY + 6} Q ${baseX - 6},${baseY + 40} ${baseX + 2},${baseY + 80} Q ${baseX + 8},${baseY + 115} ${baseX + 40},${baseY + 130} Z`}
        fill="rgba(123,63,245,0.06)"
        stroke={ACCENT}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={`f${i}`}
          d={`M ${baseX + 44},${baseY - 30 + i * 26} Q ${baseX + 64},${baseY - 26 + i * 26} ${baseX + 60},${baseY - 8 + i * 26}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth={1.4}
          strokeOpacity={0.6}
          strokeLinecap="round"
        />
      ))}
      <path d={thumbPath} fill="none" stroke={ACCENT} strokeWidth={8} strokeLinecap="round" />
      <circle cx={tipX} cy={tipY} r={7} fill="rgba(123,63,245,0.15)" stroke={ACCENT} strokeWidth={1.6} />
    </g>
  );
}

function MobileAppScene({ progress }) {
  const env = envelope(progress, 0, 0.08, 0.95, 1);

  const scrollY =
    progress < 0.28
      ? 0
      : progress < 0.42
        ? -80 * remap(progress, 0.28, 0.42)
        : progress < 0.6
          ? -80
          : progress < 0.72
            ? -80 - 60 * remap(progress, 0.6, 0.72)
            : -140;

  const notifT = envelope(progress, 0.14, 0.22, 0.34, 0.4);
  const modalT = envelope(progress, 0.76, 0.85, 0.94, 1);
  const handOn1 = envelope(progress, 0.03, 0.09, 0.24, 0.3);
  const handOn2 = envelope(progress, 0.5, 0.56, 0.66, 0.72);
  const handOpacity = Math.max(handOn1, handOn2);
  const handPhase = progress < 0.4 ? handOn1 : handOn2;

  const px = 500;
  const py = 150;
  const PW = 280;
  const PH = 480;

  const cardRow = (y, wTitle, wLine, key) => (
    <g key={key}>
      <rect x={22} y={y} width={PW - 44} height={78} rx={10} fill="rgba(123,63,245,0.04)" stroke="#4a4658" strokeWidth={1} />
      <rect x={36} y={y + 18} width={wTitle} height={8} rx={4} fill={ACCENT} />
      <rect x={36} y={y + 40} width={wLine} height={5} rx={2.5} fill="#4a4658" />
    </g>
  );

  return (
    <>
      <Backdrop id="hg3" />
      <g transform={`translate(${px},${py})`} opacity={env}>
        <rect x={-6} y={-6} width={PW + 12} height={PH + 12} rx={36} fill="#0d0b12" stroke={ACCENT} strokeWidth={1.6} />
        <rect x={0} y={0} width={PW} height={PH} rx={30} fill="#0a0a0a" stroke="#4a4658" strokeWidth={1} />
        <rect x={PW / 2 - 30} y={14} width={60} height={16} rx={8} fill="#0d0b12" stroke="#4a4658" strokeWidth={1} />
        <circle cx={PW / 2 + 20} cy={22} r={3} fill="#4a4658" />
        <rect x={-3} y={110} width={3} height={50} fill={ACCENT} opacity={0.6} />
        <rect x={PW} y={150} width={3} height={70} fill={ACCENT} opacity={0.6} />
        <clipPath id="hero-phone-clip">
          <rect x={12} y={42} width={PW - 24} height={PH - 78} rx={8} />
        </clipPath>
        <g clipPath="url(#hero-phone-clip)">
          <g transform={`translate(0,${scrollY})`}>
            {cardRow(56, 100, 140, "c1")}
            {cardRow(150, 70, 110, "c2")}
            {cardRow(244, 120, 100, "c3")}
            {cardRow(338, 80, 150, "c4")}
          </g>
          <g transform={`translate(24,${52 - (1 - notifT) * 60})`} opacity={notifT}>
            <rect x={0} y={0} width={PW - 48} height={46} rx={9} fill="#151018" stroke={ACCENT} strokeWidth={1.2} />
            <circle cx={22} cy={23} r={8} fill="none" stroke={ACCENT} strokeWidth={1.2} />
            <rect x={40} y={14} width={96} height={6} rx={3} fill={ACCENT} />
            <rect x={40} y={27} width={138} height={4} rx={2} fill="#4a4658" />
          </g>
          <g
            opacity={modalT}
            style={{ transformOrigin: `${PW / 2}px ${PH / 2}px`, transform: `scale(${0.92 + modalT * 0.08})` }}
          >
            <rect x={12} y={42} width={PW - 24} height={PH - 78} fill="rgba(10,10,10,0.88)" />
            <rect x={46} y={190} width={PW - 92} height={140} rx={16} fill="#141018" stroke={ACCENT} strokeWidth={1.3} />
            <circle cx={PW / 2} cy={232} r={18} fill="none" stroke={ACCENT} strokeWidth={1.6} />
            <path d={`M ${PW / 2 - 9},232 L ${PW / 2 - 3},239 L ${PW / 2 + 10},223`} fill="none" stroke={ACCENT} strokeWidth={2.2} />
            <text x={PW / 2} y={278} textAnchor="middle" fill={WHITE} fontFamily="ui-monospace,Menlo,monospace" fontSize={12}>
              Sincronizado
            </text>
            <rect x={PW / 2 - 42} y={298} width={84} height={6} rx={3} fill="#4a4658" />
          </g>
        </g>
        <g opacity={handOpacity}>
          <Hand phase={handPhase} gripX={PW - 40} gripY={220} />
        </g>
      </g>
    </>
  );
}

export default function NeuralHeroAnimation({ className = "" }) {
  const isDesktop = useIsDesktop();
  const { index, progress } = useSceneLoop(isDesktop);

  if (!isDesktop) return null;

  const scene = SCENES[index];

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 1280 720" className="w-full h-full">
        {scene === "globe" && <NeuralGlobeScene progress={progress} />}
        {scene === "geo" && <GeoGraphScene progress={progress} />}
        {scene === "mobile" && <MobileAppScene progress={progress} />}
      </svg>
    </div>
  );
}
