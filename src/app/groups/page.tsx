"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GROUPS } from "@/lib/data/groups";
import { cn } from "@/lib/utils";
import { Flag } from "@/components/ui/Flag";

function FormDot({ result }: { result: "W" | "D" | "L" }) {
  const colors = { W: "bg-emerald-500", D: "bg-amber-500", L: "bg-red-500" };
  return (
    <span className={cn("inline-block w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white font-bold", colors[result])}>
      {result}
    </span>
  );
}

function GroupCard({ group, isExpanded, onToggle }: {
  group: typeof GROUPS[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const sorted = [...group.standings].sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor
  );

  return (
    <motion.div
      layout
      className={cn(
        "glass-card overflow-hidden transition-all",
        isExpanded && "border-[var(--fifa-blue)]/50 glow-blue"
      )}
    >
      {/* Group Header */}
      <div className="w-full flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--fifa-blue)] to-[var(--fifa-blue-light)] flex items-center justify-center font-display font-bold text-white text-sm">
            {group.id}
          </div>
          <div className="text-left">
            <div className="font-bold text-[var(--text-primary)] font-heading">Group {group.id}</div>
            <div className="flex gap-1 mt-0.5">
              {group.standings.slice(0, 4).map((s) => (
                <span key={s.team.id} className="text-sm"><Flag emoji={s.team.flag} size={16} /></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Standings Table */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--border-glass)]">
              {/* Table Header */}
              <div className="grid grid-cols-[24px_1fr_repeat(6,_36px)_44px] gap-1 px-4 py-2 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                <span>#</span>
                <span>Team</span>
                <span className="text-center">P</span>
                <span className="text-center">W</span>
                <span className="text-center">D</span>
                <span className="text-center">L</span>
                <span className="text-center">GD</span>
                <span className="text-center">Pts</span>
              </div>

              {sorted.map((standing, idx) => {
                const rowClass =
                  idx < 2 ? "qualify-zone" : idx === 2 ? "playoff-zone" : "";
                return (
                  <motion.div
                    key={standing.team.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className={cn(
                      "grid grid-cols-[24px_1fr_repeat(6,_36px)_44px] gap-1 px-4 py-2.5 items-center hover:bg-[var(--bg-glass-light)] transition-colors",
                      rowClass
                    )}
                  >
                    <span className="text-xs font-bold text-[var(--text-muted)]">{idx + 1}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base"><Flag emoji={standing.team.flag} size={20} /></span>
                      <span className="text-sm font-medium text-[var(--text-primary)] truncate">{standing.team.shortName}</span>
                    </div>
                    <span className="text-center text-xs text-[var(--text-secondary)]">{standing.played}</span>
                    <span className="text-center text-xs text-[var(--text-secondary)]">{standing.won}</span>
                    <span className="text-center text-xs text-[var(--text-secondary)]">{standing.drawn}</span>
                    <span className="text-center text-xs text-[var(--text-secondary)]">{standing.lost}</span>
                    <span className={cn(
                      "text-center text-xs font-semibold",
                      standing.goalDifference > 0 ? "text-emerald-400" : standing.goalDifference < 0 ? "text-red-400" : "text-[var(--text-muted)]"
                    )}>
                      {standing.goalDifference > 0 ? "+" : ""}{standing.goalDifference}
                    </span>
                    <span className="text-center text-sm font-bold text-[var(--fifa-gold)]">{standing.points}</span>
                  </motion.div>
                );
              })}

              {/* Legend */}
              <div className="px-4 py-2 flex flex-wrap gap-3 border-t border-[var(--border-glass)]">
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)]">
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/20 border-l-2 border-emerald-500" />
                  Advance to R32
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)]">
                  <div className="w-3 h-3 rounded-sm bg-amber-500/20 border-l-2 border-amber-500" />
                  Potential playoff
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GroupsPage() {

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      <div className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
        >
          Group <span className="text-gradient-gold">Standings</span>
        </motion.h1>
        <p className="text-[var(--text-secondary)]">12 Groups · 48 Teams</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <GroupCard
              group={group}
              isExpanded={true}
              onToggle={() => {}}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
