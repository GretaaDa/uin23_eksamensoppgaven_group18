import GameShopCard from "../components/GameShopCard"
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

export default function Dashboard({ recentGames, games, favourites, count }) {
    recentGames = recentGames?.results?.slice(0, 3)

    //Sliced the fetched sanity array to 4 article cards, so not all of them are desplayed on the front page
    games = games.slice(0, 4)
    favourites = favourites.slice(0, 2)
    return (<>
        <div className="container">
            <header>
                <h2>Dashboard</h2>
                <Link to="/GameShop">
                    <button className="visit">Visit Shop</button>
                </Link>
            </header>
            <div className="newest">
                {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
            </div>
            <div className="library">
                <h2>My Games Library ({count})</h2>
                <Link to="/MyGames">
                    <button>Go to library</button>
                </Link>
                <div className="myLibrary">
                    {games?.map((game, i) => <GameCard key={i} game={game} />)}
                </div>
            </div>
            <div className="myFav">
                <h2>My Favourites ({favourites.length})</h2>
                <Link to="/Myfavourites">
                    <button>Go to Favourites</button>
                </Link>
                <div className="favGames">
                    {favourites?.map((game, i) => <GameCard key={i} game={game} />)}
                </div>
            </div>
        </div>
    </>)
}