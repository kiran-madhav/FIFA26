"use client";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowLeft, Activity } from "lucide-react";
import { MATCHES } from "@/lib/data/matches";
import { formatDate, formatTime, getPhaseName, calcPrediction, cn } from "@/lib/utils";
import { Flag } from "@/components/ui/Flag";
import type { Match } from "@/types";

export default function MatchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const match = MATCHES.find((m) => m.id === parseInt(id)) as unknown as Match;
  if (!match) notFound();

  const prediction = calcPrediction(
    (match.homeTeam as any).fifaRanking ?? 50,
    (match.awayTeam as any).fifaRanking ?? 50
  );

  const [activeTab, setActiveTab] = useState<"preview" | "stats" | "lineup">("preview");

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      {/* Back */}
      <Link href="/schedule" className="inline-flex items-center gap-1.5 text-sm bg-[var(--fifa-gold)] text-black px-4 py-2 rounded-xl font-bold hover:bg-orange-500 transition-colors mt-6 mb-6 shadow-lg shadow-[var(--fifa-gold)]/20">
        <ArrowLeft size={16} /> Back to Schedule
      </Link>

      {/* Match Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-gold p-6 sm:p-10 mb-8 text-center"
      >
        <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">
          {getPhaseName(match.phase)}{match.group ? ` · Group ${match.group}` : ""}
          {match.matchDay ? ` · Matchday ${match.matchDay}` : ""}
        </div>

        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Home */}
          <div className="flex-1 text-center">
            <Link href={`/teams/${match.homeTeam.tla.toLowerCase()}`}>
              <div className="text-6xl sm:text-8xl mb-3 hover:scale-110 transition-transform cursor-pointer">
                <Flag emoji={match.homeTeam.flag} size={24} />
              </div>
            </Link>
            <div className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
              {match.homeTeam.name}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{match.homeTeam.coach}</div>
          </div>

          {/* Score / VS */}
          <div className="flex-shrink-0 text-center">
            {match.status === "FINISHED" || match.status === "LIVE" ? (
              <div>
                <div className="font-display text-5xl sm:text-7xl font-black text-[var(--text-primary)]">
                  {match.homeScore}
                  <span className="text-[var(--text-muted)] mx-2">–</span>
                  {match.awayScore}
                </div>
                {match.status === "LIVE" && (
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping-slow" />
                    <span className="text-red-400 font-bold text-sm">LIVE</span>
                  </div>
                )}
                {match.status === "FINISHED" && (
                  <div className="text-xs text-[var(--text-muted)] mt-1">Full Time</div>
                )}
              </div>
            ) : (
              <div>
                <div className="font-display text-3xl sm:text-5xl font-black text-gradient-gold">VS</div>
                <div className="flex flex-col items-center gap-1 mt-3 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <Clock size={11} /> {formatTime(match.date)}
                  </div>
                  <div>{formatDate(match.date)}</div>
                </div>
              </div>
            )}
          </div>

          {/* Away */}
          <div className="flex-1 text-center">
            <Link href={`/teams/${match.awayTeam.tla.toLowerCase()}`}>
              <div className="text-6xl sm:text-8xl mb-3 hover:scale-110 transition-transform cursor-pointer">
                <Flag emoji={match.awayTeam.flag} size={24} />
              </div>
            </Link>
            <div className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
              {match.awayTeam.name}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{match.awayTeam.coach}</div>
          </div>
        </div>

        {/* Venue */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)]">
          <MapPin size={14} className="text-[var(--fifa-gold)]" />
          <span>{match.stadium.name}, {match.stadium.city} {match.stadium.countryFlag}</span>
          <span className="text-[var(--text-muted)]">· Cap. {match.stadium.capacity.toLocaleString()}</span>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 justify-center">
        {(["preview", "stats", "lineup"] as const).map((tab) => (
          <button
            key={tab}
            id={`match-tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all",
              activeTab === tab
                ? "bg-[var(--fifa-blue)] text-white"
                : "bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            )}
          >
            {tab === "preview" ? "📋 Preview" : tab === "stats" ? "📊 Stats" : "👥 Lineup"}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Preview / AI Prediction */}
        {activeTab === "preview" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* AI Prediction Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={16} className="text-[var(--fifa-gold)]" />
                <h3 className="font-semibold text-[var(--text-primary)]">AI Match Prediction</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  AI Powered
                </span>
              </div>

              {/* Win probability bars */}
              <div className="space-y-3 mb-4">
                {[
                  { label: match.homeTeam.shortName, prob: prediction.homeWinProb, flag: match.homeTeam.flag, color: "bg-[var(--fifa-blue)]" },
                  { label: "Draw", prob: prediction.drawProb, flag: "🤝", color: "bg-amber-500" },
                  { label: match.awayTeam.shortName, prob: prediction.awayWinProb, flag: match.awayTeam.flag, color: "bg-red-500" },
                ].map(({ label, prob, flag, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm flex items-center gap-1.5"><Flag emoji={flag} size={32} /> {label}</span>
                      <span className="font-bold text-sm text-[var(--text-primary)]">{prob}%</span>
                    </div>
                    <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${prob}%` }}
                        transition={{ duration: 1 }}
                        className={cn("h-full rounded-full", color)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--border-glass)] pt-4">
                <div className="text-center">
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Predicted Score</div>
                  <div className="font-display text-3xl font-black text-[var(--text-primary)]">
                    {prediction.predictedHomeScore} – {prediction.predictedAwayScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Team Info */}
            <div className="grid grid-cols-2 gap-4">
              {[match.homeTeam, match.awayTeam].map((team) => (
                <div key={team.id} className="glass-card p-4">
                  <div className="text-2xl mb-2"><Flag emoji={team.flag} size={32} /></div>
                  <div className="font-bold text-[var(--text-primary)] text-sm mb-1">{team.name}</div>
                  <div className="text-xs text-[var(--text-muted)] mb-2">Coach: {team.coach}</div>
                  <div className="space-y-1">
                    {team.fifaRanking && (
                      <div className="text-xs text-[var(--text-secondary)]">
                        FIFA Rank: <span className="font-bold text-[var(--fifa-gold)]">#{team.fifaRanking}</span>
                      </div>
                    )}
                    <div className="text-xs text-[var(--text-secondary)]">
                      WC Wins: <span className="font-bold text-[var(--fifa-gold)]">{team.worldCupWins ?? 0}</span>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      Appearances: <span className="font-bold text-[var(--text-primary)]">{team.worldCupAppearances ?? 0}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-[var(--text-muted)] py-12">
              <Activity size={40} className="mx-auto mb-3 opacity-30" />
              <p>Match statistics will be available once the match starts</p>
              <p className="text-xs mt-2">Kick-off: {formatDate(match.date)} · {formatTime(match.date)}</p>
            </div>
          </motion.div>
        )}

        {activeTab === "lineup" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-[var(--text-muted)] py-12">
              <Activity size={40} className="mx-auto mb-3 opacity-30" />
              <p>Official lineups will be announced 1 hour before kick-off</p>
              <p className="text-xs mt-2">Kick-off: {formatDate(match.date)} · {formatTime(match.date)}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
