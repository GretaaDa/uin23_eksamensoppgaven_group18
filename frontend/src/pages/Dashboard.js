import GameShopCard from "../components/GameShopCard"
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

export default function Dashboard({ recentGames, games, favourites, count }) {
    recentGames = recentGames?.results?.slice(0, 3)

    //Sliced the fetched sanity array to 4 gameCards for myGames and 2 for favourites, so not all of them are desplayed on the front page
    games = games.slice(0, 4)
    let favourites4 = favourites.slice(0, 2)
    return (<>
        <div className="front-page-container">
            <div className="shopHeader">
                <h2>Gameshop</h2>
                <Link to="/GameShop">
                    <button className="visit">Visit Shop</button>
                </Link>
            </div>
            <div className="Shop-front">
                {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
            </div>
            <div className="libraryHeader">
                <h2>My Games Library ({count})</h2>
                <Link to="/MyGames">
                    <button>Go to library</button>
                </Link>
            </div>
            <div className="library-front">
                {games?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>
            <div className="myFavHeader">
                <h2>My Favourites ({favourites.length})</h2>
                <Link to="/Myfavourites">
                    <button>Go to Favourites</button>
                </Link>
            </div>
            <div className="myFav-front">
                {favourites4?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>
        </div>
    </>)
}