import GameShopCard from "../components/GameShopCard"
import GameCard from "../components/GameCard";

export default function Dashboard({ recentGames, games }) {
    recentGames = recentGames?.results?.slice(0, 3)

    //Sliced the fetched sanity array to 4 article cards, so not all of them are desplayed on the front page
    games = games.slice(0, 4)
    return (<>
        <h2>Dashboard</h2>
        {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
        <div className="dash-myGame">
            {games?.map((game, i) => <GameCard key={i} game={game} />)}
        </div>

    </>)
}