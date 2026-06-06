// Football Data API Client
// API: football-data.org
// Auth: X-Auth-Token header

const API_BASE = "https://api.football-data.org/v4";
const API_TOKEN = process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN || "d1228ff63c344cb3a18067ccba7aa03f";

const headers = {
  "X-Auth-Token": API_TOKEN,
};

async function fetchApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { headers, next: { revalidate: 60 } });
    if (!res.ok) {
      console.warn(`API ${path} returned ${res.status}`);
      return null;
    }
    return res.json() as Promise<T>;
  } catch (err) {
    console.warn(`API fetch failed for ${path}:`, err);
    return null;
  }
}

// World Cup 2026 competition ID on football-data.org is WC
export async function getCompetitionInfo() {
  return fetchApi("/competitions/WC");
}

export async function getStandings() {
  return fetchApi("/competitions/WC/standings");
}

export async function getAllMatches() {
  return fetchApi("/competitions/WC/matches");
}

export async function getMatchById(id: number) {
  return fetchApi(`/matches/${id}`);
}

export async function getTopScorers() {
  return fetchApi("/competitions/WC/scorers?limit=20");
}

export async function getTeams() {
  return fetchApi("/competitions/WC/teams");
}

export async function getTeamById(id: number) {
  return fetchApi(`/teams/${id}`);
}

export async function getLiveMatches() {
  return fetchApi("/matches?status=LIVE");
}

export async function getMatchesByDateRange(from: string, to: string) {
  return fetchApi(`/competitions/WC/matches?dateFrom=${from}&dateTo=${to}`);
}
