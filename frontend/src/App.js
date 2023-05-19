import './App.scss';
import MyGames from './pages/MyGames';
import MyFavourites from './pages/MyFavourites';
import Gameshop from './pages/GameShop';
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { fetchCount, fetchGames } from './sanity/gameServices';
import GamePage from './pages/GamePage';
import Layout from './pages/Layout';

function App() {
  //Initialized the state values for the sanity game information
  const [games, setGames] = useState([])
  const [recentGames, setRecentGames] = useState([])
  const [favourites, setFavourites] = useState([])
  const [count, setCount] = useState([])

  /*Made a function with an if statement checking if there are api_id matches. If there are none it adds to favourites,
  if it finds a match, then it removes the it and keeps the unmatched ones */
  const handleFavourites = (item) => {
    let includes = favourites.some((e) => e.api_id == item.api_id)
    if (!includes) {
      setFavourites([...favourites, item])
    } else {
      setFavourites(favourites.filter((e) => e.api_id != item.api_id))
    }
  }

  const getRecentGames = async () => {
    const result = await fetch(`https://api.rawg.io/api/games?dates=2023-04-01,2023-05-15&platforms=18,1,7&key=5e35f504c4154714add5b9909f65f051`)
    const data = await result.json()
    setRecentGames(data)
  }

  //Got the game information from sanity
  const getGames = async () => {
    const data = await fetchGames()
    setGames(data)
  }

  //Got the count of the total number of MyGames published
  const getCount = async () => {
    const data = await fetchCount()
    setCount(data)
  }

  //Ran the function on the first render
  useEffect(() => {
    getRecentGames()
    getGames()
    getCount()
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard games={games} recentGames={recentGames} favourites={favourites} count={count} />} />
          <Route path="GameShop" element={<Gameshop recentGames={recentGames} />} />
          <Route path="MyGames" element={<MyGames games={games} count={count} />} />
          <Route path="MyFavourites" element={<MyFavourites favourites={favourites} />} />
          <Route path=":slug" element={<GamePage onFavourite={handleFavourites} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
