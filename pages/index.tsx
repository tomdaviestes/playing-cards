import type { NextPage } from 'next'
import Head from 'next/head'
import PlayingCard from '@components/PlayingCard';
import { createDeck, suits, ranks } from '@lib/deck';
import { useState } from 'react';
import { RankAndSuit } from '@lib/types';

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<RankAndSuit>();
  // const deck = createDeck();
  // const cards = deck.map(({ rank, suit }, i) => (
  //   <div key={i} className="w-20">
  //     <PlayingCard suit={suit} rank={rank} onClick={setSelectedCard} />
  //   </div>
  // ));
  const [flipped, setFlipped] = useState(false);

  const handleClick = (selectedCard: RankAndSuit) => {
    setFlipped(!flipped);
    setSelectedCard(selectedCard);
  };

  const rows = ranks.map((rank) => (
    <div key={rank} className="flex flex-row flex-grow gap-2">
      {suits.map((suit) => (
        <PlayingCard key={suit} suit={suit} rank={rank} onClick={handleClick} faceDown={flipped} />
      ))}
    </div>
  ));

  return (
    <div>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Planning Poker for Scrum teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10">
        <p className="text-2xl font-bold">{JSON.stringify(selectedCard)}</p>
        <div className="flex flex-col gap-2">
          {rows}
        </div>
      </main>
    </div>
  )
}

export default Home
