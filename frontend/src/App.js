import './App.scss';
import Dashboard from './components/Dashboard';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Gameshop from './components/GameShop';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Dashboard/>
    <div className="container">
      <Routes>
        <Route path="GameShop" element={<Gameshop/>} />
        <Route path="MyGames" element={<MyGames/>} />
        <Route path="MyFavourites" element={<MyFavourites/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
