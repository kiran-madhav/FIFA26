"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Trophy, Target, Users, Clock, Award, Star, Zap } from "lucide-react";

/* ── Fade-in wrapper ── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section Title ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl text-white text-center mb-8 tracking-wide">
      <span className="text-gradient-gold">{children}</span>
    </h2>
  );
}

/* ── Video Placeholder ── */
function VideoPlaceholder({ id, label }: { id: string; label: string }) {
  return (
    <div
      id={id}
      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--fifa-gold)]/20 bg-[var(--bg-secondary)] flex flex-col items-center justify-center gap-4 group"
      style={{ background: "linear-gradient(145deg, rgba(12,20,40,0.9) 0%, rgba(8,14,28,1) 100%)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(250,220,102,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,220,102,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full border-2 border-[var(--fifa-gold)]/40 flex items-center justify-center bg-[var(--fifa-gold)]/5 group-hover:border-[var(--fifa-gold)]/70 group-hover:bg-[var(--fifa-gold)]/10 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--fifa-gold)]/70 translate-x-0.5">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <p className="text-white/40 text-sm font-medium">{label}</p>
        <p className="text-white/25 text-xs">Video will be added soon</p>
      </div>
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--fifa-gold)]/30 rounded-tl" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[var(--fifa-gold)]/30 rounded-tr" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[var(--fifa-gold)]/30 rounded-bl" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--fifa-gold)]/30 rounded-br" />
    </div>
  );
}

/* ── Stat Card ── */
function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon?: React.ElementType }) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] hover:border-[var(--fifa-gold)]/30 transition-all duration-300">
      {Icon && <Icon size={16} className="text-[var(--fifa-gold)]/70 mb-1" />}
      <span className="font-display text-xl sm:text-2xl text-white">{value}</span>
      <span className="text-[var(--text-muted)] text-xs text-center">{label}</span>
    </div>
  );
}

/* ── Award Card ── */
function AwardCard({ title, winner, description, icon: Icon }: { title: string; winner: string; description?: string; icon?: React.ElementType }) {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-glass)] hover:border-[var(--fifa-gold)]/40 hover:shadow-[0_4px_24px_rgba(250,220,102,0.08)] transition-all duration-300">
      <div className="flex items-center gap-2 mb-1">
        {Icon && <Icon size={15} className="text-[var(--fifa-gold)]" />}
        <span className="text-[var(--fifa-gold)] text-xs font-semibold tracking-widest uppercase">{title}</span>
      </div>
      <p className="font-display text-base text-white">{winner}</p>
      {description && <p className="text-[var(--text-muted)] text-xs leading-relaxed">{description}</p>}
    </div>
  );
}

/* ── Timeline Step ── */
function TimelineStep({ icon: Icon, label, time, isLast = false }: { icon: React.ElementType; label: string; time?: string; isLast?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--fifa-gold)]/40 flex items-center justify-center shadow-[0_0_12px_rgba(250,220,102,0.12)]">
          <Icon size={16} className="text-[var(--fifa-gold)]" />
        </div>
        <div className="mt-2 text-center">
          <p className="text-white text-xs font-semibold">{label}</p>
          {time && <p className="text-[var(--text-muted)] text-[10px] mt-0.5">{time}</p>}
        </div>
      </div>
      {!isLast && <div className="w-px h-10 bg-gradient-to-b from-[var(--fifa-gold)]/30 to-transparent mt-3" />}
    </div>
  );
}

/* ── Gallery Placeholder ── */
function GalleryCard({ index }: { index: number }) {
  const heights = ["aspect-square", "aspect-[4/5]", "aspect-video", "aspect-square", "aspect-[3/4]", "aspect-square"];
  return (
    <div
      className={`${heights[index % heights.length]} rounded-xl overflow-hidden border border-[var(--border-glass)] bg-[var(--bg-secondary)] flex items-center justify-center relative group cursor-pointer hover:border-[var(--fifa-gold)]/40 hover:scale-[1.02] transition-all duration-300`}
      style={{ background: `linear-gradient(${135 + index * 30}deg, rgba(12,20,40,0.9) 0%, rgba(8,14,28,1) 100%)` }}
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(rgba(250,220,102,0.4) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-[var(--fifa-gold)]/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--fifa-gold)]/50">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <p className="text-white/25 text-[10px]">Photo {index + 1}</p>
      </div>
    </div>
  );
}

