"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Save, RefreshCw, Star } from "lucide-react";
import { useFantasyStore } from "@/lib/store";
import { TOP_PLAYERS } from "@/lib/data/news";
import { cn } from "@/lib/utils";
import { Flag } from "@/components/ui/Flag";

type Player = typeof TOP_PLAYERS[0];

const FORMATIONS: Record<string, { pos: string; x: number; y: number }[]> = {
  "4-3-3": [
    { pos: "GK", x: 50, y: 88 },
    { pos: "RB", x: 78, y: 72 }, { pos: "CB", x: 62, y: 75 }, { pos: "CB", x: 38, y: 75 }, { pos: "LB", x: 22, y: 72 },
    { pos: "CM", x: 70, y: 52 }, { pos: "CM", x: 50, y: 50 }, { pos: "CM", x: 30, y: 52 },
    { pos: "RW", x: 78, y: 28 }, { pos: "ST", x: 50, y: 20 }, { pos: "LW", x: 22, y: 28 },
  ],
  "4-4-2": [
    { pos: "GK", x: 50, y: 88 },
    { pos: "RB", x: 78, y: 72 }, { pos: "CB", x: 62, y: 75 }, { pos: "CB", x: 38, y: 75 }, { pos: "LB", x: 22, y: 72 },
    { pos: "RM", x: 78, y: 52 }, { pos: "CM", x: 62, y: 52 }, { pos: "CM", x: 38, y: 52 }, { pos: "LM", x: 22, y: 52 },
    { pos: "ST", x: 62, y: 22 }, { pos: "ST", x: 38, y: 22 },
  ],
  "3-5-2": [
    { pos: "GK", x: 50, y: 88 },
    { pos: "CB", x: 70, y: 74 }, { pos: "CB", x: 50, y: 76 }, { pos: "CB", x: 30, y: 74 },
    { pos: "RWB", x: 82, y: 55 }, { pos: "CM", x: 65, y: 52 }, { pos: "CDM", x: 50, y: 54 }, { pos: "CM", x: 35, y: 52 }, { pos: "LWB", x: 18, y: 55 },
    { pos: "ST", x: 62, y: 22 }, { pos: "ST", x: 38, y: 22 },
  ],
};

const POS_COLOR: Record<string, string> = {
  GK: "#f59e0b", CB: "#3b82f6", RB: "#3b82f6", LB: "#3b82f6",
  CM: "#22c55e", CDM: "#22c55e", RM: "#22c55e", LM: "#22c55e",
  RW: "#ef4444", LW: "#ef4444", ST: "#ef4444", CF: "#ef4444",
  RWB: "#8b5cf6", LWB: "#8b5cf6", CAM: "#a855f7",
};

