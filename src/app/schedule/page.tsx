"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, MapPin, Clock, Filter } from "lucide-react";
import { MATCHES } from "@/lib/data/matches";
import { TEAMS, GROUPS } from "@/lib/data/teams";
import { formatDate, formatTime, getPhaseName, getMatchStatusColor, cn } from "@/lib/utils";
import Link from "next/link";
import { Flag } from "@/components/ui/Flag";

type Phase = "all" | "Group" | "R32" | "R16" | "QF" | "SF" | "F";

export default function SchedulePage() {
  const [phase, setPhase] = useState<Phase>("Group");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [selectedTeamId, setSelectedTeamId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return MATCHES.filter((m) => {
      if (phase !== "all" && m.phase !== getPhaseName(phase)) return false;
      if (selectedGroup !== "all" && m.group !== selectedGroup) return false;
      if (selectedTeamId !== "all") {
        const id = parseInt(selectedTeamId);
        if (m.homeTeam.id !== id && m.awayTeam.id !== id) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!m.homeTeam.name.toLowerCase().includes(q) && !m.awayTeam.name.toLowerCase().includes(q) && !m.stadium.city.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [phase, selectedGroup, selectedTeamId, searchQuery]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    filtered.forEach((m) => {
      const key = m.date.slice(0, 10);
      if (!map[key]) map[key] = [];
      map[key].push(m);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const PHASE_TABS: { key: Phase; label: string }[] = [
    { key: "all", label: "All" },
    { key: "Group", label: "Group Stage" },
    { key: "R32", label: "Round of 32" },
    { key: "R16", label: "Round of 16" },
    { key: "QF", label: "Quarter-finals" },
    { key: "SF", label: "Semi-finals" },
    { key: "F", label: "Final" },
  ];

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      {/* Header */}
      <div className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
        >
          Match <span className="text-gradient-gold">Schedule</span>
        </motion.h1>
        <p className="text-[var(--text-secondary)]">All 104 matches · June 11 – July 19, 2026</p>
      </div>

      {/* Phase Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-hide">
        {PHASE_TABS.map(({ key, label }) => (
          <button
            key={key}
            id={`phase-tab-${key}`}
            onClick={() => { setPhase(key); setSelectedGroup("all"); }}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0",
              phase === key
                ? "bg-[var(--fifa-blue)] text-white shadow-lg"
                : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-glass)]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 mb-8">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            id="match-search"
            type="text"
            placeholder="Search team or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
          />
        </div>

        {/* Group filter (only in group phase) */}
        {(phase === "Group" || phase === "all") && (
          <select
            id="group-filter"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
          >
            <option value="all">All Groups</option>
            {GROUPS.map((g) => <option key={g} value={g}>Group {g}</option>)}
          </select>
        )}

        {/* Team filter */}
        <select
          id="team-filter"
          value={selectedTeamId}
          onChange={(e) => setSelectedTeamId(e.target.value)}
          className="px-3 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
        >
          <option value="all">All Teams</option>
          {TEAMS.map((t) => (
            <option key={t.id} value={t.id}>{t.flag} {t.name}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-1.5">
        <Filter size={10} /> {filtered.length} matches found
      </p>

      {/* Match List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${phase}-${selectedGroup}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-8"
        >
          {grouped.length === 0 && (
            <div className="text-center py-20 text-[var(--text-muted)]">No matches found</div>
          )}
          {grouped.map(([date, matches]) => (
            <div key={date}>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] mb-3 uppercase tracking-wider">
                <Calendar size={14} className="text-[var(--fifa-gold)]" />
                {formatDate(date + "T12:00:00Z")}
              </h3>
              <div className="space-y-3">
                {matches.map((match, i) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link href={`/match/${match.id}`}>
                      <div className="glass-card p-4 hover:border-[var(--fifa-blue)]/50 hover:glow-blue transition-all cursor-pointer group">
                        <div className="flex items-center gap-4">
                          {/* Phase badge */}
                          <div className="hidden sm:flex flex-col items-center gap-1 w-20 flex-shrink-0">
                            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase", getMatchStatusColor(match.status))}>
                              {match.status === "LIVE" ? "● LIVE" : match.status === "FINISHED" ? "FT" : getPhaseName(match.phase)}
                            </span>
                            {match.group && (
                              <span className="text-[10px] text-[var(--text-muted)]">Grp {match.group}</span>
                            )}
                          </div>

                          {/* Home team */}
                          <div className="flex items-center gap-2.5 flex-1 justify-end">
                            <span className="text-sm font-semibold text-[var(--text-primary)] text-right group-hover:text-[var(--fifa-gold)] transition-colors">
                              {match.homeTeam.shortName}
                            </span>
                            <span className="text-2xl"><Flag emoji={match.homeTeam.flag} size={24} /></span>
                          </div>

                          {/* Score / Time */}
                          <div className="flex-shrink-0 w-24 text-center">
                            {match.status === "FINISHED" || match.status === "LIVE" ? (
                              <div className={cn("font-display font-bold text-xl px-3 py-1.5 rounded-xl border", match.status === "LIVE" ? "text-red-400 border-red-400/30 bg-red-400/10" : "text-[var(--text-primary)] border-[var(--border-primary)] bg-[var(--bg-card)]")}>
                                {match.homeScore} – {match.awayScore}
                              </div>
                            ) : (
                              <div className="flex flex-col items-center">
                                <span className="font-display font-bold text-[var(--fifa-gold)] text-sm">VS</span>
                                <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-0.5 mt-1">
                                  <Clock size={9} /> {formatTime(match.date)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Away team */}
                          <div className="flex items-center gap-2.5 flex-1">
                            <span className="text-2xl"><Flag emoji={match.awayTeam.flag} size={24} /></span>
                            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--fifa-gold)] transition-colors">
                              {match.awayTeam.shortName}
                            </span>
                          </div>

                          {/* Stadium */}
                          <div className="hidden md:flex items-center gap-1 text-[var(--text-muted)] text-xs w-36 flex-shrink-0 justify-end">
                            <MapPin size={10} />
                            <span className="truncate">{match.stadium.city}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
