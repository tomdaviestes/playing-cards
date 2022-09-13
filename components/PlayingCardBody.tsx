import Image from 'next/image';
import Suit from './Suit';
import rankToNumber from '@lib/rank-to-number';
import { RankAndSuit } from '@lib/types';
import KingOfSpades from "./court-cards/spades-king.svg";
import KingOfHearts from "./court-cards/hearts-king.svg";
import KingOfClubs from "./court-cards/clubs-king.svg";
import KingOfDiamonds from "./court-cards/diamonds-king.svg";
import QueenOfSpades from "./court-cards/spades-queen.svg";
import QueenOfHearts from "./court-cards/hearts-queen.svg";
import QueenOfClubs from "./court-cards/clubs-queen.svg";
import QueenOfDiamonds from "./court-cards/diamonds-queen.svg";
import JackOfSpades from "./court-cards/spades-jack.svg";
import JackOfHearts from "./court-cards/hearts-jack.svg";
import JackOfClubs from "./court-cards/clubs-jack.svg";
import JackOfDiamonds from "./court-cards/diamonds-jack.svg";

const courtCardImage = new Map<RankAndSuit["suit"], Map<RankAndSuit["rank"], any>>([
  ["spades", new Map<RankAndSuit["rank"], any>([
    ["king", KingOfSpades],
    ["queen", QueenOfSpades],
    ["jack", JackOfSpades],
  ])],
  ["hearts", new Map<RankAndSuit["rank"], any>([
    ["king", KingOfHearts],
    ["queen", QueenOfHearts],
    ["jack", JackOfHearts],
  ])],
  ["clubs", new Map<RankAndSuit["rank"], any>([
    ["king", KingOfClubs],
    ["queen", QueenOfClubs],
    ["jack", JackOfClubs],
  ])],
  ["diamonds", new Map<RankAndSuit["rank"], any>([
    ["king", KingOfDiamonds],
    ["queen", QueenOfDiamonds],
    ["jack", JackOfDiamonds],
  ])],
]);

function outsideCount(n: number) {
  if (n <= 3) {
    return 0;
  }

  if (n <= 6) {
    return Math.floor(n / 2);
  }

  return Math.floor((n - 1) / 2);
}

function insideCount(n: number) {
  return n - (outsideCount(n) * 2);
}

function generateSuitChildElements(suit: RankAndSuit["suit"], count: number, blanks: number = 0) {
  return [...Array(count + blanks).keys()].map((i) => {
    if (blanks === 0 || i % 2 === (blanks <= count ? 0 : 1)) {
      return <Suit key={i} suit={suit} flip={i >= ((count + blanks) / 2)} />
    }
    return <Suit key={i} suit="none" />
  });
}

export default function PlayingCardBody({ suit, rank }: RankAndSuit) {
  const number = rankToNumber(rank);
  const outside = outsideCount(number);
  const inside = insideCount(number);
  const outsideChildren = generateSuitChildElements(suit, outside);
  const insideChildren = inside > 0 ? generateSuitChildElements(suit, inside, Math.max((outside - 1) - inside, 0)) : [];

  if (number === 6) {
    console.log({ number, outside, inside });
  }

  return (
    <>
    { courtCardImage.get(suit)?.get(rank) && (
      <div className="flex flex-row justify-evenly absolute top-0 left-0">
        <Image src={courtCardImage.get(suit)?.get(rank)} alt={`${rank} of ${suit}`} />
      </div>
    )}
    { number < 11 && (
      <div className="flex flex-row justify-evenly w-full h-full p-[20%]">
        <div className="flex flex-col flex-grow justify-between">
          {outsideChildren}
        </div>
        <div className={`flex flex-col flex-grow ${outside === 0 && inside > 1 ? "justify-between" : "justify-evenly"}`}>
          {insideChildren}
        </div>
        <div className="flex flex-col flex-grow justify-between">
          {outsideChildren}
        </div>
      </div>
    )}
    </>
  );
}