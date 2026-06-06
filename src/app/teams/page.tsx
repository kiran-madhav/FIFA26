"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Users } from "lucide-react";
import { TEAMS, GROUPS } from "@/lib/data/teams";
import { cn } from "@/lib/utils";
import { Flag } from "@/components/ui/Flag";

export default function TeamsPage() {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = TEAMS.filter((t) => {
    if (selectedGroup !== "all" && t.group !== selectedGroup) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const byGroup = GROUPS.reduce<Record<string, typeof TEAMS>>((acc, g) => {
    acc[g] = filtered.filter((t) => t.group === g);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      <div className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
        >
          All <span className="text-gradient-gold">Teams</span>
        </motion.h1>
        <p className="text-[var(--text-secondary)]">48 nations competing for glory</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            id="team-search"
            type="text"
            placeholder="Search team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--fifa-blue)] transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            id="group-all-btn"
            onClick={() => setSelectedGroup("all")}
            className={cn(
              "px-3 py-2 rounded-xl text-xs font-bold transition-all",
              selectedGroup === "all"
                ? "bg-[var(--fifa-blue)] text-white"
                : "bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            )}
          >
            ALL
          </button>
          {GROUPS.map((g) => (
            <button
              key={g}
              id={`group-btn-${g}`}
              onClick={() => setSelectedGroup(g)}
              className={cn(
                "px-3 py-2 rounded-xl text-xs font-bold transition-all",
                selectedGroup === g
                  ? "bg-[var(--fifa-blue)] text-white"
                  : "bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Teams Grid by Group */}
      {selectedGroup === "all" ? (
        <div className="space-y-10">
          {GROUPS.map((g) => {
            const teams = byGroup[g];
            if (!teams || teams.length === 0) return null;
            return (
              <div key={g}>
                <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[var(--fifa-blue)] flex items-center justify-center text-white text-sm font-bold">{g}</span>
                  Group {g}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {teams.map((team, i) => (
                    <TeamCard key={team.id} team={team} delay={i * 0.06} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {filtered.map((team, i) => (
            <TeamCard key={team.id} team={team} delay={i * 0.06} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          <Users size={40} className="mx-auto mb-3 opacity-30" />
          No teams found
        </div>
      )}
    </div>
  );
}

function TeamCard({ team, delay = 0 }: { team: typeof TEAMS[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -6, scale: 1.03 }}
    >
      <Link href={`/teams/${team.tla.toLowerCase()}`}>
        <div
          className="glass-card p-5 text-center cursor-pointer hover:border-[var(--fifa-blue)]/50 transition-all group"
          style={{ borderTop: `3px solid ${team.kitPrimary}` }}
        >
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform"><Flag emoji={team.flag} size={32} /></div>
          <div className="font-heading font-bold text-[var(--text-primary)] text-sm leading-tight mb-1">
            {team.name}
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--fifa-blue)]/20 text-[var(--fifa-blue-light)] border border-[var(--fifa-blue)]/30">
              Group {team.group}
            </span>
            {team.fifaRanking && (
              <span className="text-[10px] text-[var(--text-muted)]">#{team.fifaRanking}</span>
            )}
          </div>
          {team.worldCupWins && team.worldCupWins > 0 ? (
            <div className="mt-2 text-[10px] text-[var(--fifa-gold)] font-semibold">
              🏆 × {team.worldCupWins}
            </div>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
