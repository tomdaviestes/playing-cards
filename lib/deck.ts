import { Rank, Suit, Deck } from "./types";

export const suits: readonly Suit[] = Object.freeze(["hearts", "diamonds", "clubs", "spades"]);
export const ranks: readonly Rank[] = Object.freeze(["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]);

export function createDeck() {
  const deck: Deck = [];
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({ rank, suit });
    });
  });
  return deck;
}

export function createShuffledDeck() {
  return shuffle(createDeck());
}

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}