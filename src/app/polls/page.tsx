"use client";
import { useState, useMemo, useEffect } from "react";
import fpPromise from "@fingerprintjs/fingerprintjs";
import { supabase } from "@/lib/supabase";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePollStore, useChampionStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { TEAMS } from "@/lib/data/teams";
import { Flag } from "@/components/ui/Flag";
import {
  CheckCircle2, Search, ChevronDown, ChevronUp,
  Users, Trophy, Flame, Shield, Star, AlertTriangle,
  Lock, RefreshCw, Target
} from "lucide-react";

// ─────────────────────────────────────────────
//  Risk system: picking an underdog = higher risk
// ─────────────────────────────────────────────
function getRisk(fifaRanking: number) {
  if (fifaRanking <= 5) return { level: 1, label: "Safe Pick", color: "#22c55e", icon: "🟢", stars: 1 };
  if (fifaRanking <= 15) return { level: 2, label: "Solid Bet", color: "#84cc16", icon: "🟡", stars: 2 };
  if (fifaRanking <= 30) return { level: 3, label: "Bold Pick", color: "#f59e0b", icon: "🟠", stars: 3 };
  if (fifaRanking <= 60) return { level: 4, label: "Dark Horse", color: "#ef4444", icon: "🔴", stars: 4 };
  return { level: 5, label: "Miracle Pick 🚀", color: "#a855f7", icon: "🟣", stars: 5 };
}

