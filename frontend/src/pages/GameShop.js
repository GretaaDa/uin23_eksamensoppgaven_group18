import GameShopCard from "../components/GameShopCard";

export default function GameShop({recentGames, games}) {
    recentGames = recentGames?.results?.slice(0, 3)
    games = games?.slice(0, 12)
    return (<>
        <h1>Game shop</h1>
        {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
        {games?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
    </>)

}