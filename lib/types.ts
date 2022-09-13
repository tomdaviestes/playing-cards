export type Rank = "ace" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "ten" | "jack" | "queen" | "king";
export type Suit = "hearts" | "diamonds" | "clubs" | "spades" | "none";
export type RankAndSuit = {
  rank: Rank
  suit: Suit;
}
export type Deck = RankAndSuit[];