// ─────────────────────────────────────────────
//  Champion Predictor Component
// ─────────────────────────────────────────────
function ChampionPredictor() {
  const { prediction, setPrediction, clearPrediction, lockedAt } = useChampionStore();
  const [search, setSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("ALL");
  const [confirmTeam, setConfirmTeam] = useState<typeof TEAMS[0] | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const groups = ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

  const filteredTeams = useMemo(() => {
    return TEAMS.filter((t) => {
      const matchesSearch = search === "" ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.tla.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = selectedGroup === "ALL" || t.group === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [search, selectedGroup]);

  const predictedTeam = prediction ? TEAMS.find((t) => t.id === prediction.teamId) : null;
  const risk = predictedTeam ? getRisk(predictedTeam.fifaRanking ?? 99) : null;

  const handleConfirm = () => {
    if (!confirmTeam) return;
    setPrediction({ teamId: confirmTeam.id, stage: "Group Stage", timestamp: Date.now() });
    setConfirmTeam(null);
    setShowPicker(false);
  };

  return (
    <div className="relative">
      {/* Header Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--fifa-gold)]/20 to-[var(--fifa-gold)]/5 border border-[var(--fifa-gold)]/40">
          <Target size={13} className="text-[var(--fifa-gold)]" />
          <span className="text-xs font-bold text-[var(--fifa-gold)] uppercase tracking-wider">NEW · Risk Predictor</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
          <Lock size={11} /> Locked at Group Stage
        </div>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-1">
        Who Lifts the <span className="text-gradient-gold">Trophy? 🏆</span>
      </h2>
      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Predict from Group Stage — the riskier your pick, the bigger the glory if you're right!
      </p>

      {/* Risk Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { icon: "🟢", label: "Safe Pick", desc: "Top 5" },
          { icon: "🟡", label: "Solid Bet", desc: "Top 15" },
          { icon: "🟠", label: "Bold Pick", desc: "Top 30" },
          { icon: "🔴", label: "Dark Horse", desc: "Top 60" },
          { icon: "🟣", label: "Miracle", desc: "60+" },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-xs">
            <span>{r.icon}</span>
            <span className="text-[var(--text-secondary)] font-medium">{r.label}</span>
            <span className="text-[var(--text-muted)]">({r.desc})</span>
          </div>
        ))}
      </div>

      {/* Current Prediction Display */}
      {predictedTeam && risk ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 relative overflow-hidden rounded-2xl border-2 p-5"
          style={{ borderColor: risk.color + "60" }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at center, ${risk.color}, transparent 70%)` }} />

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Team */}
            <div className="flex items-center gap-4 flex-1">
              <div className="text-6xl"><Flag emoji={predictedTeam.flag} size={48} /></div>
              <div>
                <div className="font-display text-2xl font-black text-[var(--text-primary)]">
                  {predictedTeam.name}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Group {predictedTeam.group} · FIFA #{predictedTeam.fifaRanking}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame
                      key={i}
                      size={14}
                      className={i < risk.stars ? "text-[var(--fifa-gold)]" : "text-[var(--border-glass)]"}
                      fill={i < risk.stars ? "currentColor" : "none"}
                    />
                  ))}
                  <span className="text-xs font-bold ml-1" style={{ color: risk.color }}>
                    {risk.icon} {risk.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="glass-card p-3">
                <div className="text-lg font-black" style={{ color: risk.color }}>{risk.stars}/5</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Risk Level</div>
              </div>
              <div className="glass-card p-3">
                <div className="text-lg font-black text-[var(--fifa-gold)]">
                  {predictedTeam.worldCupWins}×
                </div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">WC Titles</div>
              </div>
            </div>
          </div>

          {/* Locked info + Change button */}
          <div className="relative mt-4 pt-3 border-t border-[var(--border-glass)] flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <Lock size={11} />
              Predicted during Group Stage ·{" "}
              {lockedAt ? new Date(lockedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "Just now"}
            </div>
            <div className="flex gap-2">
              <button
                id="change-prediction-btn"
                onClick={() => { clearPrediction(); setShowPicker(true); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--fifa-blue)]/40 transition-all"
              >
                <RefreshCw size={11} /> Change Pick
              </button>
            </div>
          </div>

          {/* Bold Pick achievement */}
          {risk.level >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mt-3 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
              style={{ background: risk.color + "15", border: `1px solid ${risk.color}30` }}
            >
              <AlertTriangle size={13} style={{ color: risk.color }} />
              <span style={{ color: risk.color }}>
                {risk.level === 4
                  ? "🔥 Bold! You're going against the favorites — respect the risk!"
                  : "🚀 MIRACLE PICK! If this happens, you're a football oracle!"}
              </span>
            </motion.div>
          )}
        </motion.div>
      ) : (
        /* No prediction yet — CTA */
        !showPicker && (
          <motion.button
            id="start-prediction-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setShowPicker(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mb-6 flex flex-col items-center justify-center gap-3 py-8 rounded-2xl border-2 border-dashed border-[var(--fifa-gold)]/40 bg-[var(--fifa-gold)]/5 hover:bg-[var(--fifa-gold)]/10 hover:border-[var(--fifa-gold)]/60 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--fifa-gold)]/15 flex items-center justify-center group-hover:bg-[var(--fifa-gold)]/25 transition-all">
              <Trophy size={28} className="text-[var(--fifa-gold)]" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-[var(--text-primary)]">Make Your Prediction</div>
              <div className="text-sm text-[var(--text-muted)]">Pick any team from all 48 nations</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--fifa-blue)] to-[var(--fifa-blue-light)] text-white text-sm font-semibold">
              Choose Your Champions →
            </div>
          </motion.button>
        )
      )}

      {/* Team Picker */}
      <AnimatePresence>
        {(showPicker || (!predictedTeam && !showPicker)) && !predictedTeam && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            {showPicker && (
              <div className="space-y-4">
                {/* Search + Group Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      id="champion-search"
                      type="text"
                      placeholder="Search team name or code (e.g. BRA, ARG)..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
                    />
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {groups.slice(0, 7).map((g) => (
                      <button
                        key={g}
                        id={`group-filter-${g}`}
                        onClick={() => setSelectedGroup(g)}
                        className={cn(
                          "px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                          selectedGroup === g
                            ? "bg-[var(--fifa-blue)] text-white"
                            : "bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        {g === "ALL" ? "All" : `Grp ${g}`}
                      </button>
                    ))}
                    {groups.slice(7).map((g) => (
                      <button
                        key={g}
                        id={`group-filter-${g}`}
                        onClick={() => setSelectedGroup(g)}
                        className={cn(
                          "px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                          selectedGroup === g
                            ? "bg-[var(--fifa-blue)] text-white"
                            : "bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        Grp {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Teams Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[420px] overflow-y-auto pr-1">
                  <AnimatePresence>
                    {filteredTeams.map((team, i) => {
                      const r = getRisk(team.fifaRanking ?? 99);
                      const isConfirming = confirmTeam?.id === team.id;
                      return (
                        <motion.button
                          key={team.id}
                          id={`pick-champion-${team.tla}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02 }}
                          onClick={() => setConfirmTeam(isConfirming ? null : team)}
                          className={cn(
                            "relative flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center",
                            isConfirming
                              ? "border-[var(--fifa-gold)] bg-[var(--fifa-gold)]/10 scale-105"
                              : "border-[var(--border-glass)] bg-[var(--bg-secondary)]/50 hover:border-[var(--fifa-blue)]/50 hover:bg-[var(--bg-secondary)]"
                          )}
                        >
                          {/* Risk dot */}
                          <div
                            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                            style={{ background: r.color }}
                            title={r.label}
                          />
                          <span className="text-3xl"><Flag emoji={team.flag} size={32} /></span>
                          <div>
                            <div className="text-xs font-bold text-[var(--text-primary)] leading-tight">{team.shortName}</div>
                            <div className="text-[10px] text-[var(--text-muted)]">Grp {team.group} · #{team.fifaRanking}</div>
                          </div>
                          {isConfirming && (
                            <div className="text-[10px] font-bold text-[var(--fifa-gold)]">{r.icon} {r.label}</div>
                          )}
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>
                  {filteredTeams.length === 0 && (
                    <div className="col-span-4 text-center py-8 text-[var(--text-muted)] text-sm">
                      No teams found for "{search}"
                    </div>
                  )}
                </div>

                {/* Confirm Banner */}
                <AnimatePresence>
                  {confirmTeam && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl border-2 border-[var(--fifa-gold)]/60 bg-[var(--fifa-gold)]/10"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-3xl"><Flag emoji={confirmTeam.flag} size={32} /></span>
                        <div>
                          <div className="font-bold text-[var(--text-primary)]">{confirmTeam.name}</div>
                          <div className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Flame
                                key={i}
                                size={11}
                                className={i < getRisk(confirmTeam.fifaRanking ?? 99).stars ? "text-[var(--fifa-gold)]" : "text-[var(--border-glass)]"}
                                fill={i < getRisk(confirmTeam.fifaRanking ?? 99).stars ? "currentColor" : "none"}
                              />
                            ))}
                            <span className="ml-1" style={{ color: getRisk(confirmTeam.fifaRanking ?? 99).color }}>
                              {getRisk(confirmTeam.fifaRanking ?? 99).label}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          id="cancel-prediction"
                          onClick={() => setConfirmTeam(null)}
                          className="px-4 py-2 rounded-xl border border-[var(--border-glass)] text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          id="confirm-prediction"
                          onClick={handleConfirm}
                          className="px-5 py-2 rounded-xl bg-gradient-to-r from-[var(--fifa-gold)] to-orange-500 text-black font-bold text-sm hover:opacity-90 transition-opacity glow-gold"
                        >
                          🏆 Lock In Prediction!
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────
//  Underrated Players
// ─────────────────────────────────────────────
const UNDERRATED_PLAYERS = [
  { id: 401, label: "🇫🇷 Kylian Mbappé", club: "Real Madrid", pos: "ST" },
  { id: 402, label: "🇦🇷 Lionel Messi", club: "Inter Miami", pos: "CF" },
  { id: 403, label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Jude Bellingham", club: "Real Madrid", pos: "CM" },
  { id: 404, label: "🇩🇪 Florian Wirtz", club: "Bayern Munich", pos: "CAM" },
  { id: 405, label: "🇧🇷 Vinicius Jr", club: "Real Madrid", pos: "LW" },
  { id: 406, label: "🇪🇸 Lamine Yamal", club: "Barcelona", pos: "RW" },
  { id: 407, label: "🇩🇪 Jamal Musiala", club: "Bayern Munich", pos: "CAM" },
  { id: 408, label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Bukayo Saka", club: "Arsenal", pos: "RW" },
  { id: 409, label: "🇲🇦 Achraf Hakimi", club: "PSG", pos: "RB" },
  { id: 410, label: "🇺🇸 Christian Pulisic", club: "AC Milan", pos: "CAM" },
  { id: 411, label: "🇺🇾 Federico Valverde", club: "Real Madrid", pos: "CM" },
  { id: 412, label: "🇪🇸 Pedri", club: "Barcelona", pos: "CM" },
  { id: 413, label: "🇧🇷 Endrick", club: "Real Madrid", pos: "ST" },
  { id: 414, label: "🇧🇷 Rodrygo", club: "Real Madrid", pos: "RW" },
  { id: 415, label: "🇩🇪 Leroy Sané", club: "Bayern Munich", pos: "LW" },
  { id: 416, label: "🇭🇷 Luka Modrić", club: "Real Madrid", pos: "CM" },
  { id: 417, label: "🇧🇪 Kevin De Bruyne", club: "Man City", pos: "CM" },
  { id: 418, label: "🇳🇱 Virgil van Dijk", club: "Liverpool", pos: "CB" },
  { id: 419, label: "🇯🇵 Takefusa Kubo", club: "Real Sociedad", pos: "RW" },
  { id: 420, label: "🇯🇵 Kaoru Mitoma", club: "Brighton", pos: "LW" },
  { id: 421, label: "🇵🇹 Rafael Leão", club: "AC Milan", pos: "LW" },
  { id: 422, label: "🇳🇬 Victor Osimhen", club: "Galatasaray", pos: "ST" },
  { id: 423, label: "🇸🇳 Sadio Mané", club: "Al Nassr", pos: "LW" },
  { id: 424, label: "🇲🇦 Yassine Bounou", club: "Al Hilal", pos: "GK" },
  { id: 425, label: "🇺🇾 Darwin Núñez", club: "Liverpool", pos: "ST" },
  { id: 426, label: "🇨🇴 Luis Díaz", club: "Liverpool", pos: "LW" },
  { id: 427, label: "🇦🇺 Harry Souttar", club: "Leicester City", pos: "CB" },
  { id: 428, label: "🇰🇷 Lee Kang-In", club: "PSG", pos: "CAM" },
  { id: 429, label: "🇺🇦 Mykhailo Mudryk", club: "Chelsea", pos: "LW" },
  { id: 430, label: "🇦🇷 Giovanni Lo Celso", club: "Villarreal", pos: "CM" },
];

const DEFAULT_VOTES_MAP: Record<number, number> = {
  201: 545, 202: 348, 203: 392, 204: 281,
  301: 650, 302: 520, 303: 361, 304: 329,
  401: 399, 402: 336, 403: 224, 404: 198,
  501: 600, 502: 580, 503: 150,
};

const POLLS = [
  {
    id: 2,
    question: "Which big team goes home in the group stage and embarrasses themselves? ✈️",
    emoji: "✈️",
    type: "GENERAL" as const,
    searchable: false,
    options: [
      { id: 201, label: "🇩🇪 Germany" },
      { id: 202, label: "🇧🇷 Brazil" },
      { id: 203, label: "🇦🇷 Argentina" },
      { id: 204, label: "🇫🇷 France" },
    ],
  },
  {
    id: 3,
    question: "One player will do something so stupid it breaks the internet. Who is it? 📱",
    emoji: "📱",
    type: "GENERAL" as const,
    searchable: false,
    options: [
      { id: 301, label: "🇪🇸 Lamine Yamal" },
      { id: 302, label: "🇧🇷 Vinicius Junior" },
      { id: 303, label: "🇫🇷 Kylian Mbappé" },
      { id: 304, label: "🇳🇴 Erling Haaland" },
    ],
  },
  {
    id: 4,
    question: "Who wins the Golden Boot? 🥾",
    emoji: "🥾",
    type: "MOTM" as const,
    searchable: false,
    options: [
      { id: 401, label: "🇫🇷 Kylian Mbappé" },
      { id: 402, label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Harry Kane" },
      { id: 403, label: "🇳🇴 Erling Haaland" },
      { id: 404, label: "🇪🇸 Lamine Yamal" },
    ],
  },
  {
    id: 5,
    question: "The controversial debate we need to end — Argentina or Brazil? ⚔️",
    emoji: "⚔️",
    type: "GENERAL" as const,
    searchable: false,
    options: [
      { id: 501, label: "🇧🇷 Brazil" },
      { id: 502, label: "🇦🇷 Argentina" },
      { id: 503, label: "🤷‍♂️ Ask me again in 50 years" },
    ],
  },
];

// ─────────────────────────────────────────────
//  Poll Card
// ─────────────────────────────────────────────
function PollCard({ poll, showResults }: { poll: typeof POLLS[0], showResults: boolean }) {
  const { voteLocally, getVotes, userVotes } = usePollStore();
  const selectedOption = userVotes[poll.id];
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const getVoteCount = (id: number) => getVotes(id) || (DEFAULT_VOTES_MAP[id] ?? 0);
  const totalVotes = poll.options.reduce((acc, o) => acc + getVoteCount(o.id), 0);
  const maxPct = Math.max(...poll.options.map((o) =>
    totalVotes > 0 ? (getVoteCount(o.id) / totalVotes) * 100 : 0
  ));

  const filtered = poll.options.filter((o) =>
    search === "" || o.label.toLowerCase().includes(search.toLowerCase())
  );
  const displayed = (poll.searchable && !showAll && !showResults && !search
    ? filtered.slice(0, 8) : filtered).sort((a, b) => getVoteCount(b.id) - getVoteCount(a.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-5 flex flex-col gap-4"
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{poll.emoji}</span>
          <h3 className="font-display text-base font-bold text-[var(--text-primary)] leading-tight">
            {poll.question}
          </h3>
        </div>
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>{totalVotes.toLocaleString()} votes</span>
          {!showResults ? (
            <span className="text-[var(--fifa-gold)] font-medium">↑ Tap to vote</span>
          ) : (
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 size={11} /> Locked
            </span>
          )}
        </div>
      </div>

      {poll.searchable && !showResults && (
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            id={`poll-${poll.id}-search`}
            type="text"
            placeholder="Search any player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-10 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
            <Users size={10} /> {poll.options.length}
          </div>
        </div>
      )}

      <div className="space-y-2">
        {displayed.length === 0 && (
          <div className="text-center py-4 text-[var(--text-muted)] text-sm">No results found</div>
        )}
        {displayed.map((option, idx) => {
          const voteCount = getVoteCount(option.id);
          const pct = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
          const isSelected = selectedOption === option.id;
          const isWinner = showResults && pct >= maxPct - 0.5;

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.025 }}
            >
              <button
                id={`poll-${poll.id}-option-${option.id}`}
                onClick={() => {
                  if (showResults) return;
                  voteLocally(poll.id, option.id);
                }}
                disabled={showResults}
                className={cn(
                  "w-full text-left rounded-xl transition-all duration-200 overflow-hidden group",
                  !showResults && "hover:scale-[1.01] active:scale-[0.99] cursor-pointer",
                  showResults && "cursor-default",
                  isSelected && "ring-2 ring-[var(--fifa-gold)] ring-offset-1 ring-offset-[var(--bg-card)]"
                )}
              >
                <div className="relative border border-[var(--border-glass)] rounded-xl overflow-hidden bg-[var(--bg-secondary)]/40 group-hover:border-[var(--fifa-blue)]/40 transition-colors">
                  {/* Progress fill */}
                  {showResults && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.85, ease: "easeOut", delay: idx * 0.04 }}
                      className={cn(
                        "absolute top-0 left-0 h-full",
                        isWinner
                          ? "bg-gradient-to-r from-[var(--fifa-gold)]/30 to-[var(--fifa-gold)]/10"
                          : isSelected
                          ? "bg-[var(--fifa-blue)]/25"
                          : "bg-[var(--fifa-blue)]/10"
                      )}
                    />
                  )}

                  <div className="relative flex items-center gap-2.5 px-3 py-2.5">
                    {/* Radio circle */}
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all",
                      isSelected
                        ? "bg-[var(--fifa-gold)] border-[var(--fifa-gold)]"
                        : showResults
                        ? "border-[var(--border-glass)]"
                        : "border-[var(--text-muted)] group-hover:border-[var(--fifa-blue)]"
                    )}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#050a1a]" />}
                    </div>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      <div className={cn(
                        "text-sm font-semibold leading-tight truncate",
                        isSelected ? "text-[var(--fifa-gold)]"
                          : isWinner && showResults ? "text-[var(--fifa-gold)]"
                          : "text-[var(--text-primary)]"
                      )}>
                        {option.label}
                      </div>
                      {"sub" in option && option.sub && (
                        <div className="text-[10px] text-[var(--text-muted)] truncate">{option.sub}</div>
                      )}
                      {"club" in option && (option as { club?: string }).club && (
                        <div className="text-[10px] text-[var(--text-muted)] truncate">
                          {(option as { club?: string; pos?: string }).club} · {(option as { pos?: string }).pos}
                        </div>
                      )}
                    </div>

                    {/* % */}
                    {showResults && (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] text-[var(--text-muted)] tabular-nums mt-0.5">
                          {voteCount.toLocaleString()} votes
                        </span>
                        {isWinner && <span className="text-sm">👑</span>}
                        <span className={cn(
                          "font-bold text-sm tabular-nums",
                          isWinner ? "text-[var(--fifa-gold)]" : "text-[var(--text-secondary)]"
                        )}>
                          {Math.round(pct)}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {poll.searchable && !showResults && !search && poll.options.length > 8 && (
        <button
          id={`poll-${poll.id}-show-more`}
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-dashed border-[var(--border-glass)] text-xs text-[var(--text-muted)] hover:text-[var(--fifa-gold)] hover:border-[var(--fifa-gold)]/40 transition-all"
        >
          {showAll ? <><ChevronUp size={12} /> Show less</> : <><ChevronDown size={12} /> Show all {poll.options.length} players</>}
        </button>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────
export default function PollsPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);

    const init = async () => {
      // 1. Get Fingerprint
      const fp = await fpPromise.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);

      // 2. Fetch Initial Votes
      const { data } = await supabase.from('poll_options').select('id, seed_votes, actual_votes');
      if (data) {
        const newVotes: Record<number, number> = {};
        data.forEach((row: any) => {
          newVotes[row.id] = Number(row.seed_votes) + Number(row.actual_votes);
        });
        usePollStore.getState().setVotes(newVotes);
      }
    };
    init();

    // 3. Realtime Subscription
    const channel = supabase.channel('realtime_poll_options')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'poll_options' }, (payload) => {
        const row = payload.new as any;
        const newTotal = Number(row.seed_votes) + Number(row.actual_votes);
        const currentVotes = usePollStore.getState().votes;
        usePollStore.getState().setVotes({ ...currentVotes, [row.id]: newTotal });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const { votes, userVotes, isSubmitted, submissionData } = usePollStore();
  const { prediction } = useChampionStore();
  const totalCastVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const predictedTeam = prediction ? TEAMS.find((t) => t.id === prediction.teamId) : null;

  if (!mounted) return null;

  const handleSubmit = async () => {
    if (!fingerprint || !prediction) return;
    setIsSubmitting(true);
    
    const p_poll_votes = Object.entries(userVotes).map(([poll_id, option_id]) => ({
      poll_id: parseInt(poll_id),
      option_id
    }));

    const { data, error } = await supabase.rpc('submit_predictions', {
      p_fingerprint: fingerprint,
      p_champion_id: prediction.teamId,
      p_poll_votes
    });

    setIsSubmitting(false);

    if (error) {
      if (error.message.includes('DUPLICATE_SUBMISSION')) {
        alert("You have already submitted your predictions!");
      } else {
        alert("Failed to submit: " + error.message);
      }
      return;
    }

    if (data && data.success) {
      usePollStore.getState().setSubmitted({
        createdAt: data.created_at,
        participantCount: data.participant_count
      });
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#c39d63', '#1e3a8a', '#ffffff']
      });
    }
  };

  const localDate = submissionData ? new Date(submissionData.createdAt).toLocaleString() : '';

  return (
    <div className="min-h-screen pt-20 pb-32">
      {isSubmitted && (
        <div className="max-w-screen-xl mx-auto px-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="w-full max-w-2xl mx-auto glass-card-gold p-6 text-center flex flex-col items-center gap-4 border border-[var(--fifa-gold)]/50"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--fifa-gold)]/20 flex items-center justify-center text-3xl">
              🏆
            </div>
            <h2 className="font-display text-2xl font-bold text-gradient-gold">Predictions Locked!</h2>
            
            <div className="w-full text-left grid grid-cols-2 gap-3 bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-glass)]">
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[var(--text-muted)] text-xs uppercase">Champion Pick</span>
                <span className="font-bold flex items-center gap-2">
                  <Flag emoji={predictedTeam?.flag || '🏳️'} size={14} /> {predictedTeam?.name}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[var(--text-muted)] text-xs uppercase">Polls Completed</span>
                <span className="font-bold">{Object.keys(userVotes).length} / {POLLS.length}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[var(--text-muted)] text-xs uppercase">Time (Local)</span>
                <span className="font-bold text-xs">{localDate}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[var(--text-muted)] text-xs uppercase">Global Rank</span>
                <span className="font-bold text-[var(--fifa-gold)]">#{submissionData?.participantCount?.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Page Header */}
        <div className="py-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-5xl mb-4">
            🗳️
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
          >
            Fan <span className="text-gradient-gold">Predictions</span>
          </motion.h1>
          <p className="text-[var(--text-secondary)] mb-4">Make bold calls · Track your risk · See who agrees</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
          {[
            { label: "Active Polls", value: POLLS.length + 1, icon: "🗳️" },
            { label: "Nations", value: TEAMS.length, icon: "🌍" },
            { label: "Your Picks", value: totalCastVotes + (prediction ? 1 : 0), icon: "✅" },
          ].map(({ label, value, icon }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-display text-2xl font-black text-gradient-gold">{value}</div>
              <div className="text-[10px] text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── CHAMPION PREDICTOR (full-width hero section) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card-gold p-6 sm:p-8 mb-8"
        >
          <ChampionPredictor />
        </motion.div>

        {/* Current prediction summary bar (if set) */}
        {predictedTeam && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
          >
            <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
            <div className="text-sm">
              <span className="text-[var(--text-secondary)]">Your champion pick: </span>
              <span className="font-bold text-[var(--text-primary)]">
                <Flag emoji={predictedTeam.flag} size={48} /> {predictedTeam.name}
              </span>
              <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wide">
                {getRisk(predictedTeam.fifaRanking ?? 99).label}
              </span>
            </div>
          </motion.div>
        )}

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-8 flex items-center gap-3 p-3 rounded-xl bg-[var(--fifa-blue)]/10 border border-[var(--fifa-blue)]/30"
        >
          <span className="text-2xl">💡</span>
          <p className="text-sm text-[var(--text-secondary)]">
            Cast your vote in the polls below. The{" "}
            <strong className="text-[var(--fifa-gold)]">Golden Ball</strong> poll has {UNDERRATED_PLAYERS.length} players — use search to find your pick!
          </p>
        </motion.div>

        {/* ── Regular Polls Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {POLLS.map((poll, i) => (
            <motion.div
              key={poll.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={cn(poll.searchable ? "lg:col-span-2" : "")}
            >
              <PollCard poll={poll} showResults={isSubmitted} />
            </motion.div>
          ))}
        </div>

        {/* Sticky Submit Footer */}
        {!isSubmitted && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-card)]/90 backdrop-blur-md border-t border-[var(--border-glass)] z-50 flex justify-center">
            <div className="max-w-lg w-full flex items-center justify-between">
              <div className="text-sm text-[var(--text-muted)] font-bold">
                {Object.keys(userVotes).length} / {POLLS.length} polls answered
              </div>
              <button
                disabled={Object.keys(userVotes).length < POLLS.length || !prediction || isSubmitting}
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-[var(--fifa-gold)] text-black font-bold text-sm hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Predictions"}
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-xs text-[var(--text-muted)] mb-2">
            Votes are synced globally in real-time · Powered by Supabase
          </p>
        </div>
      </div>
    </div>
  );
}
