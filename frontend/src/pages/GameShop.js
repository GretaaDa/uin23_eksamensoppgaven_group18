import GameShopCard from "../components/GameShopCard";

export default function GameShop({recentGames, games}) {
    recentGames = recentGames?.results?.slice(0, 12)
    games = games?.slice(0, 12)
    return (<>
    <header>
        <h2>Game shop</h2>
    </header>
        <div className="newestShop">
        {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent} />)}
        {games?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
        </div>
    </>)

}