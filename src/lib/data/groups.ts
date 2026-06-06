import type { Group, GroupStanding } from "@/types";
import { TEAMS } from "./teams";

const T = (id: number) => TEAMS.find((t) => t.id === id)!;

const makeStanding = (teamId: number, p: number, w: number, d: number, l: number, gf: number, ga: number, form: ("W" | "D" | "L")[]): GroupStanding => ({
  team: T(teamId),
  played: p,
  won: w,
  drawn: d,
  lost: l,
  goalsFor: gf,
  goalsAgainst: ga,
  goalDifference: gf - ga,
  points: w * 3 + d,
  form,
});

export const GROUPS: Group[] = [
  {
    id: "A",
    name: "Group A",
    standings: [
      makeStanding(1, 0, 0, 0, 0, 0, 0, []),
      makeStanding(2, 0, 0, 0, 0, 0, 0, []),
      makeStanding(3, 0, 0, 0, 0, 0, 0, []),
      makeStanding(4, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "B",
    name: "Group B",
    standings: [
      makeStanding(5, 0, 0, 0, 0, 0, 0, []),
      makeStanding(6, 0, 0, 0, 0, 0, 0, []),
      makeStanding(7, 0, 0, 0, 0, 0, 0, []),
      makeStanding(8, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "C",
    name: "Group C",
    standings: [
      makeStanding(9, 0, 0, 0, 0, 0, 0, []),
      makeStanding(10, 0, 0, 0, 0, 0, 0, []),
      makeStanding(11, 0, 0, 0, 0, 0, 0, []),
      makeStanding(12, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "D",
    name: "Group D",
    standings: [
      makeStanding(13, 0, 0, 0, 0, 0, 0, []),
      makeStanding(14, 0, 0, 0, 0, 0, 0, []),
      makeStanding(15, 0, 0, 0, 0, 0, 0, []),
      makeStanding(16, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "E",
    name: "Group E",
    standings: [
      makeStanding(17, 0, 0, 0, 0, 0, 0, []),
      makeStanding(18, 0, 0, 0, 0, 0, 0, []),
      makeStanding(19, 0, 0, 0, 0, 0, 0, []),
      makeStanding(20, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "F",
    name: "Group F",
    standings: [
      makeStanding(21, 0, 0, 0, 0, 0, 0, []),
      makeStanding(22, 0, 0, 0, 0, 0, 0, []),
      makeStanding(23, 0, 0, 0, 0, 0, 0, []),
      makeStanding(24, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "G",
    name: "Group G",
    standings: [
      makeStanding(25, 0, 0, 0, 0, 0, 0, []),
      makeStanding(26, 0, 0, 0, 0, 0, 0, []),
      makeStanding(27, 0, 0, 0, 0, 0, 0, []),
      makeStanding(28, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "H",
    name: "Group H",
    standings: [
      makeStanding(29, 0, 0, 0, 0, 0, 0, []),
      makeStanding(30, 0, 0, 0, 0, 0, 0, []),
      makeStanding(31, 0, 0, 0, 0, 0, 0, []),
      makeStanding(32, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "I",
    name: "Group I",
    standings: [
      makeStanding(33, 0, 0, 0, 0, 0, 0, []),
      makeStanding(34, 0, 0, 0, 0, 0, 0, []),
      makeStanding(35, 0, 0, 0, 0, 0, 0, []),
      makeStanding(36, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "J",
    name: "Group J",
    standings: [
      makeStanding(37, 0, 0, 0, 0, 0, 0, []),
      makeStanding(38, 0, 0, 0, 0, 0, 0, []),
      makeStanding(39, 0, 0, 0, 0, 0, 0, []),
      makeStanding(40, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "K",
    name: "Group K",
    standings: [
      makeStanding(41, 0, 0, 0, 0, 0, 0, []),
      makeStanding(42, 0, 0, 0, 0, 0, 0, []),
      makeStanding(43, 0, 0, 0, 0, 0, 0, []),
      makeStanding(44, 0, 0, 0, 0, 0, 0, []),
    ],
  },
  {
    id: "L",
    name: "Group L",
    standings: [
      makeStanding(45, 0, 0, 0, 0, 0, 0, []),
      makeStanding(46, 0, 0, 0, 0, 0, 0, []),
      makeStanding(47, 0, 0, 0, 0, 0, 0, []),
      makeStanding(48, 0, 0, 0, 0, 0, 0, []),
    ],
  },
];

export const getGroupById = (id: string) => GROUPS.find((g) => g.id === id);
