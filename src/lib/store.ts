"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ========== Theme Store ==========
interface ThemeStore {
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: (t: "dark" | "light") => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () =>
        set((s) => {
          const next = s.theme === "dark" ? "light" : "dark";
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", next);
          }
          return { theme: next };
        }),
      setTheme: (t) => {
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", t);
        }
        set({ theme: t });
      },
    }),
    { name: "wc2026-theme" }
  )
);

// ========== Fantasy Store ==========
interface FantasyPlayer {
  id: number;
  name: string;
  position: string;
  team: string;
  flag: string;
  price: number;
  form: number;
  club?: string;
  [key: string]: unknown;
}

interface FantasyStore {
  squad: (FantasyPlayer | null)[];
  formation: string;
  usedBudget: number;
  totalBudget: number;
  setPlayer: (slot: number, player: FantasyPlayer | null) => void;
  setFormation: (f: string) => void;
  clearTeam: () => void;
}

export const useFantasyStore = create<FantasyStore>()(
  persist(
    (set) => ({
      squad: Array(11).fill(null),
      formation: "4-3-3",
      usedBudget: 0,
      totalBudget: 100,
      setPlayer: (slot, player) =>
        set((s) => {
          const newSquad = [...s.squad];
          const oldPlayer = newSquad[slot];
          newSquad[slot] = player;
          const usedBudget =
            s.usedBudget - (oldPlayer?.price ?? 0) + (player?.price ?? 0);
          return { squad: newSquad, usedBudget };
        }),
      setFormation: (formation) => set({ formation }),
      clearTeam: () => set({ squad: Array(11).fill(null), usedBudget: 0 }),
    }),
    { name: "wc2026-fantasy" }
  )
);

export interface SubmissionData {
  createdAt: string;
  participantCount: number;
}

// ========== Poll Store ==========
interface PollStore {
  votes: Record<number, number>; // pollOptionId -> vote count
  userVotes: Record<number, number>; // pollId -> selected optionId
  isSubmitted: boolean;
  submissionData: SubmissionData | null;
  voteLocally: (pollId: number, optionId: number) => void;
  setVotes: (newVotes: Record<number, number>) => void;
  setSubmitted: (data: SubmissionData) => void;
  hasVoted: (pollId: number) => boolean;
  getVotes: (optionId: number) => number;
}

export const usePollStore = create<PollStore>()(
  persist(
    (set, get) => ({
      votes: {},
      userVotes: {},
      isSubmitted: false,
      submissionData: null,
      voteLocally: (pollId, optionId) =>
        set((s) => ({
          userVotes: { ...s.userVotes, [pollId]: optionId },
        })),
      setVotes: (newVotes) => set({ votes: newVotes }),
      setSubmitted: (data) => set({ isSubmitted: true, submissionData: data }),
      hasVoted: (pollId) => get().userVotes[pollId] !== undefined,
      getVotes: (optionId) => get().votes[optionId] ?? 0,
    }),
    { name: "wc2026-polls", version: 1 }
  )
);

// ========== Notification Store ==========
interface Notification {
  id: string;
  type: "goal" | "card" | "kickoff" | "fulltime" | "info";
  message: string;
  timestamp: number;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, "id" | "timestamp">) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (n) =>
    set((s) => ({
      notifications: [
        { ...n, id: Math.random().toString(36).slice(2), timestamp: Date.now() },
        ...s.notifications.slice(0, 4),
      ],
    })),
  removeNotification: (id) =>
    set((s) => ({
      notifications: s.notifications.filter((n) => n.id !== id),
    })),
  clearAll: () => set({ notifications: [] }),
}));

// ========== Champion Predictor Store ==========
interface ChampionPrediction {
  teamId: number;
  stage: string;        // e.g. "Group Stage"
  timestamp: number;    // epoch ms when picked
}

interface ChampionStore {
  prediction: ChampionPrediction | null;
  lockedAt: number | null;
  setPrediction: (p: ChampionPrediction) => void;
  clearPrediction: () => void;
}

export const useChampionStore = create<ChampionStore>()(
  persist(
    (set) => ({
      prediction: null,
      lockedAt: null,
      setPrediction: (p) =>
        set({ prediction: p, lockedAt: p.timestamp }),
      clearPrediction: () =>
        set({ prediction: null, lockedAt: null }),
    }),
    { name: "wc2026-champion-prediction" }
  )
);

// ========== Bracket Store ==========
interface BracketStore {
  picks: Record<string, string>; // matchId -> team identifier
  setPick: (matchId: string, team: string) => void;
  clearPicks: () => void;
}

export const useBracketStore = create<BracketStore>()(
  persist(
    (set) => ({
      picks: {},
      setPick: (matchId, team) =>
        set((s) => ({
          picks: { ...s.picks, [matchId]: team }
        })),
      clearPicks: () => set({ picks: {} }),
    }),
    { name: "wc2026-bracket" }
  )
);
