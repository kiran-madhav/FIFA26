"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, User, Trophy, Calendar } from "lucide-react";
import { TEAMS } from "@/lib/data/teams";
import { MATCHES } from "@/lib/data/matches";
import { formatDate, formatTime } from "@/lib/utils";
import Link from "next/link";
import { Flag } from "@/components/ui/Flag";

const SQUAD_MAP: Record<string, { name: string; pos: string; num: number; club: string }[]> = {
  ARG: [
    { name: "Emiliano Martínez", pos: "GK", num: 1, club: "Aston Villa" },
    { name: "Nahuel Molina", pos: "RB", num: 26, club: "Atlético Madrid" },
    { name: "Cristian Romero", pos: "CB", num: 13, club: "Tottenham" },
    { name: "Nicolás Otamendi", pos: "CB", num: 19, club: "Benfica" },
    { name: "Nicolás Tagliafico", pos: "LB", num: 3, club: "Lyon" },
    { name: "Rodrigo De Paul", pos: "CM", num: 7, club: "Atlético Madrid" },
    { name: "Enzo Fernández", pos: "CM", num: 24, club: "Chelsea" },
    { name: "Alexis Mac Allister", pos: "CM", num: 20, club: "Liverpool" },
    { name: "Lionel Messi", pos: "CF", num: 10, club: "Inter Miami" },
    { name: "Lautaro Martínez", pos: "ST", num: 22, club: "Inter Milan" },
    { name: "Julián Álvarez", pos: "ST", num: 9, club: "Atlético Madrid" },
  ],
  BRA: [
    { name: "Alisson Becker", pos: "GK", num: 1, club: "Liverpool" },
    { name: "Danilo", pos: "RB", num: 2, club: "Juventus" },
    { name: "Marquinhos", pos: "CB", num: 4, club: "PSG" },
    { name: "Gabriel Magalhães", pos: "CB", num: 3, club: "Arsenal" },
    { name: "Guilherme Arana", pos: "LB", num: 6, club: "Atlético Mineiro" },
    { name: "Casemiro", pos: "CDM", num: 5, club: "Man United" },
    { name: "Rodrygo", pos: "RW", num: 11, club: "Real Madrid" },
    { name: "Lucas Paquetá", pos: "CAM", num: 10, club: "West Ham" },
    { name: "Vinicius Jr", pos: "LW", num: 7, club: "Real Madrid" },
    { name: "Endrick", pos: "ST", num: 9, club: "Real Madrid" },
    { name: "Raphinha", pos: "CAM", num: 19, club: "Barcelona" },
  ],
  ENG: [
    { name: "Jordan Pickford", pos: "GK", num: 1, club: "Everton" },
    { name: "Trent Alexander-Arnold", pos: "RB", num: 2, club: "Real Madrid" },
    { name: "John Stones", pos: "CB", num: 5, club: "Man City" },
    { name: "Harry Maguire", pos: "CB", num: 6, club: "Man United" },
    { name: "Luke Shaw", pos: "LB", num: 3, club: "Man United" },
    { name: "Declan Rice", pos: "CDM", num: 4, club: "Arsenal" },
    { name: "Jude Bellingham", pos: "CM", num: 10, club: "Real Madrid" },
    { name: "Bukayo Saka", pos: "RW", num: 7, club: "Arsenal" },
    { name: "Phil Foden", pos: "CAM", num: 8, club: "Man City" },
    { name: "Marcus Rashford", pos: "LW", num: 11, club: "Aston Villa" },
    { name: "Harry Kane", pos: "ST", num: 9, club: "Bayern Munich" },
  ],
};

const DEFAULT_SQUAD = [
  { name: "GK Player", pos: "GK", num: 1, club: "Unknown" },
  { name: "RB Player", pos: "RB", num: 2, club: "Unknown" },
  { name: "CB Player", pos: "CB", num: 4, club: "Unknown" },
  { name: "CB Player", pos: "CB", num: 5, club: "Unknown" },
  { name: "LB Player", pos: "LB", num: 3, club: "Unknown" },
  { name: "CM Player", pos: "CM", num: 6, club: "Unknown" },
  { name: "CM Player", pos: "CM", num: 8, club: "Unknown" },
  { name: "RW Player", pos: "RW", num: 7, club: "Unknown" },
  { name: "CAM Player", pos: "CAM", num: 10, club: "Unknown" },
  { name: "LW Player", pos: "LW", num: 11, club: "Unknown" },
  { name: "ST Player", pos: "ST", num: 9, club: "Unknown" },
];

