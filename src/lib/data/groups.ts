import type { Group, GroupStanding, Match } from "@/types";
import { TEAMS } from "./teams";
import { MATCHES } from "./matches";

const calculateGroups = (): Group[] => {
  // Initialize standings for all 48 teams
  const standingsMap = new Map<number, GroupStanding>();
  
  TEAMS.forEach(team => {
    standingsMap.set(team.id, {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: []
    });
  });

  // Process matches
  MATCHES.forEach((match: Match) => {
    if (match.phase === "Group" && match.homeScore !== null && match.awayScore !== null) {
      const homeStanding = standingsMap.get(match.homeTeam.id);
      const awayStanding = standingsMap.get(match.awayTeam.id);

      if (homeStanding && awayStanding) {
        homeStanding.played += 1;
        awayStanding.played += 1;

        homeStanding.goalsFor += match.homeScore;
        homeStanding.goalsAgainst += match.awayScore;
        homeStanding.goalDifference = homeStanding.goalsFor - homeStanding.goalsAgainst;

        awayStanding.goalsFor += match.awayScore;
        awayStanding.goalsAgainst += match.homeScore;
        awayStanding.goalDifference = awayStanding.goalsFor - awayStanding.goalsAgainst;

        if (match.homeScore > match.awayScore) {
          homeStanding.won += 1;
          homeStanding.points += 3;
          homeStanding.form.push("W");
          
          awayStanding.lost += 1;
          awayStanding.form.push("L");
        } else if (match.homeScore < match.awayScore) {
          awayStanding.won += 1;
          awayStanding.points += 3;
          awayStanding.form.push("W");
          
          homeStanding.lost += 1;
          homeStanding.form.push("L");
        } else {
          homeStanding.drawn += 1;
          homeStanding.points += 1;
          homeStanding.form.push("D");
          
          awayStanding.drawn += 1;
          awayStanding.points += 1;
          awayStanding.form.push("D");
        }
        
        // Keep form to last 5
        if (homeStanding.form.length > 5) homeStanding.form.shift();
        if (awayStanding.form.length > 5) awayStanding.form.shift();
      }
    }
  });

  // Group teams into A-L
  const groupsRecord: Record<string, GroupStanding[]> = {};
  TEAMS.forEach(team => {
    const groupName = team.group;
    if (groupName) {
      if (!groupsRecord[groupName]) groupsRecord[groupName] = [];
      const standing = standingsMap.get(team.id);
      if (standing) {
        groupsRecord[groupName].push(standing);
      }
    }
  });

  const groupIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  return groupIds.map(id => ({
    id,
    name: `Group ${id}`,
    standings: groupsRecord[id] || []
  }));
};

export const GROUPS: Group[] = calculateGroups();

export const getGroupById = (id: string) => GROUPS.find((g) => g.id === id);
