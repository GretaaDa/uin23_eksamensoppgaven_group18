import './App.scss';
import Nav from './components/Nav';
import MyGames from './pages/MyGames';
import MyFavourites from './pages/MyFavourites';
import Gameshop from './pages/GameShop';
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { fetchGames } from './sanity/gameServices';

//7defe92ceef1441682a9b46c202cbc3d
//https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7&key=5e35f504c4154714add5b9909f65f051
function App() {
  const [games, setGames] = useState(null)

  const getRecentGames = async () => {
    const data = await fetch(
      `https://api.rawg.io/api/games?key=5e35f504c4154714add5b9909f65f051&platforms=18,1,7`
    ).then((res) => res.json());

    const games2 = data.results;

    const updatedGames = await Promise.all(
        games2.map(async (game) => {
            const data = await fetch(
                `https://api.rawg.io/api/games/${game.slug}/stores?key=5e35f504c4154714add5b9909f65f051`
            ).then((res) => res.json());

            const stores = data.results;
            const storeUrl = stores.find((store) => store.url.includes('steam')).url;

            return {
                ...game,
                store_url: storeUrl,
            };
        })
    );

    setGames(updatedGames);
};
  const getGames = async () => {
    const data = fetchGames()
  }

console.log(setGames)

  useEffect(() => {
    getRecentGames()
  }, [])

  useEffect(() => {
    getGames()
  }, [])
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<Dashboard games={games}/>} />
          <Route path="GameShop" element={<Gameshop games={games}/>} />
          <Route path="MyGames" element={<MyGames />} />
          <Route path="MyFavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
