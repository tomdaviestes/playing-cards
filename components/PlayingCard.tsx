import Image from 'next/image';
import Rank from './Rank';
import Suit from './Suit';
import { RankAndSuit } from '@lib/types';
import PlayingCardBody from './PlayingCardBody';
import CardBack from './card-back.svg';

type PlayingCardProps = RankAndSuit & {
  onClick?: (card: RankAndSuit) => void;
  faceDown?: boolean;
};

export default function PlayingCard(props: PlayingCardProps) {
  const { suit, rank, faceDown, onClick } = props;
  return (
    <div
      onClick={() => onClick && onClick({ suit, rank })}
      className="min-w-fit h-auto w-full aspect-[9/13] bg-white rounded-md drop-shadow-md"
    >
      { faceDown && (
        <Image src={CardBack} alt="Card Back" layout="fill" objectFit="contain" />
      )}
      { !faceDown && (
        <>
          <div className="absolute top-[2%] left-[2%] w-[16%] h-[20%] flex flex-col gap-0.5 items-center">
            <Rank rank={rank} suit={suit} />
            <div className="w-[60%]">
              <Suit suit={suit} />
            </div>
          </div>
          <div className="absolute bottom-[2%] right-[2%] w-[16%] h-[20%] flex flex-col gap-0.5 items-center rotate-180">
            <Rank rank={rank} suit={suit} />
            <div className="w-[60%]">
              <Suit suit={suit} />
            </div>
          </div>
          <PlayingCardBody suit={suit} rank={rank} />
        </>
      )}
    </div>
  )
}