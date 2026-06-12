"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Calendar, Radio, BarChart3, GitBranch, ChevronRight,
  MapPin, Users, Clock, Trophy, Zap, TrendingUp
} from "lucide-react";
import { NEWS } from "@/lib/data/news";
import { MATCHES } from "@/lib/data/matches";
import { getCountdownParts, formatDate, formatTime } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Flag } from "@/components/ui/Flag";

// ── Countdown ─────────────────────────────────────────────────────────────────
function CountdownTimer() {
  const TARGET = "2026-06-11T19:00:00Z"; // Matches FIFA official site (19:00 UTC)
  const [mounted, setMounted] = useState(false);
  const [parts, setParts] = useState(getCountdownParts(TARGET));

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setParts(getCountdownParts(TARGET)), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  if (parts.started) {
    return (
      <div className="text-center">
        <span className="font-display text-2xl text-gradient-gold animate-live-pulse">
          ⚽ TOURNAMENT UNDERWAY
        </span>
      </div>
    );
  }

  const segments = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Mins", value: parts.minutes },
    { label: "Secs", value: parts.seconds },
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap justify-center">
      {segments.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="glass-card-gold w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl">
            <motion.span
              key={value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold"
            >
              {String(value).padStart(2, "0")}
            </motion.span>
          </div>
          <span className="text-[var(--text-muted)] text-xs font-heading uppercase tracking-wider mt-2">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Stats Counter ─────────────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 40;
    const inc = to / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= to) { setCount(to); clearInterval(id); } else setCount(Math.floor(cur));
    }, 30);
    return () => clearInterval(id);
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Quick Match Card ───────────────────────────────────────────────────────────
function QuickMatchCard({ match }: { match: (typeof MATCHES)[0] }) {
  return (
    <Link href={`/match/${match.id}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="glass-card p-4 hover:border-[var(--fifa-blue)]/60 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
            {match.phase === "Group" ? `Group ${match.group}` : match.phase}
          </span>
          <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
            <MapPin size={9} /> {match.stadium.city}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xl"><Flag emoji={match.homeTeam.flag} size={24} /></span>
            <span className="text-sm font-semibold text-[var(--text-primary)] truncate">{match.homeTeam.shortName}</span>
          </div>
          <div className="text-center px-3 py-1 rounded-lg bg-[var(--fifa-blue)]/20 border border-[var(--border-primary)] flex-shrink-0">
            {match.status === "LIVE" ? (
              <span className="text-red-400 font-bold text-xs animate-live-pulse">LIVE</span>
            ) : match.status === "FINISHED" ? (
              <span className="font-display font-bold text-sm text-[var(--text-primary)]">
                {match.homeScore} - {match.awayScore}
              </span>
            ) : (
              <div className="text-center">
                <div className="font-display font-bold text-[10px] text-[var(--fifa-gold)]">VS</div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="text-sm font-semibold text-[var(--text-primary)] truncate text-right">{match.awayTeam.shortName}</span>
            <span className="text-xl"><Flag emoji={match.awayTeam.flag} size={24} /></span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[var(--text-muted)] text-[11px]">
          <Clock size={10} />
          <span suppressHydrationWarning>{formatDate(match.date)} · {formatTime(match.date)}</span>
        </div>
      </motion.div>
    </Link>
  );
}

// ── News Card ─────────────────────────────────────────────────────────────────
function NewsCard({ article }: { article: (typeof NEWS)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden cursor-pointer group"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={article.imageUrl || "/stadium-night.jpg"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--fifa-blue)] text-white rounded-md">
          {article.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug line-clamp-2 group-hover:text-[var(--fifa-gold)] transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-2 leading-relaxed">
          {article.summary}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[10px] text-[var(--text-muted)]">{article.source}</span>
          <span className="text-[10px] text-[var(--text-muted)]" suppressHydrationWarning>
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const upcomingMatches = MATCHES.filter(m => m.phase === "Group").slice(0, 6);

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/stadium-night.jpg" alt="Stadium" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-[var(--bg-primary)]" />
          {/* Animated orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--fifa-blue)]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[var(--fifa-gold)]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-gold)] bg-[var(--fifa-gold)]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--fifa-gold)] animate-ping-slow" />
            <span className="text-sm font-medium text-[var(--fifa-gold)] font-heading tracking-wide uppercase">
              The World's Greatest Tournament
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--text-primary)] leading-none mb-2">
              FIFA
            </h1>
            <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-gradient-gold mb-2 leading-none">
              WORLD CUP
            </div>
            <div className="font-display text-6xl sm:text-8xl lg:text-9xl font-black text-[var(--text-primary)] leading-none opacity-90">
              2026
            </div>
          </motion.div>

          {/* Host flags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 my-6"
          >
            {[
              { flag: "🇺🇸", name: "United States", color: "#bf0a30" },
              { flag: "🇨🇦", name: "Canada", color: "#ff0000" },
              { flag: "🇲🇽", name: "Mexico", color: "#006847" },
            ].map(({ flag, name, color }) => (
              <div key={name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)]">
                <span className="text-2xl"><Flag emoji={flag} size={32} /></span>
                <span className="text-xs font-medium text-[var(--text-secondary)] hidden sm:block">{name}</span>
              </div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10"
          >
            48 teams. 104 matches. 3 nations. 1 champion.
            <br />
            <span className="text-[var(--fifa-gold)]">United for the World.</span>
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-heading mb-4">
              Kickoff — June 11, 2026 · Estadio Azteca, Mexico City
            </p>
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link
              id="cta-schedule"
              href="/schedule"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--fifa-blue)] to-[var(--fifa-blue-light)] text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all glow-blue"
            >
              <Calendar size={16} /> View Schedule
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--border-glass)] flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--fifa-gold)]" />
          </div>
        </motion.div>
      </section>

      {/* ── KEY DATES ── */}
      <section className="py-16 max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            Tournament <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-[var(--text-secondary)]">Key dates for the 2026 World Cup</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { phase: "Opening Match", date: "11 June 2026", desc: "Mexico vs South Africa · Estadio Azteca" },
            { phase: "Group Stage", date: "11–27 June 2026", desc: "72 matches across 12 groups" },
            { phase: "Round of 32", date: "28 June – 3 July 2026", desc: "First knockout round" },
            { phase: "Round of 16", date: "4–7 July 2026", desc: "Knockout phase continues" },
            { phase: "Quarter-finals", date: "9–11 July 2026", desc: "The final eight teams" },
            { phase: "Semi-finals", date: "14–15 July 2026", desc: "Battle for the final" },
            { phase: "Third-place", date: "18 July 2026", desc: "Bronze medal match" },
            { phase: "The Final", date: "19 July 2026", desc: "MetLife Stadium, New York/New Jersey" },
          ].map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 border-l-4 border-l-[var(--fifa-gold)] hover:glow-gold transition-all"
            >
              <div className="text-xs text-[var(--fifa-gold)] font-bold uppercase tracking-wider mb-1">{item.phase}</div>
              <div className="font-display text-lg font-bold text-[var(--text-primary)] mb-1">{item.date}</div>
              <div className="text-sm text-[var(--text-secondary)]">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-12 border-y border-[var(--border-glass)] bg-[var(--bg-secondary)]/40">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Participating Nations", value: 48, icon: Users, suffix: "" },
              { label: "Total Matches", value: 104, icon: Calendar, suffix: "" },
              { label: "Host Stadiums", value: 16, icon: MapPin, suffix: "" },
              { label: "Days of Football", value: 39, icon: Trophy, suffix: "" },
            ].map(({ label, value, icon: Icon, suffix }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card hover:glow-blue transition-all"
              >
                <Icon size={24} className="text-[var(--fifa-gold)] mx-auto mb-3" />
                <div className="font-display text-4xl font-black text-gradient-gold">
                  <AnimatedCounter to={value} suffix={suffix} />
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2 font-heading uppercase tracking-wider">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOST COUNTRIES ── */}
      <section className="py-20 max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            Host <span className="text-gradient-gold">Countries</span>
          </h2>
          <p className="text-[var(--text-secondary)]">Three nations. One epic stage.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              flag: "🇺🇸", name: "United States", stadiums: 11, color: "#bf0a30",
              bg: "from-red-900/30 to-blue-900/30",
              border: "border-red-500/30",
              description: "The tournament's primary host with 11 world-class stadiums from coast to coast — MetLife, SoFi, AT&T Stadium and more.",
              image: "/host-countries.png",
            },
            {
              flag: "🇨🇦", name: "Canada", stadiums: 2, color: "#ff0000",
              bg: "from-red-900/30 to-red-800/10",
              border: "border-red-500/30",
              description: "British Columbia Place in Vancouver and BMO Field in Toronto host matches in Canada's first-ever World Cup.",
              image: "/host-countries.png",
            },
            {
              flag: "🇲🇽", name: "Mexico", stadiums: 3, color: "#006847",
              bg: "from-green-900/30 to-red-900/20",
              border: "border-green-500/30",
              description: "The legendary Estadio Azteca hosts the opener. Mexico becomes the first country to host three World Cups.",
              image: "/host-countries.png",
            },
          ].map(({ flag, name, stadiums, bg, border, description }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn("glass-card p-6 bg-gradient-to-br cursor-pointer border", bg, border)}
            >
              <div className="text-5xl mb-4"><Flag emoji={flag} size={32} /></div>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-1">{name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={12} className="text-[var(--fifa-gold)]" />
                <span className="text-sm text-[var(--fifa-gold)] font-semibold">{stadiums} Stadiums</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── QUICK NAV FEATURES ── */}
      <section className="py-20 max-w-screen-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-[var(--text-primary)] text-center mb-10"
        >
          Explore <span className="text-gradient-gold">Everything</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/groups", icon: BarChart3, label: "Group Standings", desc: "All 12 groups tracked" },
            { href: "/schedule", icon: Calendar, label: "Match Schedule", desc: "104 action-packed games" },
            { href: "/teams", icon: Users, label: "Team Pages", desc: "48 teams & full squads" },
            { href: "/bracket", icon: GitBranch, label: "Tournament Bracket", desc: "Predict the Knockouts" },
            { href: "/fantasy", icon: Trophy, label: "Fantasy XI", desc: "Build your dream team" },
            { href: "/polls", icon: TrendingUp, label: "Fan Polls", desc: "Vote for the winner" },
          ].map(({ href, icon: Icon, label, desc }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={href}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="p-5 bg-gradient-to-br from-[#fadc66] to-[#e8b525] border border-[#d49e15] rounded-2xl h-full cursor-pointer shadow-xl shadow-[#e8b525]/20 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-[#003da5]/10 rounded-xl group-hover:bg-[#003da5] transition-colors duration-300 shadow-sm border border-[#003da5]/20">
                      <Icon size={24} className="text-[#003da5] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-[#002870] text-base mb-0.5 drop-shadow-sm">{label}</h3>
                  <p className="text-xs text-[#003da5]/80 font-bold">{desc}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HALL OF CHAMPIONS ── */}
      <section className="py-20 bg-black/40 border-y border-[var(--border-glass)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/wc2026-trophy.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
              Hall of <span className="text-gradient-gold">Champions</span>
            </h2>
            <p className="text-[var(--text-secondary)]">All-time World Cup Winners (1930 – Present)</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { country: "Brazil", count: 5, years: "1958, 1962, 1970, 1994, 2002", flag: "🇧🇷" },
              { country: "Germany", count: 4, years: "1954, 1974, 1990, 2014", flag: "🇩🇪" },
              { country: "Italy", count: 4, years: "1934, 1938, 1982, 2006", flag: "🇮🇹" },
              { country: "Argentina", count: 3, years: "1978, 1986, 2022", flag: "🇦🇷" },
              { country: "France", count: 2, years: "1998, 2018", flag: "🇫🇷" },
              { country: "Uruguay", count: 2, years: "1930, 1950", flag: "🇺🇾" },
              { country: "England", count: 1, years: "1966", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
              { country: "Spain", count: 1, years: "2010", flag: "🇪🇸" },
            ].map((winner, i) => (
              <motion.div
                key={winner.country}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-gold p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-3"><Flag emoji={winner.flag} size={32} /></div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{winner.country}</h3>
                <div className="text-[var(--fifa-gold)] font-bold text-sm my-2 flex items-center gap-1">
                  <Trophy size={14} /> {winner.count}× Winner{winner.count > 1 ? "s" : ""}
                </div>
                <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {winner.years}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING MATCHES ── */}
      <section className="py-20 bg-[var(--bg-secondary)]/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                Opening <span className="text-gradient-gold">Matches</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mt-1">Group stage fixtures · June 2026</p>
            </motion.div>
            <Link
              href="/schedule"
              className="flex items-center gap-1.5 text-sm text-[var(--fifa-gold)] hover:gap-2.5 transition-all font-medium"
            >
              Full Schedule <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingMatches.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <QuickMatchCard match={match} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 bg-[var(--bg-secondary)]/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                Latest <span className="text-gradient-gold">News</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mt-1">World Cup 2026 updates</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEWS.slice(0, 8).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TROPHY BANNER ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/stadium-fans.jpg" alt="Fans" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-4"
            >
              Who Will Lift the{" "}
              <span className="text-gradient-gold">Trophy?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text-secondary)] text-lg mb-8"
            >
              Make your predictions, build your fantasy team, and vote in fan polls. Be part of the biggest sporting event on the planet.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/fantasy" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--fifa-blue)] to-[var(--fifa-blue-light)] text-white text-lg font-bold hover:opacity-90 transition-opacity glow-blue shadow-lg">
                <Trophy size={20} /> Build Fantasy XI
              </Link>
              <Link href="/polls" className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--fifa-gold)] text-[var(--fifa-gold)] text-lg font-bold hover:bg-[var(--fifa-gold)] hover:text-black transition-all shadow-lg shadow-[var(--fifa-gold)]/20">
                Pick the Winner
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="animate-float"
          >
            <Image src="/wc2026-trophy.jpg" alt="World Cup Trophy" width={300} height={400} className="rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
