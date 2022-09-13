import { RankAndSuit } from "./types";

const rankToNumberMap = new Map<RankAndSuit["rank"], number>([
  ["ace", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["ten", 10],
  ["jack", 11],
  ["queen", 12],
  ["king", 13],
]);

export default function rankToNumber(rank: RankAndSuit["rank"]) {
  return rankToNumberMap.get(rank) || 0;
}