export default function FantasyPage() {
  const { squad, formation, usedBudget, totalBudget, setPlayer, setFormation, clearTeam } = useFantasyStore();
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [playerSearch, setPlayerSearch] = useState("");
  const [saved, setSaved] = useState(false);

  const positions = FORMATIONS[formation] ?? FORMATIONS["4-3-3"];
  const remaining = totalBudget - usedBudget;

  const availablePlayers = TOP_PLAYERS.filter((p) => {
    if (playerSearch && !p.name.toLowerCase().includes(playerSearch.toLowerCase())) return false;
    if (squad.some((s) => s && s.id === p.id)) return false;
    return true;
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
          >
            Fantasy <span className="text-gradient-gold">XI</span>
          </motion.h1>
          <p className="text-[var(--text-secondary)]">Build your dream World Cup team</p>
        </div>

        {/* Budget Bar */}
        <div className="max-w-md mx-auto mb-8 glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--text-secondary)]">Budget Used</span>
            <span className={cn("font-bold text-sm", remaining < 10 ? "text-red-400" : "text-[var(--fifa-gold)]")}>
              {usedBudget.toFixed(1)} / {totalBudget}M
            </span>
          </div>
          <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${(usedBudget / totalBudget) * 100}%` }}
              className={cn("h-full rounded-full transition-all", usedBudget > totalBudget * 0.9 ? "bg-red-500" : "bg-gradient-to-r from-[var(--fifa-blue)] to-[var(--fifa-gold)]")}
            />
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1 text-right">
            £{remaining.toFixed(1)}M remaining
          </div>
        </div>

        {/* Formation Selector */}
        <div className="flex gap-3 justify-center mb-6 flex-wrap">
          {Object.keys(FORMATIONS).map((f) => (
            <button
              key={f}
              id={`formation-${f}`}
              onClick={() => { setFormation(f); clearTeam(); }}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium font-display transition-all",
                formation === f
                  ? "bg-[var(--fifa-blue)] text-white"
                  : "bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pitch */}
          <div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #1a5c2a 0%, #2d8c44 30%, #2d8c44 70%, #1a5c2a 100%)",
                height: 520,
              }}
            >
              {/* Pitch markings */}
              <div className="absolute inset-4 border border-white/20 rounded-sm" />
              <div className="absolute left-[10%] right-[10%] top-[35%] bottom-[35%] border border-white/15" />
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full" />
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />

              {/* Goal boxes */}
              <div className="absolute left-[30%] right-[30%] top-3 h-10 border border-white/20" />
              <div className="absolute left-[30%] right-[30%] bottom-3 h-10 border border-white/20" />

              {/* Players */}
              {positions.map((pos, slot) => {
                const player = squad[slot];
                return (
                  <motion.button
                    key={slot}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    id={`pitch-slot-${slot}`}
                    onClick={() => setSelectedSlot(selectedSlot === slot ? null : slot)}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1",
                      selectedSlot === slot && "z-10"
                    )}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shadow-lg transition-all",
                        player ? "border-white text-white" : "border-white/40 text-white/60 border-dashed",
                        selectedSlot === slot && "ring-2 ring-[var(--fifa-gold)]"
                      )}
                      style={{ background: player ? POS_COLOR[pos.pos] ?? "#3b82f6" : "rgba(0,0,0,0.4)" }}
                    >
                      {player ? <Flag emoji={player.flag} size={16} /> : pos.pos}
                    </div>
                    <div className="text-white text-[9px] font-semibold whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded">
                      {player ? player.name.split(" ").pop()! : "Empty"}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex gap-3 mt-4 justify-center">
              <button
                id="save-fantasy-team"
                onClick={handleSave}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                  saved ? "bg-green-500 text-white" : "bg-[var(--fifa-blue)] text-white hover:opacity-90"
                )}
              >
                {saved ? <Star size={15} className="fill-white" /> : <Save size={15} />}
                {saved ? "Saved!" : "Save Team"}
              </button>
              <button
                id="clear-fantasy-team"
                onClick={clearTeam}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-red-400 hover:border-red-400/30 transition-all"
              >
                <Trash2 size={15} /> Clear
              </button>
            </div>
          </div>

          {/* Player Picker */}
          <div className="glass-card p-4 overflow-hidden flex flex-col">
            {selectedSlot !== null ? (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">
                      Select Player — Slot {selectedSlot + 1}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">Position: {positions[selectedSlot]?.pos}</div>
                  </div>
                  <button
                    id="clear-slot-btn"
                    onClick={() => { setPlayer(selectedSlot, null); setSelectedSlot(null); }}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    Clear slot
                  </button>
                </div>

                <input
                  id="player-search-input"
                  type="text"
                  placeholder="Search player..."
                  value={playerSearch}
                  onChange={(e) => setPlayerSearch(e.target.value)}
                  className="w-full px-3 py-2 mb-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--fifa-blue)]"
                />

                <div className="overflow-y-auto space-y-2 flex-1 max-h-80">
                  <AnimatePresence>
                    {availablePlayers.map((p, i) => (
                      <motion.button
                        key={p.id}
                        id={`pick-player-${p.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => {
                          if (p.price > remaining + (squad[selectedSlot]?.price ?? 0)) return;
                          setPlayer(selectedSlot, { ...p, teamId: p.id, teamName: p.team });
                          setSelectedSlot(null);
                          setPlayerSearch("");
                        }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors text-left"
                      >
                        <div className="w-8 flex-shrink-0 flex justify-center">
                          <Flag emoji={p.flag} size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-[var(--text-primary)] truncate">{p.name}</div>
                          <div className="text-xs text-[var(--text-muted)]">{p.position} · {p.club}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-bold text-[var(--fifa-gold)]">£{p.price}M</div>
                          <div className="text-[10px] text-[var(--text-muted)]">Form {p.form}</div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                  {availablePlayers.length === 0 && (
                    <div className="text-center py-6 text-[var(--text-muted)] text-sm">No players found</div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-8">
                <Star size={40} className="text-[var(--fifa-gold)] opacity-40" />
                <p className="text-[var(--text-secondary)] text-sm">Click a position on the pitch<br />to select a player</p>
                <div className="mt-4 space-y-2 w-full">
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Your XI</div>
                  {positions.map((pos, slot) => {
                    const p = squad[slot];
                    return (
                      <div key={slot} className="flex items-center gap-2 text-sm">
                        <span className="text-[10px] text-[var(--text-muted)] w-8">{pos.pos}</span>
                        <span className={cn("flex-1 flex items-center gap-2", p ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] italic")}>
                          {p ? <><Flag emoji={p.flag} size={14} /> {p.name}</> : "— Empty —"}
                        </span>
                        {p && <span className="text-xs text-[var(--fifa-gold)]">£{p.price}M</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
