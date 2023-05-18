import React from 'react';
import GameCard from '../components/GameCard';

export default function MyFavourites({ favourites }) {

  return (
    <>
      <h2>Favourites</h2>
      <div className="my-games">
        {favourites?.map((game, i) => <GameCard key={i} game={game} />)}
      </div>
    </>
  );
}
