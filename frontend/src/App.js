import './App.scss';
import Nav from './components/Nav';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import Gameshop from './components/GameShop';
import { Route, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
    <Nav/>
    <div className="container">
      <Routes>
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="GameShop" element={<Gameshop/>} />
        <Route path="MyGames" element={<MyGames/>} />
        <Route path="MyFavourites" element={<MyFavourites/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;