/* ── YouTube Facade ── */
function YouTubeFacade({ videoId, title, thumbnail }: { videoId: string; title: string; thumbnail: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-video rounded-2xl overflow-hidden border border-[var(--fifa-gold)]/20 bg-[var(--bg-secondary)] shadow-[0_0_30px_rgba(250,220,102,0.1)]"
      />
    );
  }

  return (
    <div 
      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--fifa-gold)]/20 bg-[var(--bg-secondary)] shadow-[0_0_30px_rgba(250,220,102,0.1)] cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={`/images/${encodeURIComponent(thumbnail)}`} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--fifa-gold)]/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(250,220,102,0.4)] group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--bg-base)] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */
export default function FinalExperiencePage() {
  useEffect(() => {
    document.title = "Final Experience | FIFA World Cup 2026";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #fadc66 0%, transparent 70%)" }} />
        </div>

        {/* Back link */}
        <div className="absolute top-8 left-4 sm:left-8 z-10">
          <Link href="/" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white text-sm transition-colors duration-200">
            <ArrowLeft size={15} />
            Back
          </Link>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">

          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-xs sm:text-sm tracking-[0.35em] uppercase"
          >
            FIFA World Cup 2026 · Final
          </motion.p>

          {/* Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-5 sm:gap-8"
          >
            {/* Spain */}
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1f8.svg"
                alt="Spain"
                className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md"
                draggable={false}
              />
              <span className="font-display text-lg sm:text-2xl text-white tracking-wider">Spain</span>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-5xl sm:text-7xl text-gradient-gold leading-none tracking-tight">1–0</span>
              <span className="text-[var(--text-muted)] text-[10px] tracking-widest uppercase">AET</span>
            </div>

            {/* Argentina */}
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e6-1f1f7.svg"
                alt="Argentina"
                className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md opacity-70"
                draggable={false}
              />
              <span className="font-display text-lg sm:text-2xl text-white/60 tracking-wider">Argentina</span>
            </div>
          </motion.div>

          {/* Champion banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[var(--text-muted)] text-xs tracking-[0.3em] uppercase">World Champions</span>
            <div className="px-8 py-3 rounded-full border border-[var(--fifa-gold)]/40 bg-[var(--fifa-gold)]/5 shadow-[0_0_24px_rgba(250,220,102,0.12)]">
              <span className="font-display text-2xl sm:text-4xl text-gradient-gold tracking-widest">SPAIN</span>
            </div>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 sm:gap-6 text-[var(--text-muted)] text-xs"
          >
            <span className="flex items-center gap-1.5"><Clock size={12} /> July 19, 2026</span>
            <span className="w-px h-3 bg-[var(--border-glass)]" />
            <span className="flex items-center gap-1.5"><Trophy size={12} /> MetLife Stadium</span>
          </motion.div>


        </div>
      </section>

      {/* ─────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">

        {/* ── SECTION 1: MATCH HIGHLIGHTS ── */}
        <FadeIn>
          <section id="match-highlights">
            <SectionTitle>Match Highlights</SectionTitle>

            <YouTubeFacade 
              videoId="6HaHNYjnghE" 
              title="Final Match Highlights" 
              thumbnail="Match Highlights.jpg" 
            />

            {/* Match Summary */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Final Score" value="1 – 0" icon={Target} />
              <StatCard label="Goal Scorer" value="Ferran Torres 106'" icon={Zap} />
              <StatCard label="Man of the Match" value="Ferran Torres" icon={Star} />
              <StatCard label="Attendance" value="80,000" icon={Users} />
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
              <StatCard label="Possession (ESP)" value="68%" />
              <StatCard label="Shots (ESP)" value="20" />
              <StatCard label="On Target (ESP)" value="11" />
              <StatCard label="Pass Acc. (ESP)" value="90%" />
              <StatCard label="Passes (ESP)" value="803" />
              
              <StatCard label="Possession (ARG)" value="32%" />
              <StatCard label="Shots (ARG)" value="3" />
              <StatCard label="On Target (ARG)" value="0" />
              <StatCard label="Pass Acc. (ARG)" value="78%" />
              <StatCard label="Passes (ARG)" value="445" />
            </div>
          </section>
        </FadeIn>

        {/* ── SECTION 2: HALF-TIME SHOW ── */}
        <FadeIn>
          <section id="halftime-show">
            <SectionTitle>Half-Time Show</SectionTitle>
            <YouTubeFacade 
              videoId="B7hIiaXBpco" 
              title="Half-Time Show" 
              thumbnail="Half-Time Show.jpg" 
            />
            <p className="text-center text-[var(--text-muted)] text-sm mt-4 max-w-lg mx-auto leading-relaxed">
              A spectacular live performance marked the midpoint of the 2026 FIFA World Cup Final, 
              captivating fans inside MetLife Stadium and millions watching worldwide.
            </p>
          </section>
        </FadeIn>

        {/* ── SECTION 3: TROPHY CEREMONY ── */}
        <FadeIn>
          <section id="trophy-ceremony">
            {/* Gold glow wrapper */}
            <div className="relative rounded-3xl p-1 shadow-[0_0_60px_rgba(250,220,102,0.12)]" style={{
              background: "linear-gradient(135deg, rgba(250,220,102,0.08), transparent, rgba(250,220,102,0.08))"
            }}>
              <div className="rounded-[22px] p-6 sm:p-8" style={{ background: "var(--bg-card)" }}>
                <SectionTitle>World Champions Celebration</SectionTitle>
                <YouTubeFacade 
                  videoId="BRv3KW-NIQc" 
                  title="World Champions Celebration" 
                  thumbnail="World Champions Celebration.jpg" 
                />
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                  {["Medal Ceremony", "Trophy Lift", "Champions Celebration", "Fireworks", "Crowd Celebration"].map(item => (
                    <div key={item} className="px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--fifa-gold)]/15">
                      <span className="text-[var(--text-muted)] text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>



        {/* ── GALLERY ── */}
        <FadeIn>
          <section id="gallery">
            <SectionTitle>Gallery</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Champions.jpg", 
                "golden ball,clove young.jpg", 
                "golden boot.jpg"
              ].map((imgName, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/images/${encodeURIComponent(imgName)}`} 
                    alt={`Celebration ${i + 1}`}
                    className="w-full aspect-square object-cover rounded-xl border border-[var(--border-glass)] hover:border-[var(--fifa-gold)]/40 hover:scale-[1.02] transition-all duration-300" 
                  />
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── MATCH STATS + AWARDS ── */}
        <FadeIn>
          <section id="awards">
            <SectionTitle>Tournament Awards</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AwardCard
                title="Golden Ball"
                winner="Rodri — Spain"
                description="Best player of the tournament, orchestrating Spain's path to glory."
                icon={Star}
              />
              <AwardCard
                title="Golden Boot"
                winner="Kylian Mbappé — France"
                description="Top scorer of the 2026 FIFA World Cup."
                icon={Target}
              />
              <AwardCard
                title="Golden Glove"
                winner="Unai Simón — Spain"
                description="Best goalkeeper of the tournament."
                icon={Award}
              />
              <AwardCard
                title="Best Young Player"
                winner="Pau Cubarsí — Spain"
                description="Outstanding performance from the tournament's youngest star."
                icon={Zap}
              />
              <AwardCard
                title="Fair Play Award"
                winner="Netherlands"
                description="Awarded for the best sporting conduct during the tournament."
                icon={Trophy}
              />
              <AwardCard
                title="Best Goal"
                winner="Sidny Lopes Cabral — Cape Verde"
                description="Awarded for the most spectacular goal of the tournament."
                icon={Star}
              />
            </div>
          </section>
        </FadeIn>

        {/* ── BOTTOM CTA ── */}
        <FadeIn>
          <div className="text-center space-y-4">
            <p className="text-[var(--text-muted)] text-sm">Continue exploring</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/bracket" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-glass)] text-[var(--text-secondary)] text-sm hover:border-[var(--fifa-gold)]/40 hover:text-white transition-all duration-200">
                <Trophy size={14} /> Full Bracket
              </Link>
              <Link href="/schedule" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-glass)] text-[var(--text-secondary)] text-sm hover:border-[var(--fifa-gold)]/40 hover:text-white transition-all duration-200">
                <Clock size={14} /> All Results
              </Link>
              <Link href="/" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-glass)] text-[var(--text-secondary)] text-sm hover:border-[var(--fifa-gold)]/40 hover:text-white transition-all duration-200">
                <ArrowLeft size={14} /> Home
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
