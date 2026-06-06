// ========================
// Core Types
// ========================

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string; // 3-letter abbreviation
  flag: string; // emoji
  group: string;
  crestUrl?: string;
  coach: string;
  confederation: string;
  kitPrimary: string;
  kitSecondary: string;
  squad?: Player[];
  fifaRanking?: number;
  worldCupAppearances?: number;
  worldCupWins?: number;
}

export interface Player {
  id: number;
  name: string;
  position: "GK" | "CB" | "LB" | "RB" | "CM" | "CDM" | "CAM" | "LW" | "RW" | "ST" | "CF";
  number: number;
  club: string;
  clubFlag: string;
  nationality: string;
  age: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  saves?: number;
  cleanSheets?: number;
  minutesPlayed?: number;
  passes?: number;
}

export interface Stadium {
  id: number;
  name: string;
  city: string;
  country: "USA" | "Canada" | "Mexico";
  countryFlag: string;
  capacity: number;
  lat: number;
  lng: number;
}

export interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string; // ISO string
  stadium: Stadium;
  phase: "Group" | "R32" | "R16" | "QF" | "SF" | "F" | "3P";
  group?: string;
  matchDay?: number;
  homeScore?: number;
  awayScore?: number;
  homePenalties?: number;
  awayPenalties?: number;
  status: "SCHEDULED" | "LIVE" | "FINISHED" | "POSTPONED";
  events?: MatchEvent[];
  stats?: MatchStats;
  attendance?: number;
}

export interface MatchEvent {
  id: number;
  minute: number;
  type: "GOAL" | "OWN_GOAL" | "PENALTY" | "YELLOW_CARD" | "RED_CARD" | "SUBSTITUTION" | "VAR";
  team: "home" | "away";
  player: string;
  playerOut?: string; // for substitutions
  description?: string;
}

export interface MatchStats {
  homePossession: number;
  awayPossession: number;
  homeShotsTotal: number;
  awayShotsTotal: number;
  homeShotsOnTarget: number;
  awayShotsOnTarget: number;
  homeCorners: number;
  awayCorners: number;
  homeFouls: number;
  awayFouls: number;
  homeOffsides: number;
  awayOffsides: number;
  homePasses: number;
  awayPasses: number;
  homePassAccuracy: number;
  awayPassAccuracy: number;
  homeSaves: number;
  awaySaves: number;
}

export interface GroupStanding {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ("W" | "D" | "L")[];
}

export interface Group {
  id: string;
  name: string;
  standings: GroupStanding[];
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  imageUrl?: string;
  publishedAt: string;
  source: string;
  url: string;
}

export interface Highlight {
  id: number;
  title: string;
  matchId?: number;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  publishedAt: string;
  tags: string[];
}

export interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  endsAt?: string;
  type: "WINNER" | "MOTM" | "GENERAL";
}

export interface PollOption {
  id: number;
  label: string;
  votes: number;
  imageUrl?: string;
}

export interface FantasyPlayer extends Player {
  price: number;
  form: number;
  totalPoints: number;
  teamId: number;
  teamName: string;
}

export interface FantasyTeam {
  formation: string;
  players: (FantasyPlayer | null)[];
  totalBudget: number;
  usedBudget: number;
  totalPoints: number;
}

export interface Prediction {
  homeWinProb: number;
  drawProb: number;
  awayWinProb: number;
  predictedHomeScore: number;
  predictedAwayScore: number;
  confidence: number;
  homeForm: ("W" | "D" | "L")[];
  awayForm: ("W" | "D" | "L")[];
  keyFactor: string;
}
