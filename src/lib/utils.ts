// Utility functions

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string, locale = "en-IN") {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatTime(dateStr: string, locale = "en-IN") {
  const d = new Date(dateStr);
  return d.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  });
}

export function getCountdownParts(targetDate: string) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, started: false };
}

export function getMatchStatusColor(status: string) {
  switch (status) {
    case "LIVE": return "text-red-400 bg-red-400/10";
    case "FINISHED": return "text-green-400 bg-green-400/10";
    case "SCHEDULED": return "text-blue-400 bg-blue-400/10";
    default: return "text-gray-400 bg-gray-400/10";
  }
}

export function getFormColor(result: "W" | "D" | "L") {
  switch (result) {
    case "W": return "bg-emerald-500";
    case "D": return "bg-amber-500";
    case "L": return "bg-red-500";
  }
}

export function calcPrediction(homeRanking = 50, awayRanking = 50) {
  const totalStrength = (1 / homeRanking) + (1 / awayRanking);
  const homeRaw = (1 / homeRanking) / totalStrength;
  const awayRaw = (1 / awayRanking) / totalStrength;
  const homeAdj = homeRaw * 0.6 + 0.2; // home advantage
  const awayAdj = awayRaw * 0.6 + 0.1;
  const drawProb = Math.max(0.1, 1 - homeAdj - awayAdj);
  const total = homeAdj + drawProb + awayAdj;

  // Generate plausible scoreline
  const homeGoals = Math.max(0, Math.round(homeAdj * 3.5));
  const awayGoals = Math.max(0, Math.round(awayAdj * 3.5));

  return {
    homeWinProb: Math.round((homeAdj / total) * 100),
    drawProb: Math.round((drawProb / total) * 100),
    awayWinProb: Math.round((awayAdj / total) * 100),
    predictedHomeScore: homeGoals,
    predictedAwayScore: awayGoals,
  };
}


export function getPhaseName(phase: string) {
  const names: Record<string, string> = {
    Group: "Group Stage",
    R32: "Round of 32",
    R16: "Round of 16",
    QF: "Quarter-final",
    SF: "Semi-final",
    "3P": "3rd Place Play-off",
    F: "Final",
  };
  return names[phase] ?? phase;
}
