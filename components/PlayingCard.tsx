import Image from 'next/image';
import Rank from './Rank';
import Suit from './Suit';
import { RankAndSuit } from '@lib/types';
import PlayingCardBody from './PlayingCardBody';

type PlayingCardProps = RankAndSuit & {
  onClick?: (card: RankAndSuit) => void;
  faceDown?: boolean;
};

export default function PlayingCard({ suit, rank, onClick }: PlayingCardProps) {
  return (
    <div
      onClick={() => onClick && onClick({ suit, rank })}
      className="min-w-fit h-auto w-full aspect-[9/14] bg-white border-solid border-gray-600 border-2 rounded-md drop-shadow-md">
      <div className="absolute top-[2%] left-[2%] w-[16%] h-[20%] flex flex-col gap-0.5">
        <Rank rank={rank} suit={suit} />
        <Suit suit={suit} />
      </div>
      <div className="absolute bottom-[2%] right-[2%] w-[16%] h-[20%] flex flex-col gap-0.5 rotate-180">
        <Rank rank={rank} suit={suit} />
        <Suit suit={suit} />
      </div>
      <PlayingCardBody suit={suit} rank={rank} />
    </div>
  )
}