import './App.scss';
import Nav from './components/Nav';
import MyGames from './pages/MyGames';
import MyFavourites from './pages/MyFavourites';
import Gameshop from './pages/GameShop';
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { fetchGames } from './sanity/gameServices';

function App() {
  const [games, setGames] = useState([])
  const [recentGames, setRecentGames] = useState([])

  const getRecentGames = async () => {
    const result = await fetch(`https://api.rawg.io/api/games?dates=2023-04-01,2023-05-15&platforms=18,1,7&key=5e35f504c4154714add5b9909f65f051`)
    const data = await result.json()
    setRecentGames(data)
  }

  useEffect(() => {
    getRecentGames()
  }, [])

  const getGames = async () => {
    const data = await fetchGames()
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<Dashboard games={games} recentGames={recentGames} />} />
          <Route path="GameShop" element={<Gameshop recentGames={recentGames}/>} />
          <Route path="MyGames" element={<MyGames games={games} />} />
          <Route path="MyFavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
