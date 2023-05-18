import { useEffect, useState } from 'react';

export default function GameShopCard({ recent }) {
  const genresToShow = recent.genres.slice(0, 2); // Get only the first 2 genres, rather than every one of them

  const [recentGameId, setRecentGameId] = useState([]);

  const getRecentGameId = async () => {
    const result = await fetch(
      `https://api.rawg.io/api/games/${recent.id}/stores?&key=5e35f504c4154714add5b9909f65f051`
    );
    const data = await result.json();
    setRecentGameId(data.results);
  };

  useEffect(() => {
    getRecentGameId();
  }, []);

  let firstUrl = recentGameId?.[0]?.url ?? ''; //retrieves URL from the first store fetched by the api

  return (
    <>
      <div className="gameshopCard">
        <img className="thumbnail" src={recent.background_image} alt={recent.name} />
        <h3 className="gameName">{recent.name}</h3>
        {genresToShow.map((genre, i) => (<p key={i}>{genre.name}</p>))}
        {firstUrl && (<button className="buyBtn" onClick={() => window.open(firstUrl)}>Buy</button>)} 
      </div>
    </>
  );
}
