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
function App() {
  const [games, setGames] = useState(null)

  const [recentGames, setRecentGames] = useState([])

  const getRecentGames = async () => {
    const result = await fetch(`https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7&key=5e35f504c4154714add5b9909f65f051`)
    const data = await result.json()
    setRecentGames(data)
  }

  useEffect(() => {
    getRecentGames()
  }, [])

  const getGames = async () => {
    const data = fetchGames()
  }

  useEffect(() => {
    getGames()
  }, [])
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<Dashboard recentGames={recentGames}/>} />
          <Route path="GameShop" element={<Gameshop recentGames={recentGames}/>} />
          <Route path="MyGames" element={<MyGames />} />
          <Route path="MyFavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
