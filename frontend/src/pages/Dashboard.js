import GameShopCard from "../components/GameShopCard"
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom"

export default function Dashboard({ recentGames, games }) {
    recentGames = recentGames?.results?.slice(0, 3)

    //Sliced the fetched sanity array to 4 article cards, so not all of them are desplayed on the front page
    games = games.slice(0, 4)
    return (<>
        <h2>Dashboard</h2>
        <Link to="/GameShop">
            <button className="visit">Visit Shop</button>
        </Link>
        <div className="newest">
            {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
        </div>
        <div className="dash-myGame">
            {games?.map((game, i) => <GameCard key={i} game={game} />)}
        </div>

    </>)
}