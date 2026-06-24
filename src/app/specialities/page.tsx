"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / target;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Sticky Section Nav ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "hosts", label: "Hosts" },
  { id: "stadiums", label: "Stadiums" },
  { id: "badges", label: "Badges" },
  { id: "matchball", label: "Match Ball" },
  { id: "technology", label: "Technology" },
  { id: "innovations", label: "Innovations" },
];

function StickyNav() {
  const [active, setActive] = useState("overview");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
      for (const { id } of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 flex justify-center px-4"
        >
          <div
            className="flex items-center gap-1 px-3 py-2 rounded-2xl text-xs font-semibold overflow-x-auto max-w-full no-scrollbar"
            style={{
              background: "rgba(5, 10, 26, 0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,215,0,0.2)",
              boxShadow: "0 4px 30px rgba(0,61,165,0.3)",
            }}
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  active === id
                    ? "text-[#050a1a] font-bold"
                    : "text-[#8ba3cc] hover:text-white"
                }`}
                style={
                  active === id
                    ? { background: "linear-gradient(135deg,#ffd700,#ff8c00)" }
                    : {}
                }
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Section Wrapper ─────────────────────────────────────────────────────────
function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-20 px-4 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <div className="text-5xl mb-4">{emoji}</div>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
      <div
        className="w-24 h-1 mx-auto mt-6 rounded-full"
        style={{ background: "linear-gradient(90deg,#ffd700,#ff8c00)" }}
      />
    </div>
  );
}

// ─── Glass Card ──────────────────────────────────────────────────────────────
function GlassCard({
  children,
  className = "",
  gold = false,
}: {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-6 ${className}`}
      style={{
        background: "rgba(13,27,53,0.7)",
        backdropFilter: "blur(16px)",
        border: gold
          ? "1px solid rgba(255,215,0,0.35)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: gold
          ? "0 0 30px rgba(255,215,0,0.12), 0 4px 24px rgba(0,0,0,0.4)"
          : "0 4px 24px rgba(0,61,165,0.15)",
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SpecialitiesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const badges = [
    {
      icon: "🏆",
      name: "Gold Champions Patch",
      desc: "Awarded to former World Cup-winning nations.",
      examples: ["Argentina", "Brazil", "Germany", "France", "Spain", "England", "Uruguay"],
      color: "rgba(255,215,0,0.15)",
      border: "rgba(255,215,0,0.4)",
    },
    {
      icon: "⚫",
      name: "Standard Patch",
      desc: "Worn by nations that have never won a World Cup.",
      examples: [],
      color: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.15)",
    },
    {
      icon: "⭐",
      name: "Legacy Badge",
      desc: "Awarded to players who have appeared in five or more FIFA World Cups.",
      examples: ["Lionel Messi", "Cristiano Ronaldo", "Luka Modrić", "Manuel Neuer"],
      color: "rgba(0,99,255,0.15)",
      border: "rgba(0,99,255,0.4)",
    },
    {
      icon: "🌟",
      name: "Golden Ball Badge",
      desc: "Awarded to previous World Cup MVP winners.",
      examples: ["Lionel Messi", "Luka Modrić"],
      color: "rgba(255,215,0,0.1)",
      border: "rgba(255,215,0,0.3)",
    },
    {
      icon: "⚽",
      name: "Golden Boot Badge",
      desc: "Awarded to previous World Cup top scorers.",
      examples: ["Kylian Mbappé", "Harry Kane", "James Rodríguez"],
      color: "rgba(255,140,0,0.12)",
      border: "rgba(255,140,0,0.35)",
    },
    {
      icon: "🧤",
      name: "Golden Gloves Badge",
      desc: "Awarded to previous World Cup best goalkeepers.",
      examples: ["Emiliano Martínez", "Thibaut Courtois"],
      color: "rgba(0,214,143,0.1)",
      border: "rgba(0,214,143,0.3)",
    },
    {
      icon: "🚀",
      name: "Debut Badge",
      desc: "Awarded to players making their first FIFA World Cup appearance.",
      examples: [],
      color: "rgba(255,59,59,0.1)",
      border: "rgba(255,59,59,0.3)",
    },
  ];

  const ballFeatures = [
    { icon: "🌎", title: "Inspired by Three Nations", desc: "Colors and design rooted in USA, Canada & Mexico" },
    { icon: "🎯", title: "Advanced Aerodynamics", desc: "Precision-engineered panels for consistent flight path" },
    { icon: "⚡", title: "Improved Flight Stability", desc: "Reduced wobble and turbulence at all speeds" },
    { icon: "📡", title: "Connected Ball Technology", desc: "Embedded sensor communicates with tracking systems" },
    { icon: "📊", title: "Real-Time Match Data", desc: "Ball position data delivered 500 times per second" },
  ];

  const techFeatures = [
    { icon: "📡", title: "Connected Ball Sensor", desc: "IMU sensor embedded at the center of the ball" },
    { icon: "🧠", title: "AI Tracking", desc: "Machine learning processes movement data instantly" },
    { icon: "🚩", title: "Semi-Automated Offside", desc: "Precise limb-tracking eliminates subjective calls" },
    { icon: "📊", title: "Real-Time Match Data", desc: "500Hz data feed to officials and broadcasters" },
    { icon: "🎥", title: "VAR Integration", desc: "Synced with 12 dedicated VAR camera feeds" },
    { icon: "🎯", title: "Precision Event Detection", desc: "Exact moment of kick, header or pass pinpointed" },
  ];

  const innovations = [
    { icon: "🏆", title: "Largest World Cup Ever", desc: "48 teams, 104 matches, unprecedented scale" },
    { icon: "🌍", title: "Three Host Nations", desc: "First tri-nation hosting in World Cup history" },
    { icon: "⚽", title: "Expanded 48-Team Format", desc: "32-team era ends — a new chapter begins" },
    { icon: "🎯", title: "New Round of 32", desc: "Brand-new knockout round added to the format" },
    { icon: "🎖️", title: "Advanced Badge System", desc: "Most detailed player & nation recognition ever" },
    { icon: "🤖", title: "Smart Match Ball Technology", desc: "Trionda brings AI officiating to the pitch" },
  ];

  const stadiums = [
    { name: "Azteca Stadium", city: "Mexico City", capacity: "87,523", flag: "🇲🇽" },
    { name: "MetLife Stadium", city: "East Rutherford", capacity: "82,500", flag: "🇺🇸" },
    { name: "AT&T Stadium", city: "Dallas", capacity: "80,000", flag: "🇺🇸" },
    { name: "Arrowhead Stadium", city: "Kansas City", capacity: "76,416", flag: "🇺🇸" },
    { name: "NRG Stadium", city: "Houston", capacity: "72,220", flag: "🇺🇸" },
    { name: "Mercedes-Benz Stadium", city: "Atlanta", capacity: "71,000", flag: "🇺🇸" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full" style={{ background: "var(--bg-primary)" }}>
      <StickyNav />

      {/* ── HERO ── */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 bg-[#050a1a]" style={{ y: heroY }}>
          {/* Background Blur for Wide Screens */}
          <Image unoptimized={true}
            src="/specialities/hero-banner.jpg"
            alt=""
            fill
            className="object-cover opacity-40 blur-3xl"
          />
          {/* Main Hero Image */}
          <Image unoptimized={true}
            src="/specialities/hero-banner.jpg"
            alt="FIFA World Cup 2026"
            fill
            priority
            className="object-cover md:object-contain"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,10,26,0.65) 0%, rgba(5,10,26,0.2) 40%, rgba(5,10,26,0.95) 100%)",
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.4)",
                color: "#ffd700",
              }}
            >
              ⭐ FIFA World Cup 2026
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight break-words"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg,#ffffff 0%,#ffd700 60%,#ff8c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            2026 Specialities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,244,255,0.85)" }}
          >
            Discover the innovations, technologies, stadiums, badges, and unique features that make
            the 2026 FIFA World Cup the biggest tournament in football history.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "#8ba3cc" }}>
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
              style={{ borderColor: "rgba(255,215,0,0.5)" }}
            >
              <div className="w-1.5 h-3 rounded-full" style={{ background: "#ffd700" }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── SECTION 2: OVERVIEW ── */}
      <Section id="overview">
        <SectionTitle
          emoji="🌐"
          title="Tournament Overview"
          subtitle="The 2026 FIFA World Cup will be the largest tournament ever held, featuring more teams, more matches, and more host cities than any previous edition."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { value: 48, label: "Teams", suffix: "", color: "#ffd700" },
            { value: 104, label: "Matches", suffix: "", color: "#0063ff" },
            { value: 16, label: "Host Cities", suffix: "", color: "#00d68f" },
            { value: 3, label: "Host Nations", suffix: "", color: "#ff8c00" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard gold className="text-center h-full">
                <div
                  className="text-5xl md:text-6xl font-black mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: stat.color,
                    textShadow: `0 0 30px ${stat.color}60`,
                  }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className="text-sm md:text-base font-semibold tracking-wider uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* FIFA Sound branding strip */}
        <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
          <Image unoptimized={true}
            src="/specialities/fifa-sound.jpg"
            alt="FIFA 2026 Official Theme"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(5,10,26,0.65)" }}
          >
            <div className="text-center">
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ fontFamily: "var(--font-display)", color: "#ffd700" }}
              >
                🎵 FIFA Sound — Official Theme 2026
              </p>
              <p className="mt-2 text-sm" style={{ color: "#8ba3cc" }}>
                The official soundtrack to the world's greatest sporting event.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 3: HOST NATIONS ── */}
      <Section id="hosts">
        <SectionTitle
          emoji="🌎"
          title="Host Nations"
          subtitle="For the first time in history, three nations are jointly hosting a FIFA World Cup."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { flag: "🇺🇸", name: "United States", cities: 11, color: "#B22234", accent: "#3C3B6E" },
            { flag: "🇨🇦", name: "Canada", cities: 2, color: "#FF0000", accent: "#FFFFFF" },
            { flag: "🇲🇽", name: "Mexico", cities: 3, color: "#006847", accent: "#CE1126" },
          ].map((nation, i) => (
            <motion.div
              key={nation.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl p-6 md:p-8 text-center cursor-default flex flex-col items-center justify-center w-full"
              style={{
                background: `linear-gradient(135deg, rgba(13,27,53,0.9) 0%, ${nation.color}22 100%)`,
                border: `1px solid ${nation.color}55`,
                boxShadow: `0 0 40px ${nation.color}20`,
              }}
            >
              <div className="text-7xl mb-4">{nation.flag}</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                {nation.name}
              </h3>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold"
                style={{
                  background: `${nation.color}30`,
                  border: `1px solid ${nation.color}60`,
                  color: "#ffd700",
                }}
              >
                {nation.cities} Host {nation.cities === 1 ? "City" : "Cities"}
              </div>
            </motion.div>
          ))}
        </div>

      </Section>

      {/* ── SECTION 4: STADIUMS ── */}
      <Section id="stadiums">
        <SectionTitle
          emoji="🏟️"
          title="Iconic Stadiums"
          subtitle="The tournament will be played across some of the largest and most advanced football venues ever used in World Cup history."
        />

        {/* Stadium Capacity Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-12"
          style={{ border: "1px solid rgba(255,215,0,0.2)" }}
        >
          <Image unoptimized={true}
            src="/specialities/stadiums.jpg"
            alt="FIFA 2026 Stadium Capacities"
            width={1200}
            height={800}
            className="w-full object-contain"
            style={{ background: "#0a1428" }}
          />
        </motion.div>

        {/* Stadium Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stadiums.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-xl p-4 flex flex-col w-full overflow-hidden break-words"
              style={{
                background: "rgba(13,27,53,0.8)",
                border: "1px solid rgba(255,215,0,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-3xl mb-2">{s.flag}</div>
              <div className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                {s.name}
              </div>
              <div className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
                {s.city}
              </div>
              <div
                className="text-lg font-black"
                style={{ fontFamily: "var(--font-display)", color: "#ffd700" }}
              >
                {s.capacity}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Capacity
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 5: BADGES ── */}
      <Section id="badges">
        <SectionTitle
          emoji="🎖️"
          title="The Most Detailed Badge System Ever"
          subtitle="2026 introduces a historic 7-tier patch system recognising nations and individual player achievements."
        />

        {/* Badge Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-12"
          style={{ border: "1px solid rgba(255,215,0,0.2)" }}
        >
          <Image unoptimized={true}
            src="/specialities/badges.jpg"
            alt="FIFA 2026 Badge System"
            width={1200}
            height={650}
            className="w-full object-contain"
            style={{ background: "#0a1428" }}
          />
        </motion.div>

        {/* Badge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="rounded-2xl p-4 md:p-5 flex flex-col w-full overflow-hidden break-words"
              style={{
                background: badge.color,
                border: `1px solid ${badge.border}`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
              }}
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {badge.name}
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                {badge.desc}
              </p>
              {badge.examples.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {badge.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#8ba3cc",
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ochoa Exception Fact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-5 md:p-7 overflow-hidden w-full break-words"
          style={{
            background: "linear-gradient(135deg,rgba(255,59,59,0.12) 0%,rgba(13,27,53,0.9) 100%)",
            border: "1px solid rgba(255,59,59,0.35)",
            boxShadow: "0 0 40px rgba(255,59,59,0.1)",
          }}
        >
          <div className="absolute top-4 right-4 text-5xl opacity-10">🧤</div>
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
            style={{
              background: "rgba(255,59,59,0.2)",
              border: "1px solid rgba(255,59,59,0.4)",
              color: "#ff6b6b",
            }}
          >
            ⚡ Featured Fact
          </div>
          <h3
            className="text-2xl font-black mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            &quot;The Ochoa Exception&quot;
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Guillermo Ochoa was selected for his{" "}
            <span style={{ color: "#ffd700", fontWeight: 700 }}>sixth</span> World Cup squad, but
            FIFA denied the Legacy Badge because players must actually{" "}
            <span style={{ color: "#ff6b6b", fontWeight: 700 }}>appear on the field</span> in five
            separate World Cups to qualify — not just be named in the squad.
          </p>
        </motion.div>
      </Section>

      {/* ── SECTION 6: MATCH BALL ── */}
      <Section id="matchball">
        <SectionTitle
          emoji="⚽"
          title="Official Match Ball — Trionda"
          subtitle="The official ball of FIFA World Cup 2026, crafted by adidas to reflect the spirit of the three host nations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Ball Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 60px rgba(0,99,255,0.3), 0 0 120px rgba(255,215,0,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image unoptimized={true}
                src="/specialities/trionda-ball.jpg"
                alt="Trionda Official Match Ball"
                width={700}
                height={500}
                className="w-full object-cover rounded-2xl"
              />
            </motion.div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg,#ffd700,#ff8c00)",
                color: "#050a1a",
                boxShadow: "0 4px 20px rgba(255,215,0,0.4)",
              }}
            >
              ⚽ adidas Trionda
            </div>
          </motion.div>

          {/* Ball Feature Cards */}
          <div className="flex flex-col gap-4">
            {ballFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 rounded-xl p-4 overflow-hidden break-words w-full"
                style={{
                  background: "rgba(13,27,53,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.25)" }}
                >
                  {feat.icon}
                </div>
                <div>
                  <div className="font-bold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {feat.title}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {feat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 7: SMART BALL TECHNOLOGY ── */}
      <Section id="technology">
        <SectionTitle
          emoji="🤖"
          title="Smart Ball Technology"
          subtitle="Trionda's embedded sensor sends real-time data to officiating systems, enabling faster and more accurate decisions than ever before."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Tech Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="rounded-xl p-5 overflow-hidden break-words w-full"
                style={{
                  background: "rgba(13,27,53,0.8)",
                  border: "1px solid rgba(0,99,255,0.2)",
                  boxShadow: "0 4px 20px rgba(0,61,165,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{feat.icon}</div>
                <div className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {feat.title}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {feat.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl p-6 flex justify-center items-center"
            style={{
              background: "rgba(13,27,53,0.7)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 24px rgba(0,61,165,0.15)",
            }}
          >
            <div className="w-full max-w-[500px] rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{ background: "#050a1a" }}>
              <Image unoptimized={true}
                src="/specialities/ball-tech.jpg"
                alt="Trionda Smart Ball Technology"
                width={700}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg,rgba(0,61,165,0.15) 0%,rgba(13,27,53,0.8) 100%)",
            border: "1px solid rgba(0,99,255,0.2)",
          }}
        >
          <p className="text-center text-sm font-semibold mb-6" style={{ color: "#8ba3cc" }}>
            HOW TRIONDA COMMUNICATES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Player Touches Ball", "→", "Trionda Sensor", "→", "AI Platform", "→", "Offside Analysis + VAR"].map(
              (step, i) => (
                <div key={i} className={step === "→" ? "text-[#ffd700] text-lg font-bold" : ""}>
                  {step === "→" ? (
                    step
                  ) : (
                    <span
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: "rgba(0,99,255,0.15)",
                        border: "1px solid rgba(0,99,255,0.3)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {step}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
          <p
            className="text-center text-xs mt-4 font-bold tracking-widest uppercase"
            style={{ color: "#00d68f" }}
          >
            THE RESULT: FASTER, MORE ACCURATE DECISIONS
          </p>
        </motion.div>
      </Section>

      {/* ── SECTION 8: INNOVATIONS ── */}
      <Section id="innovations">
        <SectionTitle
          emoji="🚀"
          title="Tournament Innovations"
          subtitle="2026 isn't just a World Cup. It's a landmark moment in the evolution of football."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10"
        >
          <Image unoptimized={true}
            src="/specialities/neon-hero.jpg"
            alt="FIFA World Cup 2026 Innovations"
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
            style={{ background: "#050a1a" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="rounded-2xl p-6 text-center group cursor-default flex flex-col items-center justify-center w-full overflow-hidden break-words"
              style={{
                background: "rgba(13,27,53,0.8)",
                border: "1px solid rgba(255,215,0,0.12)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform"
                style={{
                  background: "linear-gradient(135deg,rgba(255,215,0,0.15) 0%,rgba(0,61,165,0.15) 100%)",
                  border: "1px solid rgba(255,215,0,0.25)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,rgba(0,61,165,0.3) 0%,rgba(255,215,0,0.1) 100%)",
            border: "1px solid rgba(255,215,0,0.25)",
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%,#ffd700 0%,transparent 50%), radial-gradient(circle at 80% 50%,#003da5 0%,transparent 50%)",
              }}
            />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🏆</div>
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              The World Cup of a Generation
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-secondary)" }}>
              48 teams. 104 matches. Three nations. One trophy. FIFA World Cup 2026 is not just the
              largest tournament in history — it is a celebration of football&apos;s global power.
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
