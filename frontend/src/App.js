import './App.scss';
import Dashboard from './components/Dashboard';
import {} from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Gameshop from './components/GameShop';


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
