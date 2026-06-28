"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBracketStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Trophy, Lock, Map, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TEAMS } from "@/lib/data/teams";

function FlagEmoji({ emoji, className }: { emoji: string; className?: string }) {
  if (!emoji) return null;
  const emojiHex = Array.from(emoji)
    .map(c => c.codePointAt(0)?.toString(16))
    .filter(Boolean)
    .join('-');
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img 
      src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${emojiHex}.svg`} 
      alt="flag"
      className={cn("inline-block w-[1em] h-[1em]", className)}
      draggable={false}
      style={{ minWidth: '1em', minHeight: '1em' }}
    />
  );
}

const LEFT_R32 = [
  ["Germany", "Paraguay", "M1"],
  ["France", "Sweden", "M2"],
  ["South Africa", "Canada", "M3"],
  ["Netherlands", "Morocco", "M4"],
  ["Portugal", "Croatia", "M5"],
  ["Spain", "Austria", "M6"],
  ["United States", "Bosnia and Herzegovina", "M7"],
  ["Belgium", "Senegal", "M8"],
];

const RIGHT_R32 = [
  ["Brazil", "Japan", "M9"],
  ["Côte d'Ivoire", "Norway", "M10"],
  ["Mexico", "Ecuador", "M11"],
  ["England", "DR Congo", "M12"],
  ["Argentina", "Cape Verde", "M13"],
  ["Australia", "Egypt", "M14"],
  ["Switzerland", "Algeria", "M15"],
  ["Colombia", "Ghana", "M16"],
];

function MatchNode({ matchId, topLabel, bottomLabel, onSelect, picks, isLeft, roundIdx }: any) {
  // Determine who won this match
  const winner = picks[matchId];
  
  // Calculate relative sizes to draw connector lines
  // We'll use simple CSS borders for the bracket tree
  const matchStr = matchId.match(/\d+$/);
  const matchNum = matchStr ? parseInt(matchStr[0], 10) : 1;
  const isTopMatch = matchNum % 2 !== 0;

  const topFlag = TEAMS.find(t => t.name === topLabel)?.flag || "";
  const bottomFlag = TEAMS.find(t => t.name === bottomLabel)?.flag || "";

  return (
    <div className="relative flex items-center my-2 group">
      <div className={cn(
        "flex flex-col border rounded-xl bg-[var(--bg-card)] shadow-lg overflow-hidden w-32 sm:w-40 xl:w-44 flex-shrink-0 relative z-10 transition-all duration-300",
        winner ? "border-[var(--fifa-gold)] shadow-[0_0_15px_rgba(250,220,102,0.15)] scale-[1.01]" : "border-[var(--border-glass)] hover:border-[var(--border-glass)]/60 hover:scale-[1.01] hover:shadow-xl"
      )}>
        <button 
          onClick={() => onSelect(matchId, topLabel)}
          className={cn(
            "px-4 py-2 text-[10px] sm:text-xs font-black text-left border-b border-[var(--border-glass)] transition-colors flex items-center gap-3 cursor-pointer",
            winner === topLabel 
              ? "bg-[var(--fifa-gold)]/5 text-[var(--fifa-gold)]" 
              : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
          )}
        >
          {topFlag && <FlagEmoji emoji={topFlag} className="text-xl drop-shadow-sm" />}
          <span className={cn("truncate", !topLabel || topLabel === "TBD" ? "text-[var(--text-muted)]/40 font-normal" : "")}>{topLabel || "TBD"}</span>
        </button>
        <button 
          onClick={() => onSelect(matchId, bottomLabel)}
          className={cn(
            "px-4 py-2 text-[10px] sm:text-xs font-black text-left transition-colors flex items-center gap-3 cursor-pointer",
            winner === bottomLabel 
              ? "bg-[var(--fifa-gold)]/5 text-[var(--fifa-gold)]" 
              : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
          )}
        >
          {bottomFlag && <FlagEmoji emoji={bottomFlag} className="text-xl drop-shadow-sm" />}
          <span className={cn("truncate", !bottomLabel || bottomLabel === "TBD" ? "text-[var(--text-muted)]/40 font-normal" : "")}>{bottomLabel || "TBD"}</span>
        </button>
      </div>

      {/* Bracket Connector Lines */}
      {roundIdx < 4 && (
        <div className={cn(
          "absolute w-8 sm:w-12 border-2 border-[var(--border-glass)]/90 pointer-events-none",
          isLeft ? "-right-8 sm:-right-12" : "-left-8 sm:-left-12",
          isTopMatch ? "border-t border-r rounded-tr-xl h-[50%]" : "border-b border-r rounded-br-xl h-[50%] -top-[50%]"
        )}
        style={{
          height: `calc(100% + ${Math.pow(2, roundIdx) * 16}px)`,
          top: isTopMatch ? "50%" : `calc(-50% - ${Math.pow(2, roundIdx) * 16}px)`,
          transform: isLeft ? "none" : "scaleX(-1)"
        }}
        />
      )}
    </div>
  );
}

export default function BracketPage() {
  const { picks, setPick, clearPicks } = useBracketStore();
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    // Round of 32 unlocks on June 28, 2026
    const UNLOCK_DATE = new Date("2026-06-28T00:00:00Z").getTime();
    const checkLock = () => {
      // Simulate real time checking (for testing purposes, we use Date.now())
      if (Date.now() >= UNLOCK_DATE) {
        setIsLocked(false);
      } else {
        setIsLocked(true);
      }
    };
    checkLock();
    const interval = setInterval(checkLock, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (matchId: string, team: string) => {
    if (isLocked) return;
    if (!team || team === "TBD") return;
    setPick(matchId, team);
  };

  // Derived states for next rounds
  // Left side
  const lR16 = Array.from({ length: 4 }).map((_, i) => ({
    id: `L_R16_${i+1}`,
    top: picks[LEFT_R32[i*2][2]],
    bottom: picks[LEFT_R32[i*2+1][2]],
  }));
  const lQF = Array.from({ length: 2 }).map((_, i) => ({
    id: `L_QF_${i+1}`,
    top: picks[`L_R16_${i*2+1}`],
    bottom: picks[`L_R16_${i*2+2}`],
  }));
  const lSF = [{ id: "L_SF_1", top: picks["L_QF_1"], bottom: picks["L_QF_2"] }];

  // Right side
  const rR16 = Array.from({ length: 4 }).map((_, i) => ({
    id: `R_R16_${i+1}`,
    top: picks[RIGHT_R32[i*2][2]],
    bottom: picks[RIGHT_R32[i*2+1][2]],
  }));
  const rQF = Array.from({ length: 2 }).map((_, i) => ({
    id: `R_QF_${i+1}`,
    top: picks[`R_R16_${i*2+1}`],
    bottom: picks[`R_R16_${i*2+2}`],
  }));
  const rSF = [{ id: "R_SF_1", top: picks["R_QF_1"], bottom: picks["R_QF_2"] }];

  const finalTop = picks["L_SF_1"];
  const finalBottom = picks["R_SF_1"];
  const champion = picks["FINAL"];

  const finalTopFlag = TEAMS.find(t => t.name === finalTop)?.flag || "";
  const finalBottomFlag = TEAMS.find(t => t.name === finalBottom)?.flag || "";

  // Derive Bronze Match participants
  const leftSFLoser = finalTop ? (finalTop === lSF[0].top ? lSF[0].bottom : lSF[0].top) : null;
  const rightSFLoser = finalBottom ? (finalBottom === rSF[0].top ? rSF[0].bottom : rSF[0].top) : null;
  const bronzeWinner = picks["BRONZE"];

  const leftSFLoserFlag = TEAMS.find(t => t.name === leftSFLoser)?.flag || "";
  const rightSFLoserFlag = TEAMS.find(t => t.name === rightSFLoser)?.flag || "";

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-primary)]">
      
      {/* Background styling matching the dark premium vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--fifa-gold)]/5 via-[var(--bg-primary)] to-[var(--bg-primary)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--fifa-gold)]/5 via-[var(--bg-primary)] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20 mt-8 relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter text-gradient-gold drop-shadow-xl flex items-center justify-center gap-3">
            <Map className="text-[var(--fifa-gold)] hidden sm:block" size={24} />
            Round of 32 Bracket
          </h1>
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <p className="text-[var(--text-primary)] font-bold text-lg">
              Predict the path to glory!
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 glass-card-gold rounded-full p-2.5 sm:px-10 shadow-xl border border-[var(--fifa-gold)]/20 bg-[var(--bg-card)]/60">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--fifa-gold)] text-black font-black text-sm">1</span>
              <p className="text-sm font-medium text-[var(--text-secondary)]">Click on the team you think will win each match</p>
              <span className="hidden sm:block text-[var(--border-glass)]/50">|</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--fifa-gold)] text-black font-black text-sm">2</span>
              <p className="text-sm font-medium text-[var(--text-secondary)]">Advance them all the way to the Final!</p>
            </div>
          </div>
        </div>

        {/* BRACKET WRAPPER (Scrollable horizontally on mobile) */}
        <div className="relative glass-card rounded-3xl p-4 sm:p-8 overflow-x-auto pb-12 shadow-2xl scrollbar-thin scrollbar-thumb-[#CD7F32]/50 hover:scrollbar-thumb-[#CD7F32]/80 scrollbar-track-transparent">
          
          {/* Lock Overlay */}
          <AnimatePresence>
            {isLocked && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center rounded-3xl border border-[var(--border-glass)]"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-glass)] shadow-[0_0_50px_rgba(250,220,102,0.1)] flex items-center justify-center">
                  <Lock size={40} className="text-[var(--text-muted)]" />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">BRACKET LOCKED</h2>
                <p className="text-[var(--fifa-gold)] font-bold text-lg mb-6 flex items-center gap-2">
                  <Calendar size={18} /> Unlocks on June 28, 2026
                </p>
                <p className="text-[var(--text-muted)] text-sm max-w-md text-center">
                  The Round of 32 has not started yet. Check back here when the Group Stage finishes to make your predictions!
                </p>
                <Link href="/groups" className="mt-8 px-6 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm font-bold text-white hover:text-[var(--fifa-gold)] hover:border-[var(--fifa-gold)]/50 transition-all">
                  View Current Standings
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center min-w-[1200px] gap-4">
            
            {/* LEFT WING */}
            <div className="flex gap-8 sm:gap-12 flex-1 justify-start">
              {/* Col 1: R32 */}
              <div className="flex flex-col justify-between gap-2 py-4">
                {LEFT_R32.map((m, i) => (
                  <MatchNode key={m[2]} matchId={m[2]} topLabel={m[0]} bottomLabel={m[1]} onSelect={handleSelect} picks={picks} isLeft={true} roundIdx={0} />
                ))}
              </div>
              {/* Col 2: R16 */}
              <div className="flex flex-col justify-around py-12">
                {lR16.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={true} roundIdx={1} />
                ))}
              </div>
              {/* Col 3: QF */}
              <div className="flex flex-col justify-around py-32">
                {lQF.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={true} roundIdx={2} />
                ))}
              </div>
              {/* Col 4: SF */}
              <div className="flex flex-col justify-around py-64">
                {lSF.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={true} roundIdx={3} />
                ))}
              </div>
            </div>

            {/* CENTER (Finals & Trophy) */}
            <div className="flex flex-col items-center justify-center min-w-[200px] px-8 relative">
              <h3 className="font-display text-2xl font-black text-white tracking-widest uppercase mb-12 absolute top-0 text-center w-full">
                World Champions
              </h3>
              
              {/* Trophy Glow */}
              <div className="relative w-48 h-64 flex flex-col items-center justify-center mb-16">
                <div className="absolute inset-0 bg-[var(--fifa-gold)]/40 blur-[100px] rounded-full" />
                {champion ? (
                  <div className="relative z-10 flex flex-col items-center gap-6 mt-4">
                    <div className="relative h-[160px] w-[140px]">
                      <Image 
                        src="/logo.png"
                        alt="FIFA World Cup Trophy"
                        fill
                        className="object-contain drop-shadow-[0_0_20px_rgba(250,220,102,0.6)]"
                        priority
                      />
                    </div>
                    <span className="text-2xl font-black text-white uppercase tracking-widest">{champion}</span>
                  </div>
                ) : (
                  <div className="relative z-10 h-[160px] w-[140px] opacity-70 grayscale contrast-125 mb-4">
                    <Image 
                      src="/logo.png"
                      alt="FIFA World Cup Trophy Placeholder"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Final Match Node */}
              <div className="w-40 sm:w-48 z-10 mb-12">
                 <div className={cn(
                    "flex flex-col border-2 border-[var(--fifa-gold)] rounded-xl bg-[var(--bg-card)] shadow-[0_0_25px_rgba(250,220,102,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.01]",
                  )}>
                  <button 
                    onClick={() => handleSelect("FINAL", finalTop)}
                    className={cn(
                      "px-4 py-3 text-xs sm:text-sm font-black text-left border-b border-[var(--border-glass)] transition-colors flex items-center gap-4 cursor-pointer",
                      champion === finalTop && finalTop ? "bg-[var(--fifa-gold)]/5 text-[var(--fifa-gold)]" : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    )}
                  >
                    {finalTopFlag && <FlagEmoji emoji={finalTopFlag} className="text-2xl drop-shadow-sm" />}
                    <span className={cn("truncate", !finalTop || finalTop === "TBD" ? "text-[var(--text-muted)]/40 font-normal" : "")}>{finalTop || "TBD"}</span>
                  </button>
                  <button 
                    onClick={() => handleSelect("FINAL", finalBottom)}
                    className={cn(
                      "px-4 py-3 text-xs sm:text-sm font-black text-left transition-colors flex items-center gap-4 cursor-pointer",
                      champion === finalBottom && finalBottom ? "bg-[var(--fifa-gold)]/5 text-[var(--fifa-gold)]" : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    )}
                  >
                    {finalBottomFlag && <FlagEmoji emoji={finalBottomFlag} className="text-2xl drop-shadow-sm" />}
                    <span className={cn("truncate", !finalBottom || finalBottom === "TBD" ? "text-[var(--text-muted)]/40 font-normal" : "")}>{finalBottom || "TBD"}</span>
                  </button>
                </div>
              </div>

              {/* Bronze Match */}
              <div className="flex flex-col items-center mt-12">
                <span className="text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-4 mt-6">Third Place</span>
                <div className="w-24 sm:w-32">
                  <div className="flex flex-col border border-[#CD7F32]/30 rounded-xl bg-[var(--bg-card)] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#CD7F32]/60 hover:scale-[1.01]">
                    <button 
                      onClick={() => handleSelect("BRONZE", leftSFLoser || "")}
                      className={cn(
                        "px-3 py-2 text-[10px] sm:text-xs font-black text-left border-b border-[#CD7F32]/20 transition-colors flex items-center gap-3 cursor-pointer",
                        bronzeWinner === leftSFLoser && leftSFLoser ? "bg-[#CD7F32]/5 text-[#CD7F32]" : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                      )}
                    >
                      {leftSFLoserFlag && <FlagEmoji emoji={leftSFLoserFlag} className="text-xl drop-shadow-sm" />}
                      <span className={cn("truncate", !leftSFLoser ? "text-[var(--text-muted)]/40 font-normal" : "")}>{leftSFLoser || "Loser SF1"}</span>
                    </button>
                    <button 
                      onClick={() => handleSelect("BRONZE", rightSFLoser || "")}
                      className={cn(
                        "px-3 py-2 text-[10px] sm:text-xs font-black text-left transition-colors flex items-center gap-3 cursor-pointer",
                        bronzeWinner === rightSFLoser && rightSFLoser ? "bg-[#CD7F32]/5 text-[#CD7F32]" : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                      )}
                    >
                      {rightSFLoserFlag && <FlagEmoji emoji={rightSFLoserFlag} className="text-xl drop-shadow-sm" />}
                      <span className={cn("truncate", !rightSFLoser ? "text-[var(--text-muted)]/40 font-normal" : "")}>{rightSFLoser || "Loser SF2"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT WING */}
            <div className="flex gap-8 sm:gap-12 flex-1 justify-end flex-row-reverse">
              {/* Col 1: R32 */}
              <div className="flex flex-col justify-between gap-2 py-4">
                {RIGHT_R32.map((m, i) => (
                  <MatchNode key={m[2]} matchId={m[2]} topLabel={m[0]} bottomLabel={m[1]} onSelect={handleSelect} picks={picks} isLeft={false} roundIdx={0} />
                ))}
              </div>
              {/* Col 2: R16 */}
              <div className="flex flex-col justify-around py-12">
                {rR16.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={false} roundIdx={1} />
                ))}
              </div>
              {/* Col 3: QF */}
              <div className="flex flex-col justify-around py-32">
                {rQF.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={false} roundIdx={2} />
                ))}
              </div>
              {/* Col 4: SF */}
              <div className="flex flex-col justify-around py-64">
                {rSF.map((m, i) => (
                  <MatchNode key={m.id} matchId={m.id} topLabel={m.top} bottomLabel={m.bottom} onSelect={handleSelect} picks={picks} isLeft={false} roundIdx={3} />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
