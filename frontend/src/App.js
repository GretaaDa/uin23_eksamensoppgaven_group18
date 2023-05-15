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
          <Route index element={<Dashboard games={games} />} />
          <Route path="GameShop" element={<Gameshop />} />
          <Route path="MyGames" element={<MyGames games={games} />} />
          <Route path="MyFavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
