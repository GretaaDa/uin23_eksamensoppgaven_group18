import GameShopCard from "../components/GameShopCard"
import GameCard from "../components/GameCard";

export default function Dashboard({ recentGames, games }) {
    recentGames = recentGames?.results?.slice(0, 3)
    games = games.slice(0, 4)
    return (<>
        <h2>Dashboard</h2>
        {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
        {games?.map((game, i) => <GameCard key={i} game={game} />)}

    </>)
}