const POS_COLORS: Record<string, string> = {
  GK: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  CB: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  RB: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  LB: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  CDM: "bg-green-500/20 text-green-400 border-green-500/30",
  CM: "bg-green-500/20 text-green-400 border-green-500/30",
  CAM: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  RW: "bg-red-500/20 text-red-400 border-red-500/30",
  LW: "bg-red-500/20 text-red-400 border-red-500/30",
  ST: "bg-red-500/20 text-red-400 border-red-500/30",
  CF: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const team = TEAMS.find((t) => t.tla.toLowerCase() === slug.toLowerCase());
  if (!team) notFound();

  const squad = team.squad?.map(p => ({ name: p.name, pos: p.position, num: p.number, club: p.club })) || SQUAD_MAP[team.tla] || DEFAULT_SQUAD;
  const matches = MATCHES.filter(
    (m) => m.homeTeam.id === team.id || m.awayTeam.id === team.id
  ).slice(0, 8);

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl mb-10 p-8 sm:p-12"
        style={{
          background: `linear-gradient(135deg, ${team.kitPrimary}30 0%, ${team.kitSecondary}15 100%)`,
          borderTop: `4px solid ${team.kitPrimary}`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(circle at 70% 50%, ${team.kitPrimary}, transparent 60%)` }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="text-8xl animate-float"><Flag emoji={team.flag} size={32} /></div>
          <div className="text-center sm:text-left">
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">
              {team.confederation} · Group {team.group}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2">
              {team.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                <User size={14} className="text-[var(--fifa-gold)]" /> {team.coach}
              </span>
              {team.fifaRanking && (
                <span className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <Trophy size={14} className="text-[var(--fifa-gold)]" /> FIFA Rank #{team.fifaRanking}
                </span>
              )}
              {team.worldCupWins ? (
                <span className="px-3 py-1 rounded-full bg-[var(--fifa-gold)]/20 border border-[var(--fifa-gold)]/40 text-[var(--fifa-gold)] text-xs font-bold">
                  🏆 {team.worldCupWins}× World Champion
                </span>
              ) : null}
            </div>
          </div>
          <div className="sm:ml-auto text-center sm:text-right mt-4 sm:mt-0">
            <div className="text-xs text-[var(--text-muted)] mb-1">World Cup Appearances</div>
            <div className="font-display text-4xl font-black text-gradient-gold">
              {team.worldCupAppearances ?? "—"}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Squad */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4">
            Squad
          </h2>
          <div className="space-y-2">
            {squad.map((player, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="glass-card flex items-center gap-4 p-3 hover:border-[var(--fifa-blue)]/40 transition-all"
              >
                <span className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center font-display font-bold text-xs text-[var(--text-muted)]">
                  {player.num}
                </span>
                <span
                  className={`px-2 py-0.5 rounded border text-[10px] font-bold w-10 text-center ${POS_COLORS[player.pos] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}
                >
                  {player.pos}
                </span>
                <span className="flex-1 text-sm font-medium text-[var(--text-primary)]">{player.name}</span>
                <span className="text-xs text-[var(--text-muted)]">{player.club}</span>
                <span className="text-lg"><Flag emoji={team.flag} size={32} /></span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fixtures */}
        <div>
          <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4">
            Fixtures
          </h2>
          <div className="space-y-3">
            {matches.map((match, i) => {
              const isHome = match.homeTeam.id === team.id;
              const opponent = isHome ? match.awayTeam : match.homeTeam;
              return (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={`/match/${match.id}`}>
                    <div className="glass-card p-3 hover:border-[var(--fifa-blue)]/40 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          {match.phase === "Group" ? `Group ${match.group} · MD${match.matchDay}` : match.phase}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${match.status === "LIVE" ? "bg-red-500/20 text-red-400" : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"}`}>
                          {match.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg"><Flag emoji={isHome ? team.flag : opponent.flag} size={24} /></span>
                        <span className="text-xs font-medium text-[var(--text-secondary)]">{isHome ? "HOME" : "AWAY"}</span>
                        <span className="text-sm font-semibold text-[var(--text-primary)] flex-1 text-center">
                          vs <Flag emoji={opponent.flag} size={24} /> {opponent.shortName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] mt-1">
                        <Calendar size={9} />
                        {formatDate(match.date)} · {formatTime(match.date)}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
                        <MapPin size={9} /> {match.stadium.name}, {match.stadium.city}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
