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

  const [games, setGames] = useState(null)

  const getGames = async () => {
    const data = fetchGames()
    console.log(data)
  }

  useEffect(() => {
    getGames()
  }, [])
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="Dashboard" index element={<Dashboard />} />
          <Route path="GameShop" element={<Gameshop />} />
          <Route path="MyGames" element={<MyGames />} />
          <Route path="MyFavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
